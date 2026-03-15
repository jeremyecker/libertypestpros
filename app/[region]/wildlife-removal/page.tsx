import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { REGIONS } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Wildlife Removal Nassau County, NY',
  description: 'Professional wildlife removal in Nassau County, NY. Raccoons, opossums, skunks, groundhogs, and more. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
  openGraph: {
    title: 'Wildlife Removal Nassau County, NY | Liberty Pest Pros',
    description: 'Professional wildlife removal in Nassau County, NY. Raccoons, opossums, skunks, groundhogs, and more. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
    url: 'https://libertypestpros.com/nassau/wildlife-removal',
    type: 'website',
    locale: 'en_US',
    siteName: 'Liberty Pest Pros',
    images: ['/og-image.png'],
  },
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
      "description": "Professional wildlife removal in Nassau County, NY. Raccoons, opossums, skunks, groundhogs, and more. Family-owned since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What wildlife is commonly found in Nassau County homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nassau County&apos;s residential communities host a variety of nuisance wildlife. Raccoons and squirrels are the most common attic intruders. Opossums shelter under decks, porches, and in crawl spaces. Skunks burrow under stoops, sheds, and decks, creating odor problems and rabies risk. Groundhogs (woodchucks) excavate under foundations, patios, and garden areas. Bats occasionally roost in attics and wall voids. Each species requires a different removal approach — which is why professional assessment is essential."
          }
        },
        {
          "@type": "Question",
          "name": "Is DIY wildlife removal dangerous?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, attempting to remove wildlife yourself carries real risks. Many Nassau County wildlife species can carry rabies — raccoons, skunks, bats, and foxes are the primary vectors in New York. A bite or scratch from a rabid animal requires immediate post-exposure treatment. Even non-rabid animals bite and scratch when cornered or frightened. Improper removal can also result in animals dying in inaccessible areas of your home, creating odor and sanitation problems. Certain wildlife removal activities in New York also require licensing — a professional ensures legal compliance."
          }
        },
        {
          "@type": "Question",
          "name": "What time of year is wildlife removal most needed in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wildlife problems peak in late winter through spring (February-May) when females seek nesting sites for young, and again in fall (September-November) when animals search for winter shelter. However, Nassau County&apos;s mild climate means wildlife activity and home intrusions occur year-round. Raccoons and squirrels are active all winter. Skunks become more active in late winter during mating season, which is when most skunk odor calls occur. We provide wildlife removal services 12 months a year."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between nuisance wildlife and dangerous wildlife?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuisance wildlife causes property damage or disruption — raccoons in the attic, groundhogs under the patio, skunks under the porch — but doesn&apos;t necessarily pose an immediate health threat. Dangerous wildlife exhibits abnormal behavior that may indicate rabies: a nocturnal animal active in daylight, an animal that appears disoriented, aggressive, or is staggering, or an animal that approaches humans without fear. If you encounter an animal behaving abnormally, do not approach it — call us immediately. All wildlife can bite if cornered, which is why professional removal is always the safest approach."
          }
        },
        {
          "@type": "Question",
          "name": "What humane wildlife removal methods do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our approach depends on the species and situation. For attic-dwelling animals like raccoons and squirrels, we use one-way exclusion doors that allow animals to exit but not re-enter, combined with live trapping where needed. For animals under structures — opossums, skunks, groundhogs — we use live cage traps baited appropriately for each species. Once captured, animals are relocated in compliance with New York State regulations. We avoid lethal methods whenever possible, and our exclusion work ensures animals cannot re-enter once removed."
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
  { name: 'Wildlife Inspection', icon: '🔍', desc: 'Identify species, entry points & activity' },
  { name: 'Raccoon Removal', icon: '🦝', desc: 'Attic exclusion and humane trapping' },
  { name: 'Squirrel Removal', icon: '🐿️', desc: 'One-way doors and live trapping' },
  { name: 'Opossum Removal', icon: '🐾', desc: 'Under-deck and crawl space removal' },
  { name: 'Skunk Removal', icon: '🦨', desc: 'Safe trapping with odor management' },
  { name: 'Prevention & Exclusion', icon: '🛡️', desc: 'Seal entry points to keep wildlife out' },
];

