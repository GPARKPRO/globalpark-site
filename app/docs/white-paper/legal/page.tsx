import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal & Compliance | GlobalPark',
  description: 'Understand how the GPARK DAO adheres to legal and public-good principles while maintaining decentralization.',
};

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">9. Legal & Compliance</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400">Global Park DAO</span> is structured as a decentralized cultural initiative —
        not a financial product or investment platform. All aspects of token usage, governance, treasury, and participation
        reflect public-good principles, minimize legal risk, and adhere to the ethos of open, verifiable infrastructure.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Utility Token Designation</h2>
      <p className="text-gray-300 mb-2">
        <span className="text-pink-500">GPARK</span> is a utility token. It grants access to participation mechanisms,
        DAO interactions, and engagement within the park ecosystem.
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Distributed without promise of financial gain</li>
        <li>Cannot be bought or sold through the DAO itself</li>
        <li>No features of dividends, shareholding, or buyback schemes</li>
        <li>Used strictly for access, coordination, and contribution</li>
      </ul>

      <h2 className="text-xl text-white font-semibold mb-2">DAO as a Public Goods Structure</h2>
      <p className="text-gray-300 mb-4">
        The DAO operates as a non-profit, community-driven mechanism. Treasury actions are transparent and executed by multisig only.
        No centralized entity holds custody or benefits privately from DAO funds.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">No Investment Offer</h2>
      <p className="text-gray-300 mb-4">
        Participation in the DAO, minting of NFTs, or acquisition of GPARK tokens:
      </p>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Is not an investment</li>
        <li>Offers no expectation of return</li>
        <li>Involves no equity or legal claim over any physical or digital asset</li>
      </ul>

      <h2 className="text-xl text-white font-semibold mb-2">Jurisdictional Clarity</h2>
      <p className="text-gray-300 mb-4">
        The DAO does not operate under any single national framework. However, all infrastructure complies with general legal principles:
      </p>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Transparency</li>
        <li>Non-custodial design</li>
        <li>Permissionless access</li>
        <li>No sale of securities</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Foundational technology is deployed on Ethereum, supported by open-source protocols like Gnosis Safe, IPFS, ENS, and Snapshot.
        The original creator has formally renounced privileged rights via a published Founder Manifesto.
      </p>

      <h2 className="text-xl text-white font-semibold mb-2">Disclaimers</h2>
      <p className="text-gray-300">
        This document is informational. It is not legal advice or financial guidance. Readers should conduct independent research
        and consult local legal frameworks before engaging with any aspect of the DAO.
      </p>
    </main>
  );
}
