'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const navigation = [
  {
    title: 'White Paper',
    basePath: '/docs/white-paper',
    pages: [
      { label: 'Vision', path: 'vision' },
      { label: 'Governance', path: 'governance' },
      { label: 'Tokenomics', path: 'tokenomics' },
    ],
  },
  {
    title: 'Constitution',
    basePath: '/docs/constitution',
    pages: [
      { label: 'Mission', path: 'mission' },
      { label: 'Rights', path: 'rights' },
      { label: 'Values', path: 'values' },
    ],
  },
  {
    title: 'Onboarding',
    basePath: '/docs/onboarding',
    pages: [
      { label: 'How to Join', path: 'how-to-join' },
      { label: 'Roles', path: 'roles' },
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row">
      {/* Mobile Toggle Button */}
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
        <nav className="flex flex-col gap-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <Link
                href={section.basePath}
                className="font-semibold text-white hover:underline block mb-1"
                onClick={() => setOpen(false)}
              >
                {section.title}
              </Link>
              <ul className="ml-4 space-y-1">
                {section.pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={`${section.basePath}/${page.path}`}
                      className="text-gray-400 hover:text-white text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 prose prose-invert max-w-none">
        {children}
      </main>
    </div>
  );
}
