import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Free Pest Inspection Nassau County',
  description: 'Get a free comprehensive pest inspection for your Nassau County home or business. No obligation, no charge. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
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
      "priceRange": "$",
      "openingHours": "Mo-Sa 07:00-19:00",
      "offers": {
        "@type": "Offer",
        "name": "Free Pest Inspection",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Comprehensive pest inspection for Nassau County homes and businesses — no charge, no obligation."
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does the free pest inspection cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our free inspection covers all major pest concerns: termites (including subterranean colonies and wood damage), rodent entry points and activity signs, bed bugs in sleeping areas, ant harborage sites, cockroach activity, and any other pest signs relevant to your property. You receive a full written report with our findings."
          }
        },
        {
          "@type": "Question",
          "name": "Is there really no charge for the pest inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Correct — the inspection is completely free with no obligation to purchase any service. We believe Nassau County homeowners deserve honest information about their pest situation before making any decisions. Our report is yours to keep regardless of whether you choose to proceed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a pest inspection take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical residential inspection takes 45-90 minutes depending on the size of your home and what we find. Commercial inspections may take longer. We are thorough because early detection saves Nassau County homeowners significant costs down the road."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be home during the inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recommend you or an authorized adult be present during the inspection. This allows our technician to point out findings in real time, answer your questions, and ensure you have access to all areas — including attics, basements, and crawl spaces — that need to be checked."
          }
        }
      ]
    }
  ]
};

export default function FreePestInspectionTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Free Pest Inspection Nassau County — Book Online Today</h1>
          <p className="text-xl mb-8">Comprehensive, no-obligation pest inspection for Nassau County homes and businesses — family-owned since 1982</p>
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
          <h2>What Our Free Inspection Covers</h2>
          <p>
            A Liberty Pest Pros inspection is a comprehensive walkthrough of your Nassau County property — not a quick glance and a sales pitch. Our licensed technicians examine every area where pests are likely to hide, enter, or cause damage:
          </p>
          <ul>
            <li><strong>Termites:</strong> We probe accessible wood in your basement, crawl space, and perimeter for subterranean termite galleries and damage. Nassau County&apos;s coastal soil conditions make termite pressure a year-round reality, especially in homes built before 1970.</li>
            <li><strong>Rodents:</strong> We check foundation gaps, utility penetrations, garage seals, and attic vents for rodent entry points and activity signs — droppings, gnaw marks, grease trails, and nesting material.</li>
            <li><strong>Bed bugs:</strong> We inspect mattress seams, box springs, bed frames, and nearby furniture for bed bug indicators, including live bugs, shed skins, and excrement staining.</li>
            <li><strong>Ants:</strong> We identify ant species, trailing patterns, and entry points — carpenter ant galleries in wood framing, pavement ant nests under slabs, and odorous house ants in wall voids.</li>
          </ul>
          <h2>Why Inspections Matter — Especially Before Buying or Selling</h2>
          <p>
            Nassau County&apos;s real estate market moves fast, and pest problems can derail a sale or cost buyers thousands in unexpected remediation. A professional pest inspection before listing — or before closing on a purchase — gives you complete information before you commit. Our written inspection report is a valuable document for both buyers and sellers.
          </p>
          <p>
            For homeowners not buying or selling, regular inspections catch problems early when they&apos;re cheaper and easier to treat. A termite colony caught at 12 months costs far less to treat than one discovered at 36 months with structural damage. Rodent exclusion identified before a full infestation saves significant time and money.
          </p>
          <h2>No Obligation — Honest Findings, Your Decision</h2>
          <p>
            We believe Nassau County homeowners deserve honest pest information without pressure. Our free inspection report belongs to you regardless of your decision. If we find issues, we&apos;ll explain your options clearly. If everything looks clean, we&apos;ll tell you that too — and let you know what to watch for going forward.
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
              <h3 className="font-bold text-gray-900 mb-2">What does the free pest inspection cover?</h3>
              <p className="text-gray-600">Our free inspection covers termites, rodent entry points, bed bugs, ant harborage sites, cockroach activity, and all other major pest concerns for your Nassau County property. You receive a full written report of our findings.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is there really no charge for the pest inspection?</h3>
              <p className="text-gray-600">Correct — the inspection is completely free with no obligation to purchase any service. Our report is yours to keep regardless of whether you choose to proceed with treatment.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How long does a pest inspection take?</h3>
              <p className="text-gray-600">A typical residential inspection takes 45-90 minutes depending on the size of your home. We are thorough because early detection saves Nassau County homeowners significant costs down the road.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to be home during the inspection?</h3>
              <p className="text-gray-600">Yes, we recommend you or an authorized adult be present. This allows our technician to point out findings in real time and ensure access to all areas — including attics, basements, and crawl spaces.</p>
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
