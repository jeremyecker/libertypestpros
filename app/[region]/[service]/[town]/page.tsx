import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';
import { TOWN_OPENERS } from '@/data/liberty-openers';
import { CITY_LAYER7, NASSAU_FALLBACK } from '@/data/liberty-layer7';

export async function generateMetadata({ params }: { params: Promise<{ region: string; town: string }> }): Promise<Metadata> {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Pest Control in ${townName}, NY`,
    description: `Trusted pest control in ${townName}, Nassau County. Same-day service & free quotes. Licensed since 1982. Call (516) 763-4600.`,
    openGraph: {
      title: `Pest Control in ${townName}, NY | Liberty Pest Pros`,
      description: `Trusted pest control in ${townName}, Nassau County. Same-day service & free quotes. Licensed since 1982. Call (516) 763-4600.`,
      url: `https://libertypestpros.com/${regionSlug}/${townSlug}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Liberty Pest Pros',
      images: ['/og-image.png'],
    },
  };
}

export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  return REGIONS.flatMap(region =>
    region.towns.map(town => ({
      region: region.slug,
      town: town.toLowerCase().replace(/\s+/g, '-'),
    }))
  );
}

export default async function TownPage({ params }: { params: Promise<{ region: string; town: string }> }) {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isValidTown = region.towns.some(
    t => t.toLowerCase().replace(/\s+/g, '-') === townSlug
  );
  if (!isValidTown && region.towns.length > 0) notFound();

  const opener = TOWN_OPENERS[townSlug] || `${BRAND.name} has served ${townName} and all of Nassau County since 1982. Our experienced technicians understand the pest challenges facing Long Island homes and businesses year-round.`;

  const layer7 = CITY_LAYER7[townSlug] || NASSAU_FALLBACK;
  const neighborhoods = layer7.neighborhoods || [];
  const nearbyTowns = layer7.nearbyTowns || [];
  const cityFaqs = layer7.cityFaqs || NASSAU_FALLBACK.cityFaqs || [];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "telephone": `+1${BRAND.phone}`,
    "url": `https://${BRAND.domain}`,
    "image": `https://${BRAND.domain}/og-image.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nassau County",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Nassau County, New York"
      }
    },
    "description": `Professional pest control in ${townName}, Nassau County since 1982.`
  };

  const services = [
    { name: 'Termite Control', icon: '🪲', desc: 'Inspection, treatment & prevention' },
    { name: 'Rodent Control', icon: '🐭', desc: 'Mice & rat removal, exclusion work' },
    { name: 'Ant & Cockroach', icon: '🐜', desc: 'Interior & exterior treatments' },
    { name: 'Bed Bugs', icon: '🛏️', desc: 'Heat & chemical treatments' },
    { name: 'Mosquito & Tick', icon: '🦟', desc: 'Yard treatments & seasonal programs' },
    { name: 'Wasp & Stinging', icon: '🐝', desc: 'Nest removal & prevention' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href={`/${regionSlug}/`} className="hover:text-brand-primary">{region.name}</Link>
          {' → '}
          <Link href={`/${regionSlug}/service-areas/`} className="hover:text-brand-primary">Service Areas</Link>
          {' → '}
          <span className="text-gray-900">{townName}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pest Control in {townName}, NY
        </h1>

        {/* Local Authority Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Serving {townName} Since 1982</h2>
          <p className="text-blue-800 mb-4" dangerouslySetInnerHTML={{ __html: opener }} />
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Same-day service available</span>
            <span>✅ Nassau County licensed &amp; insured</span>
            <span>✅ Family-owned since 1982</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Service Cards */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Services in {townName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {services.map(s => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Eliminate Pests in {townName}?</h2>
          <p className="text-blue-100 mb-4">Same-day appointments available. Family-owned. Nassau County&apos;s #1 choice since 1982.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${regionSlug}/contact/`}
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:+1${BRAND.phone}`}
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — {townName}</h2>
        <div className="space-y-4 mb-10">
          {cityFaqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Neighborhoods Section */}
        {neighborhoods.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Neighborhoods We Serve in {townName}</h2>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map(n => (
                <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{n}</span>
              ))}
            </div>
          </div>
        )}

        {/* Nearby Towns Section */}
        {nearbyTowns.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Also Serving Nearby Nassau County Communities</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map(t => (
                <Link key={t} href={`/nassau/${t.toLowerCase().replace(/\s+/g, '-')}/`} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal links */}
        <div className="text-sm text-gray-500">
          <Link href={`/${regionSlug}/`} className="hover:underline text-brand-primary">← Back to {region.name}</Link>
          {' | '}
          <Link href={`/${regionSlug}/services/`} className="hover:underline text-brand-primary">All Services</Link>
          {' | '}
          <Link href="/blog/" className="hover:underline text-brand-primary">Pest Control Tips</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
