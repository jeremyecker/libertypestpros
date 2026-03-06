import type { Metadata } from 'next';
import { GEO, SITE_NAME, PHONE, PHONE_HREF, GMB } from '@/site.config';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: `About Us — Family-Owned Since 1982`,
  description: `${SITE_NAME} has been protecting Nassau County homes for over 43 years. Family-owned and operated since 1982. ${GMB.rating} stars from verified families. Licensed & insured.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <TrustBar />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 prose-content">
          <h1 className="heading-1 mb-6">Family-Owned Since 1982 — Three Generations of Trust</h1>

          <p className="text-lg text-gray-600 mb-8">
            {SITE_NAME} is a family-owned pest control company that&apos;s been protecting
            Nassau County&apos;s South Shore since 1982. For over 43 years, we&apos;ve been
            the neighbors you call when pests show up uninvited. We&apos;re not a franchise
            and we&apos;re not a call center — we&apos;re a local family business that has
            earned the trust of thousands of families just like yours. That&apos;s why we
            carry a {GMB.rating}-star rating from the communities we serve.
          </p>

          <h2>Our Story</h2>
          <p>
            When we started {SITE_NAME} in 1982, the South Shore was a different place — but
            the pests were the same. Ants in the kitchen, mice in the garage, wasps building
            nests under the eaves. For 43 years, we&apos;ve stayed true to the same principle
            that got us started: treat every home like it belongs to family.
          </p>
          <p>
            Three generations later, that hasn&apos;t changed. Our technicians are trained by
            people who&apos;ve been doing this for decades. We use the latest EPA-approved
            products and Integrated Pest Management techniques — but the personal touch?
            That&apos;s old school, and we wouldn&apos;t have it any other way.
          </p>

          <h2>Why South Shore Families Choose Us</h2>
          <ul>
            <li>
              <strong>43 years of local knowledge:</strong> We&apos;ve been working Nassau
              County&apos;s South Shore since before many of our customers were born. We know
              every pest pattern, every seasonal surge, every trouble spot — from the waterfront
              homes in Long Beach to the tree-lined streets of Rockville Centre. This is
              home-turf expertise you can&apos;t get from a national chain.
            </li>
            <li>
              <strong>Family-safe, always:</strong> With 43 years of experience, we know which
              treatments work best for homes with kids and pets. Every product we use is selected
              with your family&apos;s safety as the number one priority. We&apos;ll explain
              everything — what we&apos;re using, why, and when it&apos;s safe for your family
              to return to treated areas.
            </li>
            <li>
              <strong>Same-day service when you need it:</strong> When you find carpenter ants
              in the bathroom or a wasp nest over the back door, you don&apos;t want to wait
              until Thursday. We offer same-day service availability because we know pest
              emergencies don&apos;t keep business hours.
            </li>
            <li>
              <strong>Honest, fair pricing:</strong> After 43 years, our reputation is everything.
              That&apos;s why we provide free estimates, clear pricing, and no hidden fees. We&apos;ll
              never upsell you on a service you don&apos;t need. What we quote is what you pay.
            </li>
            <li>
              <strong>We stand behind every job:</strong> If a problem comes back, so do we.
              Our guarantee is simple: we&apos;re not done until you&apos;re satisfied. Call us
              directly and a family member will make sure things are right.
            </li>
          </ul>

          <h2>Serving Nassau County&apos;s South Shore — All 65 Towns</h2>
          <p>
            From the oceanfront homes of Atlantic Beach to the quiet neighborhoods of Wantagh,
            from the village charm of Lynbrook to the family streets of Seaford — we serve all
            65 towns across Nassau County&apos;s South Shore. We know these communities because
            we live here too. Wherever you call home on the South Shore, {SITE_NAME} is just
            a phone call away.
          </p>

          <h2>Let Us Help</h2>
          <p>
            Whether you&apos;ve noticed something worrying or you just want the peace of mind
            that comes from 43 years of experience, give us a call at{' '}
            <a href={PHONE_HREF} className="font-bold">{PHONE}</a>. We&apos;ll listen, give
            you honest advice, and send someone out for a free estimate if you&apos;d like one.
            No pressure, no obligation — just the kind of service a family business is built on.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Home?"
        subtitle="43 years of family-owned pest control on Nassau County's South Shore. Free estimates, honest advice, guaranteed results."
      />
    </>
  );
}
