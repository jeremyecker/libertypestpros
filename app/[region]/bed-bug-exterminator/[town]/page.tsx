import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Bed Bug Exterminator';
const SERVICE_SLUG = 'bed-bug-exterminator';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  nassau: {
    headline: `Bed Bug Exterminator Services in Nassau County, NY`,
    body: `Liberty Pest Pros delivers professional bed bug extermination throughout Nassau County with the thoroughness that complete eradication demands. Nassau County's coastal climate keeps pest populations active longer than inland areas, and the county's diverse housing — from Levittown's post-war colonials to Great Neck's luxury condominiums — requires flexible treatment approaches. Liberty Pest Pros begins every bed bug engagement with a meticulous room-by-room inspection covering mattress seams, box spring staple rails, headboard joints, and baseboards. For confirmed infestations, we offer premium heat treatment as our preferred solution: a single treatment day that penetrates every harborage point including wall voids and floor joists without ongoing chemical residue. Liberty backs every bed bug treatment with a 30-day return-service guarantee.`,
    faqs: [
      { q: `How do I know if I have bed bugs in my Nassau County home?`, a: `Primary signs include small rust-colored stains on mattress seams (crushed bugs or excrement), live bugs in the folds of mattress piping (1/4-inch flat oval insects), shed exoskeletons near sleeping areas, and — in heavier infestations — a sweet musty odor. Liberty Pest Pros offers free phone consultations to help assess whether what you're seeing is consistent with bed bugs.` },
      { q: `Is heat treatment available for Nassau County condos and apartments?`, a: `Yes. Liberty Pest Pros performs heat treatment in Nassau County condos, co-ops, and rental apartments. For multi-unit buildings, we coordinate with building management. Our heating equipment is portable and can access buildings without loading dock access through standard doorways.` },
      { q: `Can bed bugs survive Nassau County winters?`, a: `Yes — bed bugs live exclusively indoors in climate-controlled spaces and are unaffected by outdoor temperatures. There is no 'bed bug season'; they breed and feed year-round. Treatment is equally effective in January as in July.` },
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
  const fullTitle = `${SERVICE_NAME} in ${townName}, ${region.stateCode} | ${BRAND.name}`;
  const shortTitle = `${SERVICE_NAME} in ${townName}, ${region.stateCode}`;
  const title = fullTitle.length <= 60 ? fullTitle : shortTitle;
  const description = `Licensed ${SERVICE_NAME.toLowerCase()} serving ${townName}, ${region.stateCode}. ${BRAND.name} — same-day service, guaranteed results. Call ${BRAND.phoneFormatted}.`;
  return {
    title,
    description: description.length <= 155 ? description : description.slice(0, 152) + '...',
    alternates: { canonical: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}` },
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
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Bed Bugs in {townName}?</h2>
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
