import { MetadataRoute } from 'next';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

  // Individual service pages
  for (const service of SERVICES) {
    entries.push({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const region of REGIONS) {
    const regionBase = `${base}/${region.slug}`;
    entries.push(
      { url: regionBase, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${regionBase}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${regionBase}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${regionBase}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
      { url: `${regionBase}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    );

    for (const service of SERVICES) {
      entries.push({
        url: `${regionBase}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    for (const town of region.towns) {
      const townSlug = town.toLowerCase().replace(/\s+/g, '-');
      entries.push({
        url: `${regionBase}/${townSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Top-level lead capture pages
  const TOP_LEVEL_LEAD_SLUGS = ['pest-control-near-me', 'exterminator-near-me', 'emergency-pest-control', 'same-day-pest-control', 'bed-bug-exterminator', 'free-pest-inspection'];
  for (const slug of TOP_LEVEL_LEAD_SLUGS) {
    entries.push({ url: `${base}/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 });
  }

  // Lead capture pages
  const LEAD_CAPTURE_SLUGS = ['pest-control-near-me', 'exterminator-near-me', 'emergency-pest-control', 'same-day-pest-control', 'bed-bug-exterminator', 'free-pest-inspection'];
  for (const slug of LEAD_CAPTURE_SLUGS) {
    entries.push({ url: `${base}/nassau/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 });
  }

  // Static pages
  entries.push(
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  );

  // Commercial verticals
  const COMMERCIAL_SLUGS = ['restaurants','offices','retail','healthcare','schools','warehouses','hotels','property-management','food-processing','daycare'];
  entries.push({ url: `${base}/nassau/commercial`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  for (const slug of COMMERCIAL_SLUGS) {
    entries.push({ url: `${base}/nassau/commercial/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
  }

  entries.push({
    url: `${base}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Regional service hub pages (e.g. /nassau/raccoon-removal)
  const REGIONAL_SERVICE_SLUGS = [
    'bed-bug-exterminator',
    'rodent-control',
    'raccoon-removal',
    'squirrel-removal',
    'wildlife-removal',
    'termite-control',
    'cockroach-exterminator',
    'ant-exterminator',
    'cricket-exterminator',
    'bee-removal',
  ];
  for (const region of REGIONS) {
    for (const slug of REGIONAL_SERVICE_SLUGS) {
      entries.push({
        url: `${base}/${region.slug}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Service+town pages (10 services × all towns)
  const SERVICE_SLUGS = [
    'bed-bug-exterminator',
    'raccoon-removal',
    'rodent-control',
    'squirrel-removal',
    'wildlife-removal',
    'termite-control',
    'cockroach-exterminator',
    'ant-exterminator',
    'cricket-exterminator',
    'bee-removal',
  ];
  entries.push(
    ...REGIONS.flatMap((region: { slug: string; towns: string[] }) =>
      SERVICE_SLUGS.flatMap(service =>
        region.towns.map((town: string) => ({
          url: `${base}/${region.slug}/${service}/${town.toLowerCase().replace(/\s+/g, '-')}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        }))
      )
    )
  );

  return entries;
}
