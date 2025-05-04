import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DAO Governance Architecture | GlobalPark',
  description: 'Understand the multisig treasury, council structure, and decentralized governance model of the Global Park DAO.',
};

export default function GovernancePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">5. DAO Governance Architecture</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400">Global Park DAO</span> is governed through a robust, transparent framework
        built around a multisignature treasury, verifiable public infrastructure, and progressive decentralization.
        The governance model is designed to ensure collective control, resilience, and full visibility at every stage of development.
      </p>

      <p className="text-gray-300 mb-4">
        At its core is the <span className="text-pink-500">DAO Council</span>, composed of five independently held wallet addresses.
        All key decisions and treasury actions require <span className="text-yellow-400">3-of-5 multisignature approval</span>
        via a Gnosis Safe smart contract. This structure forms the governance backbone of the Genesis Phase — a period
        during which foundational infrastructure is deployed, the community is formed, and operational frameworks are tested.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Key Components</h2>

      <h3 className="text-lg text-white font-bold mb-2">DAO Council</h3>
      <p className="text-gray-300 mb-4">
        Five signers responsible for approving treasury transactions, protocol interactions, token operations, and governance actions.
        These signers operate in full transparency through an on-chain multisig system.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">DAO Treasury (Gnosis Safe)</h3>
      <p className="text-gray-300 mb-2">Address: <code className="text-sm text-pink-500">0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183</code></p>
      <p className="text-gray-300 mb-4">
        This is the central wallet of the DAO. It holds and distributes funds based on approved proposals.
        All funds (ETH, GPARK, or partner allocations) are non-custodial and controlled via multisig.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">Token Contract Ownership</h3>
      <p className="text-gray-300 mb-2">
        The GPARK token smart contract is fully owned by the DAO Treasury (via Ownable).
      </p>
      <p className="text-gray-300 mb-4">
        Deployer address: <code className="text-sm text-pink-500">0xa22a70863e3b5723a5c732632139E1a7Bd0a637D</code> — for reference only, holds no privileges.
      </p>
      <p className="text-gray-300 mb-4">
        All privileged functions (e.g. <code>lockTokens()</code>, <code>snapshot()</code>) can be executed only via multisig authorization from the DAO.
        This guarantees that no centralized actor can alter token behavior, enforce upgrades, or override permissions.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">IPFS Governance Records</h3>
      <p className="text-gray-300 mb-4">
        All critical documents — including the Genesis Operating Rules, DAO Wallet Map, and Launch Report —
        are published and pinned on IPFS. They are publicly accessible and verifiably linked through the DAO’s ENS profile.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">ENS Metadata</h3>
      <p className="text-gray-300 mb-4">
        The DAO’s ENS domain <span className="text-yellow-400">globalpark.eth</span> acts as the on-chain identity anchor.
        It stores metadata such as contenthash (IPFS), DAO Council addresses, treasury map, social links, governance notices, and token contract details.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Governance Roadmap</h2>
      <p className="text-gray-300 mb-4">
        The governance roadmap includes a transition from the Genesis Phase (council-led execution)
        to the Autonomous Phase (community-led voting). Upon activation of Snapshot-based governance,
        all GPARK token holders will be empowered to propose and vote on decisions directly.
      </p>

      <p className="text-gray-300 mb-4">
        Until then, the DAO Council operates as an accountable steward — tasked not with control, but with activating,
        safeguarding, and documenting the emergence of a decentralized cultural system.
      </p>

      <p className="text-gray-300">
        For a complete breakdown of wallet roles, Council signers, execution flows, and governance transition logic,
        refer to the full DAO Governance documentation on GitHub:{' '}
        <a
          href="https://github.com/GPARKPRO/GlobalPark-DAO/tree/main/docs"
          className="text-pink-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/GPARKPRO/GlobalPark-DAO
        </a>
      </p>
    </main>
  );
}
