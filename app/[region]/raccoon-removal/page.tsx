import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { REGIONS } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Raccoon Removal Nassau County, NY',
  description: 'Raccoon removal Nassau County, NY. Humane trapping, attic exclusion, entry point sealing. Family-owned since 1982. Call (516) 763-4600.',
  openGraph: {
    title: 'Raccoon Removal Nassau County, NY | Liberty Pest Pros',
    description: 'Raccoon removal Nassau County, NY. Humane trapping, attic exclusion, entry point sealing. Family-owned since 1982. Call (516) 763-4600.',
    url: 'https://libertypestpros.com/nassau/raccoon-removal',
    type: 'website',
    locale: 'en_US',
    siteName: 'Liberty Pest Pros',
    images: ['/og-image.png'],
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
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Nassau County, New York"
      },
      "description": "Professional raccoon removal in Nassau County, NY. Humane trapping, attic exclusion, and entry point sealing. Family-owned since 1982.",
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
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if I have raccoons in my attic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs of raccoons in the attic include loud thumping or scratching sounds at night (raccoons are nocturnal), chirping or crying sounds if a mother has young, visible damage to soffits, fascia, or roof edges where they forced entry, insulation scattered in the attic, and a strong musky odor from raccoon latrines. If you notice any of these signs, it&apos;s important to act quickly — raccoons can cause significant structural and insulation damage the longer they remain."
          }
        },
        {
          "@type": "Question",
          "name": "How do raccoons get into Nassau County homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Raccoons are powerful and dexterous animals that can pry open rotted fascia boards, tear back soffits, push through ridge vents, and even enlarge gaps around chimneys and pipes. Nassau County&apos;s mature suburban tree canopy gives raccoons easy roof access — large overhanging branches act as highways directly to your roofline. Homes with older roofing materials or minor existing damage are especially vulnerable. A professional inspection identifies all actual and potential entry points so every one can be sealed after removal."
          }
        },
        {
          "@type": "Question",
          "name": "Is raccoon removal dangerous? Can I do it myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DIY raccoon removal carries real risks. Raccoons can carry rabies and raccoon roundworm (Baylisascaris procyonis), both of which pose serious health hazards to humans and pets. A cornered or frightened raccoon will bite and scratch. If a mother raccoon has young in your attic, she will aggressively defend them. Professional removal ensures the animals are handled safely and humanely, and that all waste is properly cleaned up to eliminate disease risk. In New York, raccoons are also regulated wildlife — handling and transport require appropriate licensing."
          }
        },
        {
          "@type": "Question",
          "name": "How long does raccoon removal take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The removal process typically takes 1-2 weeks from initial inspection to final exclusion. The first visit involves a full inspection and trapping setup. Traps are checked and reset over several days until the raccoon (and any young) are removed. Once we&apos;re confident all animals are gone, we seal every entry point with durable, raccoon-proof materials. If young are present, timing may need to be adjusted to ensure they can be safely removed with the mother. Attic cleanup and restoration can be scheduled once exclusion is complete."
          }
        },
        {
          "@type": "Question",
          "name": "How much does raccoon removal cost in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of raccoon removal in Nassau County depends on the size of the infestation, the number of entry points to be sealed, and whether attic restoration is needed. A basic removal and exclusion job typically starts in the several hundred dollar range. Extensive damage repair and attic sanitization increase the cost. We provide detailed, upfront quotes after inspection so there are no surprises. Call (516) 763-4600 for a free consultation."
          }
        }
      ]
    }
  ]
};

const nassauRegion = REGIONS.find((r: { slug: string }) => r.slug === 'nassau')!;
const nassauTowns = nassauRegion.towns.map((t: string) => ({
  name: t,
  slug: t.toLowerCase().replace(/\s+/g, '-'),
}));

const services = [
  { name: 'Raccoon Inspection', icon: '🔍', desc: 'Identify entry points and activity areas' },
  { name: 'Humane Trapping', icon: '🪤', desc: 'DOT-compliant live trapping methods' },
  { name: 'Attic Exclusion', icon: '🏠', desc: 'Permanent seal-out after removal' },
  { name: 'Entry Point Sealing', icon: '🔒', desc: 'Raccoon-proof all access points' },
  { name: 'Sanitization & Cleanup', icon: '🧹', desc: 'Feces removal and decontamination' },
  { name: 'Prevention Consultation', icon: '🛡️', desc: 'Long-term exclusion strategies' },
];

const faqs = [
  {
    q: "How do I know if I have raccoons in my attic?",
    a: "Common signs of raccoons in the attic include loud thumping or scratching sounds at night (raccoons are nocturnal), chirping or crying sounds if a mother has young, visible damage to soffits, fascia, or roof edges where they forced entry, insulation scattered in the attic, and a strong musky odor from raccoon latrines. If you notice any of these signs, it&apos;s important to act quickly — raccoons can cause significant structural and insulation damage the longer they remain."
  },
  {
    q: "How do raccoons get into Nassau County homes?",
    a: "Raccoons are powerful and dexterous animals that can pry open rotted fascia boards, tear back soffits, push through ridge vents, and even enlarge gaps around chimneys and pipes. Nassau County&apos;s mature suburban tree canopy gives raccoons easy roof access — large overhanging branches act as highways directly to your roofline. Homes with older roofing materials or minor existing damage are especially vulnerable. A professional inspection identifies all actual and potential entry points so every one can be sealed after removal."
  },
  {
    q: "Is raccoon removal dangerous? Can I do it myself?",
    a: "DIY raccoon removal carries real risks. Raccoons can carry rabies and raccoon roundworm (Baylisascaris procyonis), both of which pose serious health hazards to humans and pets. A cornered or frightened raccoon will bite and scratch. If a mother raccoon has young in your attic, she will aggressively defend them. Professional removal ensures the animals are handled safely and humanely, and that all waste is properly cleaned up to eliminate disease risk. In New York, raccoons are also regulated wildlife — handling and transport require appropriate licensing."
  },
  {
    q: "How long does raccoon removal take?",
    a: "The removal process typically takes 1-2 weeks from initial inspection to final exclusion. The first visit involves a full inspection and trapping setup. Traps are checked and reset over several days until the raccoon (and any young) are removed. Once we&apos;re confident all animals are gone, we seal every entry point with durable, raccoon-proof materials. If young are present, timing may need to be adjusted to ensure they can be safely removed with the mother. Attic cleanup and restoration can be scheduled once exclusion is complete."
  },
  {
    q: "How much does raccoon removal cost in Nassau County?",
    a: "The cost of raccoon removal in Nassau County depends on the size of the infestation, the number of entry points to be sealed, and whether attic restoration is needed. A basic removal and exclusion job typically starts in the several hundred dollar range. Extensive damage repair and attic sanitization increase the cost. We provide detailed, upfront quotes after inspection so there are no surprises. Call (516) 763-4600 for a free consultation."
  }
];

