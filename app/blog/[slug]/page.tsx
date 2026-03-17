import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, GEO } from '@/site.config';
import { generatePageMetadata, articleSchema } from '@/lib/seo';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-posts';
import Schema from '@/components/seo/Schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CTABanner from '@/components/sections/CTABanner';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

// Keep meta title ≤ 60 chars including " | Liberty Pest Pros" (19 chars).
// Split at natural break points (colon, dash, comma) before falling back to
// word-boundary truncation so every post gets a clean, keyword-first title.
function shortTitle(raw: string): string {
  const MAX = 41; // 60 - 19
  if (raw.length <= MAX) return raw;
  const firstClause = raw.split(/[:|—–,]/)[0].trim();
  if (firstClause.length <= MAX && firstClause.length >= 15) return firstClause;
  return raw.substring(0, MAX).replace(/\s\S*$/, '');
}

// Keep meta description ≤ 155 chars, trim at sentence/word boundary.
function shortDesc(raw: string): string {
  if (raw.length <= 155) return raw;
  const trimmed = raw.substring(0, 152);
  const lastSpace = trimmed.lastIndexOf(' ');
  return (lastSpace > 100 ? trimmed.substring(0, lastSpace) : trimmed) + '…';
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: shortTitle(post.title),
    description: shortDesc(post.excerpt),
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Schema
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          date: post.date,
          author: post.author,
        })}
      />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Post Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h1 className="heading-1 mb-4">{post.title}</h1>
                <p className="text-lg text-gray-600">{post.excerpt}</p>
              </header>

              {/* Hero Image */}
              {(post.image) && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              )}


              {/* Post Content */}
              <div className="prose-content">
                {post.content.split('\n').map((paragraph, i) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith('## ')) {
                    return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
                  }
                  if (trimmed.startsWith('### ')) {
                    return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
                  }
                  if (trimmed.startsWith('- **')) {
                    return (
                      <p key={i} className="ml-4" dangerouslySetInnerHTML={{
                        __html: '• ' + trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:underline">$1</a>')
                      }} />
                    );
                  }
                  if (trimmed.match(/^\d+\./)) {
                    return (
                      <p key={i} className="ml-4" dangerouslySetInnerHTML={{
                        __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:underline">$1</a>')
                      }} />
                    );
                  }
                  return (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:underline">$1</a>')
                    }} />
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-green-800 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Pest Problem?</h3>
                <p className="text-green-100 text-sm mb-4">Nassau South Shore\'s trusted family pest control since 1982.</p>
                <a
                  href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mb-3"
                >
                  📞 {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors border border-white/20"
                >
                  Free Inspection
                </Link>
              </div>

              {/* Related Posts */}
              {otherPosts.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">More from Our Blog</h3>
                  <div className="space-y-4">
                    {otherPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <p className="font-medium text-gray-900 group-hover:text-green-700 transition-colors text-sm leading-snug">
                          {relatedPost.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{relatedPost.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Links */}
              <div className="border rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
                <div className="space-y-2">
                  {[
                    { href: '/services/termite-treatment', label: 'Termite Treatment' },
                    { href: '/services/bed-bug-removal', label: 'Bed Bug Removal' },
                    { href: '/services/rodent-control', label: 'Rodent Control' },
                    { href: '/services/mosquito-control', label: 'Mosquito Control' },
                    { href: '/services/ant-control', label: 'Ant Control' },
                    { href: '/services/wildlife-removal', label: 'Wildlife Removal' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 py-1 border-b border-gray-100 last:border-0 transition-colors"
                    >
                      {label} <span className="text-gray-400">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
