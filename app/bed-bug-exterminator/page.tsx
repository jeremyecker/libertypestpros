import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Bed Bug Exterminator Nassau County, Long Island',
  description: 'Nassau County bed bug specialists — heat treatment and chemical options with proven results. Family-owned since 1982. Call Liberty Pest Pros: (516) 763-4600.',

  openGraph: {
    title: 'Bed Bug Exterminator Nassau County, Long Island',
    description: 'Nassau County bed bug specialists — heat treatment and chemical options with proven results. Family-owned since 1982. Call Liberty Pest Pros: (516) 763-4600.',
    url: `${SITE_URL}/bed-bug-exterminator`,
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
      "priceRange": "$$$",
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
        "lowPrice": "300",
        "highPrice": "800"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do bed bugs spread in Nassau County suburban homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bed bugs travel in luggage, on used furniture, and via houseguests who have stayed in infested accommodations. In Nassau County, infestations are most commonly introduced after hotel stays, travel through JFK or LaGuardia airports, or purchasing second-hand furniture. Single-family homes can harbor bed bugs for months before activity becomes obvious — routine checking of mattress seams and box springs is key to early detection."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between heat treatment and chemical treatment for bed bugs in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Heat treatment raises the temperature in infested areas to 120°F or above, killing all bed bug life stages — including eggs — in a single visit. You can typically return home the same day. Chemical treatment uses EPA-registered residual products applied to all harborage areas and requires 2-3 visits spaced 2 weeks apart to break the egg cycle. We assess each situation and recommend the best approach based on the infestation size, your home's layout, and your household needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to prepare my Nassau County home before bed bug treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — preparation is essential for effective results. Before treatment, you will need to bag and heat-dry all clothing in the affected rooms, reduce clutter around sleeping areas, and stay out of treated rooms for the specified re-entry period. Our technician provides a detailed prep checklist before the appointment so you know exactly what to do. Thorough preparation significantly improves treatment outcomes."
          }
        }
      ]
    }
  ]
};

