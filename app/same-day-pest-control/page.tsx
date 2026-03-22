import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Same-Day Pest Control Nassau County',
  description: "Can't wait? Liberty Pest Pros offers same-day pest control service across Nassau County. Fast response team, family-owned since 1982. Call now: (516) 763-4600.",

  openGraph: {
    title: 'Same-Day Pest Control Nassau County',
    description: "Can't wait? Liberty Pest Pros offers same-day pest control service across Nassau County. Fast response team, family-owned since 1982. Call now: (516) 763-4600.",
    url: `${SITE_URL}/same-day-pest-control`,
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
      "areaServed": { "@type": "AdministrativeArea", "name": "Nassau County, New York" },
      "description": "Professional pest control in Nassau County, NY. Family-owned since 1982. Licensed & insured. Call (516) 763-4600.",
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
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "175",
        "highPrice": "400"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is same-day pest control service available in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We do our best to accommodate same-day service for all Nassau County locations. Availability depends on daily scheduling, but when you call before noon, we can almost always get a technician to you that day. Call early to secure your spot."
          }
        },
        {
          "@type": "Question",
          "name": "What areas in Nassau County qualify for same-day service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day service across all of Nassau County — from Hempstead, Freeport, and Oceanside on the South Shore to Manhasset, Great Neck, and Oyster Bay on the North Shore. All 70+ Nassau communities are covered."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book same-day pest control service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call us at (516) 763-4600. Our team will confirm availability, give you an arrival window, and answer any questions before the technician arrives. Same-day booking is handled by phone for fastest scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "What pests can be treated on the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most common pest problems can be treated same-day: cockroaches, ants, rodents, wasps, bed bugs, mosquitoes, and spiders. Termite treatments may require a follow-up visit for full liquid or bait installation, but we can begin the process the same day."
          }
        }
      ]
    }
  ]
};

export default function SameDayPestControlTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Same-Day Pest Control Nassau County — Fast Response Team</h1>
          <p className="text-xl mb-8">Can&apos;t wait? Liberty Pest Pros dispatches same-day across all of Nassau County — family-owned since 1982</p>
          <a href={`tel:${BRAND.phone}`} className="bg-[#C0392B] text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 inline-block">
            Call (516) 763-4600
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div><span className="font-bold text-[#1B3D6F]">✓</span> Family-owned since 1982</div>
          <div><span className="font-bold text-[#1B3D6F]">✓</span> Licensed &amp; Insured</div>
          <div><span className="font-bold text-[#1B3D6F]">✓</span> Nassau County Experts</div>
          <div><span className="font-bold text-[#1B3D6F]">✓</span> Same-Day Available</div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Same-Day Pest Control — Nassau County&apos;s Fast Response Service</h2>
          <p>
            Pest problems rarely announce themselves at a convenient time. You find mice in your kitchen on a Tuesday. Wasps build a nest over your back door the morning of a family gathering. Cockroaches appear in your restaurant the day of a health inspection. These situations don&apos;t allow for &ldquo;we can schedule you for next week.&rdquo;
          </p>
          <p>
            That&apos;s why Liberty Pest Pros built its operation around same-day availability. We dispatch from Nassau County, which means our technicians are never more than a short drive from your home. When you call before noon on most days, we can have a trained technician at your door that afternoon with the equipment and products needed to address your problem immediately.
          </p>
          <h2>Common Pests That Need Immediate Attention</h2>
          <p>
            Certain pests are particularly time-sensitive in Nassau County:
          </p>
          <ul>
            <li><strong>Rodents:</strong> Mice and rats breed rapidly. A small problem becomes a full infestation within weeks if left untreated. Same-day baiting and exclusion work stops the spread.</li>
            <li><strong>Cockroaches:</strong> German cockroaches in particular reproduce at alarming rates. One day&apos;s delay means more eggs, more hiding spots, and harder treatment.</li>
            <li><strong>Wasps and hornets:</strong> An active nest near your entry points is a daily hazard. We remove nests same-day and treat the area to prevent rebuilding.</li>
            <li><strong>Bed bugs:</strong> The sooner treatment begins, the smaller the area of infestation and the fewer treatments required.</li>
          </ul>
          <h2>What to Do While Waiting for Your Technician</h2>
          <p>
            Once you&apos;ve called and scheduled your same-day appointment, here&apos;s how to prepare: For rodents, avoid disturbing nesting areas. For cockroaches, clear countertops and under-sink areas for access. For bed bugs, do not move infested items between rooms. For wasps, keep windows and doors closed and stay clear of the nest. Our technician will call with an arrival window and any additional prep instructions specific to your situation.
          </p>
        </div>
      </section>

      {/* Service Areas Card */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B3D6F] mb-6 text-center">Serving All of Nassau County</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/nassau/pest-control-near-me" className="bg-white p-4 rounded shadow text-center hover:shadow-md">
              <div className="font-semibold">Nassau County</div>
              <div className="text-sm text-gray-600">Pest Control Near Me</div>
            </Link>
            <div className="bg-white p-4 rounded shadow text-center text-gray-700">Garden City</div>
            <div className="bg-white p-4 rounded shadow text-center text-gray-700">Hempstead</div>
            <div className="bg-white p-4 rounded shadow text-center text-gray-700">Oceanside</div>
            <div className="bg-white p-4 rounded shadow text-center text-gray-700">Long Beach</div>
            <div className="bg-white p-4 rounded shadow text-center text-gray-700">Great Neck</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B3D6F] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is same-day pest control service available in Nassau County?</h3>
              <p className="text-gray-600">We do our best to accommodate same-day service for all Nassau County locations. When you call before noon, we can almost always get a technician to you that day. Call early to secure your spot.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What areas in Nassau County qualify for same-day service?</h3>
              <p className="text-gray-600">We offer same-day service across all of Nassau County — from Hempstead and Oceanside on the South Shore to Manhasset, Great Neck, and Oyster Bay on the North Shore. All 70+ Nassau communities are covered.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How do I book same-day pest control service?</h3>
              <p className="text-gray-600">Simply call us at (516) 763-4600. Our team will confirm availability, give you an arrival window, and answer any questions. Same-day booking is handled by phone for fastest scheduling.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What pests can be treated on the same day?</h3>
              <p className="text-gray-600">Most common pest problems can be treated same-day: cockroaches, ants, rodents, wasps, bed bugs, mosquitoes, and spiders. Termite treatments may require a follow-up visit for full installation, but we begin the process the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1B3D6F] text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Nassau County&apos;s trusted pest control experts since 1982.</p>
          <a href={`tel:${BRAND.phone}`} className="bg-[#C0392B] text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 inline-block">
            Call (516) 763-4600
          </a>
        </div>
      </section>
    </main>
  );
}
