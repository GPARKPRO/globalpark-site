'use client'

import Link from 'next/link'

const roadmap = [
  {
    phase: 'Phase 1: DAO Genesis',
    current: true,
    items: [
      'Deploy GPARK Token & DAO Contracts',
      'Form Multisig DAO Council',
      'Publish WhitePaper & Declaration',
      'Enable Wallet Connection & Web3 UI',
      'Onboard Ambassadors & Contributors',
    ],
  },
  {
    phase: 'Phase 2: Activation',
    items: [
      'Launch Web3 Staking & NFT Modules',
      'Snapshot Voting Integration',
      'DAO Funding & Grant Mechanism',
      'Start Physical Park Construction',
      'Integrate Digital Objects into Installations',
    ],
  },
  {
    phase: 'Phase 3: Expansion',
    items: [
      'Community Governance & Treasury Control',
      'Global Collaborations & Local Installations',
      'Unchained Presence Proofs & AR Interactions',
      'Multi-chain Support & Bridge Deployments',
      'Permanent Archival of DAO History on IPFS',
    ],
  },
]

export default function RoadMapPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Project RoadMap</h1>
      <p className="text-center text-gray-400 mb-12">
        A strategic outline of our vision and activation phases for Global Park DAO.
      </p>

      <div className="space-y-12">
        {roadmap.map((section, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 group transition border ${
              section.current
                ? 'border-yellow-500 bg-yellow-900/10'
                : 'border-zinc-800 bg-zinc-900'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-white">
              {section.phase}
            </h2>
            <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-200 space-y-1 pl-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  )
}
