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
    <div className="flex w-full max-w-7xl mx-auto">
      <aside className="hidden md:block w-64 p-6 border-r border-white/10">
        <nav className="flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1 w-full p-6">
        {children}
      </div>
    </div>
  );
}
