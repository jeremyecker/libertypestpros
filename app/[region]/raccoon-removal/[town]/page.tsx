import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Raccoon Removal';
const SERVICE_SLUG = 'raccoon-removal';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  nassau: {
    headline: `Professional Raccoon Removal in Nassau County, NY`,
    body: `Nassau County's mature suburban tree canopy, coastal marshes, and neighborhood density give raccoons everything they need — food, water, and easy access to attics, crawlspaces, and chimneys. From Massapequa to Great Neck to Hempstead, our Nassau County wildlife removal specialists handle raccoon infestations in single-family homes, condos, and multi-family properties. We locate all entry points using attic and exterior inspections, install one-way exclusion doors certified humane by the National Wildlife Control Operators Association, and permanently seal every opening after the animals vacate. We also offer attic insulation removal and replacement if raccoon latrines have contaminated your insulation. All work is backed by our exclusion guarantee.`,
    faqs: [
      { q: 'When is raccoon season in Nassau County?', a: 'Raccoons are active year-round in Nassau County, but nesting activity peaks in spring (February–May) when females seek attic spaces to give birth. Early spring calls are our most common for in-attic raccoon problems.' },
      { q: 'How do I know if raccoons are in my Nassau County attic?', a: 'Listen for heavy thumping, chattering, or whining sounds from above, especially at dusk and dawn. Look for torn soffit vents, disturbed insulation visible through attic access, and raccoon tracks near your home\'s foundation or roofline.' },
      { q: 'Can raccoons damage my Nassau County home\'s electrical wiring?', a: 'Yes. Raccoons chew insulation from wires, disturb attic insulation, and their urine and feces degrade wood and drywall. An undetected raccoon family can cause thousands in damage in a single nesting season.' },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const baseTitle = `${SERVICE_NAME} in ${townName}, ${region.stateCode}`;
  // Layout template adds "| Liberty Pest Pros" automatically
  const title = baseTitle;
  const description = `Licensed ${SERVICE_NAME.toLowerCase()} serving ${townName}, ${region.stateCode}. ${BRAND.name} — same-day service, guaranteed results. Call ${BRAND.phoneFormatted}.`;
  return {
    title,
    description: description.length <= 155 ? description : description.slice(0, 152) + '...',
    alternates: { canonical: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}` },
    openGraph: {
      url: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}`,
    },
  };
}

export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  return REGIONS.flatMap((region: { slug: string; towns: string[] }) =>
    region.towns.map((town: string) => ({
      region: region.slug,
      town: town.toLowerCase().replace(/\s+/g, '-'),
    }))
  );
}

export default async function ServiceTownPage({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}) {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isValidTown = region.towns.some(
    (t: string) => t.toLowerCase().replace(/\s+/g, '-') === townSlug
  );
  if (!isValidTown) notFound();

  const content = SERVICE_CONTENT[regionSlug] ?? SERVICE_CONTENT[Object.keys(SERVICE_CONTENT)[0]];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: `${SERVICE_NAME} — ${townName}`,
    provider: { '@type': 'LocalBusiness', name: BRAND.name, telephone: `+1${BRAND.phone}` },
    areaServed: { '@type': 'City', name: townName },
    url: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' / '}
          <Link href={`/${regionSlug}`} className="hover:text-brand-primary">{region.name}</Link>
          {' / '}
          <Link href={`/${regionSlug}/${SERVICE_SLUG}`} className="hover:text-brand-primary">{SERVICE_NAME}</Link>
          {' / '}
          <span className="text-gray-900">{townName}</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.headline}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{content.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href={`tel:+1${BRAND.phone}`} className="flex-1 text-center bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            📞 Call {BRAND.phoneFormatted}
          </a>
          <Link href={`/${regionSlug}/contact`} className="flex-1 text-center bg-brand-accent text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{SERVICE_NAME} FAQ — {townName}</h2>
        <div className="space-y-6 mb-12">
          {content.faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-primary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Raccoons in {townName}?</h2>
          <p className="mb-6 opacity-90">Licensed, insured, same-day service available. Call now or get a free quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:+1${BRAND.phone}`} className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">📞 {BRAND.phoneFormatted}</a>
            <Link href={`/${regionSlug}/contact`} className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
