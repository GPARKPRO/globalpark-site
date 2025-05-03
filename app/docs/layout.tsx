import Link from 'next/link';

const links = [
  { href: '/docs/overview', label: 'Overview' },
  { href: '/docs/tokenomics', label: 'Tokenomics' },
  // add more links here
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-6 border-r">
        <nav className="space-y-2">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="block text-gray-800 hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
