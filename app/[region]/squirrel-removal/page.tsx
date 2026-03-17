import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { REGIONS } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Squirrel Removal Nassau County, NY',
  description: 'Squirrel removal Nassau County, NY. Live trapping, attic exclusion, one-way door removal. Family-owned since 1982. Call (516) 763-4600.',
  openGraph: {
    title: 'Squirrel Removal Nassau County, NY | Liberty Pest Pros',
    description: 'Squirrel removal Nassau County, NY. Live trapping, attic exclusion, one-way door removal. Family-owned since 1982. Call (516) 763-4600.',
    url: 'https://libertypestpros.com/nassau/squirrel-removal',
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
      "description": "Professional squirrel removal in Nassau County, NY. Live trapping, attic exclusion, and one-way door removal. Family-owned since 1982.",
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
          "name": "What are the signs of squirrels in my attic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs of squirrels in the attic include scratching, scurrying, or rolling sounds during the day (squirrels are diurnal), especially in the morning and late afternoon. You may notice gnawed wood along rooflines or soffits, droppings in the attic, nesting material such as leaves and insulation shreds, and a musky odor. Squirrels also commonly gnaw on electrical wiring in the attic, which is a serious fire hazard. If you hear activity above your ceiling during daylight hours, squirrels are a likely culprit."
          }
        },
        {
          "@type": "Question",
          "name": "When are squirrels most active in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gray squirrels, the dominant species in Nassau County, are active year-round. They are most likely to enter homes during two nesting seasons: late winter to early spring (January-April) and late summer to early fall (August-October), when females seek secure nesting sites to raise young. However, squirrels can enter attics at any time of year, particularly in fall when they search for warm shelter. Nassau County&apos;s mild winters also mean squirrels remain highly active even in January and February."
          }
        },
        {
          "@type": "Question",
          "name": "What damage can squirrels cause in my attic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Squirrels in the attic can cause significant damage. Their constant gnawing is a major concern — squirrels chew on wood framing, plastic pipes, and electrical wiring, with the latter creating a real fire hazard. They also compact and contaminate insulation with urine and feces, reducing its R-value and introducing pathogens. Nesting material can block ventilation. A small squirrel infestation left unaddressed for a season can result in thousands of dollars in damage."
          }
        },
        {
          "@type": "Question",
          "name": "How does the one-way door squirrel removal process work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A one-way exclusion door is a device installed over the primary entry point that allows squirrels to exit but not re-enter. All other entry points are sealed first, leaving only the one-way door. Over several days, squirrels exit through the door to forage as normal but cannot get back inside. Once we&apos;ve confirmed all squirrels have left — which we verify by monitoring activity — the one-way door is removed and the final entry point is permanently sealed. This method is highly effective and humane, with no trapping required in many cases."
          }
        },
        {
          "@type": "Question",
          "name": "When should I call a professional for squirrel removal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call a professional as soon as you hear sounds in the attic or notice gnaw marks and entry damage. Squirrel populations in the attic grow quickly — a female can have two litters per year of 2-5 young each. Young squirrels that are too small to exit through a one-way door can die in the attic if the mother is removed prematurely. A professional assessment determines the best timing and method for complete removal without leaving young behind. Acting early also limits the amount of structural and insulation damage."
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
  { name: 'Squirrel Inspection', icon: '🔍', desc: 'Locate all entry points and nesting sites' },
  { name: 'Live Trapping', icon: '🪤', desc: 'Humane capture and relocation' },
  { name: 'Attic Exclusion', icon: '🏠', desc: 'Permanent seal-out after removal' },
  { name: 'Entry Sealing', icon: '🔒', desc: 'Close all gaps along rooflines and soffits' },
  { name: 'Damage Repair Consultation', icon: '🛠️', desc: 'Assessment of chewed wiring and insulation' },
  { name: 'Prevention', icon: '🛡️', desc: 'Tree trimming advice and long-term exclusion' },
];

