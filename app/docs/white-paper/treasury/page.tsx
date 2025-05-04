import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treasury & Financial Design | GlobalPark',
  description: 'Explore how the GPARK DAO manages its treasury with transparency, multisig governance, and public-good principles.',
};

export default function TreasuryPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">7. Treasury & Financial Design</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400">Global Park DAO</span> maintains a transparent, on-chain treasury governed by a 3-of-5
        multisignature Council. The treasury is not controlled by any single individual or entity and operates solely through DAO-approved actions.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Treasury Address (Gnosis Safe)</h2>
      <p className="text-gray-300 mb-4">
        <code className="text-pink-500 text-sm">0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183</code>
      </p>
      <p className="text-gray-300 mb-4">
        All funds — whether ETH, GPARK tokens, or NFT-related income — are managed through this safe and viewable by the public.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Council-Controlled Execution</h2>
      <p className="text-gray-300 mb-4">
        Every outgoing transaction must be approved by at least three of five Council members, with all activity verifiable on-chain.
        This ensures maximum transparency, accountability, and resilience against centralized misuse.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Funding Philosophy</h2>
      <p className="text-gray-300 mb-4">
        Global Park is not an investment vehicle. The DAO is a public-good oriented cultural structure, where funds are
        intended to support infrastructure, community engagement, art projects, maintenance, and development.
      </p>
      <p className="text-gray-300 mb-4">
        There are no profit guarantees, and no funds will be used to enrich any single actor.
      </p>

      <h2 className="text-xl text-yellow-400 font-semibold mb-2">Sources of Treasury Growth (Non-Speculative)</h2>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Minting fees from NFTs</li>
        <li>Cultural partnerships and curation programs</li>
        <li>Grants or public support funds</li>
        <li>Contributions from aligned DAOs or institutions</li>
        <li>Token-based community initiatives</li>
      </ul>

      <h2 className="text-xl text-yellow-400 font-semibold mb-2">Spending Principles</h2>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>All expenditures must be proposed, documented, and approved by the DAO</li>
        <li>Spending is evaluated based on mission alignment and cultural/public value</li>
        <li>Budgets may include: infrastructure, IRL activations, digital tooling, DAO operations</li>
      </ul>

      <p className="text-gray-300 mt-4">
        The treasury exists not to accumulate wealth, but to sustain, activate, and grow a living cultural ecosystem.
        Every token, every ETH spent, is a form of participation in a shared legacy.
      </p>
    </main>
  );
}
