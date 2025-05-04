import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Heritage | GlobalPark',
  description: 'Explore how NFTs power presence, access, and memory in the Global Park DAO ecosystem.',
};

export default function DigitalHeritagePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">3. Digital Heritage: From NFTs to Physical Presence</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400">Global Park</span> is not only a place — it is a living memory system.
        At the heart of this system lies the <span className="text-pink-500">NFT layer</span>, which enables digital representation,
        cultural imprinting, and permanent anchoring of contributions to the park’s landscape.
      </p>

      <p className="text-gray-300 mb-4">
        Each NFT minted within the Global Park ecosystem corresponds to a specific coordinate, object, memory,
        or conceptual presence. These are not generic collectibles, but rather nodes of cultural inheritance —
        programmable, visible, and co-authored by the community.
      </p>

      <p className="text-gray-300 mb-4">
        The NFT layer serves the following roles:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>
          <span className="text-white font-medium">Spatial Representation</span> – Every NFT is tied to a specific zone, object, or experience within the park.
        </li>
        <li>
          <span className="text-white font-medium">Access & Activation</span> – Some functions in the DAO may require possession of a specific NFT
          (e.g., participation in certain sub-governance groups, creative campaigns, or rituals).
        </li>
        <li>
          <span className="text-white font-medium">Curation & Preservation</span> – NFTs can be used to curate shared memories, represent artist contributions,
          or mark meaningful events in the DAO’s timeline.
        </li>
      </ul>

      <p className="text-gray-300 mb-4">
        In the <span className="text-yellow-400">Genesis Phase</span>, Global Park will launch an initial collection of 10,000 NFTs available via single-mint per wallet.
        These NFTs may unlock access to early participation incentives and future activations.
      </p>

      <p className="text-gray-300">
        Each NFT will be linked to ENS metadata and registered on IPFS to ensure decentralization and long-term verifiability.
        Ownership of an NFT does not guarantee rights or profit, but offers cultural presence and optional access within a limited, shared domain.
      </p>
    </main>
  );
}