export default function BedBugExterminatorTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bed Bug Exterminator Nassau County — Proven Elimination</h1>
          <p className="text-xl mb-8">Nassau County bed bug specialists — heat treatment and chemical options, reliable results since 1982</p>
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
          <h2>Nassau County&apos;s Bed Bug Problem</h2>
          <p>
            Nassau County has seen a significant increase in bed bug reports over the past decade — and it&apos;s not surprising given the county&apos;s geography and demographics. The dense communities of Hempstead, Freeport, and Long Beach, the apartment complexes along major corridors, and the constant travel through JFK and LaGuardia airports create ideal conditions for bed bug spread. Bed bugs travel in luggage, on clothing, and in used furniture — and once they get into a home, they can spread quickly between neighboring units in multifamily buildings.
          </p>
          <p>
            Even Nassau County&apos;s upscale communities are not immune. Bed bugs have been found in luxury hotels, exclusive neighborhoods, and well-kept single-family homes throughout the county. They are equal-opportunity pests that care nothing about cleanliness — they follow the warmth of human bodies.
          </p>
          <h2>Liberty&apos;s Bed Bug Treatment Approach</h2>
          <p>
            Liberty Pest Pros offers two primary treatment approaches for Nassau County bed bug infestations:
          </p>
          <p>
            <strong>Heat Treatment:</strong> We use professional-grade heating equipment to raise the temperature in infested areas to levels that kill all bed bug life stages — including eggs, which chemical treatments can struggle to penetrate. Heat treatment typically eliminates the infestation in a single visit and allows you to return home the same day once temperatures normalize.
          </p>
          <p>
            <strong>Chemical Treatment:</strong> Our licensed technicians apply targeted chemical treatments to all harborage areas — mattress seams, box spring frames, bed frames, baseboards, and furniture joints. Multiple treatments are scheduled 2 weeks apart to break the egg cycle and ensure complete elimination.
          </p>
          <h2>Signs of Bed Bugs — Know What to Look For</h2>
          <p>
            Before calling an exterminator, check for these indicators: small reddish-brown insects (about the size of an apple seed) in mattress seams and tufts; tiny dark spots on sheets, mattresses, or walls (bed bug excrement); shed exoskeletons near sleeping areas; and small red bites in lines or clusters on skin, often noticed in the morning. If you see any of these signs, call Liberty Pest Pros immediately. Early treatment dramatically reduces the cost and complexity of elimination.
          </p>
          <h2>The Assessment Process</h2>
          <p>
            Every bed bug engagement begins with a thorough inspection. Our technician will examine all sleeping areas, furniture, baseboards, and nearby clutter to map the extent of the infestation. We&apos;ll provide you with an honest assessment of treatment options, expected timelines, and what to expect during and after treatment — all before you commit to anything.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mb-10 mt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bed Bugs in Nassau County, Long Island</h2>
          <div className="prose prose-lg max-w-none">
            <p>Nassau County&apos;s suburban landscape — single-family homes, garden apartments, and busy travel corridors connecting to New York City — creates persistent bed bug pressure year-round. Unlike NYC boroughs where bed bugs spread easily through shared walls and pipe chases, Nassau County infestations are most often introduced via luggage from hotel stays, air travel through JFK and LaGuardia, or used furniture purchased online. A single pregnant female bed bug can establish a full infestation within 6–8 weeks — which is why early detection in Nassau County homes is critical.</p>
            <p>Long Island&apos;s older housing stock — particularly the post-war Cape Cods and ranch homes common in towns like Uniondale, Elmont, and Valley Stream — offers bed bugs ample harborage in furniture, baseboards, and upholstered pieces accumulated over decades. Nassau County renters and homeowners alike face this pressure, and the county&apos;s high density of multi-family housing along major corridors means spread between neighboring units in the same building is common in those properties.</p>
            <h3>How We Treat Bed Bugs in Nassau County</h3>
            <ul>
              <li><strong>Heat treatment (120°F+)</strong> — Single-visit elimination that kills all life stages including eggs; ideal for Nassau County homeowners who want a no-chemical solution and same-day re-entry</li>
              <li><strong>Chemical treatment with EPA-registered residuals</strong> — 2–3 visits spaced 2 weeks apart to break the egg cycle; targeted application to mattress seams, box springs, bed frames, and baseboards</li>
              <li><strong>Mattress and box spring encasements</strong> — Installed after treatment to trap any remaining bed bugs and protect sleeping surfaces from re-infestation</li>
              <li><strong>Follow-up inspection</strong> — Scheduled 2–3 weeks post-treatment to confirm elimination and address any remaining activity before it re-establishes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bed Bugs in Nassau County — FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "How do bed bugs spread in Nassau County suburban homes?",
                a: "Bed bugs travel in luggage, on used furniture, and via houseguests who stayed in infested accommodations. In Nassau County, infestations are most commonly introduced after hotel stays, travel through JFK or LaGuardia airports, or purchasing second-hand furniture. Single-family homes can harbor bed bugs for months before activity becomes obvious — routine checking of mattress seams and box springs is key to early detection."
              },
              {
                q: "What is the difference between heat treatment and chemical treatment for bed bugs?",
                a: "Heat treatment raises room temperatures to 120°F or above, killing all bed bug life stages — including eggs — in a single visit, with same-day re-entry. Chemical treatment uses EPA-registered residual products applied to all harborage areas and requires 2–3 visits spaced 2 weeks apart to break the egg cycle. We assess each Nassau County home individually and recommend the best approach based on your situation."
              },
              {
                q: "Do I need to prepare my Nassau County home before bed bug treatment?",
                a: "Yes — preparation is essential for effective treatment. You will need to bag and heat-dry all clothing in affected rooms, reduce clutter around sleeping areas, and vacate treated rooms for the specified re-entry period. Our technician provides a detailed prep checklist before the appointment. Thorough preparation significantly improves treatment outcomes."
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
              <h3 className="font-bold text-gray-900 mb-2">How do I know if I have bed bugs in my Nassau County home?</h3>
              <p className="text-gray-600">Common signs include small reddish-brown bugs in mattress seams, tiny dark spots on sheets, shed exoskeletons near sleeping areas, and unexplained bites in lines or clusters. If you suspect bed bugs, call us for a free estimate.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How many treatments does bed bug elimination take?</h3>
              <p className="text-gray-600">Chemical treatments typically require 2-3 visits spaced 2 weeks apart to break the egg cycle. Heat treatment can eliminate bed bugs in a single visit. We recommend the right approach during the assessment.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you do heat treatment for bed bugs in Nassau County?</h3>
              <p className="text-gray-600">Yes. We offer both heat treatment and chemical treatment. Heat treatment is highly effective and eliminates bed bugs in a single visit without residual chemicals — ideal for families with concerns about products in sleeping areas.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How long before I can return home after bed bug treatment?</h3>
              <p className="text-gray-600">For chemical treatments, re-entry is typically 4-6 hours after treatment. For heat treatment, re-entry is usually the same day once temperatures return to normal — typically within a few hours of completion.</p>
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