export default function RaccoonRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/nassau/" className="hover:text-brand-primary">Nassau County</Link>
          {' → '}
          <span className="text-gray-900">Raccoon Removal</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Raccoon Removal in Nassau County, NY
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Raccoon Removal Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4">
            Raccoon problems are a fact of life in Nassau County. The county&apos;s mature suburban tree canopy — the towering oaks and maples lining neighborhoods from Syosset to Rockville Centre — gives raccoons effortless roof access, and older housing stock in communities like Hempstead, Freeport, and Baldwin often has the vulnerable soffits and fascia boards that raccoons exploit for attic entry. Once inside, a raccoon family can cause thousands of dollars in insulation damage, structural harm, and contamination from latrines in just weeks. Nassau County&apos;s proximity to Hempstead Lake State Park, Massapequa Preserve, and other wildlife corridors means raccoon populations are large and persistent — pressure that doesn&apos;t let up seasonally. Liberty Pest Pros has handled raccoon removal throughout Nassau County since 1982. Our licensed trappers use DOT-compliant, humane methods, seal every entry point with raccoon-proof materials, and offer complete attic sanitization and restoration services. We know Nassau County&apos;s raccoon behavior, we know the structures, and we know how to solve the problem permanently.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Licensed & DOT-compliant trappers</span>
            <span>✅ Humane removal methods</span>
            <span>✅ Attic exclusion & restoration</span>
            <span>✅ Nassau County specialists</span>
          </div>
        </div>

        {/* Signs of raccoons */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You Have Raccoons in Your Nassau County Home</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Loud thumping, rolling, or scratching sounds from the attic at night</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Chirping or crying sounds — a sign a mother raccoon has young in the attic</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Visible damage to soffits, fascia, or roof vents at the roofline</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Overturned or raided garbage cans consistently, especially at night</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Strong musky odor coming from the attic — raccoon latrine areas</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Raccoon tracks (distinctive hand-like prints) on roof, deck, or around the house</span></li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Raccoon Removal Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {services.map(s => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Why Liberty */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Liberty Pest Pros for Raccoon Removal</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Raccoon removal is not a job for amateurs. These are large, strong, intelligent animals that can be aggressive when cornered or protecting young — and they carry rabies and roundworm that pose real health risks to your family. Liberty Pest Pros brings over 40 years of experience and proper licensing to every raccoon removal job in Nassau County.
          </p>
          <p>
            <strong>Licensed trappers.</strong> Our technicians are trained and licensed wildlife removal operators operating in full compliance with New York State Department of Transportation and DEC regulations. Every raccoon is handled humanely and relocated appropriately.
          </p>
          <p>
            <strong>DOT-compliant exclusion.</strong> After removal, we seal every entry point using commercial-grade, raccoon-proof materials — heavy-gauge hardware cloth, galvanized steel flashing, and professional sealants. We don&apos;t patch holes with foam or caulk that a raccoon can re-open in minutes.
          </p>
          <p>
            <strong>Attic restoration services.</strong> Raccoon latrines in attics can harbor dangerous pathogens. We offer complete attic cleanout — removing contaminated insulation, sanitizing the space with enzyme-based disinfectants, and coordinating insulation replacement — so your home is fully restored after removal.
          </p>
          <p>
            <strong>Guaranteed work.</strong> We stand behind every exclusion. If raccoons re-enter through a point we sealed, we return and fix it at no additional charge.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Remove Raccoons from Your Nassau County Home</h2>
          <p className="text-blue-100 mb-4">Humane trapping, attic exclusion, and permanent seal-out. Same-day consultations available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/nassau/contact/"
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15167634600"
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 (516) 763-4600
            </a>
          </div>
        </div>

        {/* Areas Served */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Raccoon Removal Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We provide raccoon removal throughout all Nassau County communities:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/raccoon-removal/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Raccoon Removal</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="text-sm text-gray-500 flex flex-wrap gap-3">
          <Link href="/nassau/" className="hover:underline text-brand-primary">← Nassau County Home</Link>
          <Link href="/nassau/services/" className="hover:underline text-brand-primary">All Services</Link>
          <Link href="/nassau/exterminator-near-me/" className="hover:underline text-brand-primary">Exterminator Near Me</Link>
          <Link href="/nassau/same-day-pest-control/" className="hover:underline text-brand-primary">Same-Day Pest Control</Link>
          <Link href="/nassau/free-pest-inspection/" className="hover:underline text-brand-primary">Free Pest Inspection</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
