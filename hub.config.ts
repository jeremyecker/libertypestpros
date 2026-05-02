// hub.config.ts — Liberty Pest Pros
// Everything else reads from here.

// ============================================================
// TEMPLATE METADATA
// ============================================================
export const TEMPLATE_META = {
  vertical: 'pest',
  geoLevel: 'regional-hub',
} as const;

export const BRAND = {
  name: 'Liberty Pest Pros',
  tagline: 'Family-Owned Pest Control Since 1982 — Nassau County, Long Island',
  domain: 'libertypestpros.com',
  phone: '5167634600',
  phoneFormatted: '(516) 763-4600',
  email: 'info@libertypestpros.com',
  primaryColor: '#1B3D6F',
  secondaryColor: '#2A5C99',
  accentColor: '#C0392B',
  yearFounded: 1982,
  region: 'Nassau County, Long Island',
  webhookUrl: 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-libertypestpros',
} as const;

// ============================================================
// GMBs — add as acquired
// ============================================================
export const GMBS = [] as GMBEntry[];

// ============================================================
// REVIEWS
// ============================================================
export const REVIEWS = [
  {
    name: 'Lourdes M.',
    location: 'Oceanside, NY',
    rating: 5,
    text: "Deya is great, she does her job thoroughly, is very friendly and courteous. She always solicits information when she comes to understand where I am having problems with insects. She then takes thorough action to address it. She takes her time unlike other exterminators that rush in and out and barely do anything.",
  },
  {
    name: 'Nick W.',
    location: 'Nassau County, NY',
    rating: 5,
    text: "I contacted Liberty Pest Pros about a rodent problem and from the beginning they were caring and concerned and responsive. They worked to get an inspection set and treatment plan very quickly. Jim who conducted the inspection was very thorough.",
  },
  {
    name: 'Lisa A.',
    location: 'Long Beach, NY',
    rating: 5,
    text: "Very professional and took time to consider our issue and considered the dogs as well. Even helped clean up old sticky traps!",
  },
  {
    name: 'Evan C.',
    location: 'Nassau County, NY',
    rating: 5,
    text: "Had Khaleeb come to our property due to an animal getting into the crawl space between our first and second floor. He was thorough and professional. Would definitely recommend!",
  },
  {
    name: 'Alyssa C.',
    location: 'Nassau County, NY',
    rating: 5,
    text: "Jim came by today to check our termite traps. He was very kind and friendly! We had a concern about a specific spot outside. He was very knowledgeable and helped put our minds at ease.",
  },
  {
    name: 'Tara G.',
    location: 'Nassau County, NY',
    rating: 5,
    text: "I called with an ant issue they came the next morning. The techs were very thorough and addressed the problem!",
  },
];

// ============================================================
// REGIONS — Nassau (single region)
// ============================================================
const NASSAU_TOWNS = [
  'Albertson', 'Alden Manor', 'Amityville', 'Atlantic Beach', 'Baldwin', 'Baldwin Harbor',
  'Barnum Island', 'Bay Park', 'Bayville', 'Bellmore', 'Bethpage', 'Brookville',
  'Carle Place', 'Cedarhurst', 'Centre Island', 'Cold Spring Harbor', 'Cove Neck', 'East Atlantic Beach',
  'East Garden City', 'East Hills', 'East Massapequa', 'East Meadow', 'East Norwich', 'East Rockaway',
  'East Williston', 'Elmont', 'Farmingdale', 'Floral Park', 'Flower Hill', 'Franklin Square',
  'Freeport', 'Garden City', 'Garden City Park', 'Garden City South', 'Glen Cove', 'Glen Head',
  'Glenwood Landing', 'Great Neck', 'Great Neck Estates', 'Great Neck Gardens', 'Great Neck Plaza', 'Greenvale',
  'Harbor Hills', 'Harbor Isle', 'Hempstead', 'Herricks', 'Hewlett', 'Hewlett Bay Park',
  'Hewlett Harbor', 'Hewlett Neck', 'Hicksville', 'Inwood', 'Island Park', 'Jericho',
  'Kensington', 'Kings Point', 'Lake Success', 'Lawrence', 'Levittown', 'Lido Beach',
  'Locust Valley', 'Long Beach', 'Lynbrook', 'Malverne', 'Malverne Park Oaks', 'Manhasset',
  'Manhasset Hills', 'Massapequa', 'Massapequa Park', 'Matinecock', 'Merrick', 'Mill Neck',
  'Mineola', 'Muttontown', 'New Cassel', 'New Hyde Park', 'North Bellmore', 'North Hills',
  'North Lynbrook', 'North Massapequa', 'North Merrick', 'North New Hyde Park', 'North Valley Stream', 'North Woodmere',
  'Northwest Harbor', 'Oceanside', 'Old Bethpage', 'Old Westbury', 'Oyster Bay', 'Oyster Bay Cove',
  'Plainview', 'Plandome', 'Plandome Heights', 'Plandome Manor', 'Point Lookout', 'Port Washington',
  'Port Washington North', 'Rockville Centre', 'Roosevelt', 'Roslyn', 'Roslyn Estates', 'Roslyn Harbor',
  'Roslyn Heights', 'Russell Gardens', 'Saddle Rock', 'Saddle Rock Estates', 'Salisbury', 'Sands Point',
  'Sea Cliff', 'Seaford', 'Searingtown', 'South Farmingdale', 'South Floral Park', 'South Hempstead',
  'South Lynbrook', 'South Merrick', 'South Valley Stream', 'Stewart Manor', 'Syosset', 'Thomaston',
  'Uniondale', 'University Gardens', 'Upper Brookville', 'Valley Stream', 'Wantagh', 'West Hempstead',
  'West Hills', 'Westbury', 'Williston Park', 'Woodbury', 'Woodmere', 'Woodsburgh'
];

