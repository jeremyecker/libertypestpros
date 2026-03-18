import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';
import { TOWN_OPENERS } from '@/data/liberty-openers';
import { CITY_LAYER7, NASSAU_FALLBACK } from '@/data/liberty-layer7';

// ─── Service configuration ────────────────────────────────────────────────────
const SERVICE_CONFIG: Record<string, {
  name: string;
  icon: string;
  intro: string;
  whyUrgent: string;
  whatWeOffer: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  'bed-bug-exterminator': {
    name: 'Bed Bug Exterminator',
    icon: '🛏️',
    intro: 'Bed bugs spread fast and are nearly impossible to eliminate without professional treatment. Liberty Pest Pros uses a combination of heat treatment and targeted chemical application to eliminate every life stage — eggs, nymphs, and adults — in a single visit.',
    whyUrgent: 'A small infestation can become a serious problem in 30–60 days. Early treatment is always faster, easier, and more affordable.',
    whatWeOffer: [
      { title: 'Heat Treatment', desc: 'Kills all life stages without chemicals' },
      { title: 'Chemical Treatment', desc: 'Targeted residual application' },
      { title: 'Follow-Up Inspection', desc: '30-day guarantee on all treatments' },
      { title: 'Same-Day Service', desc: 'Emergency appointments available' },
    ],
    faqs: [
      { q: 'How do I know if I have bed bugs?', a: 'Look for small rust-colored stains on mattress seams, tiny dark spots (droppings), or itchy welts in a line or cluster on your skin after sleeping. Our free inspection confirms the presence and extent of an infestation.' },
      { q: 'How long does bed bug treatment take?', a: 'Heat treatments typically take 6–8 hours. Chemical treatments take 2–3 hours with a return visit in 14 days. We\'ll recommend the right approach based on your situation.' },
      { q: 'Do I need to leave my home during treatment?', a: 'Yes — for heat treatment, residents and pets must leave for the day. For chemical treatment, you\'ll need to be out for 4 hours after application.' },
    ],
  },
  'rodent-control': {
    name: 'Rodent Control',
    icon: '🐭',
    intro: 'Mice and rats can enter a home through a gap as small as a dime. Liberty Pest Pros combines trapping, bait stations, and permanent exclusion work to eliminate active infestations and prevent new ones — keeping your home rodent-free year-round.',
    whyUrgent: 'Rodents gnaw through wiring (a leading cause of house fires), contaminate food, and breed rapidly — a single pair of mice can produce 60+ offspring per year.',
    whatWeOffer: [
      { title: 'Interior Trapping', desc: 'Snap traps & bait stations placed strategically' },
      { title: 'Exterior Exclusion', desc: 'Seal entry points to prevent re-entry' },
      { title: 'Bait Stations', desc: 'Tamper-resistant exterior stations' },
      { title: 'Attic & Crawl Space', desc: 'Full inspection of high-activity areas' },
    ],
    faqs: [
      { q: 'How do I know if I have mice or rats?', a: 'Droppings along walls or in cabinets, gnaw marks on food packaging or wires, greasy rub marks along baseboards, and scratching sounds at night are all signs of rodent activity.' },
      { q: 'How do rodents get in?', a: 'Any gap or crack larger than ¼ inch is a potential entry point — foundation cracks, gaps around pipes, worn weatherstripping, and openings around utility lines are the most common entry points on Long Island homes.' },
      { q: 'How long does rodent control take?', a: 'Initial service takes 1–2 hours. Full elimination typically requires 2–3 visits over 2–4 weeks, followed by exclusion work to prevent re-entry.' },
    ],
  },
  'raccoon-removal': {
    name: 'Raccoon Removal',
    icon: '🦝',
    intro: 'Raccoons can cause thousands of dollars in damage once they gain access to an attic or crawl space. Liberty Pest Pros provides humane raccoon removal, full attic assessment, and permanent exclusion to keep them out for good.',
    whyUrgent: 'A raccoon in your attic isn\'t just a nuisance — they tear apart insulation, soil surfaces with waste, and can carry rabies and raccoon roundworm. Fast removal protects your family and your home.',
    whatWeOffer: [
      { title: 'Humane Live Trapping', desc: 'Catch-and-relocate per NY regulations' },
      { title: 'Attic Inspection', desc: 'Full assessment of damage and entry points' },
      { title: 'Exclusion Work', desc: 'Permanent sealing of all entry points' },
      { title: 'Cleanup & Sanitization', desc: 'Remove waste and restore insulation' },
    ],
    faqs: [
      { q: 'How do raccoons get into attics?', a: 'Raccoons are strong climbers and can tear through rotted fascia, damaged soffits, or poorly sealed roof vents. Females actively seek attic spaces in spring to give birth.' },
      { q: 'Is raccoon removal humane?', a: 'Yes — we use live cage traps and relocate captured raccoons in compliance with New York State DEC regulations. We never use inhumane methods.' },
      { q: 'What damage can raccoons cause?', a: 'Raccoons tear apart insulation for nesting material, leave large amounts of waste (which harbors dangerous parasites), and can damage electrical wiring, roofing, and HVAC components.' },
    ],
  },
  'squirrel-removal': {
    name: 'Squirrel Removal',
    icon: '🐿️',
    intro: 'Squirrels in attics and walls are a surprisingly common problem on Long Island. They chew through electrical wiring, create nesting debris, and are difficult to remove without professional exclusion. Liberty Pest Pros gets them out and keeps them out.',
    whyUrgent: 'Squirrel gnawing on electrical wires is one of the most common causes of attic fires. If you hear scratching or scurrying above your ceiling, don\'t wait.',
    whatWeOffer: [
      { title: 'One-Way Exclusion Doors', desc: 'Let squirrels exit but not re-enter' },
      { title: 'Live Trapping', desc: 'For squirrels that won\'t self-exit' },
      { title: 'Entry Point Sealing', desc: 'Permanent closure of all access points' },
      { title: 'Attic Assessment', desc: 'Full inspection for damage and nesting' },
    ],
    faqs: [
      { q: 'How do squirrels get into my attic?', a: 'Squirrels enter through gaps in rooflines, damaged soffits, roof vents, and any opening larger than 1.5 inches. They\'re persistent chewers and can create new entry points if existing ones are sealed without removing the animals first.' },
      { q: 'What time of year are squirrel problems most common?', a: 'Squirrels typically enter homes in late fall to overwinter, and again in late winter/early spring when females are looking for a safe birthing location.' },
      { q: 'Can I just block the entry points myself?', a: 'Not before the squirrels are removed — sealing them inside creates a much bigger problem. We always remove the animals first, then seal entry points permanently.' },
    ],
  },
  'wildlife-removal': {
    name: 'Wildlife Removal',
    icon: '🦌',
    intro: 'From skunks under decks to opossums in garages, Long Island homeowners encounter a wide range of wildlife intrusions. Liberty Pest Pros handles all nuisance wildlife humanely and in compliance with New York State DEC regulations.',
    whyUrgent: 'Wildlife in or around your home can pose health risks (rabies, leptospirosis, histoplasmosis), cause structural damage, and attract secondary pests. Professional removal is always faster and safer than DIY attempts.',
    whatWeOffer: [
      { title: 'All Species Covered', desc: 'Raccoons, squirrels, skunks, opossums & more' },
      { title: 'Humane Removal', desc: 'Live trapping, one-way doors, deterrents' },
      { title: 'Exclusion Work', desc: 'Permanent prevention after removal' },
      { title: 'NYS DEC Compliant', desc: 'Licensed wildlife control operators' },
    ],
    faqs: [
      { q: 'What wildlife do you handle?', a: 'We handle raccoons, squirrels, skunks, opossums, groundhogs, bats, and most other nuisance wildlife commonly found on Long Island. Call us and describe what you\'re dealing with.' },
      { q: 'What if there are babies?', a: 'Baby season (typically March–August) requires extra care. We\'ll locate the nest, remove both mother and young together, and relocate them as a family unit.' },
      { q: 'Is wildlife removal covered by homeowner\'s insurance?', a: 'Some policies cover wildlife damage cleanup and repairs — check with your insurer. The removal service itself is typically not covered, but our pricing is transparent and competitive.' },
    ],
  },
  'termite-control': {
    name: 'Termite Control',
    icon: '🪲',
    intro: 'Termites cause more property damage than fires, floods, and storms combined. Nassau County homes are at risk year-round, and most termite damage isn\'t covered by homeowner\'s insurance. Liberty Pest Pros provides inspection, treatment, and annual monitoring to protect your home.',
    whyUrgent: 'Termites work silently — you won\'t see them, but they can cause $10,000+ in structural damage before any signs appear. Annual inspections and proactive treatment are essential.',
    whatWeOffer: [
      { title: 'Termite Inspection', desc: 'Full structure inspection, WDO reports available' },
      { title: 'Liquid Barrier Treatment', desc: 'Termidor® barrier application' },
      { title: 'Bait Systems', desc: 'Sentricon® monitoring & elimination' },
      { title: 'Annual Monitoring', desc: 'Prevention plans to protect your investment' },
    ],
    faqs: [
      { q: 'How do I know if I have termites?', a: 'Signs include mud tubes along foundation walls, discarded wings near windows and doors, hollow-sounding wood, and bubbling or darkening paint. A professional inspection is the only reliable way to confirm activity.' },
      { q: 'What treatment do you use?', a: 'We use Termidor® liquid barrier treatments and Sentricon® bait systems — the two most effective, research-backed approaches available. The right choice depends on your home\'s construction and the extent of activity.' },
      { q: 'Does Nassau County have a high termite risk?', a: 'Yes — Long Island\'s older housing stock, sandy soils, and wet spring conditions create ideal conditions for Eastern Subterranean Termites, the most destructive species in the northeastern US.' },
    ],
  },
  'cockroach-exterminator': {
    name: 'Cockroach Exterminator',
    icon: '🪳',
    intro: 'Cockroaches are among the hardest pests to eliminate on your own — they breed in hidden areas, develop resistance to store-bought sprays, and can signal a serious sanitation or moisture issue. Liberty Pest Pros uses gel baits, insect growth regulators, and crack-and-crevice treatments to eliminate infestations completely.',
    whyUrgent: 'Cockroaches spread 33 types of bacteria (including Salmonella and E. coli), trigger asthma attacks, and can rapidly spread to adjacent units in multi-family homes.',
    whatWeOffer: [
      { title: 'Gel Bait Treatment', desc: 'Slow-kill bait that eliminates the colony' },
      { title: 'IGR Application', desc: 'Insect Growth Regulator stops reproduction' },
      { title: 'Crack & Crevice', desc: 'Targeted treatment of harborage areas' },
      { title: 'Follow-Up Visit', desc: 'Included with all cockroach services' },
    ],
    faqs: [
      { q: 'What type of cockroaches are most common in Nassau County?', a: 'German cockroaches are the most common indoor species, typically found in kitchens and bathrooms. American cockroaches (large, reddish-brown) are often found in basements and sewer systems. Both require professional treatment.' },
      { q: 'Why don\'t over-the-counter sprays work?', a: 'Most consumer sprays are repellent-based, which scatters cockroaches deeper into walls without killing the colony. Professional gel baits use slow-acting actives that cockroaches carry back to the nest, eliminating the entire population.' },
      { q: 'How long before I see results?', a: 'Most clients see a significant reduction in 5–7 days. Full elimination typically takes 2–3 weeks with our treatment protocol. A follow-up visit at 14 days is included.' },
    ],
  },
  'ant-exterminator': {
    name: 'Ant Exterminator',
    icon: '🐜',
    intro: 'Ants are the #1 nuisance pest call on Long Island. From odorous house ants in kitchens to carpenter ants tunneling through wood framing, Liberty Pest Pros identifies the species, finds the colony, and eliminates it — not just the ants you can see.',
    whyUrgent: 'Carpenter ants can cause significant structural damage over time, and ant trails inside your home signal an established colony that won\'t go away on its own.',
    whatWeOffer: [
      { title: 'Species Identification', desc: 'Different species require different treatments' },
      { title: 'Colony Elimination', desc: 'Baits and residuals targeting the source' },
      { title: 'Exterior Perimeter', desc: 'Barrier treatment prevents re-entry' },
      { title: 'Carpenter Ant Specialists', desc: 'Wood inspection & targeted treatment' },
    ],
    faqs: [
      { q: 'Why do I keep seeing ants inside even after spraying?', a: 'Consumer sprays kill the ants you see but don\'t reach the colony. Worse, repellent sprays can split a colony into multiple satellite nests, making the problem harder to eliminate. Professional gel baits and non-repellent treatments spread through the colony and eliminate it at the source.' },
      { q: 'What\'s the difference between carpenter ants and regular ants?', a: 'Carpenter ants are large (¼–½ inch), typically black, and excavate wood to build nests — they don\'t eat wood but their tunneling weakens structural members over time. Regular nuisance ants (pavement ants, odorous house ants) are smaller and are primarily after food. Both require professional treatment but different approaches.' },
      { q: 'When is ant season on Long Island?', a: 'Ant activity peaks in spring and summer, but carpenter ants can be active indoors year-round if they\'ve established a nest inside the structure. If you\'re seeing large black ants in winter, that\'s a strong sign of an interior nest.' },
    ],
  },
  'cricket-exterminator': {
    name: 'Cricket Exterminator',
    icon: '🦗',
    intro: 'Crickets invading basements, garages, and living spaces are a common late-summer and fall problem on Long Island. Liberty Pest Pros eliminates active infestations and treats entry points to stop them from coming back as temperatures drop.',
    whyUrgent: 'A few crickets quickly become dozens — they breed indoors and their constant chirping disrupts sleep. They also attract spiders and other predatory insects into your home.',
    whatWeOffer: [
      { title: 'Perimeter Treatment', desc: 'Residual barrier around foundation & entry points' },
      { title: 'Interior Treatment', desc: 'Targeted application in basements & crawl spaces' },
      { title: 'Exclusion Assessment', desc: 'Identify gaps and entry points' },
      { title: 'Seasonal Prevention', desc: 'Fall treatment before migration indoors' },
    ],
    faqs: [
      { q: 'Why are crickets coming into my house?', a: 'As temperatures drop in late summer and fall, crickets seek warm shelter and are drawn to light near doors and windows. Gaps under doors, foundation cracks, and utility penetrations are common entry points. They\'re especially common in basements and garages.' },
      { q: 'Are crickets harmful?', a: 'Crickets don\'t bite or sting humans, but they can damage fabrics, paper, and food products. More importantly, large cricket populations attract spiders, centipedes, and other predatory insects that feed on them — so a cricket problem can quickly become a broader pest problem.' },
      { q: 'How do I get rid of crickets permanently?', a: 'Perimeter treatment combined with sealing entry points is the most effective approach. A professional application in late summer before peak migration season can prevent the problem entirely. We offer seasonal prevention programs specifically for cricket control.' },
    ],
  },
  'bee-removal': {
    name: 'Bee & Wasp Removal',
    icon: '🐝',
    intro: 'Bees, wasps, hornets, and yellow jackets nesting on your property pose a serious sting risk — especially for those with allergies. Liberty Pest Pros safely removes active nests and treats nest sites to prevent rebuilding, covering everything from ground-level yellow jacket nests to aerial hornet nests in trees and eaves.',
    whyUrgent: 'Stinging insect nests grow throughout summer — a nest that\'s manageable in June can contain thousands of individuals by August. Early removal is always safer and less expensive.',
    whatWeOffer: [
      { title: 'Wasp & Hornet Removal', desc: 'Aerial nests in eaves, trees, and structures' },
      { title: 'Yellow Jacket Control', desc: 'Ground nests and wall void infestations' },
      { title: 'Bee Removal & Relocation', desc: 'Honey bee colonies preserved when possible' },
      { title: 'Nest Treatment', desc: 'Prevent rebuilding at treated locations' },
    ],
    faqs: [
      { q: 'What\'s the difference between bees and wasps?', a: 'Honey bees are typically docile, fuzzy, and make honey — we try to relocate their colonies rather than exterminate them. Wasps (yellow jackets, hornets, paper wasps) are smooth, more aggressive, and can sting multiple times. Both require professional handling near a structure.' },
      { q: 'Can I remove a wasp nest myself?', a: 'We strongly advise against it. Disturbing a nest without proper protective equipment can provoke a mass defensive response. Yellow jackets in particular are extremely aggressive when their nest is threatened. Professional removal is fast, affordable, and eliminates the risk entirely.' },
      { q: 'When is stinging insect season on Long Island?', a: 'Yellow jackets and wasps become most aggressive in August and September when colony populations peak and food sources decline. Nests are most visible in fall after leaves drop. Don\'t wait until peak season — treat nests as soon as they\'re discovered.' },
    ],
  },
};

