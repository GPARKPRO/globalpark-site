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
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'growth', label: 'Demand & Growth' },
    { id: 'modules', label: 'Future Modules' },
  ];

  const halfway = Math.ceil(links.length / 2);
  const column1 = links.slice(0, halfway);
  const column2 = links.slice(halfway);

  return (
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
        <div className="absolute top-full left-0 mt-2 w-72 border border-neutral-700 rounded bg-neutral-900 p-4 shadow-lg z-30">
          <div className="flex gap-x-4">
            <div className="flex flex-col space-y-2">
              {column1.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-neutral-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  {`${index + 1}. ${link.label}`}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {column2.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-neutral-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  {`${index + column1.length + 1}. ${link.label}`}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