export const REGIONS: RegionConfig[] = [
  {
    slug: 'nassau',
    name: 'Nassau County',
    shortName: 'Nassau',
    stateName: 'New York',
    stateCode: 'NY',
    isPrimary: true,
    gmbId: null,
    counties: ['Nassau County'],
    heroHeadline: 'Nassau County Pest Control — Trusted Since 1982',
    heroSubhead: 'Family-owned exterminators serving Oceanside, Hempstead, Garden City, Long Beach, and all of Nassau County.',
    heroImage: '/images/nassau-hero.jpg',
    geoDescription: "From the South Shore beaches to the North Shore Gold Coast, Nassau County homes face year-round pest pressure from termites, rodents, ants, and mosquitoes.",
    primaryPests: ['Termites', 'Rodents', 'Ants', 'Mosquitoes'],
    pestContext: "Nassau County's dense suburban communities, coastal climate, and mix of older and newer homes create ideal conditions for termites, rodents, ants, and mosquitoes year-round.",
    metaTitle: 'Nassau County Exterminators',
    metaDescription: 'Family-owned pest control for Nassau County since 1982. Serving Oceanside, Hempstead, Garden City & 65 communities. Natural treatments, proven results.',
    towns: NASSAU_TOWNS,
    townCount: NASSAU_TOWNS.length,
  },
];

// ============================================================
// TOWN ARRAYS
// ============================================================


// ============================================================
// NETWORK SITES — sister sites for cross-linking
// ============================================================
export const NETWORK_SITES: NetworkSite[] = [
  { name: 'Suffolk County Pest Control', url: 'https://suffolkcountypestcontrol.com', description: 'Suffolk County, NY pest control experts', emoji: '\uD83D\uDC1B' },
  { name: 'Nassau County Pest Control', url: 'https://nassaucountypestcontrol.net', description: 'Nassau County, NY pest control services', emoji: '\uD83D\uDEE1\uFE0F' },
  { name: 'Quest Pest Control', url: 'https://questpest.net', description: 'Suffolk, Nassau & Queens exterminators', emoji: '\uD83C\uDFAF' },
  { name: 'Queens Pest Control', url: 'https://queenscountypestcontrol.com', description: 'Queens, NY pest control specialists', emoji: '\uD83C\uDFD9\uFE0F' },
  { name: 'Brooklyn Pest Control', url: 'https://brooklynnycpestcontrol.com', description: 'Brooklyn, NY pest control services', emoji: '\uD83C\uDF09' },
  { name: 'Bronx Pest Control', url: 'https://bronxcountypestcontrol.com', description: 'Bronx, NY pest control experts', emoji: '\uD83E\uDD81' },
  { name: 'Manhattan Pest Control', url: 'https://manhattanpestcontrolnearme.com', description: 'Manhattan, NY pest control services', emoji: '\uD83D\uDDFD' },
  { name: 'NYC Pest Control', url: 'https://nycpestcontrolnearme.com', description: 'New York City pest control services', emoji: '\uD83C\uDFE2' },
  { name: 'Wildlife NY', url: 'https://wildlifeny.com', description: 'NY wildlife removal specialists', emoji: '\uD83E\uDD9D' },
  { name: 'The Bed Bug Inspectors', url: 'https://thebedbuginspectors.com', description: 'Bed bug specialists \u2014 inspections & treatment', emoji: '\uD83D\uDECF\uFE0F' },
  { name: 'Jet Pest Control', url: 'https://jetpestcontrol.com', description: 'Fast, reliable pest control services', emoji: '\u2708\uFE0F' },
  { name: 'BluesWay Pest Control', url: 'https://blueswaypestcontrol.com', description: 'Professional pest control services', emoji: '\uD83C\uDFB5' },
  { name: 'The Bugs Stop Here', url: 'https://thebugsstophere.com', description: 'Stop pests in their tracks', emoji: '\uD83D\uDED1' },
];

// ============================================================
// SERVICE×TOWN ROUTES — for internal linking
// ============================================================
export const SERVICE_TOWN_ROUTES = [
  { name: 'Bed Bug Exterminator', slug: 'bed-bug-exterminator', icon: '🛏️' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐭' },
  { name: 'Raccoon Removal', slug: 'raccoon-removal', icon: '🦝' },
  { name: 'Squirrel Removal', slug: 'squirrel-removal', icon: '🐿️' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦌' },
  { name: 'Termite Control', slug: 'termite-control', icon: '🪲' },
  { name: 'Cockroach Exterminator', slug: 'cockroach-exterminator', icon: '🪳' },
  { name: 'Ant Exterminator', slug: 'ant-exterminator', icon: '🐜' },
  { name: 'Cricket Exterminator', slug: 'cricket-exterminator', icon: '🦗' },
  { name: 'Bee & Wasp Removal', slug: 'bee-removal', icon: '🐝' },
] as const;

// ============================================================
// TYPES
// ============================================================
export interface GMBEntry {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  placeId: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
}

export interface RegionConfig {
  slug: string;
  name: string;
  shortName: string;
  stateName: string;
  stateCode: string;
  isPrimary: boolean;
  gmbId: string | null;
  counties: string[];
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  geoDescription: string;
  primaryPests: string[];
  pestContext: string;
  metaTitle: string;
  metaDescription: string;
  towns: string[];
  townCount: number;
}

export interface NetworkSite {
  name: string;
  url: string;
  description: string;
  emoji: string;
}
