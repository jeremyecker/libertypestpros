import { NextRequest, NextResponse } from 'next/server';
import { BRAND } from '@/hub.config';

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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
    return NextResponse.json({ success: true });
  }
  // === END BLOCKLIST ===

  // SPAM PROTECTION: Honeypot
  if (body.honeypot) {
    return NextResponse.json({ success: true, message: 'Thank you!' });
  }

  // SPAM PROTECTION: Timing (< 3 seconds = likely bot)
  const formStartedAt = body.form_started_at;
  if (formStartedAt && Date.now() - formStartedAt < 3000) {
    return NextResponse.json({ success: true, message: 'Thank you!' });
  }

  // SPAM PROTECTION: Dedup (same phone within 10 minutes)
  const _dedupPhone = (phone || '').replace(/\D/g, '');
  const _lastSub = recentSubmissions.get(_dedupPhone);
  if (_lastSub && Date.now() - _lastSub < 10 * 60 * 1000) {
    return NextResponse.json({ success: true, message: "We already received your request. We'll be in touch soon!" });
  }
  recentSubmissions.set(_dedupPhone, Date.now());

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
