'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Sticky toggle button */}
      <div className="sticky top-20 z-10 bg-neutral-900 border-b border-neutral-700 px-4 py-2 mb-4">
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

      {/* Collapsible menu */}
      {open && (
        <div className="border border-neutral-700 rounded mx-4 p-4 bg-neutral-900 mb-6">
          <TokenomicsNav />
        </div>
      )}
    </div>
  );
}
