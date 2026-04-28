import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SEO } from '@/site.config';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Liberty Pest Pros | Pest Control Services',
    template: `%s | ${SITE_NAME}`,
  },
  // SEO: Optimized for 'liberty pest control' — 49 impressions at pos 8.8 (GSC 2026-03-15)
  description: 'Liberty Pest Pros delivers trusted pest control you can count on. From ants to rodents, we handle it all — licensed, local, and ready to respond. Free quote!',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: ['/og-image.png'],
  },
  verification: {
    other: {
      'msvalidate.01': ['7269DBA7AB2884805155E8C4E40544B8'],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* GA4 */}
        {ga4Id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ga4Id}');
                `,
              }}
            />
          </>
        )}
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vzxjc177f4");`
          }}
        />
        {/* Ahrefs Web Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="x4e+ezcBH75Gxz4y9OIAjw" async />
          <meta property="og:image" content="/images/og-default.jpg" />
  </head>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
