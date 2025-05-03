// app/docs/layout.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

const links = [
  { href: '/docs/overview', label: 'Overview' },
  { href: '/docs/tokenomics', label: 'Tokenomics' },
  { href: '/docs/governance', label: 'Governance' },
  { href: '/docs/vision', label: 'Vision' },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto md:flex text-white">
      <aside className="hidden md:block w-64 p-6 border-r border-white/10 sticky top-0 h-screen overflow-y-auto bg-black">
        <nav className="flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 prose dark:prose-invert prose-invert max-w-none 
                      prose-headings:text-white 
                      prose-p:text-white 
                      prose-li:text-white 
                      prose-strong:text-white 
                      prose-a:text-blue-400 hover:prose-a:text-blue-300">
        {children}
      </main>
    </div>
  );
}
