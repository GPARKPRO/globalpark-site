'use client';

import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MobileAllDocsNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/docs/')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  const links = [
    { href: '/docs/white-paper/summary', label: 'White Paper' },
    { href: '/docs/tokenomics', label: 'Tokenomics' },
    { href: '/docs/constitution/mission', label: 'Constitution' },
    { href: '/docs/declaration', label: 'Declaration' },
    { href: '/docs/onboarding/how-to-join', label: 'Onboarding' },
    { href: '/docs/legal', label: 'Legal & Compliance' },
  ];

  return (
    <div className="lg:hidden fixed top-32 right-4 z-[9999] pointer-events-auto">
      <div className="relative z-[9999]">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/30 rounded-md px-4 py-2 shadow-md backdrop-blur focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {open ? (
            <>
              <XMarkIcon className="h-5 w-5" />
              Close
            </>
          ) : (
            <>All Docs</>
          )}
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-2 w-64 border border-neutral-700 rounded bg-neutral-900 p-4 shadow-lg space-y-2 z-[9999]">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-neutral-300 hover:text-yellow-400 transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
