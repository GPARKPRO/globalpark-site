import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roadmap | GlobalPark',
  description: 'Review the phased development plan of Global Park DAO — from foundation to physical realization.',
};

export default function RoadmapPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">8. Roadmap</h1>

      <p className="text-gray-300 mb-6">
        <span className="text-yellow-400">Global Park DAO</span> follows a phased development path that balances strategic deployment,
        community growth, and long-term infrastructure stability. Each milestone builds toward a fully decentralized and culturally embedded ecosystem.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Phase 1 — Foundation <span className="text-pink-500">(Completed)</span></h2>
      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1">
        <li>Deployment of GPARK token smart contract</li>
        <li>DAO Council established (5 signers, 3-of-5 Safe)</li>
        <li>Governance infrastructure launched:
          <ul className="ml-4 list-disc">
            <li>IPFS documents (Wallet Map, Genesis Rules, Launch Report)</li>
            <li>ENS profile setup: globalpark.eth</li>
            <li>Mirror publication of DAO Launch</li>
          </ul>
        </li>
        <li>Execution address officially bound to DAO Council</li>
        <li>Genesis Operating Rules formalized and published</li>
      </ul>

      <h2 className="text-xl text-white font-semibold mb-2">Phase 2 — Genesis Activation <span className="text-yellow-400">(In Progress)</span></h2>
      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1">
        <li>Launch of Snapshot DAO space: globalpark.eth</li>
        <li>First Mirror-based NFT issuance</li>
        <li>Airdrop or mint campaign for early participants (max 10,000 NFTs)</li>
        <li>Community channels and public presence expansion</li>
        <li>First B2B and cultural outreach to partners/institutions</li>
        <li>Ecosystem growth through proposals, collaborations, early funding opportunities</li>
      </ul>

      <h2 className="text-xl text-white font-semibold mb-2">Phase 3 — Autonomous DAO Governance <span className="text-gray-400">(Planned)</span></h2>
      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1">
        <li>Transition from Council-based to community-based decision making</li>
        <li>Token-based voting via Snapshot becomes active</li>
        <li>Open proposal system for project funding, installations, events</li>
        <li>Curation of permanent park features via DAO proposals</li>
        <li>DAO Council shifts to advisory role or is restructured via governance</li>
      </ul>

      <h2 className="text-xl text-white font-semibold mb-2">Phase 4 — Physical Realization and Cultural Permanence <span className="text-gray-400">(Long-Term)</span></h2>
      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1">
        <li>Construction and activation of physical park zones</li>
        <li>Token/NFT-linked on-site installations</li>
        <li>Institutional partnerships with museums, collectives, or governments</li>
        <li>Park becomes a living archive of on-chain culture</li>
        <li>Preservation tools for future generations (IPFS, cross-chain backup, hybrid presence)</li>
      </ul>

      <p className="text-gray-300">
        This roadmap is intentionally adaptive. The DAO may vote to accelerate, pause, or reorient phases
        as context and community evolve. What matters is not how fast we move — but how meaningfully we build.
      </p>
      <div className="mt-16 flex justify-between items-center gap-4 text-sm">
  <Link
    href="/docs/white-paper/treasury"
    className="text-gray-400 hover:text-white border border-white/20 px-4 py-2 rounded"
  >
    ← Previous: Treasury
  </Link>
  <Link
    href="/docs/white-paper/legal"
    className="text-yellow-400 hover:bg-yellow-400 hover:text-black border border-yellow-500 px-4 py-2 rounded transition"
  >
    Next: Legal & Compliance →
  </Link>
</div>
    </main>
  );
}
