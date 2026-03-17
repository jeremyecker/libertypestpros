import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Same Day Pest Control Nassau County, NY',
  description: 'Need same-day pest control in Nassau County? Liberty Pest Pros dispatches local technicians fast. Family-owned since 1982. Call before noon: (516) 763-4600.',

  openGraph: {
    title: 'Same Day Pest Control Nassau County, NY',
    description: 'Need same-day pest control in Nassau County? Liberty Pest Pros dispatches local technicians fast. Family-owned since 1982. Call before noon: (516) 763-4600.',
    url: `${SITE_URL}/nassau/same-day-pest-control`,
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
      "description": "Same-day pest control service in Nassau County, Long Island. Family-owned since 1982.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nassau County",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you really offer same-day pest control service in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — genuinely. We&apos;re a Nassau County-based company with local technicians, which means we can dispatch quickly without driving from far away. Call us before noon and we can typically have a technician at your Nassau County home the same day. Availability varies by schedule, but same-day service is a real offering, not a marketing promise."
          }
        },
        {
          "@type": "Question",
          "name": "What pests can be treated same-day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most common Nassau County pest problems can be addressed same-day: ants, cockroaches, wasps and stinging insects, mice and rats, spiders, and general pest issues. Bed bug treatments and termite jobs may require more extensive preparation but we can often schedule those quickly too. Call us and describe your situation — we&apos;ll tell you exactly what we can do and when."
          }
        },
        {
          "@type": "Question",
          "name": "How do I prepare for a same-day pest control visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most same-day treatments, minimal preparation is needed. Clear access to the affected areas, secure pets if possible, and remove food items from treatment zones in the kitchen. Our technician will give you specific instructions when they confirm the appointment. Most treatments allow you to re-enter your home within a few hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is same-day pest control effective, or do I need multiple visits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many pest problems can be significantly resolved in a single same-day visit. For active infestations, follow-up treatments are sometimes recommended to ensure complete elimination — especially for German cockroaches, termites, and bed bugs. We&apos;ll give you an honest assessment after the initial treatment and recommend only what&apos;s genuinely needed."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Nassau County do you cover for same-day service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover all of Nassau County for same-day service, including the South Shore (Long Beach, Oceanside, Freeport, Massapequa), the North Shore (Great Neck, Manhasset, Oyster Bay, Glen Cove), and the interior communities (Hempstead, Mineola, Hicksville, Garden City, and everywhere in between)."
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
  { name: 'Same-Day Ant Control', icon: '🐜', desc: 'Interior & exterior treatment, same day' },
  { name: 'Same-Day Rodent Control', icon: '🐭', desc: 'Mice & rat removal dispatched fast' },
  { name: 'Same-Day Wasp Removal', icon: '🐝', desc: 'Nest removal before end of day' },
  { name: 'Same-Day Cockroach Treatment', icon: '🪳', desc: 'Rapid knockdown available' },
  { name: 'Same-Day Bed Bug Service', icon: '🛏️', desc: 'Fast response for urgent situations' },
  { name: 'Same-Day General Pest', icon: '🦟', desc: 'Spiders, silverfish & more' },
];

const faqs = [
  {
    q: "Do you really offer same-day pest control service in Nassau County?",
    a: "Yes — genuinely. We&apos;re a Nassau County-based company with local technicians, which means we can dispatch quickly without driving from far away. Call us before noon and we can typically have a technician at your Nassau County home the same day. Availability varies by schedule, but same-day service is a real offering, not a marketing promise."
  },
  {
    q: "What pests can be treated same-day?",
    a: "Most common Nassau County pest problems can be addressed same-day: ants, cockroaches, wasps and stinging insects, mice and rats, spiders, and general pest issues. Bed bug treatments and termite jobs may require more extensive preparation but we can often schedule those quickly too. Call us and describe your situation — we&apos;ll tell you exactly what we can do and when."
  },
  {
    q: "How do I prepare for a same-day pest control visit?",
    a: "For most same-day treatments, minimal preparation is needed. Clear access to the affected areas, secure pets if possible, and remove food items from treatment zones in the kitchen. Our technician will give you specific instructions when they confirm the appointment. Most treatments allow you to re-enter your home within a few hours."
  },
  {
    q: "Is same-day pest control effective, or do I need multiple visits?",
    a: "Many pest problems can be significantly resolved in a single same-day visit. For active infestations, follow-up treatments are sometimes recommended to ensure complete elimination — especially for German cockroaches, termites, and bed bugs. We&apos;ll give you an honest assessment after the initial treatment and recommend only what&apos;s genuinely needed."
  },
  {
    q: "What areas of Nassau County do you cover for same-day service?",
    a: "We cover all of Nassau County for same-day service, including the South Shore (Long Beach, Oceanside, Freeport, Massapequa), the North Shore (Great Neck, Manhasset, Oyster Bay, Glen Cove), and the interior communities (Hempstead, Mineola, Hicksville, Garden City, and everywhere in between)."
  }
];

