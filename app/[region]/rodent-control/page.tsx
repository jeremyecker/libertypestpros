import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { REGIONS } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Rodent Control Nassau County, NY',
  description: 'Professional rodent control in Nassau County, NY. Mice and rat elimination with guaranteed results. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
  openGraph: {
    title: 'Rodent Control Nassau County, NY | Liberty Pest Pros',
    description: 'Professional rodent control in Nassau County, NY. Mice and rat elimination with guaranteed results. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
    url: 'https://libertypestpros.com/nassau/rodent-control',
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
      "description": "Professional rodent control in Nassau County, NY. Mice and rat elimination with guaranteed results. Family-owned since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if I have mice or rats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mice and rats leave different evidence. Mice droppings are small — roughly the size of a grain of rice — dark, and found scattered along walls, in cabinets, and near food sources. Rat droppings are much larger (about the size of a raisin) and fewer in number. Both leave gnaw marks, but rats cause more significant structural damage. Mice often build small nests from shredded paper or fabric in hidden areas. You may also hear scratching sounds in walls or ceilings at night. Rub marks (dark grease smears) along walls near entry points are a common sign of rats, as they follow the same routes repeatedly."
          }
        },
        {
          "@type": "Question",
          "name": "How do mice and rats get into Nassau County homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mouse can squeeze through a gap as small as a dime (6mm) and a rat through a hole the size of a quarter. They enter through gaps around pipes and utility lines penetrating the foundation, cracks in foundation walls, gaps under doors, openings around air conditioning lines, and through unscreened vents. Nassau County&apos;s older housing stock — particularly in communities like Hempstead, Freeport, and Baldwin — often has accumulated entry points that make rodent exclusion essential. Sealing every entry point is the only permanent solution; trapping and baiting alone will not keep rodents out long-term."
          }
        },
        {
          "@type": "Question",
          "name": "Are rodents dangerous to my family&apos;s health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Rodents pose multiple health risks. They contaminate food and surfaces with urine, feces, and saliva, which can spread Salmonella and other bacteria. Rat-bite fever (from bites or contact with urine) is a real concern. Rodent droppings and urine can trigger asthma and allergies, particularly in children. Mice and rats also carry fleas and ticks that can introduce additional diseases into the home. Beyond disease, they gnaw on electrical wiring, creating fire hazards, and on structural components including insulation, wood framing, and pipes."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to eliminate a rodent infestation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical residential rodent treatment in Nassau County takes 2-4 weeks from initial treatment to confirmed elimination, though severe infestations may take longer. The first visit involves a full inspection, trap and/or bait station placement, and exclusion work. Follow-up visits are scheduled to check traps, assess activity, and verify that the population is declining. Full elimination is confirmed when there is no further trap activity and no new evidence of rodents. Entry point sealing is critical — without it, new rodents will replace the ones removed."
          }
        },
        {
          "@type": "Question",
          "name": "Are rodent bait stations safe around children and pets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When placed and managed by a licensed professional, tamper-resistant bait stations are designed to be accessible only to rodents and are positioned in locations inaccessible to children and pets (inside walls, under structures, in crawl spaces). We follow all label requirements and EPA guidelines for rodenticide use. If you have concerns about bait-based methods, we can discuss trap-only protocols for your home. We&apos;ll explain every product and placement during our inspection and always answer your questions about what we&apos;re using and why."
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
  { name: 'Rodent Inspection', icon: '🔍', desc: 'Identify species, entry points & activity level' },
  { name: 'Interior Trapping', icon: '🪤', desc: 'Strategic trap placement throughout the home' },
  { name: 'Bait Stations', icon: '☠️', desc: 'Tamper-resistant exterior bait management' },
  { name: 'Entry Sealing', icon: '🔒', desc: 'Close every gap mice and rats use to enter' },
  { name: 'Ongoing Monitoring', icon: '📋', desc: 'Regular follow-up until full elimination confirmed' },
  { name: 'Prevention Consultation', icon: '🛡️', desc: 'Long-term strategies to keep rodents out' },
];

