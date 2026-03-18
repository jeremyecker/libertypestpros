import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, SERVICE_TOWN_ROUTES } from '@/hub.config';
import { getRegion } from '@/lib/regions';
import CTABanner from '@/components/sections/CTABanner';
import { TOWN_OPENERS } from '@/data/liberty-openers';
import { CITY_LAYER7, NASSAU_FALLBACK } from '@/data/liberty-layer7';

// ─── Service metadata for service index pages ───────────────────────────────
const SERVICE_META: Record<string, { name: string; icon: string; desc: string }> = {
  'bed-bug-exterminator': { name: 'Bed Bug Exterminator', icon: '🛏️', desc: 'Heat treatment and chemical protocols for complete bed bug elimination.' },
  'rodent-control': { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion, trapping, and sanitation guidance for mouse and rat control.' },
  'raccoon-removal': { name: 'Raccoon Removal', icon: '🦝', desc: 'Humane live trapping and exclusion to permanently resolve raccoon conflicts.' },
  'squirrel-removal': { name: 'Squirrel Removal', icon: '🐿️', desc: 'Live trapping and one-way exclusion doors to remove squirrels from attics and structures.' },
  'wildlife-removal': { name: 'Wildlife Removal', icon: '🦌', desc: 'Humane live trapping and exclusion for all nuisance wildlife species.' },
  'termite-control': { name: 'Termite Control', icon: '🪲', desc: 'Liquid barrier treatments and bait systems for complete termite elimination.' },
  'cockroach-exterminator': { name: 'Cockroach Exterminator', icon: '🪳', desc: 'German cockroach specialists using gel bait and crack-and-crevice treatments.' },
  'ant-exterminator': { name: 'Ant Exterminator', icon: '🐜', desc: 'Complete ant colony elimination with targeted treatments and exclusion sealing.' },
  'cricket-exterminator': { name: 'Cricket Exterminator', icon: '🦗', desc: 'Interior and perimeter cricket treatments to stop chirping and property damage.' },
  'bee-removal': { name: 'Bee & Wasp Removal', icon: '🐝', desc: 'Humane bee removal and wasp elimination with live relocation when possible.' },
};

const ALL_SERVICE_SLUGS = Object.keys(SERVICE_META);

function isService(slug: string): boolean {
  return slug in SERVICE_META;
}

// ─── Static params (services + towns) ───────────────────────────────────────
export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  const params: { region: string; slug: string }[] = [];
  for (const region of REGIONS) {
    for (const svc of ALL_SERVICE_SLUGS) {
      params.push({ region: region.slug, slug: svc });
    }
    for (const town of region.towns) {
      params.push({ region: region.slug, slug: town.toLowerCase().replace(/\s+/g, '-') });
    }
  }
  return params;
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; slug: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, slug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};

  if (isService(slug)) {
    const svc = SERVICE_META[slug];
    return {
      title: `${svc.name} in ${region.name}, ${region.stateCode} | ${BRAND.name}`,
      description: `${svc.desc} Licensed ${region.stateCode} exterminators serving all ${region.name} communities. Call ${BRAND.phoneFormatted} for a free quote.`,
      alternates: { canonical: `https://${BRAND.domain}/${regionSlug}/${slug}/` },
      openGraph: {
        title: `${svc.name} in ${region.name}, ${region.stateCode}`,
        description: `Licensed ${svc.name.toLowerCase()} serving all ${region.name} communities. Family-owned since 1982.`,
        url: `https://${BRAND.domain}/${regionSlug}/${slug}/`,
      },
    };
  }

  const townName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Pest Control in ${townName}, NY`,
    description: `Liberty Pest Pros provides trusted pest control in ${townName}, Nassau County since 1982. Same-day service available. Call (516) 763-4600 for a free quote.`,
    openGraph: {
      title: `Pest Control in ${townName}, NY | Liberty Pest Pros`,
      description: `Liberty Pest Pros provides trusted pest control in ${townName}, Nassau County since 1982. Same-day service available. Call (516) 763-4600 for a free quote.`,
      url: `https://libertypestpros.com/${regionSlug}/${slug}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Liberty Pest Pros',
      images: ['/og-image.png'],
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default async function SlugPage({
  params,
}: {
  params: Promise<{ region: string; slug: string }>;
}) {
  const { region: regionSlug, slug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  if (isService(slug)) {
    return <ServiceIndexContent regionSlug={regionSlug} serviceSlug={slug} region={region} />;
  }

  return <TownContent regionSlug={regionSlug} townSlug={slug} region={region} />;
}

// ─── Service Index Component ────────────────────────────────────────────────
function ServiceIndexContent({ regionSlug, serviceSlug, region }: { regionSlug: string; serviceSlug: string; region: any }) {
  const svc = SERVICE_META[serviceSlug]!;

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href={`/${regionSlug}/`} className="hover:text-brand-primary">{region.name}</Link>
          {' → '}
          <span className="text-gray-900">{svc.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {svc.icon} {svc.name} in {region.name}, {region.stateCode}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{svc.desc} Our licensed {region.stateCode} exterminators serve every community in {region.name}.</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Same-Day', label: 'Service Available' },
            { stat: 'Licensed', label: `${region.stateCode} Exterminators` },
            { stat: `${region.towns.length}`, label: 'Areas Covered' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Need {svc.name.toLowerCase()} in {region.name}?</h2>
            <p className="opacity-90 text-sm">Family-owned since 1982. Same-day service available.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={`/${regionSlug}/contact/`} className="inline-block bg-brand-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors whitespace-nowrap">
              Get a Free Quote
            </Link>
            <a href={`tel:+1${BRAND.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-3 px-6 rounded-lg transition-colors hover:bg-gray-100 whitespace-nowrap">
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find {svc.name} in Your Town</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {region.towns.map((townName: string) => {
            const townSlug = townName.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                key={townSlug}
                href={`/${regionSlug}/${serviceSlug}/${townSlug}/`}
                className="border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-blue-300 transition-all text-center group"
              >
                <span className="font-medium text-gray-900 text-sm group-hover:text-blue-700">{townName}</span>
              </Link>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-lg p-5 mb-10">
          <h3 className="font-bold text-gray-900 mb-3">More Pest Control Services in {region.name}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${regionSlug}/`} className="text-brand-primary hover:underline">All Pest Control Services — {region.name}</Link></li>
            <li><Link href="/pest-control-near-me/" className="text-brand-primary hover:underline">Pest Control Near Me — {region.name}</Link></li>
            <li><Link href="/exterminator-near-me/" className="text-brand-primary hover:underline">Exterminator Near Me — {region.name} {region.stateCode}</Link></li>
          </ul>
        </div>
      </div>
      <CTABanner />
    </>
  );
}

// ─── Town Component ─────────────────────────────────────────────────────────
function TownContent({ regionSlug, townSlug, region }: { regionSlug: string; townSlug: string; region: any }) {
  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isValidTown = region.towns.some(
    (t: string) => t.toLowerCase().replace(/\s+/g, '-') === townSlug
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
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

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pest Control Services Available in {townName}</h2>
        <p className="text-gray-600 mb-4">Click any service below for detailed information specific to {townName}.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {SERVICE_TOWN_ROUTES.map((svc) => (
            <Link
              key={svc.slug}
              href={`/${regionSlug}/${svc.slug}/${townSlug}/`}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="text-3xl mb-2">{svc.icon}</div>
              <div className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{svc.name}</div>
              <div className="text-xs text-blue-600 mt-1">Learn more →</div>
            </Link>
          ))}
        </div>

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

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — {townName}</h2>
        <div className="space-y-4 mb-10">
          {cityFaqs.map((faq: any, i: number) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {neighborhoods.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Neighborhoods We Serve in {townName}</h2>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map((n: string) => (
                <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{n}</span>
              ))}
            </div>
          </div>
        )}

        {nearbyTowns.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Also Serving Nearby Nassau County Communities</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map((t: string) => (
                <Link key={t} href={`/nassau/${t.toLowerCase().replace(/\s+/g, '-')}/`} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        )}

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
