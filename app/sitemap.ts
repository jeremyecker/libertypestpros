import { MetadataRoute } from 'next';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

  for (const region of REGIONS) {
    const regionBase = `${base}/${region.slug}`;
    entries.push(
      { url: `${regionBase}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${regionBase}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${regionBase}/service-areas/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${regionBase}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
      { url: `${regionBase}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    );

    for (const service of SERVICES) {
      entries.push({
        url: `${regionBase}/services/${service.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    for (const town of region.towns) {
      const townSlug = town.toLowerCase().replace(/\s+/g, '-');
      entries.push({
        url: `${regionBase}/${townSlug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Top-level lead capture pages
  const TOP_LEVEL_LEAD_SLUGS = ['pest-control-near-me', 'exterminator-near-me', 'emergency-pest-control', 'same-day-pest-control', 'bed-bug-exterminator', 'free-pest-inspection'];
  for (const slug of TOP_LEVEL_LEAD_SLUGS) {
    entries.push({ url: `${base}/${slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 });
  }

  // Lead capture pages
  const LEAD_CAPTURE_SLUGS = ['pest-control-near-me', 'exterminator-near-me', 'emergency-pest-control', 'same-day-pest-control', 'bed-bug-exterminator', 'free-pest-inspection'];
  for (const slug of LEAD_CAPTURE_SLUGS) {
    entries.push({ url: `${base}/nassau/${slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 });
  }

  // Commercial verticals
  const COMMERCIAL_SLUGS = ['restaurants','offices','retail','healthcare','schools','warehouses','hotels','property-management','food-processing','daycare'];
  entries.push({ url: `${base}/nassau/commercial/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  for (const slug of COMMERCIAL_SLUGS) {
    entries.push({ url: `${base}/nassau/commercial/${slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
  }

  entries.push({
    url: `${base}/blog/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
