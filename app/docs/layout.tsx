// app/docs/layout.tsx
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

      {/* Content */}
      <main className="flex-1 p-6 prose prose-invert max-w-none dark:prose-invert prose-headings:text-white prose-p:text-white">
        {children}
      </main>
    </div>
  );
}
