import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  return {
    title: `About Us — ${region.name}`,
    description: `Learn about ${BRAND.name} and our commitment to protecting ${region.name} homes from pests.`,
  
    openGraph: {
      title: `About Us — ${region.name}`,
      description: `Learn about ${BRAND.name} and our commitment to protecting ${region.name} homes from pests.`,
      url: `https://${BRAND.domain}/${regionSlug}/about`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Liberty Pest Pros',
      images: ['/images/og-default.jpg'],
    },
};
}

export async function generateStaticParams() {
  const { getAllRegionSlugs } = await import('@/lib/regions');
  return getAllRegionSlugs().map(slug => ({ region: slug }));
}

export default async function AboutPage({ params }: { params: Promise<{ region: string }> }) {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About {BRAND.name}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            {BRAND.name} has been protecting {region.name} homes and businesses from pests since {BRAND.yearFounded}. 
            We&apos;re locally owned and operated — a Rest Easy Pest Control brand — with deep roots in the communities we serve.
          </p>
          <p>
            Our technicians are licensed, insured, and trained in the latest Integrated Pest Management (IPM) 
            techniques — targeted, EPA-registered approaches applied with clear re-entry guidance for households with children and pets.
          </p>
          <h2>Why {region.name} Homeowners Choose Us</h2>
          <ul>
            <li>Local experts who know {region.name}&apos;s pest pressures</li>
            <li>Same-day service availability</li>
            <li>Targeted, EPA-registered treatments</li>
            <li>Transparent pricing — no surprise charges</li>
            <li>Written service agreement on every job</li>
          </ul>
          <h2>Our Commitment</h2>
          <p>
            Every home is different. We take the time to assess your specific situation before recommending 
            a treatment plan. Your family&apos;s safety and peace of mind is our first priority.
          </p>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
