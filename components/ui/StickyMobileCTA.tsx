'use client';

import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
      <a
        href="tel:5167634600"
        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-4 font-bold text-sm tracking-wide transition-colors"
        aria-label="Call Liberty Pest Pros"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact/"
        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-gray-900 py-4 font-bold text-sm tracking-wide transition-colors"
      >
        Free Quote
      </Link>
    </div>
  );
}
