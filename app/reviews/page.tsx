import type { Metadata } from 'next';
import { GEO, SITE_NAME, GMB } from '@/site.config';
import { generatePageMetadata, localBusinessSchema } from '@/lib/seo';
import Schema from '@/components/seo/Schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CTABanner from '@/components/sections/CTABanner';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = generatePageMetadata({
  title: `Reviews — ${GMB.rating} Stars`,
  description: `Read real reviews from homeowners across ${GEO.region}. ${SITE_NAME} is rated ${GMB.rating}/5 with verified Google reviews.`,
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <Schema data={localBusinessSchema()} />
      <Breadcrumbs items={[{ label: 'Reviews' }]} />
      <h1 className="sr-only">Customer Reviews — Liberty Pest Pros</h1>
      <TrustBar />
      <ReviewsSection limit={6} title={`Real Reviews from ${GEO.region} Homeowners`} />
      <CTABanner />
    </>
  );
}
