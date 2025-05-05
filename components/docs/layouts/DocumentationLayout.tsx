'use client';

import { usePathname } from 'next/navigation';
import MobileDocSectionNav from '@/components/docs/common/MobileDocSectionNav';
import MobileAllDocsNav from '@/components/docs/common/MobileAllDocsNav';

interface Props {
  children: React.ReactNode;
  nav?: React.ReactNode;
}

export default function DocumentationLayout({ children, nav }: Props) {
  const pathname = usePathname();

  const showDocNav = !pathname?.startsWith('/docs/white-paper') && !pathname?.startsWith('/docs');

  return (
    <div className="relative flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto px-6 lg:px-12 xl:px-20">
      {/* Desktop Navigation */}
      <aside className="hidden lg:block w-64 shrink-0 pt-32">
        {nav}
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-32 max-w-none">
        {/* Мобильные кнопки */}
        <div className="lg:hidden sticky top-16 left-0 w-full px-4 z-30 flex justify-between gap-2">
          {showDocNav && <MobileDocSectionNav />}
          <MobileAllDocsNav />
        </div>

        <div className="prose dark:prose-invert">{children}</div>
      </main>
    </div>
  );
}
