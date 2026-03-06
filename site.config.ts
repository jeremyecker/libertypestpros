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

export const PHONE = '(516) 766-4433';
export const PHONE_RAW = '+15167664433';
export const PHONE_HREF = 'tel:+15167664433';

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
    author: 'Long-Time Customer',
    location: 'Nassau County, NY',
    rating: 5,
    date: '2024-10-12',
    text: "My family has used Liberty Pest Pros for over 15 years. Three generations of their family have taken care of our home, and the quality has never wavered. They're honest, thorough, and always go the extra mile. This is what family-owned business should look like.",
  },
  {
    author: 'South Shore Resident',
    location: 'Nassau County, NY',
    rating: 5,
    date: '2024-09-25',
    text: "We had a terrible carpenter ant problem that two other companies couldn't solve. Liberty Pest Pros came in, identified the satellite nests in our wall voids, and eliminated the entire colony. They've been monitoring quarterly ever since. Problem solved for good.",
  },
  {
    author: 'New Neighbor',
    location: 'Nassau County, NY',
    rating: 5,
    date: '2024-08-15',
    text: "Just moved to the area and our neighbors all recommended Liberty. Now I know why — they're responsive, knowledgeable, and their treatments actually work. The technician took the time to explain everything and gave us prevention tips. Great experience from start to finish.",
  },
] as const;

export const NETWORK_SITES = [] as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
