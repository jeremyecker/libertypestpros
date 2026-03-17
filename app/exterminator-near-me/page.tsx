import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: 'Exterminator Near Me | Nassau County',
  description: 'Licensed Nassau County exterminators with same-day service available. Liberty Pest Pros has served Long Island since 1982. Trusted, certified, and guaranteed. Call (516) 763-4600.',

  openGraph: {
    title: 'Exterminator Near Me | Nassau County',
    description: 'Licensed Nassau County exterminators with same-day service available. Liberty Pest Pros has served Long Island since 1982. Trusted, certified, and guaranteed. Call (516) 763-4600.',
    url: `${SITE_URL}/exterminator-near-me`,
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
        "highPrice": "400"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are you a licensed exterminator in New York?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Liberty Pest Pros holds all required New York State Department of Environmental Conservation (DEC) pesticide applicator licenses. Our technicians are fully licensed, insured, and trained in the latest Integrated Pest Management (IPM) protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a service guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we stand behind every treatment. If pests return between scheduled services, we come back at no extra charge. Our satisfaction guarantee is backed by over 40 years of serving Nassau County."
          }
        },
        {
          "@type": "Question",
          "name": "What pests do Nassau County exterminators handle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle all common Nassau County pests: termites, rodents, bed bugs, ants, cockroaches, mosquitoes, ticks, wasps, spiders, and more. We also handle wildlife exclusion and commercial pest programs."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you come to my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day service throughout Nassau County. Call us in the morning and we can typically schedule a technician for that same day. For urgent situations we prioritize your call."
          }
        }
      ]
    }
  ]
};

export default function ExterminatorNearMeTopLevel() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#1B3D6F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Exterminator Near Me — Nassau County Pest Control Experts</h1>
          <p className="text-xl mb-8">Licensed Nassau County exterminators — same-day service available from Rockville Centre to Great Neck</p>
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
          <h2>What to Look for in a Local Nassau County Exterminator</h2>
          <p>
            Searching for an &ldquo;exterminator near me&rdquo; in Nassau County returns dozens of results — but not all exterminators are equal. Before you hire anyone to treat your home or business, there are several critical factors to consider.
          </p>
          <p>
            <strong>Licensing and credentials matter.</strong> In New York State, pest control companies and technicians must hold a valid pesticide applicator license issued by the Department of Environmental Conservation (DEC). Liberty Pest Pros maintains all required licensing and carries full liability insurance. Every technician who enters your home is certified and background-checked.
          </p>
          <p>
            <strong>Local knowledge is irreplaceable.</strong> Nassau County pest pressure is shaped by its coastal geography, aging housing stock, and dense suburban layout. An exterminator who works in Nassau every day understands termite activity near the South Shore wetlands, the rodent entry patterns common in Levittown&apos;s post-war construction, and the ant pressure that builds in the irrigated lawns of Roslyn and Manhasset. Liberty Pest Pros has been operating exclusively in Nassau County since 1982 — that local expertise is built into every service call.
          </p>
          <p>
            <strong>Coverage from Rockville Centre to Great Neck.</strong> We serve Nassau County end-to-end — the South Shore communities like Rockville Centre, Oceanside, Baldwin, and Merrick, through the mid-island towns of Hempstead, East Meadow, Levittown, and Hicksville, all the way to the North Shore Gold Coast communities of Manhasset, Great Neck, Oyster Bay, and Glen Cove. No matter where in Nassau you are, our technicians know your neighborhood.
          </p>
          <p>
            <strong>Transparent pricing with a guarantee.</strong> We believe in upfront, honest quotes. You&apos;ll know exactly what you&apos;re paying before any work begins. And every treatment is backed by our satisfaction guarantee — if pests come back between services, we return at no extra charge.
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
              <h3 className="font-bold text-gray-900 mb-2">Are you a licensed exterminator in New York?</h3>
              <p className="text-gray-600">Yes. Liberty Pest Pros holds all required New York State DEC pesticide applicator licenses. Our technicians are fully licensed, insured, and trained in the latest IPM protocols.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer a service guarantee?</h3>
              <p className="text-gray-600">Yes — we stand behind every treatment. If pests return between scheduled services, we come back at no extra charge. Our satisfaction guarantee is backed by over 40 years of serving Nassau County.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">What pests do Nassau County exterminators handle?</h3>
              <p className="text-gray-600">We handle all common Nassau County pests: termites, rodents, bed bugs, ants, cockroaches, mosquitoes, ticks, wasps, spiders, and more. We also handle wildlife exclusion and commercial pest programs.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you come to my home?</h3>
              <p className="text-gray-600">We offer same-day service throughout Nassau County. Call us in the morning and we can typically schedule a technician for that same day. For urgent situations we prioritize your call.</p>
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
