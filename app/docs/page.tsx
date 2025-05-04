import Link from 'next/link';

export default function DocsIndexPage() {
  // tempo
  const navigation = [
    {
      title: 'White Paper',
      basePath: '/docs/white-paper',
      pages: [
        { label: 'Vision', path: 'vision' },
        { label: 'Governance', path: 'governance' },
        { label: 'Tokenomics', path: 'tokenomics' },
      ],
    },
    {
      title: 'Constitution',
      basePath: '/docs/constitution',
      pages: [
        { label: 'Mission', path: 'mission' },
        { label: 'Values', path: 'values' },
        { label: 'Rights', path: 'rights' },
      ],
    },
    {
      title: 'Onboarding',
      basePath: '/docs/onboarding',
      pages: [
        { label: 'How to Join', path: 'how-to-join' },
        { label: 'Roles', path: 'roles' },
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">Documentation</h1>

      <div className="space-y-10">
        {navigation.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              <Link href={section.basePath}>{section.title}</Link>
            </h2>
            <ul className="ml-4 space-y-1">
              {section.pages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={`${section.basePath}/${page.path}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
