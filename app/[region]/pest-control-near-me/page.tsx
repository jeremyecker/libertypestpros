import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Pest Control Near Me in Nassau County, NY | Liberty Pest Pros',
  description: 'Looking for pest control near me in Nassau County? Liberty Pest Pros has served Long Island since 1982. Same-day service, family-owned, licensed & insured. Call (516) 763-4600.',
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
      "description": "Professional pest control in Nassau County, Long Island since 1982. Family-owned, licensed & insured, same-day service available.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I find a good exterminator near me in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a licensed, insured company with a local track record. Liberty Pest Pros has served Nassau County since 1982 — over 40 years of experience with Long Island homes, year-round pest pressure, and the coastal conditions that attract pests. We&apos;re local, family-owned, and always answer the phone."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you get to my Nassau County home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day service throughout Nassau County. Call us before noon on most days and we can typically have a technician at your door the same day. We serve all Nassau towns from Hempstead to Oyster Bay."
          }
        },
        {
          "@type": "Question",
          "name": "What pests do you treat in Nassau County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We treat all common Nassau County pests: ants, termites, cockroaches, bed bugs, rodents (mice and rats), mosquitoes, ticks, wasps, spiders, and more. Nassau&apos;s coastal climate and dense housing stock create year-round pest pressure — we know how to handle it."
          }
        },
        {
          "@type": "Question",
          "name": "Are your treatments family-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use targeted, family-friendly products that are effective against pests and clear to re-enter quickly. Every technician is trained in Integrated Pest Management (IPM) to use the right product in the right place."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a service guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We stand behind every treatment with a satisfaction guarantee. If pests return between scheduled services, we come back at no extra charge — no hassle, no excuses."
          }
        }
      ]
    }
  ]
};

const nassauTowns = [
  { name: 'Hempstead', slug: 'hempstead' },
  { name: 'Garden City', slug: 'garden-city' },
  { name: 'Mineola', slug: 'mineola' },
  { name: 'Great Neck', slug: 'great-neck' },
  { name: 'Hicksville', slug: 'hicksville' },
  { name: 'Massapequa', slug: 'massapequa' },
  { name: 'Valley Stream', slug: 'valley-stream' },
  { name: 'Long Beach', slug: 'long-beach' },
  { name: 'Rockville Centre', slug: 'rockville-centre' },
  { name: 'Lynbrook', slug: 'lynbrook' },
  { name: 'Freeport', slug: 'freeport' },
  { name: 'Baldwin', slug: 'baldwin' },
  { name: 'Oceanside', slug: 'oceanside' },
  { name: 'Merrick', slug: 'merrick' },
  { name: 'Syosset', slug: 'syosset' },
  { name: 'Plainview', slug: 'plainview' },
  { name: 'Westbury', slug: 'westbury' },
  { name: 'Farmingdale', slug: 'farmingdale' },
  { name: 'Manhasset', slug: 'manhasset' },
  { name: 'Oyster Bay', slug: 'oyster-bay' },
];

const services = [
  { name: 'Termite Control', icon: '🪲', desc: 'Inspection, treatment & prevention for Nassau County homes' },
  { name: 'Rodent Control', icon: '🐭', desc: 'Mice & rat removal, exclusion work to seal entry points' },
  { name: 'Ant & Cockroach', icon: '🐜', desc: 'Interior & exterior treatments that actually work' },
  { name: 'Bed Bug Treatment', icon: '🛏️', desc: 'Heat & chemical treatments with guaranteed results' },
  { name: 'Mosquito & Tick', icon: '🦟', desc: 'Yard programs protecting your Nassau County property' },
  { name: 'Wasp & Stinging Insects', icon: '🐝', desc: 'Nest removal & prevention — same-day available' },
];

