import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-libertypestpros';

// Dedup store (in-memory — resets on cold start, sufficient for basic protection)
const recentSubmissions = new Map<string, number>();
setInterval(() => {
  const tenMinAgo = Date.now() - 10 * 60 * 1000;
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (timestamp < tenMinAgo) recentSubmissions.delete(key);
  }
}, 15 * 60 * 1000);

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

    const leadData = {
      name,
      phone,
      email: email || null,
      description: description || null,
      pest_type: pestType || null,
      sms_consent: smsConsent === true,
      source: source || 'website',
      region_slug: regionSlug || null,
      created_at: new Date().toISOString(),
    };

    // Send to CRM webhook
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
    } catch (e) {
      console.error('Webhook error:', e);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