const faqs = [
  {
    q: "What are the signs of squirrels in my attic?",
    a: "Signs of squirrels in the attic include scratching, scurrying, or rolling sounds during the day (squirrels are diurnal), especially in the morning and late afternoon. You may notice gnawed wood along rooflines or soffits, droppings in the attic, nesting material such as leaves and insulation shreds, and a musky odor. Squirrels also commonly gnaw on electrical wiring in the attic, which is a serious fire hazard. If you hear activity above your ceiling during daylight hours, squirrels are a likely culprit."
  },
  {
    q: "When are squirrels most active in Nassau County?",
    a: "Gray squirrels, the dominant species in Nassau County, are active year-round. They are most likely to enter homes during two nesting seasons: late winter to early spring (January-April) and late summer to early fall (August-October), when females seek secure nesting sites to raise young. However, squirrels can enter attics at any time of year, particularly in fall when they search for warm shelter. Nassau County&apos;s mild winters also mean squirrels remain highly active even in January and February."
  },
  {
    q: "What damage can squirrels cause in my attic?",
    a: "Squirrels in the attic can cause significant damage. Their constant gnawing is a major concern — squirrels chew on wood framing, plastic pipes, and electrical wiring, with the latter creating a real fire hazard. They also compact and contaminate insulation with urine and feces, reducing its R-value and introducing pathogens. Nesting material can block ventilation. A small squirrel infestation left unaddressed for a season can result in thousands of dollars in damage."
  },
  {
    q: "How does the one-way door squirrel removal process work?",
    a: "A one-way exclusion door is a device installed over the primary entry point that allows squirrels to exit but not re-enter. All other entry points are sealed first, leaving only the one-way door. Over several days, squirrels exit through the door to forage as normal but cannot get back inside. Once we&apos;ve confirmed all squirrels have left — which we verify by monitoring activity — the one-way door is removed and the final entry point is permanently sealed. This method is highly effective and humane, with no trapping required in many cases."
  },
  {
    q: "When should I call a professional for squirrel removal?",
    a: "Call a professional as soon as you hear sounds in the attic or notice gnaw marks and entry damage. Squirrel populations in the attic grow quickly — a female can have two litters per year of 2-5 young each. Young squirrels that are too small to exit through a one-way door can die in the attic if the mother is removed prematurely. A professional assessment determines the best timing and method for complete removal without leaving young behind. Acting early also limits the amount of structural and insulation damage."
  }
];

export default function SquirrelRemovalPage() {
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
          <span className="text-gray-900">Squirrel Removal</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Squirrel Removal in Nassau County, NY
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Squirrel Removal Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4">
            Gray squirrels are one of the most common wildlife nuisances Nassau County homeowners face. Nassau&apos;s tree-lined neighborhoods — from the towering oaks of Oyster Bay and Manhasset to the dense residential streets of Hempstead and Baldwin — are prime squirrel habitat, with populations large enough to put consistent pressure on homes. Squirrels enter through rooflines, soffits, damaged fascia, and gaps around vents, and once inside an attic they chew insulation, contaminate the space with waste, and — most dangerously — gnaw on electrical wiring, creating a real fire hazard. Two nesting seasons per year (spring and fall) mean attic intrusions can happen year-round. Liberty Pest Pros has been resolving squirrel problems in Nassau County homes since 1982. We use proven one-way exclusion methods and live trapping to remove squirrels humanely, seal every entry point with professional-grade materials, and provide guidance on trimming branches and other long-term prevention measures. Our goal isn&apos;t just to remove the squirrels present today — it&apos;s to keep your attic squirrel-free permanently.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ One-way exclusion & live trapping</span>
            <span>✅ All entry points sealed</span>
            <span>✅ Nassau County specialists</span>
            <span>✅ Wiring damage assessment</span>
          </div>
        </div>

        {/* Signs of squirrels */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You Have Squirrels in Your Nassau County Home</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Scratching or scurrying sounds in the attic during the day, especially morning and late afternoon</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Gnaw marks or damage along rooflines, soffits, or fascia boards</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Nesting material (leaves, shredded insulation) visible in the attic</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Squirrel droppings in the attic — small, cylindrical, dark pellets</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Chewed or frayed electrical wiring visible in the attic (urgent fire hazard)</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Visible entry holes along the roofline, particularly near soffit-fascia junctions</span></li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Squirrel Removal Services</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Liberty Pest Pros for Squirrel Removal</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Squirrel removal done wrong means squirrels back in your attic within weeks. Liberty Pest Pros uses the methods that actually work long-term: comprehensive inspection to find every entry point, complete sealing of secondary entries before installing a one-way door or traps, and post-removal follow-up to confirm complete exclusion.
          </p>
          <p>
            <strong>One-way exclusion.</strong> Our preferred method for squirrel removal is the one-way exclusion door — a humane device installed over the main entry point that allows squirrels to exit but blocks re-entry. We seal all other gaps first. Once we confirm all squirrels have left, the door is removed and the final opening is permanently sealed.
          </p>
          <p>
            <strong>Live trapping when needed.</strong> For situations where one-way doors aren&apos;t suitable, we use live traps that capture squirrels without harm. Captured squirrels are relocated appropriately in compliance with state regulations.
          </p>
          <p>
            <strong>Damage repair consultation.</strong> We assess any damage to wiring, insulation, and wood framing and advise on necessary repairs. Chewed electrical wiring is a fire hazard that must be addressed — we&apos;ll make sure you know exactly what requires attention.
          </p>
          <p>
            <strong>Prevention guidance.</strong> After removal, we advise on tree trimming to eliminate branch-to-roof access routes, one of the most effective long-term prevention measures for Nassau County homes.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Remove Squirrels from Your Nassau County Attic</h2>
          <p className="text-blue-100 mb-4">Humane exclusion, live trapping, and permanent entry sealing. Same-day consultations available.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Squirrel Removal Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We provide squirrel removal throughout all Nassau County communities:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/squirrel-removal/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Squirrel Removal</h2>
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
