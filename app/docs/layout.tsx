'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import MobileDocsNav from '@/components/docs/common/MobileDocsNav';
import MobileAllDocsNav from '@/components/docs/common/MobileAllDocsNav';

const navigation = [
  {
    title: 'White Paper',
    basePath: '/docs/white-paper',
    pages: [
      { label: 'Executive Summary', path: 'summary' },
      { label: 'Vision & Philosophy', path: 'vision' },
      { label: 'Digital Heritage', path: 'digital-heritage' },
      { label: 'Use Cases & Ecosystem', path: 'use-cases' },
      { label: 'DAO Governance', path: 'governance' },
      { label: 'GPARK Token', path: 'token' },
      { label: 'Treasury', path: 'treasury' },
      { label: 'Roadmap', path: 'roadmap' },
      { label: 'Legal & Compliance', path: 'legal' },
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
  return (
    <>
      {/* Мобильные кнопки */}
      <div className="lg:hidden fixed top-32 left-0 w-full px-4 z-[9999] flex justify-between pointer-events-auto">
        <MobileDocsNav />
        <MobileAllDocsNav />
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row">
        {/* Боковая навигация — только на десктопе */}
        <aside className="hidden md:block w-64 p-6 border-r border-white/10 bg-black sticky top-24 self-start max-h-screen overflow-auto">
          <nav className="flex flex-col gap-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <Link
                  href={section.basePath}
                  className="font-semibold text-white hover:underline block mb-1"
                >
                  {section.title}
                </Link>
                <ul className="ml-4 space-y-1">
                  {section.pages.map((page) => (
                    <li key={page.path}>
                      <Link
                        href={`${section.basePath}/${page.path}`}
                        className="text-gray-400 hover:text-white text-sm"
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

        {/* Контент */}
        <main className="flex-1 p-6 prose prose-invert max-w-none">
          {children}
        </main>
      </div>
    </>
  );
}
