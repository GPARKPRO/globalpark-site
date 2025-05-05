'use client';

import { useEffect, useState } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileDocSectionNav() {
  const [open, setOpen] = useState(false);

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

  const links = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'utility', label: 'Token Utility' },
    { id: 'supply', label: 'Total Supply' },
    { id: 'allocation', label: 'Token Allocation' },
    { id: 'vesting', label: 'Vesting' },
    { id: 'use-cases', label: 'Utility & Use Cases' },
    { id: 'growth', label: 'Demand & Growth' },
    { id: 'modules', label: 'Future Modules' },
  ];

  return (
    <div className="lg:hidden fixed top-[160px] left-4 z-10 w-auto mr-[120px] pointer-events-auto">
      <div className="relative w-full max-w-screen-lg">
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
          <div className="absolute top-full left-0 mt-2 w-[22rem] border border-neutral-700 rounded bg-neutral-900 p-4 shadow-lg z-30">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map(({ id, label }, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block text-neutral-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  {`${index + 1}. ${label}`}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
