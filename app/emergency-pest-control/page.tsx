import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Emergency Pest Control Nassau County',
  description: 'Urgent pest infestation in Nassau County? Liberty Pest Pros offers same-day emergency pest control across Nassau County. Family-owned since 1982. Call now: (516) 763-4600.',

  openGraph: {
    title: 'Emergency Pest Control Nassau County',
    description: 'Urgent pest infestation in Nassau County? Liberty Pest Pros offers same-day emergency pest control across Nassau County. Family-owned since 1982. Call now: (516) 763-4600.',
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
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00",
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
          "name": "How quickly can you respond to a pest emergency in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most Nassau County locations, we can have a technician on-site the same day you call. Call us in the morning for afternoon availability. We prioritize emergency calls and will get to you as fast as possible."
          }
        },
        {
          "@type": "Question",
          "name": "What counts as a pest emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pest emergency includes situations like an active wasp or hornet nest near entry points, a large roach infestation in a kitchen or bathroom, visible rodent activity inside living areas, or a sudden bed bug discovery before guests arrive. If the situation feels urgent, call us — we treat it that way."
          }
        },
        {
          "@type": "Question",
          "name": "Is emergency pest control more expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day and emergency service starts at $175. We always provide a clear quote before beginning work so there are no surprises. We believe every Nassau County family deserves a fast response at a fair price."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency pest control on weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer Saturday availability throughout Nassau County. Call us to confirm weekend scheduling for your location."
          }
        }
      ]
    }
  ]
};

export default function EmergencyPestControlTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Emergency Pest Control Nassau County — Same-Day Response</h1>
          <p className="text-xl mb-8">Urgent pest infestations can&apos;t wait — family-owned since 1982, dispatching across Nassau County today</p>
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
          <h2>When Does a Pest Problem Become an Emergency?</h2>
          <p>
            Not every pest sighting is an emergency — but some situations demand immediate action. If you&apos;re dealing with any of the following in your Nassau County home or business, call Liberty Pest Pros now:
          </p>
          <ul>
            <li><strong>Active wasp or hornet nest</strong> near a door, window, or HVAC unit — stinging insects near entry points pose a real risk, especially for anyone with allergies.</li>
            <li><strong>Large roach infestation</strong> in a kitchen, bathroom, or restaurant — German cockroaches reproduce rapidly and contaminate food surfaces. Every day you wait, the situation gets worse.</li>
            <li><strong>Visible rodent activity inside living areas</strong> — mice and rats in your walls or kitchen are not just unsettling; they chew wires, contaminate food, and carry disease. Active rodent problems need same-day attention.</li>
            <li><strong>Sudden bed bug discovery</strong> — whether it&apos;s before guests arrive or after a hotel stay, bed bugs spread fast. Immediate treatment stops the infestation from growing.</li>
            <li><strong>Wildlife entry</strong> — squirrels, raccoons, or birds inside your attic or walls cause structural damage and require rapid response.</li>
          </ul>
          <h2>How Liberty Responds Fast Across Nassau County</h2>
          <p>
            Liberty Pest Pros dispatches from Nassau County, which means we&apos;re never far from your home. When you call with an emergency, we prioritize your job in our schedule and route the nearest available technician to you. Most Nassau County locations receive same-day service when you call before noon.
          </p>
          <p>
            Our technicians carry the equipment and products needed to handle most emergency situations on the first visit — no waiting for a second appointment, no ordering specialty products. We arrive prepared to solve the problem.
          </p>
          <p>
            After the emergency treatment, we provide you with a detailed report of what was found, what was treated, and recommendations for follow-up to prevent recurrence. Nassau County&apos;s dense communities mean pest pressure from neighboring properties is always a factor — our technicians understand how to build a prevention strategy that protects your home long-term.
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
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you respond to a pest emergency in Nassau County?</h3>
              <p className="text-gray-600">For most Nassau County locations, we can have a technician on-site the same day you call. Call us in the morning for afternoon availability. We prioritize emergency calls and will get to you as fast as possible.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What counts as a pest emergency?</h3>
              <p className="text-gray-600">A pest emergency includes an active wasp nest near entry points, a large roach infestation, visible rodent activity inside your home, a sudden bed bug discovery, or wildlife entry. If it feels urgent, call us — we treat it that way.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is emergency pest control more expensive?</h3>
              <p className="text-gray-600">Same-day and emergency service starts at $175. We always provide a clear quote before beginning work so there are no surprises.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer emergency pest control on weekends?</h3>
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
