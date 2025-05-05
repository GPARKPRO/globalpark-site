interface Props {
  children: React.ReactNode;
  nav?: React.ReactNode; // any navigation here
}

export default function DocumentationLayout({ children, nav }: Props) {
  return (
    <div className="relative flex w-full max-w-screen-xl mx-auto px-6 lg:px-12 xl:px-20">
      <aside className="hidden lg:block w-64 shrink-0 pt-32">
        {nav}
      </aside>
      <main className="flex-1 pt-20 pb-32 prose dark:prose-invert max-w-none">
        {children}
      </main>
    </div>
  );
}
