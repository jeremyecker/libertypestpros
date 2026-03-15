import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Exterminator Near Me — Nassau County, NY',
  description: 'Need a local exterminator near you in Nassau County? Liberty Pest Pros is licensed, insured, and family-owned since 1982. Full-service extermination. Call (516) 763-4600.',

  openGraph: {
    title: 'Exterminator Near Me — Nassau County, NY',
    description: 'Need a local exterminator near you in Nassau County? Liberty Pest Pros is licensed, insured, and family-owned since 1982. Full-service extermination. Call (516) 763-4600.',
    url: `${SITE_URL}/nassau/exterminator-near-me`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Liberty Pest Pros',
    images: ['/images/og-default.jpg'],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Liberty Pest Pros",
      "telephone": "+15167634600",
      "url": "https://libertypestpros.com",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Nassau County, New York"
      },
      "description": "Licensed, insured exterminator serving all of Nassau County, Long Island since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I look for in a local exterminator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always verify that an exterminator is licensed by New York State, carries liability insurance, and has a verifiable local track record. Check for reviews from Nassau County homeowners specifically — local experience matters because pest pressure varies by region, housing stock, and season. Liberty Pest Pros has served Nassau County since 1982 with all the right credentials and a reputation built one satisfied customer at a time."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve all of Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We serve every community in Nassau County, from Elmont and Valley Stream in the west to Oyster Bay and Glen Cove in the east, and the entire South Shore from Long Beach to Massapequa. If you&apos;re in Nassau County, we can help."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed and insured in New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Liberty Pest Pros holds all required New York State pesticide applicator licenses and carries full liability insurance. Every technician is background-checked, trained, and certified. You can trust us in your home."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an exterminator cost in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary based on the pest, severity, and property size. We offer free, no-obligation estimates so you know the price upfront — no surprise charges, no hidden fees. Call us or fill out our online form to get a quote specific to your situation."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Liberty Pest Pros different from national chains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We&apos;re family-owned and local. Our technicians live in Nassau County, know the pest challenges specific to Long Island&apos;s housing stock and coastal climate, and care about their community. Unlike national franchises, every job is personal to us. That&apos;s why we&apos;ve been trusted by Nassau County homeowners for over 40 years."
          }
        }
      ]
    }
  ]
};

const nassauTowns = [
  { name: 'Hempstead', slug: 'hempstead' },
  { name: 'Garden City', slug: 'garden-city' },
  { name: 'Mineola', slug: 'mineola' },
  { name: 'Great Neck', slug: 'great-neck' },
  { name: 'Hicksville', slug: 'hicksville' },
  { name: 'Massapequa', slug: 'massapequa' },
  { name: 'Valley Stream', slug: 'valley-stream' },
  { name: 'Long Beach', slug: 'long-beach' },
  { name: 'Rockville Centre', slug: 'rockville-centre' },
  { name: 'Lynbrook', slug: 'lynbrook' },
  { name: 'Freeport', slug: 'freeport' },
  { name: 'Baldwin', slug: 'baldwin' },
  { name: 'Oceanside', slug: 'oceanside' },
  { name: 'Merrick', slug: 'merrick' },
  { name: 'Syosset', slug: 'syosset' },
  { name: 'Plainview', slug: 'plainview' },
  { name: 'Westbury', slug: 'westbury' },
  { name: 'Farmingdale', slug: 'farmingdale' },
  { name: 'Manhasset', slug: 'manhasset' },
  { name: 'Oyster Bay', slug: 'oyster-bay' },
];

const services = [
  { name: 'Termite Extermination', icon: '🪲', desc: 'Colony elimination & structural protection' },
  { name: 'Rodent Extermination', icon: '🐭', desc: 'Complete removal with entry-point exclusion' },
  { name: 'Cockroach Extermination', icon: '🪳', desc: 'German & American cockroach elimination' },
  { name: 'Bed Bug Extermination', icon: '🛏️', desc: 'Heat & chemical protocols with warranty' },
  { name: 'Ant Extermination', icon: '🐜', desc: 'Carpenter ants, pavement ants & more' },
  { name: 'Wasp & Hornet Removal', icon: '🐝', desc: 'Nest removal & prevention treatments' },
];

