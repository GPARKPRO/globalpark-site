export default function TokenModules() {
  return (
    <section id="modules" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-6">
        8. Future Modules & Expansion Architecture
      </h2>

      <p className="text-neutral-300 mb-4">
        The GPARK token is built on a modular architecture, allowing the ecosystem to scale
        and evolve without changing the core contract. All future modules interact with the token
        through open interfaces (e.g., ITokenomics, IERC20, IERC721) and are governed by DAO
        proposals.
      </p>

      <p className="text-neutral-300 mb-4">
        These modules may be activated via separate contracts and Snapshot proposals.
      </p>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.1 Staking Module v2</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Long-term staking with variable APY</li>
        <li>NFT-based boosters (e.g., coordinates increase yield)</li>
        <li>Access to gated zones and private content</li>
        <li>Multi-tier levels: Bronze / Silver / Gold</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.2 Burn-to-Upgrade Engine</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Burn GPARK to evolve NFTs, gain XP, unlock map zones</li>
        <li>Trigger transformations and deflation mechanics</li>
        <li>Gamified engagement through utility burns</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.3 NFT Integration Layer</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>All NFTs minted/traded using GPARK</li>
        <li>NFTs bind to zones or IRL objects</li>
        <li>Features: coordinate renting, right transfers, physical mapping</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.4 Proof-of-Presence (PoP) Engine</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Token freeze unlocks voting, event access, drops</li>
        <li>Uses QR, geolocation, NFC check-ins</li>
        <li>Proofs stored on-chain, reward XP or NFTs</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.5 DAO Reputation & Contribution Rewards</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>XP + participation visible in ENS and Snapshot</li>
        <li>Proposals can have “reputation weight”</li>
        <li>Badges, non-transferable roles for top contributors</li>
        <li>DAO profiles evolve via contribution history</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.6 Buyback & Burn Loop</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>DAO Treasury can buy GPARK from open market using event or sponsor funds</li>
        <li>Burn mechanism reduces supply and creates feedback loop</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">8.7 Modular Governance & SubDAOs</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2">
        <li>Creation of SubDAOs (e.g. architecture, curation)</li>
        <li>GPARK as unifying token across all governance layers</li>
        <li>Budget distribution based on subDAO performance</li>
        <li>Modules deployable only by DAO vote</li>
      </ul>
    </section>
  );
}
