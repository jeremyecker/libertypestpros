import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Emergency Pest Control Nassau County | Same-Day Service',
  description: 'Emergency pest control in Nassau County, NY. Same-day response available for urgent infestations. Liberty Pest Pros — family-owned since 1982. Call now: (516) 763-4600.',
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
      "description": "Emergency pest control in Nassau County. Same-day response available. Family-owned since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What counts as a pest emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any pest situation that poses an immediate health risk, threatens structural damage, or requires you to vacate part of your home is a pest emergency. This includes active wasp or bee nests blocking entryways, rodent infestations in living spaces, cockroach colonies near food preparation areas, bed bug discoveries before guests or events, and active termite swarms. If you&apos;re unsure, call us — we&apos;ll help you assess the urgency."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you respond in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day emergency service throughout Nassau County. For calls received before noon, we typically dispatch a technician within hours. We serve every Nassau County town from Valley Stream to Oyster Bay, and our local presence means shorter drive times than companies dispatching from outside the county."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge extra for emergency or same-day service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We&apos;re upfront about all pricing. We&apos;ll give you a clear quote before any work begins. Call us to discuss your situation and we&apos;ll let you know exactly what to expect — no surprise fees."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do while waiting for an emergency exterminator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For rodents: seal off the affected area and remove accessible food sources. For wasps or bees: avoid the nest area and keep windows and doors closed. For bed bugs: don&apos;t move bedding to other rooms — that spreads the infestation. For cockroaches: remove food and water sources if possible. In all cases, call us immediately and we&apos;ll give you specific guidance while our technician is en route."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle pest emergencies for businesses in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide emergency pest control for homes and businesses throughout Nassau County. Restaurants, retail spaces, offices, and multi-family buildings all receive the same rapid-response treatment. We understand that for businesses, every hour of a pest problem is a liability — we act fast."
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
  { name: 'Emergency Wasp & Bee Removal', icon: '🐝', desc: 'Immediate nest removal & area treatment' },
  { name: 'Urgent Rodent Control', icon: '🐭', desc: 'Same-day mice & rat removal' },
  { name: 'Cockroach Emergency', icon: '🪳', desc: 'Rapid knockdown treatment available' },
  { name: 'Bed Bug Emergency', icon: '🛏️', desc: 'Fast response before guests or events' },
  { name: 'Termite Emergency', icon: '🪲', desc: 'Active swarm & infestation response' },
  { name: 'Stinging Insect Removal', icon: '🦟', desc: 'Hornets, yellow jackets & more' },
];

const faqs = [
  {
    q: "What counts as a pest emergency?",
    a: "Any pest situation that poses an immediate health risk, threatens structural damage, or requires you to vacate part of your home is a pest emergency. This includes active wasp or bee nests blocking entryways, rodent infestations in living spaces, cockroach colonies near food preparation areas, bed bug discoveries before guests or events, and active termite swarms. If you&apos;re unsure, call us — we&apos;ll help you assess the urgency."
  },
  {
    q: "How fast can you respond in Nassau County?",
    a: "We offer same-day emergency service throughout Nassau County. For calls received before noon, we typically dispatch a technician within hours. We serve every Nassau County town from Valley Stream to Oyster Bay, and our local presence means shorter drive times than companies dispatching from outside the county."
  },
  {
    q: "Do you charge extra for emergency or same-day service?",
    a: "We&apos;re upfront about all pricing. We&apos;ll give you a clear quote before any work begins. Call us to discuss your situation and we&apos;ll let you know exactly what to expect — no surprise fees."
  },
  {
    q: "What should I do while waiting for an emergency exterminator?",
    a: "For rodents: seal off the affected area and remove accessible food sources. For wasps or bees: avoid the nest area and keep windows and doors closed. For bed bugs: don&apos;t move bedding to other rooms — that spreads the infestation. For cockroaches: remove food and water sources if possible. In all cases, call us immediately and we&apos;ll give you specific guidance while our technician is en route."
  },
  {
    q: "Can you handle pest emergencies for businesses in Nassau County?",
    a: "Yes. We provide emergency pest control for homes and businesses throughout Nassau County. Restaurants, retail spaces, offices, and multi-family buildings all receive the same rapid-response treatment. We understand that for businesses, every hour of a pest problem is a liability — we act fast."
  }
];

