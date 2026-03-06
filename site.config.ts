/**
 * ============================================================
 * SITE CONFIGURATION — Liberty Pest Pros
 * ============================================================
 * This is the ONLY file that changes between sites.
 * All components read from here.
 * ============================================================
 */

export const SITE_ID = 'liberty';
export const SITE_NAME = 'Liberty Pest Pros';
export const SITE_DOMAIN = 'libertypestpros.com';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://libertypestpros.com';
export const SITE_TAGLINE = 'Family-Owned Pest Control Since 1982 — Nassau County, Long Island';
export const SITE_DESCRIPTION = 'Family-owned pest control serving Nassau County since 1982. Over 43 years of experience. Licensed, insured, and natural treatments. Free estimates, satisfaction guaranteed.';
export const EMAIL = 'info@libertypestpros.com';

export const SITE = {
  name: 'Liberty Pest Pros',
  id: 'liberty',
} as const;

export const PHONE = '(516) 763-4600';
export const PHONE_RAW = '+15167634600';
export const PHONE_HREF = 'tel:+15167634600';

export const GEO = {
  county: 'Nassau',
  countyFull: 'Nassau County',
  state: 'New York',
  stateCode: 'NY',
  region: 'Nassau County, Long Island',
  totalTowns: 65,
  latitude: 0,
  longitude: 0,
} as const;

export const REGIONS = [
  { name: 'Nassau County', slug: 'nassau', townCount: 65 },
] as const;

export const BRAND = {
  primaryColor: '#1B3D6F',
  secondaryColor: '#2A5C99',
  accentColor: '#C0392B',
  darkColor: '#1A1A2E',
  lightBg: '#EBF0FA',
  white: '#FFFFFF',
} as const;

export const PEST_OPTIONS = [
  'Ants',
  'Bed Bugs',
  'Cockroaches',
  'Fleas & Ticks',
  'Mice / Rats',
  'Mosquitoes',
  'Spiders',
  'Termites',
  'Wasps / Hornets',
  'Wildlife',
  'Other',
] as const;

export const SERVICES = [
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜', description: 'Keep ants out of your kitchen and away from your family. Effective, family-friendly treatments.' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵', description: 'Protect your biggest investment. Expert termite inspections and treatment.' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️', description: 'Help your family sleep easy again. Thorough bed bug removal using proven treatments.' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀', description: "Mice and rats don\'t belong near your family. We remove them and seal entry points." },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳', description: 'Complete cockroach elimination that protects your family and home.' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟', description: 'Take back your backyard. Family-friendly mosquito treatments for outdoor enjoyment.' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️', description: 'No more surprises in the basement or garage. Thorough spider removal for your whole home.' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝', description: "Protect your family from stinging insects. We\'ll remove nests from your property." },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗', description: 'Protect your family and pets. Professional flea and tick control for home and yard.' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝', description: 'Raccoons in the attic? Humane removal that protects your family.' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢', description: 'Customized pest management for businesses. Discreet, reliable, effective.' },
] as const;

export const GMB = {
  placeId: '',
  profileUrl: '',
  rating: 4.9,
  reviewsEnabled: true,
} as const;

export const TRUST_STATS = [
  { icon: '🤝', value: 'Thousands', label: 'Of Happy Customers' },
  { icon: '⚡', value: 'Same Day', label: 'Next Day Service' },
  { icon: '🔒', value: 'Discreet', label: 'Services' },
  { icon: '🔬', value: 'Expert', label: 'Analysis & Delivery' },
  { icon: '📞', value: 'High-Level', label: 'Communication' },
  { icon: '✅', value: 'Licensed', label: '& Insured' },
] as const;

export const LEAD_ROUTING = {
  defaultRoute: 'SS',
  webhookUrl: '',
} as const;

export const SEO = {
  titleTemplate: (pageTitle: string) => `${pageTitle} | Liberty Pest Pros`,
  defaultTitle: 'Liberty Pest Pros | Family-Owned Exterminators in Nassau County Since 1982',
  defaultDescription: SITE_DESCRIPTION,
  ogImage: '/images/og-default.jpg',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: 'Ant Control', href: '/services/ant-control' },
    { label: 'Termite Treatment', href: '/services/termite-treatment' },
    { label: 'Bed Bug Removal', href: '/services/bed-bug-removal' },
    { label: 'Rodent Control', href: '/services/rodent-control' },
    { label: 'Cockroach Control', href: '/services/cockroach-control' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const HOURS = {
  weekday: '7:00 AM – 7:00 PM',
  saturday: '7:00 AM – 5:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Emergency Service Available',
} as const;

export const REVIEWS = [
  {
    name: "Lourdes M.",
    rating: 5,
    text: "Deya is great, she does her job thoroughly, is very friendly and courteous. She always solicits information when she comes to understand where I am having problems with insects. She then takes thorough action to address it. She takes her time unlike other exterminators that rush in and out and barely do anything.",
    date: "3 months ago",
    source: "Google"
  },
  {
    name: "Nick W.",
    rating: 5,
    text: "I contacted Liberty Pest Pros about a rodent problem and from the beginning they were caring and concerned and responsive. They worked to get an inspection set and treatment plan very quickly. Jim who conducted the inspection was very thorough.",
    date: "1 day ago",
    source: "Google"
  },
  {
    name: "Lisa A.",
    rating: 5,
    text: "Very professional and took time to consider our issue and considered the dogs as well. Even helped clean up old sticky traps!",
    date: "1 day ago",
    source: "Google"
  },
  {
    name: "Evan C.",
    rating: 5,
    text: "Had Khaleeb come to our property due to an animal getting into the crawl space between our first and second floor. He was thorough and professional. Would definitely recommend!",
    date: "1 week ago",
    source: "Google"
  },
  {
    name: "Alyssa C.",
    rating: 5,
    text: "Jim came by today to check our termite traps. He was very kind and friendly! We had a concern about a specific spot outside. He was very knowledgeable and helped put our minds at ease.",
    date: "3 months ago",
    source: "Google"
  },
  {
    name: "Tara G.",
    rating: 5,
    text: "I called with an ant issue they came the next morning. The techs were very thorough and addressed the problem!",
    date: "Recently",
    source: "Google"
  }
] as const;

export const NETWORK_SITES = [] as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
