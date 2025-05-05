'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-4">
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

      {open && (
        <div className="mt-4 border border-neutral-700 rounded p-4 bg-neutral-900">
          <TokenomicsNav />
        </div>
      )}
    </div>
  );
}
