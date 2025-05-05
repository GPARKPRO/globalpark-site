'use client';

import { useEffect, useRef, useState } from 'react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function MobileDocSectionNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

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

  // Навигационные данные для разных документов
  const sections =
    pathname.startsWith('/docs/tokenomics')
      ? [
          { id: 'introduction', label: '1. Introduction' },
          { id: 'utility', label: '2. Token Utility' },
          { id: 'supply', label: '3. Total Supply' },
          { id: 'allocation', label: '4. Token Allocation' },
          { id: 'vesting', label: '5. Vesting' },
          { id: 'use-cases', label: '6. Utility & Use Cases' },
          { id: 'growth', label: '7. Demand & Growth' },
          { id: 'modules', label: '8. Future Modules' },
        ]
      : pathname.startsWith('/docs/white-paper')
      ? [
          { id: 'summary', label: '1. Executive Summary' },
          { id: 'vision', label: '2. Vision & Philosophy' },
          { id: 'digital-heritage', label: '3. Digital Heritage' },
          { id: 'use-cases', label: '4. Use Cases & Ecosystem' },
          { id: 'governance', label: '5. DAO Governance' },
          { id: 'token', label: '6. GPARK Token' },
          { id: 'treasury', label: '7. Treasury' },
          { id: 'roadmap', label: '8. Roadmap' },
          { id: 'legal', label: '9. Legal & Compliance' },
        ]
      : [];

  if (sections.length === 0) return null;

  return (
    <div className="lg:hidden fixed top-32 left-4 z-[9999]">
      <div className="relative">
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
              <ChevronDownIcon className="h-5 w-5" />
              Doc Navigation
            </>
          )}
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 w-[22rem] border border-neutral-700 rounded bg-neutral-900 p-4 shadow-lg">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {sections.map(({ id, label }, index) => (
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
        )}
      </div>
    </div>
  );
}
