import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Free Pest Inspection Nassau County, NY',
  description: 'Schedule a free pest inspection in Nassau County, NY. No obligation, no pressure. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600 to book.',

  openGraph: {
    title: 'Free Pest Inspection Nassau County, NY',
    description: 'Schedule a free pest inspection in Nassau County, NY. No obligation, no pressure. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600 to book.',
    url: `${SITE_URL}/nassau/free-pest-inspection`,
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
      "description": "Free pest inspection in Nassau County, NY. No-obligation assessment from family-owned pest control company serving Long Island since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a free pest inspection include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our free inspection covers a thorough assessment of your home&apos;s interior and exterior. We check common pest entry points, harborage areas, and signs of active infestation. This includes the basement, crawl space (if accessible), attic, kitchen, bathrooms, and perimeter of the home. We&apos;ll look for evidence of termites, rodents, ants, cockroaches, bed bugs, stinging insects, and other common Nassau County pests. At the end, we provide a written report with our findings and recommendations — with no obligation to purchase anything."
          }
        },
        {
          "@type": "Question",
          "name": "Is the inspection really free with no obligation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our pest inspection is genuinely free and there is zero obligation. We won&apos;t pressure you into a service contract or upsell you during the inspection. Our technician will tell you honestly what they found — including &ldquo;nothing significant&rdquo; if that&apos;s the case. We believe in earning your business through quality service, not sales pressure."
          }
        },
        {
          "@type": "Question",
          "name": "When should I schedule a pest inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anytime is a good time, but there are a few situations where an inspection is especially valuable: if you&apos;re buying or selling a home in Nassau County, if you&apos;ve seen any pest activity and want to know the scope, if you haven&apos;t had your home inspected in over a year, if you have a crawl space or older home that&apos;s more vulnerable to termites or rodents, or if you just want peace of mind going into a new season."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a pest inspection take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential inspections take 30-60 minutes depending on the size and complexity of your home. Larger properties or homes with extensive crawl spaces or attic areas may take longer. We&apos;ll give you an estimated time when you schedule."
          }
        },
        {
          "@type": "Question",
          "name": "What if pests are found during my inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If we find evidence of pest activity, we&apos;ll explain exactly what we found, where it is, and what we recommend to address it. We provide a written estimate for any recommended treatment, but you&apos;re never required to proceed. Many Nassau County homeowners who start with a free inspection appreciate having an honest, professional assessment before deciding on next steps."
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

const inspectionAreas = [
  { area: 'Basement & Crawl Space', icon: '🏠', desc: 'Termite damage, moisture issues, rodent entry' },
  { area: 'Kitchen & Bathrooms', icon: '🚿', desc: 'Cockroach harborage, ant trails, moisture pests' },
  { area: 'Attic', icon: '🔺', desc: 'Rodent nesting, wasp nests, wildlife entry' },
  { area: 'Exterior Perimeter', icon: '🌿', desc: 'Entry points, nesting sites, wood damage' },
  { area: 'Bedrooms', icon: '🛏️', desc: 'Bed bug signs, spider harborage areas' },
  { area: 'Foundation & Utilities', icon: '🔧', desc: 'Pipe penetrations, gaps, moisture sources' },
];

const faqs = [
  {
    q: "What does a free pest inspection include?",
    a: "Our free inspection covers a thorough assessment of your home&apos;s interior and exterior. We check common pest entry points, harborage areas, and signs of active infestation. This includes the basement, crawl space (if accessible), attic, kitchen, bathrooms, and perimeter of the home. We&apos;ll look for evidence of termites, rodents, ants, cockroaches, bed bugs, stinging insects, and other common Nassau County pests. At the end, we provide a written report with our findings and recommendations — with no obligation to purchase anything."
  },
  {
    q: "Is the inspection really free with no obligation?",
    a: "Yes. Our pest inspection is genuinely free and there is zero obligation. We won&apos;t pressure you into a service contract or upsell you during the inspection. Our technician will tell you honestly what they found — including &ldquo;nothing significant&rdquo; if that&apos;s the case. We believe in earning your business through quality service, not sales pressure."
  },
  {
    q: "When should I schedule a pest inspection?",
    a: "Anytime is a good time, but there are a few situations where an inspection is especially valuable: if you&apos;re buying or selling a home in Nassau County, if you&apos;ve seen any pest activity and want to know the scope, if you haven&apos;t had your home inspected in over a year, if you have a crawl space or older home that&apos;s more vulnerable to termites or rodents, or if you just want peace of mind going into a new season."
  },
  {
    q: "How long does a pest inspection take?",
    a: "Most residential inspections take 30-60 minutes depending on the size and complexity of your home. Larger properties or homes with extensive crawl spaces or attic areas may take longer. We&apos;ll give you an estimated time when you schedule."
  },
  {
    q: "What if pests are found during my inspection?",
    a: "If we find evidence of pest activity, we&apos;ll explain exactly what we found, where it is, and what we recommend to address it. We provide a written estimate for any recommended treatment, but you&apos;re never required to proceed. Many Nassau County homeowners who start with a free inspection appreciate having an honest, professional assessment before deciding on next steps."
  }
];

export default function FreePestInspectionPage() {
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
          <span className="text-gray-900">Free Pest Inspection</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Free Pest Inspection — Nassau County, Long Island
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">No-Obligation Pest Inspection for Nassau County Homes</h2>
          <p className="text-green-800 mb-4">
            Not sure if you have a pest problem? Let Liberty Pest Pros find out for you — at no charge. Our free pest inspection is a comprehensive, professional assessment of your Nassau County home by a licensed technician who knows Long Island&apos;s pest landscape inside and out. Nassau County&apos;s housing stock is diverse: there are Cape Cods in Levittown with aging foundations, beachfront properties in Long Beach susceptible to moisture-loving pests, colonials in Garden City with finished basements that attract rodents and cockroaches, and newer developments in Plainview and Syosset where termite pressure is rising. Whatever your home&apos;s age, style, or location, a professional inspection gives you an honest picture of what&apos;s going on — and what, if anything, needs to be done about it. No pressure, no obligation, no upfront cost.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-green-700">
            <span>✅ Completely free</span>
            <span>✅ Zero obligation</span>
            <span>✅ Licensed technicians</span>
            <span>✅ Written findings report</span>
          </div>
        </div>

        {/* What we inspect */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Our Free Inspection Covers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {inspectionAreas.map(s => (
            <div key={s.area} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-900 text-sm">{s.area}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Why Liberty */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Liberty Pest Pros for Your Free Inspection</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            A pest inspection is only as valuable as the expertise behind it. Our technicians have collectively spent decades inspecting Nassau County homes — they&apos;ve seen what Long Island&apos;s climate, soil conditions, and housing stock produce in terms of pest pressure, and they know exactly where to look.
          </p>
          <p>
            <strong>Honest reporting.</strong> We tell you what we find — including if we find nothing. We don&apos;t fabricate pest problems to generate business, and we don&apos;t minimize real problems to avoid delivering uncomfortable news. Nassau County homeowners deserve straight answers.
          </p>
          <p>
            <strong>Comprehensive coverage.</strong> Our inspection isn&apos;t a 10-minute walkthrough. We examine your basement, crawl space, attic, kitchen, bathrooms, bedrooms, exterior perimeter, and any outbuildings. We look for evidence of all common Nassau County pests: termites, carpenter ants, rodents, cockroaches, bed bugs, stinging insects, and more.
          </p>
          <p>
            <strong>Written findings.</strong> After the inspection, we provide a written report documenting what was found, where, and what we recommend. This report is yours to keep — whether you hire us or not.
          </p>
          <p>
            <strong>No pressure follow-up.</strong> If we recommend treatment, we provide a clear quote. You decide if and when to proceed. We don&apos;t follow up with aggressive sales calls. Many Nassau County homeowners who appreciate our no-pressure approach become long-term customers — but that&apos;s their choice.
          </p>
          <p>
            <strong>Valuable for home transactions.</strong> If you&apos;re buying or selling a Nassau County home, a free pest inspection from Liberty Pest Pros can identify issues before they become deal-breakers — saving you time, money, and stress.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Free Nassau County Pest Inspection</h2>
          <p className="text-blue-100 mb-4">No obligation. Written report included. Licensed technicians. Family-owned since 1982.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Inspection Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We offer free pest inspections throughout all Nassau County communities:</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Free Pest Inspection</h2>
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
          <Link href="/nassau/exterminator-near-me/" className="hover:underline text-brand-primary">Exterminator Near Me</Link>
          <Link href="/nassau/bed-bug-exterminator/" className="hover:underline text-brand-primary">Bed Bug Exterminator</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
