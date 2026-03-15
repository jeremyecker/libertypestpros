import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Commercial Pest Control Nassau County, NY',
  description: 'Commercial pest control for Nassau County businesses. Restaurants, offices, retail, healthcare & schools. Regulation-compliant, family-owned since 1982.',

  openGraph: {
    title: 'Commercial Pest Control Nassau County, NY',
    description: 'Commercial pest control for Nassau County businesses. Restaurants, offices, retail, healthcare & schools. Regulation-compliant, family-owned since 1982.',
    url: `${SITE_URL}/nassau/commercial`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Liberty Pest Pros',
    images: ['/images/og-default.jpg'],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Liberty Pest Pros",
  "telephone": "+15167634600",
  "url": "https://libertypestpros.com",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Nassau County, New York"
  },
  "description": "Commercial pest control services for Nassau County businesses. Regulation-compliant, disruption-free integrated pest management.",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-19:00"
};

const verticals = [
  {
    slug: 'restaurants',
    title: 'Restaurant & Food Service',
    icon: '🍽️',
    desc: 'Health department-compliant pest control for restaurants, cafes, and food service operations.',
  },
  {
    slug: 'offices',
    title: 'Office & Corporate',
    icon: '🏢',
    desc: 'Disruption-free pest management for office buildings, corporate campuses, and co-working spaces.',
  },
  {
    slug: 'retail',
    title: 'Retail Stores',
    icon: '🛍️',
    desc: 'Protect your merchandise, reputation, and customers in retail environments.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Medical',
    icon: '🏥',
    desc: 'Stringent pest control for hospitals, clinics, nursing homes, and medical facilities.',
  },
  {
    slug: 'schools',
    title: 'Schools & Education',
    icon: '🎓',
    desc: 'Child-safe, regulation-compliant pest control for Nassau County schools and educational facilities.',
  },
  {
    slug: 'warehouses',
    title: 'Warehouse & Industrial',
    icon: '🏭',
    desc: 'Large-footprint pest management for warehouses, distribution centers, and industrial facilities.',
  },
  {
    slug: 'hotels',
    title: 'Hotels & Hospitality',
    icon: '🏨',
    desc: 'Reputation-protecting pest control for hotels, motels, and hospitality properties.',
  },
  {
    slug: 'property-management',
    title: 'Property Management',
    icon: '🏘️',
    desc: 'Portfolio-wide pest control programs for residential and commercial property managers.',
  },
  {
    slug: 'food-processing',
    title: 'Food Processing & Distribution',
    icon: '🏗️',
    desc: 'FDA and USDA-aligned pest control for food manufacturing and distribution operations.',
  },
  {
    slug: 'daycare',
    title: 'Daycare & Childcare',
    icon: '👶',
    desc: 'Safe, effective pest control for daycare centers and childcare facilities across Nassau County.',
  },
];

export default function CommercialIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/nassau/" className="hover:text-brand-primary">Nassau County</Link>
          {' → '}
          <span className="text-gray-900">Commercial Pest Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Commercial Pest Control in Nassau County
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Commercial Pest Control Specialists</h2>
          <p className="text-blue-800 mb-4">
            Nassau County is home to thousands of businesses — restaurants on the Nautical Mile in Freeport, retail along Hempstead Turnpike, corporate offices in Garden City and Mineola, healthcare facilities throughout the county, schools in every hamlet and village, and industrial operations across the region. Every one of those businesses faces pest pressure specific to their environment, their regulatory requirements, and their customers. Liberty Pest Pros has delivered regulation-compliant, disruption-free commercial pest control to Nassau County businesses since 1982. We understand what&apos;s at stake: a failed health inspection, a customer complaint, a regulatory citation, or a pest sighting captured on social media can cause lasting damage. Our commercial programs are built to prevent those outcomes with proactive integrated pest management — not just reactive treatments.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Regulation-compliant programs</span>
            <span>✅ Disruption-free scheduling</span>
            <span>✅ Nassau County licensed & insured</span>
            <span>✅ IPM-based approach</span>
          </div>
        </div>

        {/* Verticals Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial Pest Control by Business Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {verticals.map(v => (
            <Link
              key={v.slug}
              href={`/nassau/commercial/${v.slug}/`}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{v.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{v.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{v.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Commercial Pest Control Matters */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Commercial Pest Control Is Different</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Commercial pest control demands a different approach than residential service. Regulatory compliance is non-negotiable — restaurants face health department inspections, food processors operate under FDA and USDA oversight, healthcare facilities must meet strict infection control standards, and schools are governed by New York State Integrated Pest Management requirements. One violation can mean fines, forced closures, or lost licenses.
          </p>
          <p>
            Reputation is equally critical. In the age of Google reviews and social media, a single pest sighting by a customer or employee can go viral and cause lasting brand damage. Nassau County businesses can&apos;t afford reactive pest control — they need proactive programs that prevent pests from ever becoming visible problems.
          </p>
          <p>
            Liberty Pest Pros&apos; commercial programs are built on Integrated Pest Management (IPM): thorough inspection to identify entry points and conducive conditions, exclusion and environmental modifications to reduce pest pressure, targeted treatments where needed, and ongoing monitoring to catch issues before they escalate. Every commercial account receives a written pest control program, documentation for regulatory compliance, and a dedicated point of contact.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Request a Commercial Pest Control Quote</h2>
          <p className="text-blue-100 mb-4">Regulation-compliant programs for Nassau County businesses. Disruption-free scheduling. Same-day consultations available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/nassau/contact/"
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Commercial Quote
            </Link>
            <a
              href="tel:+15167634600"
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 (516) 763-4600
            </a>
          </div>
        </div>

        {/* Internal links */}
        <div className="text-sm text-gray-500 flex flex-wrap gap-3">
          <Link href="/nassau/" className="hover:underline text-brand-primary">← Nassau County Home</Link>
          <Link href="/nassau/services/" className="hover:underline text-brand-primary">All Services</Link>
          <Link href="/nassau/service-areas/" className="hover:underline text-brand-primary">Service Areas</Link>
          <Link href="/nassau/contact/" className="hover:underline text-brand-primary">Contact Us</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
