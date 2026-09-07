import type { Metadata } from 'next';
import { GEO, SITE_NAME, PHONE, PHONE_HREF, GMB } from '@/site.config';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: `About Us — Family-Owned Since 1982`,
  description: `${SITE_NAME} has protected Nassau County homes since 1982. Family-owned, ${GMB.rating}-star rated, licensed & insured. Free estimates.`,
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
            Nassau County since 1982. For more than {new Date().getFullYear() - 1982} years, we&apos;ve been
            the neighbors you call when pests show up uninvited. We&apos;re not a franchise
            and we&apos;re not a call center — we&apos;re a local family business that has
            earned the trust of Nassau County families for more than four decades. That&apos;s why we
            carry a {GMB.rating}-star rating from the communities we serve. Locally owned and operated — a Rest Easy Pest Control brand.
          </p>

          <h2>Our Story</h2>
          <p>
            When we started {SITE_NAME} in 1982, the South Shore was a different place — but
            the pests were the same. Ants in the kitchen, mice in the garage, wasps building
            nests under the eaves. For more than {new Date().getFullYear() - 1982} years, we&apos;ve stayed true to the same principle
            that got us started: treat every home like it belongs to family.
          </p>
          <p>
            Three generations later, that hasn&apos;t changed. Our technicians are trained by
            people who&apos;ve been doing this for decades. We use the latest EPA-registered
            products and Integrated Pest Management techniques — but the personal touch?
            That&apos;s old school, and we wouldn&apos;t have it any other way.
          </p>

          <h2>Why South Shore Families Choose Us</h2>
          <ul>
            <li>
              <strong>{new Date().getFullYear() - 1982} years of local knowledge:</strong> We&apos;ve been working Nassau
              County&apos;s South Shore since before many of our customers were born. We know
              every pest pattern, every seasonal surge, every trouble spot — from the waterfront
              homes in Long Beach to the tree-lined streets of Rockville Centre. This is
              home-turf expertise you can&apos;t get from a national chain.
            </li>
            <li>
              <strong>Family-friendly, always:</strong> With more than four decades of experience, we know which
              treatments work best for homes with kids and pets. Every product we use is selected
              with your family&apos;s safety as the number one priority. We&apos;ll explain
              everything — what we&apos;re using, why, and when it&apos;s clear for your family
              to return to treated areas.
            </li>
            <li>
              <strong>Same-day service when you need it:</strong> When you find carpenter ants
              in the bathroom or a wasp nest over the back door, you don&apos;t want to wait
              until Thursday. We offer same-day service availability because we know pest
              emergencies don&apos;t keep business hours.
            </li>
            <li>
              <strong>Honest, fair pricing:</strong> After more than four decades, our reputation is everything.
              That&apos;s why we provide free estimates, clear pricing, and no hidden fees. We&apos;ll
              never upsell you on a service you don&apos;t need. What we quote is what you pay.
            </li>
            <li>
              <strong>We provide a written service agreement on every job:</strong> your technician
              will explain the applicable terms before treatment begins. Call us
              directly and a family member will make sure things are right.
            </li>
          </ul>

          <h2>Serving All of Nassau County — {GEO.totalTowns} Communities</h2>
          <p>
            From the oceanfront homes of Atlantic Beach to the quiet neighborhoods of Wantagh,
            from the village charm of Lynbrook to the family streets of Seaford — we serve all
            {GEO.totalTowns} communities across Nassau County. We know these communities because
            we live here too. Wherever you call home on the South Shore, {SITE_NAME} is just
            a phone call away.
          </p>

          <h2>Let Us Help</h2>
          <p>
            Whether you&apos;ve noticed something worrying or you just want the peace of mind
            that comes from more than four decades of experience, give us a call at{' '}
            <a href={PHONE_HREF} className="font-bold">{PHONE}</a>. We&apos;ll listen, give
            you honest advice, and give you a clear price over the phone if you&apos;d like one.
            No pressure, no obligation — just the kind of service a family business is built on.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Home?"
        subtitle="More than four decades of family-owned pest control in Nassau County. Free estimates and honest advice."
      />
    </>
  );
}
