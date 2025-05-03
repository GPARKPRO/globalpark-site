import Link from 'next/link';

const docs = [
  { title: '— Overview', path: '/docs/overview', description: 'Project philosophy, mission, values' },
  { title: '⌐😌 Tokenomics', path: '/docs/tokenomics', description: 'Distribution mechanics and GPARK economics' },
  { title: '“ 😊 Governance', path: '/docs/governance', description: 'DAO setup, Snapshot, multisig principles' },
  { title: '∘ 😗 Legal', path: '/docs/legal', description: 'Legal compatibility and compliance' },
  { title: '‽💪 Architecture', path: '/docs/architecture', description: 'Physical & digital structure of the park' }
];

export default function DocsIndex() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">GPARK Documentation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {docs.map(({ title, path, description }) => (
          <Link key={ path } href={ path } className="group border border-neutral-200 rounded-xl p6 hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibol group-hover:text-indigo-600">{title}</h2>
            <p className="text-sm text-neutral-600 mt-2">{description}</p>
          </Link>
        ))
      }
    </div>
  </main>
  );
}