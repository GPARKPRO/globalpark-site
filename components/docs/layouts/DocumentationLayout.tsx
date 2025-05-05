'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import MobileDocSectionNav from '@/components/docs/common/MobileDocSectionNav';
import MobileAllDocsNav from '@/components/docs/common/MobileAllDocsNav';

interface Props {
  children: ReactNode;
  nav?: ReactNode;
}

export default function DocumentationLayout({ children, nav }: Props) {
  const pathname = usePathname();
  const [isWhitepaper, setIsWhitepaper] = useState(false);

  useEffect(() => {
    if (pathname && pathname.startsWith('/docs/white-paper')) {
      setIsWhitepaper(true);
    } else {
      setIsWhitepaper(false);
    }
  }, [pathname]);

  return (
    <div className="relative flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto px-6 lg:px-12 xl:px-20">
      {/* Desktop Navigation */}
      <aside className="hidden lg:block w-64 shrink-0 pt-32">
        {nav}
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-32 max-w-none">
        {/* Мобильные кнопки */}
        <div className="lg:hidden fixed top-[76px] left-0 w-full px-4 z-30 flex justify-between items-center pointer-events-auto">
  {!isWhitepaper && <MobileDocSectionNav />}
  <MobileAllDocsNav />
</div>

        <div className="prose dark:prose-invert">{children}</div>
      </main>
    </div>
  );
}
