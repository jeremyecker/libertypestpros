import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Pest Control Near Me | Nassau County',
  description: 'Looking for pest control near me in Nassau County? Liberty Pest Pros has served Long Island families since 1982. Same-day service, licensed & insured. Call (516) 763-4600.',

  openGraph: {
    title: 'Pest Control Near Me | Nassau County',
    description: 'Looking for pest control near me in Nassau County? Liberty Pest Pros has served Long Island families since 1982. Same-day service, licensed & insured. Call (516) 763-4600.',
    url: `${SITE_URL}/pest-control-near-me`,
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
        "lowPrice": "125",
        "highPrice": "350"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast can you arrive at my Nassau County home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day service throughout Nassau County. Call before noon on most days and we can typically have a technician at your door that afternoon. We dispatch from right here on Long Island."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve my town in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve all 70+ communities in Nassau County, from Hempstead and Freeport on the South Shore to Great Neck and Manhasset on the North Shore. If you live in Nassau County, we cover you."
          }
        },
        {
          "@type": "Question",
          "name": "Are your pest control treatments family-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We use targeted, family-friendly products applied with precision. Most treatments allow re-entry within a few hours. Every technician is trained in Integrated Pest Management (IPM) to use the right product in the right place."
          }
        },
        {
          "@type": "Question",
          "name": "How much does pest control cost in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most standard pest control services start at $125 and range up to $350 depending on the pest, property size, and treatment type. We provide a free, no-obligation quote before any work begins."
          }
        }
      ]
    }
  ]
};

export default function PestControlNearMeTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Pest Control Near Me — Nassau County, Long Island</h1>
          <p className="text-xl mb-8">Family-owned since 1982 — serving all 70+ Nassau County communities with same-day pest control</p>
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
          <h2>Nassau County&apos;s Unique Pest Profile</h2>
          <p>
            Nassau County presents a pest environment unlike anywhere else on the East Coast. The South Shore coastline — from Long Beach and Lido Beach to Oceanside and Point Lookout — creates humidity conditions that accelerate wood decay, giving subterranean termites the ideal environment to thrive. Salt air, aging infrastructure, and crawl spaces in older homes from the 1940s and 50s build-out of Levittown, Freeport, and Hempstead all contribute to persistent termite pressure that Nassau homeowners deal with year-round.
          </p>
          <p>
            Rodent problems in Nassau County are equally complex. As older homes age, gaps in foundations, deteriorating soffits, and utility penetrations create entry points that mice exploit — especially as temperatures drop each fall. Nassau&apos;s dense suburban neighborhoods mean mice and rats travel easily between properties, making individual treatment ineffective without a broader exclusion strategy.
          </p>
          <p>
            In the suburban yards of Great Neck, Garden City, and Syosset, carpenter ants and pavement ants are among the most common complaints. Nassau&apos;s mature tree canopy provides nesting habitat for carpenter ants, while the well-irrigated lawns and garden beds that Nassau homeowners prize attract multiple ant species throughout the spring and summer.
          </p>
          <p>
            When you search &ldquo;pest control near me&rdquo; in Nassau County, you need a company that understands these local dynamics — not a national franchise reading from a script. Liberty Pest Pros has been Nassau County&apos;s family-owned pest control expert since 1982. Our technicians live and work in Nassau County. They know the pest patterns in your specific neighborhood, the construction styles that create vulnerabilities in your home, and the seasonal timing of Nassau County pest activity.
          </p>
          <p>
            We offer a full range of pest control services with same-day availability, licensed and insured technicians, and a satisfaction guarantee. If pests come back between treatments, so do we — at no extra charge.
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
              <h3 className="font-bold text-gray-900 mb-2">How fast can you arrive at my Nassau County home?</h3>
              <p className="text-gray-600">We offer same-day service throughout Nassau County. Call before noon on most days and we can typically have a technician at your door that afternoon. We dispatch from right here on Long Island.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you serve my town in Nassau County?</h3>
              <p className="text-gray-600">Yes — we serve all 70+ communities in Nassau County, from Hempstead and Freeport on the South Shore to Great Neck and Manhasset on the North Shore. If you live in Nassau County, we cover you.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Are your pest control treatments family-friendly?</h3>
              <p className="text-gray-600">Absolutely. We use targeted, family-friendly products applied with precision. Most treatments allow re-entry within a few hours. Every technician is trained in Integrated Pest Management (IPM) to use the right product in the right place.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How much does pest control cost in Nassau County?</h3>
              <p className="text-gray-600">Most standard pest control services start at $125 and range up to $350 depending on the pest, property size, and treatment type. We provide a free, no-obligation quote before any work begins.</p>
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