export default function EmergencyPestControlPage() {
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
          <span className="text-gray-900">Emergency Pest Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Emergency Pest Control in Nassau County, NY
        </h1>

        {/* Urgent CTA at top */}
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">🚨</div>
          <div className="flex-1">
            <p className="font-bold text-red-900 text-lg">Pest emergency in Nassau County?</p>
            <p className="text-red-700">Call us now — same-day response available throughout Nassau County.</p>
          </div>
          <a
            href="tel:+15167634600"
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            📞 (516) 763-4600
          </a>
        </div>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Same-Day Emergency Response Across Nassau County</h2>
          <p className="text-blue-800 mb-4">
            Pest emergencies don&apos;t wait for a convenient appointment slot, and neither do we. Liberty Pest Pros provides emergency pest control throughout Nassau County with same-day response available for urgent situations. Whether you&apos;ve discovered a wasp nest blocking your front door in Garden City, found rodents in your kitchen in Freeport, or woke up with bed bug bites in Rockville Centre the night before family arrives, our local team can mobilize fast. We&apos;ve been responding to Nassau County pest emergencies since 1982, which means we know the fastest routes, the most common emergency scenarios, and exactly how to resolve them effectively. Our local base in Nassau County means shorter response times than companies dispatching from far away. When minutes matter, local experience matters.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Same-day dispatch available</span>
            <span>✅ All Nassau County towns served</span>
            <span>✅ Licensed &amp; insured</span>
            <span>✅ Family-owned since 1982</span>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Pest Control Services</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Liberty Pest Pros for Nassau County Emergencies</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            In a pest emergency, you need three things: speed, expertise, and reliability. Liberty Pest Pros delivers all three. As a family-owned Nassau County company for over 40 years, we know this county — the traffic patterns, the neighborhoods, the pest species, and the housing types that create emergency conditions.
          </p>
          <p>
            <strong>Speed.</strong> Our technicians are dispatched from Nassau County locations, not from a central hub far away. Same-day service is genuinely available — not a marketing promise that turns into a 3-day wait.
          </p>
          <p>
            <strong>Expertise.</strong> After 40+ years of Nassau County emergencies, our team has seen everything: massive German cockroach infestations in restaurant kitchens, bald-faced hornet nests in attic vents, rat colonies in crawl spaces beneath Long Beach cottages, and termite swarms emerging through hardwood floors in Mineola colonials. We know what to do and we do it right the first time.
          </p>
          <p>
            <strong>Reliability.</strong> We show up when we say we will. We communicate clearly. We give you straight answers about what we found and what we did about it. No upsells, no alarmism, no unnecessary treatments.
          </p>
          <p>
            After the emergency is resolved, we&apos;ll discuss preventive measures to ensure the problem doesn&apos;t return. That&apos;s the complete service Nassau County homeowners and businesses deserve.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Pest Emergency in Nassau County? Act Now.</h2>
          <p className="text-blue-100 mb-4">Same-day response available. Don&apos;t let a pest emergency get worse — call us immediately.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We respond to pest emergencies throughout all Nassau County communities:</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Emergency Pest Control</h2>
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
          <Link href="/nassau/same-day-pest-control/" className="hover:underline text-brand-primary">Same-Day Pest Control</Link>
          <Link href="/nassau/exterminator-near-me/" className="hover:underline text-brand-primary">Exterminator Near Me</Link>
          <Link href="/nassau/free-pest-inspection/" className="hover:underline text-brand-primary">Free Pest Inspection</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
