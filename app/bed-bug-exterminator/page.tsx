import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Bed Bug Exterminator Nassau County',
  description: 'Nassau County bed bug specialists — heat treatment and chemical options with guaranteed results. Family-owned since 1982. Call Liberty Pest Pros: (516) 763-4600.',

  openGraph: {
    title: 'Bed Bug Exterminator Nassau County',
    description: 'Nassau County bed bug specialists — heat treatment and chemical options with guaranteed results. Family-owned since 1982. Call Liberty Pest Pros: (516) 763-4600.',
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
          "name": "How do I know if I have bed bugs in my Nassau County home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs include small reddish-brown bugs in mattress seams and box springs, tiny dark spots (excrement) on sheets or mattress edges, shed exoskeletons near sleeping areas, and unexplained bites in lines or clusters on your skin. If you suspect bed bugs, call us for a free inspection before the problem spreads."
          }
        },
        {
          "@type": "Question",
          "name": "How many treatments does bed bug elimination take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chemical treatments typically require 2-3 visits spaced 2 weeks apart to break the egg cycle. Heat treatment can eliminate bed bugs in a single treatment by raising room temperatures to levels that kill all life stages. We recommend the right approach based on your situation during the inspection."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do heat treatment for bed bugs in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer both heat treatment and chemical treatment for bed bugs. Heat treatment is highly effective and eliminates bed bugs in a single visit without chemicals — ideal for families concerned about products in sleeping areas. We will walk you through both options and help you choose the best fit."
          }
        },
        {
          "@type": "Question",
          "name": "How long before I can return home after bed bug treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For chemical treatments, you can typically return 4-6 hours after treatment once the home is ventilated. For heat treatment, re-entry is usually the same day once temperatures return to normal — typically within a few hours of treatment completion."
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
          <p className="text-xl mb-8">Nassau County bed bug specialists — heat treatment and chemical options, guaranteed results since 1982</p>
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
            Nassau County has seen a significant increase in bed bug reports over the past decade — and it&apos;s not surprising given the county&apos;s geography and demographics. The dense communities of Hempstead, Freeport, and Long Beach, the apartment complexes along major corridors, and the constant travel through JFK and LaGuardia airports create ideal conditions for bed bug spread. Bed bugs travel in luggage, on clothing, and in used furniture — and once they get into a home, they spread quickly between units in multifamily buildings.
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
          <h2>The Inspection Process</h2>
          <p>
            Every bed bug engagement begins with a thorough inspection. Our technician will examine all sleeping areas, furniture, baseboards, and nearby clutter to map the extent of the infestation. We&apos;ll provide you with an honest assessment of treatment options, expected timelines, and what to expect during and after treatment — all before you commit to anything.
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
              <h3 className="font-bold text-gray-900 mb-2">How do I know if I have bed bugs in my Nassau County home?</h3>
              <p className="text-gray-600">Common signs include small reddish-brown bugs in mattress seams, tiny dark spots on sheets, shed exoskeletons near sleeping areas, and unexplained bites in lines or clusters. If you suspect bed bugs, call us for a free inspection.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How many treatments does bed bug elimination take?</h3>
              <p className="text-gray-600">Chemical treatments typically require 2-3 visits spaced 2 weeks apart to break the egg cycle. Heat treatment can eliminate bed bugs in a single visit. We recommend the right approach during the inspection.</p>
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
