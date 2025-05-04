import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPARK Token | GlobalPark',
  description: 'Understand the structure, role, and future of the GPARK token within the DAO ecosystem.',
};

export default function TokenPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">6. The GPARK Token</h1>

      <p className="text-gray-300 mb-4">
        The <span className="text-yellow-400">GPARK token</span> is the native utility asset of the Global Park DAO ecosystem.
        It is not a financial instrument, but a key to participation, coordination, and activation across both digital and physical dimensions.
      </p>

      <p className="text-gray-300 mb-4">
        Issued through a fully deployed, immutable smart contract on Ethereum, GPARK serves three primary functions:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li><span className="text-white font-medium">Governance Participation</span> – Submit and vote on proposals via Snapshot (post-Genesis Phase).</li>
        <li><span className="text-white font-medium">Access to Scarce Infrastructure</span> – Register coordinates, sponsor installations, claim presence.</li>
        <li><span className="text-white font-medium">Cultural Activation</span> – Engage in events, mint NFTs, validate contributions.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Smart contract: <code className="text-sm text-pink-500">0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da</code>
      </p>

      <p className="text-gray-300 mb-4">
        GPARK is ERC20-compatible with extensions: ERC20Permit, ERC20Votes, vesting logic. It has:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>No minting privileges</li>
        <li>No admin controls</li>
        <li>No transfer of ownership</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Value is not speculative. It emerges through utility, presence, and cultural relevance.
      </p>

      <p className="text-gray-300 mb-8">
        For full details on distribution and economics, see the Tokenomics Report on GitHub.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">6.1 Token Utility, Scarcity, and DAO-Supported Value</h2>

      <p className="text-gray-300 mb-4">
        GPARK is a utility token — not a financial asset. It enables cultural participation and DAO-driven infrastructure.
      </p>

      <p className="text-gray-300 mb-4">
        Every NFT represents a fixed coordinate. To mint, activate, or transfer an NFT, GPARK is required. The supply is limited — intentionally.
      </p>

      <p className="text-gray-300 mb-4">
        Demand supports:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Physical park development</li>
        <li>Governance tooling</li>
        <li>Cultural programming</li>
        <li>Institutional outreach</li>
      </ul>

      <p className="text-gray-300 mb-4">
        All NFT-related transactions return value to the DAO treasury, funding public growth — not private gain.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">6.2 Tokenomics Expansion: Future Modules</h2>

      <p className="text-gray-300 mb-4">
        GPARK was designed with modularity — allowing secure expansion without core contract changes.
      </p>

      <ol className="text-gray-300 list-decimal list-inside space-y-6 mb-8">
        <li>
          <span className="text-white font-medium">GPARK Staking Module</span><br />
          Lock tokens for access and rewards. Multi-tiered (Bronze, Silver, Gold). NFT boosters apply.
        </li>
        <li>
          <span className="text-white font-medium">Burn-to-Utility / Upgrade Engine</span><br />
          Burn tokens to evolve NFTs, gain XP, unlock zones. Deflationary mechanism.
        </li>
        <li>
          <span className="text-white font-medium">NFT Integration & Cultural Coordinates</span><br />
          All minting/trading in GPARK. NFTs = digital/physical coordinates. Future: rental, governance transfer, IRL linkage.
        </li>
        <li>
          <span className="text-white font-medium">Staking as Access / Proof of Participation</span><br />
          On-chain staking unlocks: governance, events, drops, exclusive content.
        </li>
        <li>
          <span className="text-white font-medium">Interactive Governance & DAO Rewards</span><br />
          XP-based voting, proposal ranking, community IRL planning.
        </li>
        <li>
          <span className="text-white font-medium">IRL Integration & Check-In System</span><br />
          Earn rewards by visiting park zones. Geo/NFC/QR-based Proof-of-Presence.
        </li>
        <li>
          <span className="text-white font-medium">Buyback & Burn / DAO Treasury Utility</span><br />
          DAO may buy/burn tokens with partner/event revenue. Controlled via Snapshot and multisig.
        </li>
      </ol>

      <p className="text-gray-300">
        All modules follow open standards (IERC20, ITokenomics, etc.). Transparent, scalable, auditable.
        Tech specs will be published on GitHub — contributors welcome.
      </p>
    </main>
  );
}