const faqs = [
  {
    q: "How do I know if I have mice or rats?",
    a: "Mice and rats leave different evidence. Mice droppings are small — roughly the size of a grain of rice — dark, and found scattered along walls, in cabinets, and near food sources. Rat droppings are much larger (about the size of a raisin) and fewer in number. Both leave gnaw marks, but rats cause more significant structural damage. Mice often build small nests from shredded paper or fabric in hidden areas. You may also hear scratching sounds in walls or ceilings at night. Rub marks (dark grease smears) along walls near entry points are a common sign of rats, as they follow the same routes repeatedly."
  },
  {
    q: "How do mice and rats get into Nassau County homes?",
    a: "A mouse can squeeze through a gap as small as a dime (6mm) and a rat through a hole the size of a quarter. They enter through gaps around pipes and utility lines penetrating the foundation, cracks in foundation walls, gaps under doors, openings around air conditioning lines, and through unscreened vents. Nassau County&apos;s older housing stock — particularly in communities like Hempstead, Freeport, and Baldwin — often has accumulated entry points that make rodent exclusion essential. Sealing every entry point is the only permanent solution; trapping and baiting alone will not keep rodents out long-term."
  },
  {
    q: "Are rodents dangerous to my family's health?",
    a: "Yes. Rodents pose multiple health risks. They contaminate food and surfaces with urine, feces, and saliva, which can spread Salmonella and other bacteria. Rat-bite fever (from bites or contact with urine) is a real concern. Rodent droppings and urine can trigger asthma and allergies, particularly in children. Mice and rats also carry fleas and ticks that can introduce additional diseases into the home. Beyond disease, they gnaw on electrical wiring, creating fire hazards, and on structural components including insulation, wood framing, and pipes."
  },
  {
    q: "How long does it take to eliminate a rodent infestation?",
    a: "A typical residential rodent treatment in Nassau County takes 2-4 weeks from initial treatment to confirmed elimination, though severe infestations may take longer. The first visit involves a full inspection, trap and/or bait station placement, and exclusion work. Follow-up visits are scheduled to check traps, assess activity, and verify that the population is declining. Full elimination is confirmed when there is no further trap activity and no new evidence of rodents. Entry point sealing is critical — without it, new rodents will replace the ones removed."
  },
  {
    q: "Are rodent bait stations safe around children and pets?",
    a: "When placed and managed by a licensed professional, tamper-resistant bait stations are designed to be accessible only to rodents and are positioned in locations inaccessible to children and pets (inside walls, under structures, in crawl spaces). We follow all label requirements and EPA guidelines for rodenticide use. If you have concerns about bait-based methods, we can discuss trap-only protocols for your home. We&apos;ll explain every product and placement during our inspection and always answer your questions about what we&apos;re using and why."
  }
];

export default function RodentControlPage() {
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
          <span className="text-gray-900">Rodent Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rodent Control in Nassau County, NY
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Rodent Control Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4">
            Mice and rats are a year-round problem in Nassau County, and the pressure is significant. Nassau&apos;s combination of older housing stock — particularly in dense communities like Hempstead, Freeport, Long Beach, and Baldwin — and proximity to commercial corridors, restaurants, and transit infrastructure creates ideal conditions for both house mice and Norway rats. Older homes have more accumulated entry points: gaps around aging pipe penetrations, deteriorated foundation sills, and worn door sweeps that provide easy access. Seasonal pressure peaks in fall and winter as rodents seek warmth, but Nassau County&apos;s rodent problems are genuinely year-round — especially in areas near water, commerce, and restaurant activity. Liberty Pest Pros has been controlling rodents in Nassau County homes and businesses since 1982. Our approach combines thorough inspection, strategic trapping and baiting, and — critically — entry point sealing to stop the inflow of new rodents. We don&apos;t just knock down the current population; we close the door so it doesn&apos;t come back.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Mice & rat elimination</span>
            <span>✅ Entry point sealing included</span>
            <span>✅ Tamper-resistant bait stations</span>
            <span>✅ Nassau County specialists since 1982</span>
          </div>
        </div>

        {/* Signs of rodents */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You Have a Rodent Problem in Your Nassau County Home</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Droppings along walls, in cabinets, under the sink, or near food storage areas</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Gnaw marks on food packaging, wood, drywall, or electrical wiring</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Scratching or scurrying sounds in walls, ceilings, or under floors at night</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Nesting material — shredded paper, fabric, or insulation — in hidden areas</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Rub marks (dark grease smears) along baseboards and walls near entry points (rats)</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Musky odor, particularly in enclosed spaces like closets, crawl spaces, and cabinets</span></li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Rodent Control Services</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Liberty Pest Pros for Rodent Control</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Effective rodent control is a two-part problem: eliminate the rodents that are present, and close the entry points so new ones can&apos;t come in. Most failed rodent treatments focus only on the first part. Liberty Pest Pros does both.
          </p>
          <p>
            <strong>Thorough inspection.</strong> We begin every rodent job with a complete interior and exterior inspection — identifying active areas, entry points, harborage zones, and the species involved. Understanding the full picture determines the right combination of trapping, baiting, and exclusion.
          </p>
          <p>
            <strong>Strategic trap placement.</strong> Interior snap traps are placed along active runways — the routes mice and rats follow repeatedly along walls and behind appliances. Proper placement dramatically increases capture rates compared to random trap setting.
          </p>
          <p>
            <strong>Tamper-resistant bait stations.</strong> For perimeter management and ongoing prevention, we use commercial-grade tamper-resistant bait stations placed at exterior entry points. These are safe, EPA-compliant, and inaccessible to children and pets.
          </p>
          <p>
            <strong>Entry point sealing.</strong> We seal gaps around pipes, foundations, utility penetrations, and other entry points using steel wool, hardware cloth, and professional sealants that rodents cannot gnaw through. This is what makes the solution permanent.
          </p>
          <p>
            <strong>Ongoing monitoring.</strong> We schedule follow-up visits until activity is completely eliminated and provide guidance on long-term prevention practices for your home.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Eliminate Rodents from Your Nassau County Home</h2>
          <p className="text-blue-100 mb-4">Mice and rat control with entry point sealing for permanent results. Same-day consultations available.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rodent Control Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We provide rodent control throughout all Nassau County communities:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/rodent-control/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Rodent Control</h2>
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
