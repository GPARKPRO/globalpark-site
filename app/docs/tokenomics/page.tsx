import TokenomicsNav from '@/components/docs/TokenomicsNav';

export default function TokenomicsPage() {
  return (
    <div className="flex gap-10">
      <TokenomicsNav />
      <div className="prose dark:prose-invert flex-1 py-10">
        <h1>GPARK Tokenomics</h1>
        <p>
          A fixed-supply utility token at the core of the Global Park DAO ecosystem.
        </p>

        <h2 id="overview">1. Overview</h2>
        <p>
          The GPARK token is not an investment tool — it's a utility key that powers
          access, governance, and participation across the cultural architecture of
          Global Park DAO.
        </p>
        <ul>
          <li><strong>Total Supply:</strong> 21,000,000 GPARK (hard capped)</li>
          <li><strong>No inflation</strong>, no minting, no burn-on-transfer</li>
          <li>Designed for cultural contribution, not speculation</li>
        </ul>

        <h2 id="utility">2. Token Utility</h2>
        <ul>
          <li><strong>Voting</strong> in DAO proposals</li>
          <li><strong>Staking</strong> for Proof-of-Presence and reputation</li>
          <li><strong>Activating NFT coordinates</strong> (linked to park elements)</li>
          <li><strong>Accessing gated events</strong> and installations</li>
          <li><strong>Participating in grant programs</strong></li>
        </ul>

        <h2 id="distribution">3. Distribution</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Allocation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>DAO Treasury</td><td>33.33% (7M)</td></tr>
            <tr><td>Core Team & Council</td><td>14.29% (3M)</td></tr>
            <tr><td>Liquidity & Market</td><td>10% (2.1M)</td></tr>
            <tr><td>Community & OGs</td><td>9.52% (2M)</td></tr>
            <tr><td>Staking Incentives</td><td>14.3% (3M)</td></tr>
            <tr><td>Reserve & Expansion</td><td>18.56% (3.9M)</td></tr>
          </tbody>
        </table>

        <h2 id="governance">4. Governance Thresholds</h2>
        <ul>
          <li><strong>Submit Proposal:</strong> 10,000 GPARK</li>
          <li><strong>Vote (Genesis):</strong> 50,000 GPARK</li>
          <li>All treasury actions via <strong>Gnosis Safe multisig</strong></li>
        </ul>

        <h2 id="deflation">5. Deflation & Scarcity</h2>
        <ul>
          <li><strong>Burn-to-upgrade</strong> NFTs or XP levels</li>
          <li><strong>Buyback & Burn</strong> using event/sponsor revenue</li>
          <li><strong>No auto-rewards</strong> = no supply inflation</li>
        </ul>

        <h2 id="compliance">6. Compliance</h2>
        <p>
          GPARK is <strong>not a security</strong>. It offers:
        </p>
        <ul>
          <li>No yield</li>
          <li>No ownership rights</li>
          <li>No profit guarantees</li>
        </ul>
        <p>
          It is a coordination tool for decentralized culture.
        </p>
      </div>
    </div>
  );
}
