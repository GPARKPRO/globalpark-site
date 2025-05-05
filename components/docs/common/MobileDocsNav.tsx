'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false);

  // Автозакрытие при клике на якорь
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
      {/* Плавающая кнопка */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors border border-yellow-400 rounded-full px-4 py-2 shadow-lg"
        >
          {open ? (
            <>
              <XMarkIcon className="h-5 w-5" />
              Close
            </>
          ) : (
            <>
              <Bars3Icon className="h-5 w-5" />
              Sections
            </>
          )}
        </button>
      </div>

      {/* Выпадающее меню */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 px-6 py-10 overflow-y-auto">
          <div className="max-w-md mx-auto border border-neutral-700 rounded bg-neutral-900 p-6">
            <TokenomicsNav />
          </div>
        </div>
      )}
    </div>
  );
}
