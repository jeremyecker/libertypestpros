import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { getRegion } from '@/lib/regions';
import CTABanner from '@/components/sections/CTABanner';

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

export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  const services = Object.keys(SERVICE_META);
  return REGIONS.flatMap((region: { slug: string }) =>
    services.map(service => ({ region: region.slug, service }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; service: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, service: serviceSlug } = await params;
  const region = getRegion(regionSlug);
  const svc = SERVICE_META[serviceSlug];
  if (!region || !svc) return {};
  return {
    title: `${svc.name} in ${region.name}, ${region.stateCode} | ${BRAND.name}`,
    description: `${svc.desc} Licensed ${region.stateCode} exterminators serving all ${region.name} communities. Call ${BRAND.phoneFormatted} for a free quote.`,
    alternates: { canonical: `https://${BRAND.domain}/${regionSlug}/${serviceSlug}/` },
    openGraph: {
      title: `${svc.name} in ${region.name}, ${region.stateCode}`,
      description: `Licensed ${svc.name.toLowerCase()} serving all ${region.name} communities. Family-owned since 1982.`,
      url: `https://${BRAND.domain}/${regionSlug}/${serviceSlug}/`,
    },
  };
}

export default async function ServiceIndexPage({
  params,
}: {
  params: Promise<{ region: string; service: string }>;
}) {
  const { region: regionSlug, service: serviceSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();
  const svc = SERVICE_META[serviceSlug];
  if (!svc) notFound();

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