const faqs = [
  {
    q: "How do I find a good exterminator near me in Nassau County?",
    a: "Look for a licensed, insured company with a local track record. Liberty Pest Pros has served Nassau County since 1982 — over 40 years of experience with Long Island homes, year-round pest pressure, and the coastal conditions that attract pests. We&apos;re local, family-owned, and always answer the phone."
  },
  {
    q: "How fast can you get to my Nassau County home?",
    a: "We offer same-day service throughout Nassau County. Call us before noon on most days and we can typically have a technician at your door the same day. We serve all Nassau towns from Hempstead to Oyster Bay."
  },
  {
    q: "What pests do you treat in Nassau County?",
    a: "We treat all common Nassau County pests: ants, termites, cockroaches, bed bugs, rodents (mice and rats), mosquitoes, ticks, wasps, spiders, and more. Nassau&apos;s coastal climate and dense housing stock create year-round pest pressure — we know how to handle it."
  },
  {
    q: "Are your treatments family-friendly?",
    a: "Yes. We use targeted, family-friendly products that are effective against pests and clear to re-enter quickly. Every technician is trained in Integrated Pest Management (IPM) to use the right product in the right place."
  },
  {
    q: "Do you offer a service guarantee?",
    a: "Absolutely. We stand behind every treatment with a satisfaction guarantee. If pests return between scheduled services, we come back at no extra charge — no hassle, no excuses."
  }
];

export default function PestControlNearMePage() {
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
          <span className="text-gray-900">Pest Control Near Me</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pest Control Near Me — Nassau County, Long Island
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Your Local Pest Control Experts Since 1982</h2>
          <p className="text-blue-800 mb-4">
            When Nassau County homeowners search &ldquo;pest control near me,&rdquo; they want someone local, fast, and proven. Liberty Pest Pros has been that company for over 40 years. We&apos;re not a national franchise — we&apos;re a family-owned business rooted right here on Long Island, with technicians who live in the same communities we serve. From the beachfront homes of Long Beach and Lido Beach to the Cape Cods of Levittown and the colonials of Garden City, Nassau County&apos;s diverse housing stock presents unique pest challenges. Salt air accelerates wood damage that termites exploit. Dense neighborhoods create rodent corridors. Older homes in Hempstead and Freeport have legacy pest pressure that only an experienced local company truly understands. When you call us, you&apos;re calling neighbors who know Nassau County inside and out.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Same-day service available</span>
            <span>✅ Nassau County licensed &amp; insured</span>
            <span>✅ Family-owned since 1982</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pest Control Services We Provide Near You</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Nassau County Homeowners Choose Liberty Pest Pros</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            With more than 40 years serving Nassau County, Liberty Pest Pros has built a reputation that national chains simply can&apos;t match. We&apos;re family-owned, which means every job matters to us personally. Our technicians are Long Island locals — they know the specific pest pressures in your neighborhood, the seasonal patterns that drive pest activity on the South Shore and the North Shore, and the building styles that make certain homes more vulnerable.
          </p>
          <p>
            We offer same-day service because we know pest problems don&apos;t wait for convenient scheduling. Found mice in your kitchen on a Tuesday morning? Call before noon and we can have a technician there by afternoon. Discovered bed bugs the night before guests arrive? We handle those emergencies too.
          </p>
          <p>
            Our treatments are family-friendly and effective. We use EPA-approved products applied with precision, so you get maximum pest elimination with minimum disruption to your household. Most treatments allow you to re-enter your home within a few hours — no week-long displacement, no chemical odors that linger for days.
          </p>
          <p>
            We stand behind every job with a satisfaction guarantee. If pests return between scheduled treatments, we come back at no extra charge. That&apos;s the Liberty difference — over four decades of showing up, solving problems, and doing right by Nassau County families.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready for Pest-Free Living in Nassau County?</h2>
          <p className="text-blue-100 mb-4">Same-day appointments available. Family-owned. Nassau County&apos;s trusted choice since 1982.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nassau County Towns We Serve</h2>
        <p className="text-gray-600 mb-4">We provide pest control throughout all of Nassau County. Find your town below:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {nassauTowns.map(town => (
            <Link
              key={town.slug}
              href={`/nassau/${town.slug}/`}
              className="text-brand-primary hover:underline text-sm py-1"
            >
              {town.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Pest Control Near Me</h2>
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
          <Link href="/nassau/emergency-pest-control/" className="hover:underline text-brand-primary">Emergency Pest Control</Link>
          <Link href="/nassau/free-pest-inspection/" className="hover:underline text-brand-primary">Free Pest Inspection</Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
