import Link from 'next/link';

export default function DocsIndexPage() {
  const whitePaper = {
    title: 'White Paper',
    basePath: '/docs/white-paper',
    pages: [
      { label: 'Executive Summary', path: 'executive-summary' },
      { label: 'Vision & Philosophy', path: 'vision' },
      { label: 'Digital Heritage', path: 'digital-heritage' },
      { label: 'Use Cases & Ecosystem', path: 'use-cases' },
      { label: 'DAO Governance', path: 'governance' },
      { label: 'GPARK Token', path: 'token' },
      { label: 'Treasury', path: 'treasury' },
      { label: 'Roadmap', path: 'roadmap' },
      { label: 'Legal & Compliance', path: 'legal' },
    ],
  };

  return (
    <main className="relative max-w-4xl mx-auto px-6 py-16">
      {/* Decorative Background Icon */}
      <div className="absolute top-8 right-8 opacity-20 w-40 h-40 pointer-events-none select-none brightness-125 rotate-12">
  <img src="/icons/Scheme-2.svg" alt="" className="w-full h-full" />
</div>

      <h1 className="text-3xl font-bold mb-6 text-white">Documentation</h1>

      <p className="text-gray-400 mb-8 text-lg">
        Welcome to the official documentation of <span className="text-yellow-400 font-medium">Global Park DAO</span>.
        We know documents aren’t always fun — but we promise this one is worth your time.
        It’s more than just a white paper — it’s a manifesto for a decentralized cultural future.
      </p>

      <p className="text-gray-400 mb-12 text-sm italic">
        If you believe art, memory, and technology should belong to the people — you’ll enjoy what we’ve prepared.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
          <Link href={whitePaper.basePath}>{whitePaper.title}</Link>
        </h2>
        <ul className="ml-4 space-y-1">
          {whitePaper.pages.map((page) => (
            <li key={page.path}>
              <Link
                href={`${whitePaper.basePath}/${page.path}`}
                className="text-yellow-400 hover:text-yellow-300 transition duration-200"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
