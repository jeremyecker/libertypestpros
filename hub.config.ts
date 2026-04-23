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
  phone: '5167664433',
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
    name: 'Happy Client',
    location: 'Oceanside, NY',
    rating: 5,
    text: "An excellent pest control service. They are responsive, knowledgeable, professional and understanding. Marty is a great service technician and is always prompt and courteous. A great company!",
  },
  {
    name: 'Satisfied Customer',
    location: 'Nassau County, NY',
    rating: 5,
    text: "I have literally no complaints! Everyone I've come in contact with has been incredibly helpful and well informed, and Andrew gave me quick and efficient service. Definitely using them for the foreseeable future!",
  },
  {
    name: 'Long Island Homeowner',
    location: 'Long Beach, NY',
    rating: 5,
    text: "Andrew was such a pleasure to work with. Made the process painless, explained everything he was doing, and made sure we knew how to get ahold of the company for any follow up, if necessary. I would highly recommend!",
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
export const NETWORK_SITES: NetworkSite[] = [];

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
