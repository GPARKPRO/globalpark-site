'use client';

import type { ReactNode } from 'react';
import MobileAllDocsNav from '@/components/docs/common/MobileAllDocsNav';

export default function WhitepaperLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Только кнопка All Docs */}
      <div className="lg:hidden fixed top-[96px] left-0 w-full px-4 z-30 flex justify-end pointer-events-auto">
        <MobileAllDocsNav />
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row">
        <main className="flex-1 p-6 prose prose-invert max-w-none">{children}</main>
      </div>
    </>
  );
}
