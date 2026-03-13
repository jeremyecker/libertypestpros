import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { REGIONS } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Bed Bug Exterminator Nassau County, NY',
  description: 'Bed bug exterminator in Nassau County, NY. Heat & chemical treatments with guaranteed results. Liberty Pest Pros — family-owned since 1982. Call (516) 763-4600.',
  openGraph: {
    url: 'https://libertypestpros.com/nassau/bed-bug-exterminator',
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
      "description": "Professional bed bug extermination in Nassau County, NY. Heat and chemical treatments. Family-owned since 1982.",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 07:00-19:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if I have bed bugs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common signs of bed bugs include small reddish-brown stains on your mattress or sheets (fecal spots), tiny blood smears from crushed bugs, shed skins near seams and crevices, a musty sweet odor in heavily infested rooms, and itchy welts on your skin that appear in lines or clusters. You may also see the bugs themselves — they&apos;re roughly the size of an apple seed, flat, and reddish-brown. If you suspect bed bugs, call us for a professional inspection before the infestation spreads further."
          }
        },
        {
          "@type": "Question",
          "name": "What&apos;s the best bed bug treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most effective approach depends on the severity of the infestation. Heat treatment raises the temperature of infested rooms to levels lethal to bed bugs at all life stages — eggs, nymphs, and adults. Chemical treatment uses targeted insecticides in crevices, seams, and harborage areas. For many infestations, a combination protocol achieves the best results. We assess each situation individually and recommend the approach most likely to eliminate the infestation completely."
          }
        },
        {
          "@type": "Question",
          "name": "How long does bed bug treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chemical treatment typically takes 2-4 hours for the application, with a re-entry period of a few hours after treatment. Heat treatment takes most of a day — the heating process itself runs 6-8 hours to ensure the entire space reaches lethal temperatures. Follow-up inspections are scheduled 2-4 weeks later to confirm complete elimination."
          }
        },
        {
          "@type": "Question",
          "name": "How did I get bed bugs in my Nassau County home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bed bugs are hitchhikers — they don&apos;t come in from the yard. Common sources include hotel stays, travel (especially via JFK and LaGuardia airports, heavily used by Nassau County residents), used furniture purchases, guests who unknowingly carry them, and for apartment dwellers, migration from neighboring units. Getting bed bugs doesn&apos;t reflect on your housekeeping — anyone can bring them home."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to throw away my mattress or furniture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, no. Professional treatment eliminates bed bugs from mattresses, furniture, and other items. Mattress encasements can be used after treatment to prevent re-infestation. Discarding furniture is rarely necessary and can actually spread bed bugs to new locations if items aren&apos;t properly wrapped. Our technicians will advise you on what, if anything, needs to be discarded."
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
  { name: 'Bed Bug Inspection', icon: '🔍', desc: 'Thorough detection of all life stages' },
  { name: 'Heat Treatment', icon: '🌡️', desc: '100% effective at all life stages' },
  { name: 'Chemical Treatment', icon: '💊', desc: 'Targeted insecticide application' },
  { name: 'Combination Protocol', icon: '🛏️', desc: 'Heat + chemical for severe infestations' },
  { name: 'Follow-Up Inspection', icon: '✅', desc: 'Confirmation of complete elimination' },
  { name: 'Prevention Consultation', icon: '🛡️', desc: 'Prevent future infestations' },
];

const faqs = [
  {
    q: "How do I know if I have bed bugs?",
    a: "The most common signs of bed bugs include small reddish-brown stains on your mattress or sheets (fecal spots), tiny blood smears from crushed bugs, shed skins near seams and crevices, a musty sweet odor in heavily infested rooms, and itchy welts on your skin that appear in lines or clusters. You may also see the bugs themselves — they&apos;re roughly the size of an apple seed, flat, and reddish-brown. If you suspect bed bugs, call us for a professional inspection before the infestation spreads further."
  },
  {
    q: "What&apos;s the best bed bug treatment?",
    a: "The most effective approach depends on the severity of the infestation. Heat treatment raises the temperature of infested rooms to levels lethal to bed bugs at all life stages — eggs, nymphs, and adults. Chemical treatment uses targeted insecticides in crevices, seams, and harborage areas. For many infestations, a combination protocol achieves the best results. We assess each situation individually and recommend the approach most likely to eliminate the infestation completely."
  },
  {
    q: "How long does bed bug treatment take?",
    a: "Chemical treatment typically takes 2-4 hours for the application, with a re-entry period of a few hours after treatment. Heat treatment takes most of a day — the heating process itself runs 6-8 hours to ensure the entire space reaches lethal temperatures. Follow-up inspections are scheduled 2-4 weeks later to confirm complete elimination."
  },
  {
    q: "How did I get bed bugs in my Nassau County home?",
    a: "Bed bugs are hitchhikers — they don&apos;t come in from the yard. Common sources include hotel stays, travel (especially via JFK and LaGuardia airports, heavily used by Nassau County residents), used furniture purchases, guests who unknowingly carry them, and for apartment dwellers, migration from neighboring units. Getting bed bugs doesn&apos;t reflect on your housekeeping — anyone can bring them home."
  },
  {
    q: "Do I need to throw away my mattress or furniture?",
    a: "In most cases, no. Professional treatment eliminates bed bugs from mattresses, furniture, and other items. Mattress encasements can be used after treatment to prevent re-infestation. Discarding furniture is rarely necessary and can actually spread bed bugs to new locations if items aren&apos;t properly wrapped. Our technicians will advise you on what, if anything, needs to be discarded."
  }
];