export default function SameDayPestControlPage() {
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
          <span className="text-gray-900">Same-Day Pest Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Same-Day Pest Control — Nassau County, Long Island
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Fast Response, Local Technicians, Real Same-Day Service</h2>
          <p className="text-blue-800 mb-4">
            When you need pest control today — not next week — Liberty Pest Pros delivers. We&apos;re a Nassau County-based company, which means our technicians are already in your neighborhood, not dispatching from a distant hub with a 2-hour drive time. Call before noon and we can typically have a trained technician at your door the same day, whether you&apos;re in Hempstead or Hicksville, Massapequa or Manhasset. Nassau County homeowners have trusted us for same-day service since 1982 because we actually mean it. Discovered ants in your kitchen the morning of a dinner party? Spotted a wasp nest above your back door? Found mice droppings in your pantry? These aren&apos;t wait-until-next-week problems — and we treat them that way. Same-day service is built into how we operate, not bolted on as an upsell.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Call before noon for same-day</span>
            <span>✅ Nassau County local technicians</span>
            <span>✅ Licensed &amp; insured</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Same-Day Pest Control Services We Offer</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Liberty Pest Pros Delivers Real Same-Day Service</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Many pest control companies advertise same-day service but deliver next-day at best. Liberty Pest Pros can genuinely offer same-day appointments because we&apos;re structured for it. Here&apos;s why we&apos;re different:
          </p>
          <p>
            <strong>We&apos;re local.</strong> Our technicians live and work in Nassau County. There&apos;s no lengthy commute from a distant dispatch center — when you call, someone near you is available. In Nassau County&apos;s dense communities, that locality makes a real difference in response time.
          </p>
          <p>
            <strong>We staff for responsiveness.</strong> After 40 years in business, we understand Nassau County&apos;s seasonal pest patterns. We keep our team properly staffed so same-day requests can actually be honored — not rescheduled because we&apos;re overwhelmed.
          </p>
          <p>
            <strong>We treat quickly and effectively.</strong> Same-day service only matters if the treatment actually works. Our technicians arrive with the right equipment and products for the most common Nassau County pest scenarios. No running back to the shop for supplies, no delays because the technician isn&apos;t sure what they&apos;re dealing with.
          </p>
          <p>
            <strong>We follow up.</strong> After your same-day treatment, we check in to make sure the problem is resolved. If it&apos;s not, we come back. That&apos;s the guarantee backing every job we do.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Need Pest Control Today in Nassau County?</h2>
          <p className="text-blue-100 mb-4">Call before noon for same-day service. Local technicians, family-owned, guaranteed results.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Same-Day Service Areas in Nassau County</h2>
        <p className="text-gray-600 mb-4">We offer same-day pest control throughout all Nassau County towns:</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Same-Day Pest Control</h2>
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
          <Link href="/nassau/emergency-pest-control/" className="hover:underline text-brand-primary">Emergency Pest Control</Link>
          <Link href="/nassau/exterminator-near-me/" className="hover:underline text-brand-primary">Exterminator Near Me</Link>
          <Link href="/nassau/bed-bug-exterminator/" className="hover:underline text-brand-primary">Bed Bug Exterminator</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
