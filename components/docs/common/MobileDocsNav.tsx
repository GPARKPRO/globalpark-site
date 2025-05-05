'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false);

  // Закрытие меню при клике по якорю
  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="sticky top-20 z-30 px-4 py-2 mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-yellow-400 border border-yellow-400 rounded px-4 py-2"
        >
          {open ? (
            <>
              <XMarkIcon className="h-5 w-5" />
              Close Menu
            </>
          ) : (
            <>
              <Bars3Icon className="h-5 w-5" />
              Open Sections
            </>
          )}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-6">
          <TokenomicsNav />
        </div>
      )}
    </div>
  );
}
