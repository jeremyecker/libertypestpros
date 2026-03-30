import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Free Pest Control Estimate Nassau County, Long Island',
  description: 'Get a free pest control estimate for your Nassau County home or business. No obligation, no charge. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',

  openGraph: {
    title: 'Free Pest Control Estimate Nassau County, Long Island',
    description: 'Get a free pest control estimate for your Nassau County home or business. No obligation, no charge. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
    url: `${SITE_URL}/free-pest-inspection`,
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
      "priceRange": "$",
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
        "@type": "Offer",
        "name": "Free Pest Control Estimate",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Comprehensive pest assessment for Nassau County homes and businesses — no charge, no obligation."
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does the free pest estimate cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our free estimate visit covers all major pest concerns: termites (including subterranean colonies and wood damage), rodent entry points and activity signs, bed bugs in sleeping areas, ant harborage sites, cockroach activity, and any other pest signs relevant to your Nassau County property. You receive a full written report with our findings and a clear price before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Is there really no charge for the pest estimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Correct — the estimate visit is completely free with no obligation to purchase any service. We believe Nassau County homeowners deserve honest information about their pest situation before making any decisions. Our written report is yours to keep regardless of whether you choose to proceed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a pest estimate visit take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical residential estimate visit takes 45-90 minutes depending on the size of your Nassau County home and what we find. Commercial properties may take longer. We are thorough because early detection saves homeowners significant costs down the road."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be home during the estimate visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recommend you or an authorized adult be present during the visit. This allows our technician to point out findings in real time, answer your questions on the spot, and ensure access to all areas — including attics, basements, and crawl spaces — that need to be checked."
          }
        }
      ]
    }
  ]
};

export default function FreePestEstimateTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get a Free Pest Estimate in Nassau County</h1>
          <p className="text-xl mb-8">Comprehensive, no-obligation pest assessment for Nassau County homes and businesses — family-owned since 1982</p>
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
          <h2>What Our Free Estimate Covers</h2>
          <p>
            A Liberty Pest Pros estimate visit is a comprehensive walkthrough of your Nassau County property — not a quick glance and a sales pitch. Our licensed technicians examine every area where pests are likely to hide, enter, or cause damage:
          </p>
          <ul>
            <li><strong>Termites:</strong> We probe accessible wood in your basement, crawl space, and perimeter for subterranean termite galleries and damage. Nassau County&apos;s coastal soil conditions make termite pressure a year-round reality, especially in homes built before 1970.</li>
            <li><strong>Rodents:</strong> We check foundation gaps, utility penetrations, garage seals, and attic vents for rodent entry points and activity signs — droppings, gnaw marks, grease trails, and nesting material.</li>
            <li><strong>Bed bugs:</strong> We examine mattress seams, box springs, bed frames, and nearby furniture for bed bug indicators, including live bugs, shed skins, and excrement staining.</li>
            <li><strong>Ants:</strong> We identify ant species, trailing patterns, and entry points — carpenter ant galleries in wood framing, pavement ant nests under slabs, and odorous house ants in wall voids.</li>
          </ul>
          <h2>Why a Pest Assessment Matters — Especially Before Buying or Selling</h2>
          <p>
            Nassau County&apos;s real estate market moves fast, and pest problems can derail a sale or cost buyers thousands in unexpected remediation. A professional pest assessment before listing — or before closing on a purchase — gives you complete information before you commit. Our written report is a valuable document for both buyers and sellers.
          </p>
          <p>
            For homeowners not buying or selling, regular assessments catch problems early when they&apos;re cheaper and easier to treat. A termite colony caught at 12 months costs far less to treat than one discovered at 36 months with structural damage. Rodent exclusion identified early saves significant time and money compared to addressing a full infestation.
          </p>
          <h2>No Obligation — Honest Findings, Your Decision</h2>
          <p>
            We believe Nassau County homeowners deserve honest pest information without pressure. Our written report belongs to you regardless of your decision. If we find issues, we&apos;ll explain your options clearly. If everything looks clean, we&apos;ll tell you that too — and let you know what to watch for going forward.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mb-10 mt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Pest Estimate in Nassau County, Long Island</h2>
          <div className="prose prose-lg max-w-none">
            <p>Nassau County homeowners face a range of pest pressures specific to Long Island&apos;s suburban environment — subterranean termites active in the sandy coastal soils, Norway rats and house mice entering older homes through aging foundation gaps, carpenter ants nesting in moisture-damaged wood in mature trees and wood-frame structures, and bed bugs introduced through travel and second-hand furniture. A free estimate visit from Liberty Pest Pros gives you a clear picture of what is actually present at your specific property before any money changes hands.</p>
            <p>Our free estimate is not a high-pressure sales visit — it is a genuine technical assessment by a licensed Nassau County pest control technician. We will identify active infestations, entry points, harborage areas, and conducive conditions, and we will give you a written report with our findings. You then decide whether to move forward with treatment. There is no obligation, no follow-up pressure, and no expiration on the estimate.</p>
            <h3>What Happens During a Free Pest Estimate Visit</h3>
            <ul>
              <li><strong>Exterior perimeter walk</strong> — Foundation inspection for cracks and gaps, utility penetrations, wood-to-soil contact, moisture sources, and signs of rodent or ant activity around the home</li>
              <li><strong>Interior assessment</strong> — Kitchen, bathrooms, basement, and attic checked for pest activity, entry points, and conducive conditions specific to Nassau County homes</li>
              <li><strong>Written findings report</strong> — Technician documents all findings with photos and notes; you receive this report regardless of your treatment decision</li>
              <li><strong>Clear pricing before any work</strong> — If treatment is recommended, you receive a firm price before anything is scheduled or started</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Pest Estimate in Nassau County — FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What does the free pest estimate cover?",
                a: "Our free estimate visit covers termites, rodent entry points and activity, bed bugs in sleeping areas, ant harborage sites, cockroach activity, and all other major pest concerns for your Nassau County property. You receive a full written report of our findings and a price quote before any work begins."
              },
              {
                q: "Is there really no charge for the pest estimate?",
                a: "Correct — the estimate visit is completely free with no obligation to purchase any service. Our written report is yours to keep regardless of whether you choose to proceed with treatment. We believe Nassau County homeowners deserve honest information before making any decisions."
              },
              {
                q: "How long does a pest estimate visit take in Nassau County?",
                a: "A typical residential estimate visit takes 45–90 minutes depending on the size of your home and what we find. We are thorough because early detection of termites, rodents, and other pests saves Nassau County homeowners significant costs down the road."
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
              <h3 className="font-bold text-gray-900 mb-2">What does the free pest estimate cover?</h3>
              <p className="text-gray-600">Our free estimate covers termites, rodent entry points, bed bugs, ant harborage sites, cockroach activity, and all other major pest concerns for your Nassau County property. You receive a full written report of our findings.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is there really no charge for the pest estimate?</h3>
              <p className="text-gray-600">Correct — the estimate visit is completely free with no obligation to purchase any service. Our report is yours to keep regardless of whether you choose to proceed with treatment.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How long does a pest estimate visit take?</h3>
              <p className="text-gray-600">A typical residential visit takes 45-90 minutes depending on the size of your home. We are thorough because early detection saves Nassau County homeowners significant costs down the road.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to be home during the estimate visit?</h3>
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
