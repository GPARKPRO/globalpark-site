'use client'

import Link from 'next/link'

export default function DaoPage() {
  const daoDocs = [
    {
      title: 'DAO Constitution',
      description: 'The foundational principles and values of Global Park DAO.',
      url: 'https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Constitution_DAO.pdf',
    },
    {
      title: 'DAO Declaration',
      description: 'Public statement outlining the purpose and goals of the DAO.',
      url: 'https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Declaration_DAO.pdf',
    },
    {
      title: 'Tokenomics & Economic Model',
      description: 'Distribution logic, deflationary mechanics, and incentives.',
      url: 'https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Tokenomics_&_Economic_Model.pdf',
    },
    {
      title: 'White Paper',
      description: 'Full technical and strategic description of the Global Park project.',
      url: 'https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/White_Paper.pdf',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Global Park DAO</h1>
      <p className="text-center text-gray-400 mb-12">
        Explore the governance structure, principles, and economic model behind the initiative.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {daoDocs.map((doc, i) => (
          <a
            key={i}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition hover:border-white hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">
              {doc.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300">{doc.description}</p>
            <span className="mt-3 inline-block text-xs text-blue-400 font-medium group-hover:underline">
              View PDF →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