const ALL_SERVICE_SLUGS = Object.keys(SERVICE_CONFIG);

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; slug: string; sub: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, slug: serviceSlug, sub: townSlug } = await params;
  const region = getRegion(regionSlug);
  const svc = SERVICE_CONFIG[serviceSlug];
  if (!region || !svc) return {};

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${svc.name} in ${townName}, NY | Liberty Pest Pros`,
    description: `Looking for a ${svc.name.toLowerCase()} in ${townName}? Liberty Pest Pros has served Nassau County since 1982. Same-day service available. Call (516) 763-4600 for a free quote.`,
    openGraph: {
      title: `${svc.name} in ${townName}, NY | Liberty Pest Pros`,
      description: `Professional ${svc.name.toLowerCase()} in ${townName}, Nassau County. Licensed since 1982. Same-day appointments. Call (516) 763-4600.`,
      url: `https://libertypestpros.com/${regionSlug}/${serviceSlug}/${townSlug}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Liberty Pest Pros',
      images: ['/og-image.png'],
    },
  };
}

// ─── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  return REGIONS.flatMap(region =>
    ALL_SERVICE_SLUGS.flatMap(service =>
      region.towns.map(town => ({
        region: region.slug,
        service,
        town: town.toLowerCase().replace(/\s+/g, '-'),
      }))
    )
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ServiceTownPage({
  params,
}: {
  params: Promise<{ region: string; slug: string; sub: string }>;
}) {
  const { region: regionSlug, slug: serviceSlug, sub: townSlug } = await params;

  const region = getRegion(regionSlug);
  if (!region) notFound();

  const svc = SERVICE_CONFIG[serviceSlug];
  if (!svc) notFound();

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isValidTown = region.towns.some(
    t => t.toLowerCase().replace(/\s+/g, '-') === townSlug
  );
  if (!isValidTown && region.towns.length > 0) notFound();

  const opener =
    TOWN_OPENERS[townSlug] ||
    `${BRAND.name} has served ${townName} and all of Nassau County since 1982. Our experienced technicians understand the pest challenges facing Long Island homes and businesses year-round.`;

  const layer7 = CITY_LAYER7[townSlug] || NASSAU_FALLBACK;
  const neighborhoods = layer7.neighborhoods || [];
  const nearbyTowns = layer7.nearbyTowns || [];

  // Service-specific FAQs + town-generic FAQs blended
  const genericFaqs = (layer7.cityFaqs || NASSAU_FALLBACK.cityFaqs || []).slice(0, 2);
  const combinedFaqs = [...svc.faqs, ...genericFaqs];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    telephone: `+1${BRAND.phone}`,
    url: `https://${BRAND.domain}`,
    image: `https://${BRAND.domain}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nassau County',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: townName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Nassau County, New York',
      },
    },
    description: `Professional ${svc.name.toLowerCase()} in ${townName}, Nassau County since 1982.`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: svc.name,
      itemListElement: svc.whatWeOffer.map(o => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o.title, description: o.desc },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: combinedFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href={`/${regionSlug}/`} className="hover:text-brand-primary">{region.name}</Link>
          {' → '}
          <Link href={`/${regionSlug}/${serviceSlug}/`} className="hover:text-brand-primary">{svc.name}</Link>
          {' → '}
          <span className="text-gray-900">{townName}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {svc.icon} {svc.name} in {townName}, NY
        </h1>

        {/* Trust bar */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Serving {townName} Since 1982
          </h2>
          <p className="text-blue-800 mb-4" dangerouslySetInnerHTML={{ __html: opener }} />
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Same-day service available</span>
            <span>✅ Nassau County licensed &amp; insured</span>
            <span>✅ Family-owned since 1982</span>
            <span>✅ Satisfaction guaranteed</span>
          </div>
        </div>

        {/* Service intro */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{svc.name} in {townName}</h2>
          <p className="text-gray-700 mb-4">{svc.intro}</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 font-medium">⚠️ {svc.whyUrgent}</p>
          </div>
        </div>

        {/* What we offer */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer in {townName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {svc.whatWeOffer.map(o => (
            <div key={o.title} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="font-bold text-gray-900 text-sm mb-1">{o.title}</div>
              <div className="text-xs text-gray-500">{o.desc}</div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Need a {svc.name} in {townName}?
          </h2>
          <p className="text-blue-100 mb-4">
            Same-day appointments available. Family-owned. Nassau County&apos;s trusted choice since 1982.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${regionSlug}/contact/`}
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:+1${BRAND.phone}`}
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions — {svc.name} in {townName}
        </h2>
        <div className="space-y-4 mb-10">
          {combinedFaqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Neighborhoods */}
        {neighborhoods.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Neighborhoods We Serve in {townName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map(n => (
                <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{n}</span>
              ))}
            </div>
          </div>
        )}

        {/* Nearby towns with service links */}
        {nearbyTowns.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Also Serving Nearby Nassau County Communities
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map(t => (
                <Link
                  key={t}
                  href={`/${regionSlug}/${serviceSlug}/${t.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal links */}
        <div className="text-sm text-gray-500 space-x-3">
          <Link href={`/${regionSlug}/${townSlug}/`} className="hover:underline text-brand-primary">
            ← All Services in {townName}
          </Link>
          <span>|</span>
          <Link href={`/${regionSlug}/${serviceSlug}/`} className="hover:underline text-brand-primary">
            {svc.name} in Nassau County
          </Link>
          <span>|</span>
          <Link href={`/${regionSlug}/`} className="hover:underline text-brand-primary">
            {region.name} Overview
          </Link>
          <span>|</span>
          <Link href="/blog/" className="hover:underline text-brand-primary">
            Pest Control Tips
          </Link>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
