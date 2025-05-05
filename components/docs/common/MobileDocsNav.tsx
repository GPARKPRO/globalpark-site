'use client';

import { useEffect, useRef, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Автофокус на первом пункте
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  return (
    <div className="lg:hidden relative z-50 scroll-smooth">
      {/* Прямоугольная кнопка слева сверху под Header */}
      <div className="fixed top-20 left-4 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors border border-yellow-400 rounded-md px-4 py-2 shadow-md"
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

      {/* Выпадающее меню под кнопкой */}
      <div
        ref={menuRef}
        className={`absolute top-24 left-4 w-64 transition-all duration-200 transform ${
          open
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="border border-neutral-700 rounded bg-neutral-900 p-4 shadow-lg space-y-2">
          {/* Навигация (можно заменить на <TokenomicsNav />) */}
          {[
            { id: 'introduction', label: 'Introduction' },
            { id: 'utility', label: 'Token Utility' },
            { id: 'supply', label: 'Total Supply' },
            { id: 'allocation', label: 'Token Allocation' },
            { id: 'vesting', label: 'Vesting' },
            { id: 'use-cases', label: 'Utility & Use Cases' },
            { id: 'growth', label: 'Demand & Growth' },
            { id: 'modules', label: 'Future Modules' },
          ].map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              ref={index === 0 ? firstLinkRef : undefined}
              className="block text-neutral-300 hover:text-yellow-400 transition-colors text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
