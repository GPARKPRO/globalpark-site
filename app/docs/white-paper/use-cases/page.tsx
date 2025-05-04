import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases & Ecosystem | GlobalPark',
  description: 'Explore how individuals, brands, and cities can engage with GPARK’s decentralized cultural framework.',
};

export default function UseCasesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">4. Use Cases & Ecosystem</h1>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">4.1 For Individuals and Creators</h2>

      <p className="text-gray-300 mb-2">
        Global Park DAO allows individuals to establish a meaningful presence in a decentralized cultural landscape.
      </p>

      <p className="text-gray-300 mb-2">Participation opportunities:</p>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Coordinate Ownership — securing a specific area within the GPARK to associate with their name, art, or project.</li>
        <li>Cultural Contribution — embedding a personal or artistic legacy into a shared physical and digital environment.</li>
        <li>Active Involvement — proposing new installations through DAO voting, participating in cultural events, and engaging in Proof-of-Presence activities.</li>
      </ul>

      <p className="text-pink-500 italic mb-6">
        — Limited available spaces, a rare chance to leave a cultural mark in a new model of decentralized public space.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">4.2 For Companies, Brands, and Institutions (B2B)</h2>

      <p className="text-gray-300 mb-2">
        Global Park DAO offers brands and organizations an opportunity to anchor their identity in a global cultural movement.
      </p>

      <p className="text-gray-300 mb-2">Participation opportunities:</p>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Branded Cultural Spaces — creating or sponsoring art installations linked to corporate missions.</li>
        <li>Innovative Public Relations — demonstrating leadership in cultural innovation and Web3 engagement.</li>
        <li>Engagement with New Audiences — connecting with a new generation through DAO-governed cultural initiatives.</li>
      </ul>

      <p className="text-pink-500 italic mb-6">
        — Brand association with forward-looking, decentralized cultural initiatives strengthens global reputation without relying on traditional advertising channels.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">4.3 For Ecosystems and City Programs</h2>

      <p className="text-gray-300 mb-2">
        GPARK opens collaboration paths for cities, Web3 projects, cultural programs, and nonprofit initiatives.
      </p>

      <p className="text-gray-300 mb-2">Participation opportunities:</p>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Cross-DAO Integration — connecting different projects and communities through shared cultural spaces.</li>
        <li>New Public Spaces — building plazas and installations that represent decentralized, community-driven culture.</li>
        <li>Transparent Co-Governance — leveraging DAO tools for managing public cultural assets with full transparency.</li>
      </ul>

      <p className="text-pink-500 italic mb-6">
        — Municipalities and networks can pioneer decentralized cultural innovation, fostering global cultural bridges.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">4.4 GPARK Growth and Expansion</h2>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li><span className="text-white">2025–2026:</span> Launch of the first GPARK site in the UAE.</li>
        <li><span className="text-white">2026–2027:</span> Expansion to major cultural cities through open DAO initiatives.</li>
        <li><span className="text-white">By 2030:</span> A network of decentralized cultural parks connected under the GPARK DAO ecosystem.</li>
      </ul>

      <blockquote className="text-gray-300 italic border-l-4 border-yellow-400 pl-4 mb-8">
        “Your coordinate is not just a place. It’s your contribution to the cultural future.”
      </blockquote>

      <h2 className="text-xl text-white font-semibold mb-4">Why Participate in GPARK?</h2>

      <h3 className="text-lg text-yellow-400 font-semibold mb-2">For Individuals and Creators:</h3>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Ownership of a unique coordinate within a global cultural landscape.</li>
        <li>The opportunity to leave a lasting mark in both digital and physical history.</li>
        <li>Participation in DAO voting and cultural activations.</li>
      </ul>

      <h3 className="text-lg text-yellow-400 font-semibold mb-2">For Companies, Brands, and Institutions:</h3>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Creation of branded art installations within an innovative cultural environment.</li>
        <li>Strengthening brand reputation through engagement in a pioneering cultural project.</li>
        <li>Access to new audiences through live and digital DAO-driven initiatives.</li>
      </ul>

      <h3 className="text-lg text-yellow-400 font-semibold mb-2">For Ecosystems, Cities, and Communities:</h3>
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li>Integration with DAO governance and cultural public programs.</li>
        <li>Development of new forms of open, participatory cultural spaces.</li>
        <li>Full transparency, trust, and flexibility through on-chain coordination.</li>
      </ul>

      <p className="text-gray-300 mt-6">
        <span className="text-yellow-400 font-medium">GPARK</span> is a place where every contribution is anchored in space and time.
        Where every participant becomes a builder of the cultural future.
      </p>
    </main>
  );
}