const faqs = [
  {
    q: "What should I look for in a local exterminator?",
    a: "Always verify that an exterminator is licensed by New York State, carries liability insurance, and has a verifiable local track record. Check for reviews from Nassau County homeowners specifically — local experience matters because pest pressure varies by region, housing stock, and season. Liberty Pest Pros has served Nassau County since 1982 with all the right credentials and a reputation built one satisfied customer at a time."
  },
  {
    q: "Do you serve all of Nassau County?",
    a: "Yes. We serve every community in Nassau County, from Elmont and Valley Stream in the west to Oyster Bay and Glen Cove in the east, and the entire South Shore from Long Beach to Massapequa. If you&apos;re in Nassau County, we can help."
  },
  {
    q: "Are you licensed and insured in New York?",
    a: "Yes. Liberty Pest Pros holds all required New York State pesticide applicator licenses and carries full liability insurance. Every technician is background-checked, trained, and certified. You can trust us in your home."
  },
  {
    q: "How much does an exterminator cost in Nassau County?",
    a: "Costs vary based on the pest, severity, and property size. We offer free, no-obligation estimates so you know the price upfront — no surprise charges, no hidden fees. Call us or fill out our online form to get a quote specific to your situation."
  },
  {
    q: "What makes Liberty Pest Pros different from national chains?",
    a: "We&apos;re family-owned and local. Our technicians live in Nassau County, know the pest challenges specific to Long Island&apos;s housing stock and coastal climate, and care about their community. Unlike national franchises, every job is personal to us. That&apos;s why we&apos;ve been trusted by Nassau County homeowners for over 40 years."
  }
];

export default function ExterminatorNearMePage() {
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
          <span className="text-gray-900">Exterminator Near Me</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Local Exterminator Near Me — Nassau County
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Trusted Local Exterminator</h2>
          <p className="text-blue-800 mb-4">
            Searching for an &ldquo;exterminator near me&rdquo; in Nassau County means you need someone who knows Long Island — not a call center routing a stranger from three counties away. Liberty Pest Pros is genuinely local: family-owned, Nassau County-based, and serving this community since 1982. Our technicians know the pest challenges that come with Long Island&apos;s coastal climate, the aging housing stock in towns like Hempstead, Freeport, and Westbury, and the seasonal pest cycles that affect every neighborhood from the North Shore to the South Shore. When you call us, a local person picks up, a local technician comes to your door, and a local family stands behind the work. We&apos;re fully licensed by New York State, carry comprehensive insurance, and have built our reputation on honest assessments, effective treatments, and showing up when we say we will.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ NY State licensed &amp; insured</span>
            <span>✅ Family-owned since 1982</span>
            <span>✅ Same-day service available</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Full-Service Extermination in Nassau County</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {services.map(s => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Why Liberty */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Liberty Pest Pros as Your Nassau County Exterminator</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Choosing the right exterminator is a decision that affects your family&apos;s health, your home&apos;s structural integrity, and your peace of mind. Liberty Pest Pros earns your trust with over four decades of proven results in Nassau County. Here&apos;s what sets us apart:
          </p>
          <p>
            <strong>Genuinely local.</strong> We&apos;re not a franchise. We&apos;re a Nassau County family business that has served this community through every phase of Long Island&apos;s history. Our technicians know the difference between pest problems in a 1950s ranch in Levittown versus a newer colonial in Plainview — and they treat each home accordingly.
          </p>
          <p>
            <strong>Licensed and insured.</strong> Every technician holds the required New York State pesticide applicator certifications. We carry full liability insurance. You&apos;re protected from the moment we arrive.
          </p>
          <p>
            <strong>Full-service capability.</strong> From a single ant treatment to full termite remediation, from one-time bed bug extermination to year-round pest management programs, we handle everything. No job is too small, and no infestation is too challenging for our team.
          </p>
          <p>
            <strong>Transparent pricing.</strong> We provide free, no-obligation estimates with clear pricing before any work begins. No surprise charges, no upsells you don&apos;t need.
          </p>
          <p>
            <strong>Guaranteed results.</strong> We stand behind every treatment. If pests return between scheduled services, we come back — no charge, no argument, no excuses.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get a Local Nassau County Exterminator Today</h2>
          <p className="text-blue-100 mb-4">Licensed, insured, family-owned. Same-day service available throughout Nassau County.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/nassau/contact/"
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15167634600"
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 (516) 763-4600
            </a>
          </div>
        </div>

        {/* Areas Served */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nassau County Exterminator Service Areas</h2>
        <p className="text-gray-600 mb-4">We provide extermination services throughout all of Nassau County:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Exterminator Near Me</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="text-sm text-gray-500 flex flex-wrap gap-3">
          <Link href="/nassau/" className="hover:underline text-brand-primary">← Nassau County Home</Link>
          <Link href="/nassau/services/" className="hover:underline text-brand-primary">All Services</Link>
          <Link href="/nassau/pest-control-near-me/" className="hover:underline text-brand-primary">Pest Control Near Me</Link>
          <Link href="/nassau/emergency-pest-control/" className="hover:underline text-brand-primary">Emergency Pest Control</Link>
          <Link href="/nassau/free-pest-inspection/" className="hover:underline text-brand-primary">Free Pest Inspection</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
