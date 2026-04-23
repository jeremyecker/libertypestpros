import { NextRequest, NextResponse } from 'next/server';
import { BRAND } from '@/hub.config';
import { createClient } from '@supabase/supabase-js';

// Dedup store (in-memory — resets on cold start, sufficient for basic protection)
const recentSubmissions = new Map<string, number>();
setInterval(() => {
  const tenMinAgo = Date.now() - 10 * 60 * 1000;
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (timestamp < tenMinAgo) recentSubmissions.delete(key);
  }
}, 15 * 60 * 1000);


const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const WEBHOOK_URL = process.env.CRM_WEBHOOK_URL || BRAND.webhookUrl;
const SITE_NAME = 'libertypestpros';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // === PHASE2 SECURITY ===
    // Origin validation
    const origin = req.headers.get('origin') || '';
    const isLocalDev = origin.includes('localhost') || origin.includes('127.0.0.1');
    const isVercel = origin.includes('.vercel.app');
    if (origin && !isLocalDev && !isVercel) {
      await supabase.from('blocked_submissions').insert({
        site: SITE_NAME, reason: 'origin', origin, raw_payload: body
      }).catch(() => {});
      return NextResponse.json({ success: true });
    }
    // Name validation
    const nameVal = (body.name as string || '').trim();
    const hasVowel = /[aeiouAEIOU]/.test(nameVal);
    const hasUrl = /https?:\/\/|www\./.test(nameVal);
    if (nameVal.length > 80 || !hasVowel || hasUrl) {
      await supabase.from('blocked_submissions').insert({
        site: SITE_NAME, reason: 'validation', name: nameVal, raw_payload: body
      }).catch(() => {});
      return NextResponse.json({ success: true });
    }
    // === END PHASE2 ORIGIN/VALIDATION ===
    const {
      name,
      phone,
      email,
      description,
      pestType,
      smsConsent,
      source,
      regionSlug,
    } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const leadData = {
      name,
      phone,
      email: email || null,
      description: description || null,
      pest_type: pestType || null,
      sms_consent: smsConsent === true,
      source: source || 'website',
      region_slug: regionSlug || null,
      site_domain: BRAND.domain,
      created_at: new Date().toISOString(),
    };

    // Save to Supabase
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  // === BLOCKLIST CHECK ===
  const BLOCKED_PHONES = ['2168596131'];
  const BLOCKED_EMAILS = ['susansmi@parallelaid.com'];
  const BLOCKED_DOMAINS = ['parallelaid.com'];
  const _cleanPhone = (phone || '').replace(/[^0-9]/g, '');
  const _lowerEmail = (email || '').toLowerCase();
  if (
    BLOCKED_PHONES.includes(_cleanPhone) ||
    BLOCKED_EMAILS.includes(_lowerEmail) ||
    BLOCKED_DOMAINS.some(d => _lowerEmail.endsWith('@' + d))
  ) {
    await supabase.from('blocked_submissions').insert({
      site: SITE_NAME, reason: 'blocklist', phone: body.phone as string, email: body.email as string, raw_payload: body
    }).catch(() => {});
    return NextResponse.json({ success: true });
  }
  // === END BLOCKLIST ===

  // SPAM PROTECTION: Honeypot
  if (body.honeypot) {
    await supabase.from('blocked_submissions').insert({
      site: SITE_NAME, reason: 'honeypot', raw_payload: body
    }).catch(() => {});
    return NextResponse.json({ success: true, message: 'Thank you!' });
  }

  // SPAM PROTECTION: Timing (< 3 seconds = likely bot)
  const formStartedAt = body.form_started_at;
  if (formStartedAt && Date.now() - formStartedAt < 3000) {
    await supabase.from('blocked_submissions').insert({
      site: SITE_NAME, reason: 'timing', raw_payload: body
    }).catch(() => {});
    return NextResponse.json({ success: true, message: 'Thank you!' });
  }

  // SPAM PROTECTION: Supabase dedup (replaces in-memory — serverless safe)
  const _dedupPhone = (phone || '').replace(/\D/g, '');
  const dedupKey = Buffer.from(`${_dedupPhone}-${(body.zip || body.zip_code || '')}-${(body.pest_type || body.pestType || '')}`).toString('base64');
  await supabase.from('form_dedup').delete().lt('created_at', new Date(Date.now() - 3600000).toISOString()).catch(() => {});
  const { data: existingDedup } = await supabase
    .from('form_dedup')
    .select('id')
    .eq('dedup_key', dedupKey)
    .eq('site', SITE_NAME)
    .gt('created_at', new Date(Date.now() - 600000).toISOString())
    .maybeSingle();
  if (existingDedup) {
    await supabase.from('blocked_submissions').insert({
      site: SITE_NAME, reason: 'dedup', phone: _dedupPhone, raw_payload: body
    }).catch(() => {});
    return NextResponse.json({ success: true, message: "We already received your request. We'll be in touch soon!" });
  }
  await supabase.from('form_dedup').upsert({ dedup_key: dedupKey, site: SITE_NAME }, { onConflict: 'dedup_key,site' }).catch(() => {});

      await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(leadData),
      });
    }

    // Send to CRM webhook
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
