'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const links = [
  { href: '/docs/overview', label: 'Overview' },
  { href: '/docs/tokenomics', label: 'Tokenomics' },
  { href: '/docs/governance', label: 'Governance' },
  { href: '/docs/vision', label: 'Vision' },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-between items-center border-b border-white/10">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-sm border border-white/30 px-3 py-1 rounded"
        >
          {open ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? 'block' : 'hidden'
        } md:block w-full md:w-64 p-6 border-r border-white/10 bg-black md:static absolute z-10`}
      >
        <nav className="flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main
        className="flex-1 p-6 prose prose-invert max-w-none dark:prose-invert
          prose-headings:text-white
          prose-h1:text-4xl prose-h1:font-bold
          prose-h2:text-3xl prose-h2:font-semibold
          prose-h3:text-2xl prose-h3:font-medium
          prose-p:text-white
          prose-li:text-white
          prose-ul:pl-5 prose-ul:space-y-2
          prose-li:marker:text-white
          prose-a:text-blue-300 hover:text-blue-200 hover:underline
          prose-strong:text-white
          prose-code:text-white
          prose-blockquote:text-white/80"
      >
        {children}
      </main>
    </div>
  );
}