export default function BedBugExterminatorPage() {
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
          <span className="text-gray-900">Bed Bug Exterminator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bed Bug Exterminator in Nassau County, NY
        </h1>

        {/* Nassau-specific intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Bed Bug Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4">
            Bed bugs are one of the most stressful pest problems Nassau County homeowners face — and one of the most common. Nassau County&apos;s proximity to JFK and LaGuardia airports, its high density of travel, and its large apartment stock in communities like Hempstead, Long Beach, and Valley Stream create consistent bed bug pressure year-round. Liberty Pest Pros has been eliminating bed bug infestations from Nassau County homes, apartments, and hotels since before most of our competitors were in business. We know exactly what works: thorough inspection to map the infestation, targeted heat and/or chemical treatment to eliminate every life stage, and follow-up verification to confirm complete eradication. We don&apos;t guess. We don&apos;t use one-size-fits-all protocols. Every bed bug job is assessed individually to deliver the fastest, most complete elimination possible.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Heat &amp; chemical treatment available</span>
            <span>✅ All life stages eliminated</span>
            <span>✅ Nassau County specialists</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Signs you have bed bugs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You Have Bed Bugs in Your Nassau County Home</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Itchy welts on skin in lines or clusters, especially on arms, legs, and torso</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Small dark stains on mattress seams, sheets, or pillow cases (fecal spots)</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Tiny blood smears on bedding from crushed bugs</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Shed exoskeletons (pale, hollow bug-shaped shells) near bed frame or headboard</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Sweet, musty odor in the bedroom — common in severe infestations</span></li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold mt-0.5">⚠</span><span>Visible bugs: reddish-brown, flat, about the size of an apple seed</span></li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Bed Bug Treatment Services</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Liberty Pest Pros for Bed Bug Extermination</h2>
        <div className="prose prose-gray max-w-none mb-10">
          <p>
            Bed bug infestations require expert identification and the right treatment protocol. Not every company has the equipment, training, and experience to eliminate bed bugs completely. Liberty Pest Pros does.
          </p>
          <p>
            <strong>Proven treatments.</strong> We offer heat treatment — the gold standard for bed bug elimination — which raises the temperature in infested spaces to 120°F+, killing bugs and eggs at every life stage. We also perform precision chemical treatment using residual insecticides applied directly to harborage areas. For severe infestations, our combination protocol delivers the most thorough results.
          </p>
          <p>
            <strong>Complete inspection first.</strong> Before recommending treatment, we inspect your home thoroughly — including box springs, mattress seams, bed frames, headboards, baseboards, furniture, electrical outlets, and wall voids. Understanding the full scope of the infestation determines the right protocol.
          </p>
          <p>
            <strong>Family-friendly approach.</strong> Our treatments are conducted with your family&apos;s safety in mind. We&apos;ll give you clear re-entry instructions and explain exactly what was treated and why.
          </p>
          <p>
            <strong>Guaranteed results.</strong> We back our bed bug treatments with a warranty. If bed bugs are still present after our treatment protocol is complete, we return to address them at no additional charge.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Eliminate Bed Bugs From Your Nassau County Home</h2>
          <p className="text-blue-100 mb-4">Heat &amp; chemical treatments with guaranteed results. Same-day consultations available.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bed Bug Exterminator Service Areas — Nassau County</h2>
        <p className="text-gray-600 mb-4">We provide bed bug extermination throughout all Nassau County communities:</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Bed Bug Exterminator</h2>
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
