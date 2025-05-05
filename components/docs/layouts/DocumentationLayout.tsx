import MobileDocsNav from '@/components/docs/common/MobileDocsNav';

interface Props {
  children: React.ReactNode;
  nav?: React.ReactNode;
}

export default function DocumentationLayout({ children, nav }: Props) {
  return (
    <div className="relative flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto px-6 lg:px-12 xl:px-20">
      {/* Desktop Navigation */}
      <aside className="hidden lg:block w-64 shrink-0 pt-32">
        {nav}
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-32 max-w-none">
        <MobileDocsNav />
        <div className="prose dark:prose-invert">{children}</div>
      </main>
    </div>
  );
}
