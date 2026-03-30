import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Same-Day Pest Control Nassau County, Long Island',
  description: 'Need fast pest control in Nassau County? Liberty Pest Pros offers same-day service across Nassau County. Family-owned since 1982. Call now: (516) 763-4600.',

  openGraph: {
    title: 'Same-Day Pest Control Nassau County, Long Island',
    description: 'Need fast pest control in Nassau County? Liberty Pest Pros offers same-day service across Nassau County. Family-owned since 1982. Call now: (516) 763-4600.',
    url: `${SITE_URL}/emergency-pest-control`,
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
        "highPrice": "450"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can you respond to urgent pest situations in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most Nassau County locations, we can have a technician on-site the same day you call. Call us in the morning for afternoon availability. We prioritize urgent calls and dispatch the nearest available technician to you as fast as possible."
          }
        },
        {
          "@type": "Question",
          "name": "What pest situations call for same-day service in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day service is appropriate for active wasp or hornet nests near entry points, large roach infestations in kitchens or bathrooms, visible rodent activity inside living areas, sudden bed bug discoveries, or wildlife that has entered your home. If the situation feels urgent, call us — we treat it that way."
          }
        },
        {
          "@type": "Question",
          "name": "Is same-day pest control more expensive in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day service starts at $175. We always provide a clear quote before beginning any work so there are no surprises. We believe every Nassau County family deserves a fast response at a fair price."
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
          <h1 className="text-4xl font-bold mb-4">Same-Day Pest Control Nassau County</h1>
          <p className="text-xl mb-8">Fast, reliable pest service when you need it — family-owned since 1982, dispatching across Nassau County today</p>
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
          <h2>When Does a Pest Problem Need Fast Attention?</h2>
          <p>
            Not every pest sighting requires immediate action — but some situations call for a same-day response. If you&apos;re dealing with any of the following in your Nassau County home or business, call Liberty Pest Pros now:
          </p>
          <ul>
            <li><strong>Active wasp or hornet nest</strong> near a door, window, or HVAC unit — stinging insects near entry points pose a real risk, especially for anyone with allergies.</li>
            <li><strong>Large roach infestation</strong> in a kitchen, bathroom, or restaurant — German cockroaches reproduce rapidly and contaminate food surfaces. Every day you wait, the situation gets worse.</li>
            <li><strong>Visible rodent activity inside living areas</strong> — mice and rats in your walls or kitchen chew wires, contaminate food, and require prompt attention. Active rodent problems need same-day treatment.</li>
            <li><strong>Sudden bed bug discovery</strong> — whether before guests arrive or after a hotel stay, bed bugs spread fast. Immediate treatment stops the infestation from growing.</li>
            <li><strong>Wildlife entry</strong> — squirrels, raccoons, or birds inside your attic or walls cause structural damage and require rapid response.</li>
          </ul>
          <h2>How Liberty Responds Fast Across Nassau County</h2>
          <p>
            Liberty Pest Pros dispatches from Nassau County, which means we&apos;re never far from your home. When you call with an urgent request, we prioritize your job in our schedule and route the nearest available technician to you. Most Nassau County locations receive same-day service when you call before noon.
          </p>
          <p>
            Our technicians carry the equipment and products needed to handle most situations on the first visit — no waiting for a second appointment, no ordering specialty products. We arrive prepared to solve the problem.
          </p>
          <p>
            After treatment, we provide a detailed report of what was found, what was treated, and recommendations for follow-up to prevent recurrence. Nassau County&apos;s dense suburban communities mean pest pressure from neighboring properties is always a factor — our technicians understand how to build a prevention strategy that protects your home long-term.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mb-10 mt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Same-Day Pest Control in Nassau County, Long Island</h2>
          <div className="prose prose-lg max-w-none">
            <p>Nassau County&apos;s suburban communities — from the densely populated towns of Hempstead and Elmont to the waterfront communities of Long Beach and Freeport — experience a wide range of pest pressures throughout the year. When a pest situation feels urgent, waiting days for an appointment is not an option. Liberty Pest Pros maintains same-day availability across Nassau County for situations that require a fast response.</p>
            <p>Our Nassau County service area means technicians are always nearby, dispatching from familiar territory with knowledge of local conditions — the sandy soils near the South Shore that attract certain ant and rodent species, the older housing stock in established neighborhoods that provides more entry points, and the wooded corridors along the Nassau/Queens border that increase wildlife pressure. Same-day service is not just about speed — it&apos;s about sending a technician who understands your specific Nassau County context.</p>
            <h3>What to Expect from Same-Day Service</h3>
            <ul>
              <li><strong>Morning call, afternoon visit</strong> — Call before noon for best same-day availability; we&apos;ll confirm an arrival window and call when the technician is en route</li>
              <li><strong>Prepared for the first visit</strong> — Technicians arrive with equipment and products to address most pest situations on the spot</li>
              <li><strong>Clear quote before work begins</strong> — You will receive a price before any treatment starts — no surprises</li>
              <li><strong>Written report after treatment</strong> — Findings, treatment performed, and prevention recommendations provided after every visit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Same-Day Pest Control in Nassau County — FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can you respond to urgent pest situations in Nassau County?",
                a: "For most Nassau County locations, we can have a technician on-site the same day you call. Call us in the morning for afternoon availability. We prioritize urgent calls and dispatch the nearest available technician."
              },
              {
                q: "What pest situations call for same-day service?",
                a: "Same-day service is appropriate for active wasp or hornet nests near entry points, large roach infestations in kitchens or bathrooms, visible rodent activity inside living areas, sudden bed bug discoveries, or wildlife that has entered your home. If it feels urgent, call us — we treat it that way."
              },
              {
                q: "Is same-day pest control more expensive in Nassau County?",
                a: "Same-day service starts at $175. We always provide a clear quote before beginning work so there are no surprises. We believe every Nassau County family deserves a fast response at a fair price."
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
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
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you respond to urgent pest situations in Nassau County?</h3>
              <p className="text-gray-600">For most Nassau County locations, we can have a technician on-site the same day you call. Call us in the morning for afternoon availability. We prioritize urgent calls and dispatch the nearest available technician as fast as possible.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What pest situations call for same-day service?</h3>
              <p className="text-gray-600">Same-day service is appropriate for active wasp nests near entry points, large roach infestations, visible rodent activity inside your home, sudden bed bug discoveries, or wildlife that has entered your home. If it feels urgent, call us — we treat it that way.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is same-day pest control more expensive?</h3>
              <p className="text-gray-600">Same-day service starts at $175. We always provide a clear quote before beginning work so there are no surprises.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer same-day pest control on weekends?</h3>
              <p className="text-gray-600">Yes, we offer Saturday availability throughout Nassau County. Call us to confirm weekend scheduling for your location.</p>
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