const faqs = [
  {
    q: "What wildlife is commonly found in Nassau County homes?",
    a: "Nassau County&apos;s residential communities host a variety of nuisance wildlife. Raccoons and squirrels are the most common attic intruders. Opossums shelter under decks, porches, and in crawl spaces. Skunks burrow under stoops, sheds, and decks, creating odor problems and rabies risk. Groundhogs (woodchucks) excavate under foundations, patios, and garden areas. Bats occasionally roost in attics and wall voids. Each species requires a different removal approach — which is why professional assessment is essential."
  },
  {
    q: "Is DIY wildlife removal dangerous?",
    a: "Yes, attempting to remove wildlife yourself carries real risks. Many Nassau County wildlife species can carry rabies — raccoons, skunks, bats, and foxes are the primary vectors in New York. A bite or scratch from a rabid animal requires immediate post-exposure treatment. Even non-rabid animals bite and scratch when cornered or frightened. Improper removal can also result in animals dying in inaccessible areas of your home, creating odor and sanitation problems. Certain wildlife removal activities in New York also require licensing — a professional ensures legal compliance."
  },
  {
    q: "What time of year is wildlife removal most needed in Nassau County?",
    a: "Wildlife problems peak in late winter through spring (February-May) when females seek nesting sites for young, and again in fall (September-November) when animals search for winter shelter. However, Nassau County&apos;s mild climate means wildlife activity and home intrusions occur year-round. Raccoons and squirrels are active all winter. Skunks become more active in late winter during mating season, which is when most skunk odor calls occur. We provide wildlife removal services 12 months a year."
  },
  {
    q: "What is the difference between nuisance wildlife and dangerous wildlife?",
    a: "Nuisance wildlife causes property damage or disruption — raccoons in the attic, groundhogs under the patio, skunks under the porch — but doesn&apos;t necessarily pose an immediate health threat. Dangerous wildlife exhibits abnormal behavior that may indicate rabies: a nocturnal animal active in daylight, an animal that appears disoriented, aggressive, or is staggering, or an animal that approaches humans without fear. If you encounter an animal behaving abnormally, do not approach it — call us immediately. All wildlife can bite if cornered, which is why professional removal is always the safest approach."
  },
  {
    q: "What humane wildlife removal methods do you use?",
    a: "Our approach depends on the species and situation. For attic-dwelling animals like raccoons and squirrels, we use one-way exclusion doors that allow animals to exit but not re-enter, combined with live trapping where needed. For animals under structures — opossums, skunks, groundhogs — we use live cage traps baited appropriately for each species. Once captured, animals are relocated in compliance with New York State regulations. We avoid lethal methods whenever possible, and our exclusion work ensures animals cannot re-enter once removed."
  }
];

export default function WildlifeRemovalPage() {
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
          <span className="text-gray-900">Wildlife Removal</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Wildlife Removal in Nassau County, NY
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Wildlife Removal Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4">
            Nassau County&apos;s dense residential communities sit alongside some of Long Island&apos;s most significant wildlife corridors — Hempstead Lake State Park, Massapequa Preserve, Bethpage State Park, and miles of woodland greenway that push raccoons, opossums, skunks, squirrels, and groundhogs into backyards and homes year-round. These aren&apos;t occasional encounters. Nassau&apos;s wildlife pressure is persistent and substantial, driven by large animal populations with nowhere to go but into suburban neighborhoods. The problem isn&apos;t just the animal you see — it&apos;s the structural damage, health hazards, and stress that wildlife in or around your home creates. Raccoons tear open attics. Skunks burrow under porches and spray pets. Groundhogs undermine foundations. Opossums set up in crawl spaces and under decks. Liberty Pest Pros has been solving wildlife problems for Nassau County homeowners since 1982. We assess each situation individually, use humane and species-appropriate methods, and provide complete exclusion so your home stays wildlife-free long-term.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ All Nassau County wildlife species</span>
            <span>✅ Humane removal methods</span>
            <span>✅ Licensed & insured</span>
            <span>✅ Complete exclusion services</span>
          </div>
        </div>

        {/* Wildlife species */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wildlife We Remove from Nassau County Properties</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🦝</span><span><strong>Raccoons</strong> — Attic intrusions, chimney nesting, garage access, garbage raiding</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🐿️</span><span><strong>Squirrels</strong> — Attic entry through soffits, rooflines, and damaged fascia</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🐾</span><span><strong>Opossums</strong> — Under decks, porches, sheds, and in crawl spaces</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🦨</span><span><strong>Skunks</strong> — Under stoops, decks, and sheds; mating season odor issues</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🐾</span><span><strong>Groundhogs</strong> — Burrowing under foundations, patios, gardens, and sheds</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">🦇</span><span><strong>Bats</strong> — Attic and wall void roosts (regulated removal — seasonal timing required)</span></li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Wildlife Removal Services</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Liberty Pest Pros for Wildlife Removal</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Wildlife removal is not one-size-fits-all. Raccoons require different techniques than skunks. An animal in your attic is handled differently than one under your deck. Liberty Pest Pros brings species-specific expertise and the right equipment for every Nassau County wildlife removal situation.
          </p>
          <p>
            <strong>Comprehensive inspection first.</strong> Every job starts with a thorough property assessment — we identify the species, locate all entry points and harborage areas, and determine the right removal approach before any work begins.
          </p>
          <p>
            <strong>Humane methods.</strong> We prioritize live trapping and exclusion over lethal control whenever possible. Captured animals are relocated in compliance with New York State DEC regulations.
          </p>
          <p>
            <strong>Complete exclusion.</strong> Removing the animal that&apos;s present doesn&apos;t solve the problem if the entry point stays open. We seal every gap, opening, and vulnerability with materials appropriate to the species — raccoon-proof steel mesh, underground exclusion barriers for burrowing animals, and chimney caps and vent covers where needed.
          </p>
          <p>
            <strong>Disease and safety awareness.</strong> Our technicians follow proper protocols for handling wildlife to protect your family&apos;s health — including appropriate PPE, waste decontamination, and guidance on when medical follow-up may be advisable after potential exposure events.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Remove Wildlife from Your Nassau County Property</h2>
          <p className="text-blue-100 mb-4">Raccoons, skunks, opossums, squirrels & more. Humane removal and complete exclusion.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wildlife Removal Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We provide wildlife removal throughout all Nassau County communities:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/wildlife-removal/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Wildlife Removal</h2>
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
