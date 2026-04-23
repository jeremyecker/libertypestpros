import { NextRequest, NextResponse } from 'next/server';
import { BRAND } from '@/hub.config';

const WEBHOOK_URL = process.env.CRM_WEBHOOK_URL || BRAND.webhookUrl;
const SITE_NAME = 'libertypestpros';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // === PHASE2 SECURITY ===
    // Origin validation
    const origin = req.headers.get('origin') || '';
    const isLocalDev = origin.includes('localhost') || origin.includes('127.0.0.1');
    const isVercel = origin.includes('.vercel.app');
    if (origin && !isLocalDev && !isVercel) {
      return NextResponse.json({ success: true });
    }
    // Name validation
    const nameVal = (body.name as string || '').trim();
    const hasVowel = /[aeiouAEIOU]/.test(nameVal);
    const hasUrl = /https?:\/\/|www\./.test(nameVal);
    if (nameVal.length > 80 || !hasVowel || hasUrl) {
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
