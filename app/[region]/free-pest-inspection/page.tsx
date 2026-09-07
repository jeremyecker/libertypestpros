import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Free Phone Pest Assessment Nassau County',
  description: "Free phone assessment for residential pest problems in Nassau County. Call Liberty Pest Pros at (516) 763-4600 for a clear price before any work begins.",

  openGraph: {
    title: 'Free Phone Pest Assessment Nassau County',
    description: "Free phone assessment for residential pest problems in Nassau County. Call Liberty Pest Pros at (516) 763-4600 for a clear price before any work begins.",
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
          "name": "What does the free phone assessment cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The free phone assessment covers residential pest problems including termites, rodents, ants, roaches, wasps, and other common pests. A technician or office staff member talks through what you have seen, asks questions about your property and the activity, and gives you a price on the call. The assessment does not cover bed bugs, which require a paid on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "Is there really no charge for the phone assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no charge for the phone assessment. Bed bug inspections and termite or wood-destroying insect inspections for real-estate transactions are paid services, and the price is given on the phone assessment call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the phone assessment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The phone assessment takes as long as it needs to. We ask questions until we have a clear picture of the problem and can give you an accurate price."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I have ready for the call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Be ready to describe what you have seen, where you have seen it, when the activity started, and whether you have had pest work done before. If you know the age of your home, the type of foundation, and whether you have a crawl space or basement, that helps as well."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free on-site assessments for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Commercial properties including restaurants, offices, multi-family buildings, healthcare facilities, schools, and food-processing sites can book a free on-site assessment followed by a written proposal with price and scope of work."
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
          <h1 className="text-4xl font-bold mb-4">Free Phone Assessment for Pest Problems in Nassau County</h1>
          <p className="text-xl mb-8">Talk to a technician, describe the problem, and get a clear price before any work is scheduled.</p>
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
          <h2>What the Free Phone Assessment Covers</h2>
          <p>
            The free phone assessment gives you a clear picture and a clear price before any money changes hands. A technician or office staff member talks through the problem with you, asks about your property and the pest activity you have seen, and provides a price on the call. When you decide to book treatment, our technicians—licensed or working under the direct supervision of a licensed applicator—examine the property during the treatment visit.
          </p>
          <ul>
            <li><strong>Termites:</strong> We ask about mud tubes, wood damage, swarmers, and moisture around the foundation; at the treatment visit, technicians probe suspect wood and inspect crawl spaces and basements.</li>
            <li><strong>Rodents:</strong> We ask about droppings, gnaw marks, noise in walls or ceilings, and exterior gaps; at the treatment visit, technicians examine foundation cracks, utility penetrations, and attic access points.</li>
            <li><strong>Bed bugs:</strong> Bed bugs are the exception—we offer a paid on-site inspection with findings explained verbally on the spot, not over the phone.</li>
            <li><strong>Ants:</strong> We ask about trails, nesting sites, moisture damage, and the type of ant; at the treatment visit, technicians inspect trim, sills, and wood where moisture has been present.</li>
          </ul>
          <h2>Buying or Selling a Home in Nassau County</h2>
          <p>
            The real-estate market on Long Island moves fast, and pest problems can derail a closing. The paid termite and wood-destroying insect inspection produces the written WDI report that buyers, sellers, and lenders rely on to complete the transaction. It is the only inspection we perform that comes with a written report.
          </p>
          <p>
            For homeowners who are not buying or selling, the free phone assessment is the starting point. Early treatment protects your property and costs far less than waiting until damage spreads or an infestation takes hold.
          </p>
          <h2>No Obligation and Honest Answers</h2>
          <p>
            The phone assessment is a conversation, not a sales pitch. If what you describe does not sound like a job that needs a professional, we will tell you. You get clear answers, a straightforward price, and the choice to move forward or not—no pressure and no follow-up calls.
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
              <h3 className="font-bold text-gray-900 mb-2">What does the free phone assessment cover?</h3>
              <p className="text-gray-600">The free phone assessment covers residential pest problems including termites, rodents, ants, roaches, wasps, and other common pests. A technician or office staff member talks through what you have seen, asks questions about your property and the activity, and gives you a price on the call. The assessment does not cover bed bugs, which require a paid on-site inspection.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Is there really no charge for the phone assessment?</h3>
              <p className="text-gray-600">There is no charge for the phone assessment. Bed bug inspections and termite or wood-destroying insect inspections for real-estate transactions are paid services, and the price is given on the phone assessment call.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How long does the phone assessment take?</h3>
              <p className="text-gray-600">The phone assessment takes as long as it needs to. We ask questions until we have a clear picture of the problem and can give you an accurate price.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What information should I have ready for the call?</h3>
              <p className="text-gray-600">Be ready to describe what you have seen, where you have seen it, when the activity started, and whether you have had pest work done before. If you know the age of your home, the type of foundation, and whether you have a crawl space or basement, that helps as well.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer free on-site assessments for businesses?</h3>
              <p className="text-gray-600">Yes. Commercial properties including restaurants, offices, multi-family buildings, healthcare facilities, schools, and food-processing sites can book a free on-site assessment followed by a written proposal with price and scope of work.</p>
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
