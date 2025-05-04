import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision & Philosophy | GlobalPark',
  description:
    'Discover the foundational philosophy and cultural framework of Global Park DAO — where NFTs become architecture, and memory becomes infrastructure.',
};

export default function VisionPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">Vision & Philosophy</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400 font-medium">Global Park DAO</span> is a next-generation cultural system in which
        digital artifacts (NFTs) become the foundation for creating physical installations, public spaces, and
        architectural expressions of memory.
      </p>

      <p className="text-gray-300 mb-6">
        We are building more than just a <span className="text-pink-500">token ecosystem</span> — we’re designing a
        living cultural landscape, where each unit of digital heritage is anchored in space, tied to coordinates,
        and brought to life.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Three Core Pillars</h2>

      <h3 className="text-lg text-white font-bold mb-2">Art as Infrastructure</h3>
      <p className="text-gray-300 mb-4">
        Not decoration, but the backbone of public architecture. Every block is a message — and every message, a building element.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">Technology as Transparency</h3>
      <p className="text-gray-300 mb-4">
        Every proposal, transaction, and object is <span className="text-yellow-400">visible on-chain</span>.
        Governance is open. Control is distributed.
      </p>

      <h3 className="text-lg text-white font-bold mb-2">Memory as Coordination</h3>
      <p className="text-gray-300 mb-4">
        Physical and digital memory objects work as infrastructure — not only static records,
        but <span className="text-pink-500">dynamic anchors</span> of interaction.
      </p>

      <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <a
          href="/docs/white-paper/governance"
          className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
        >
          → Next: Governance Structure
        </a>

        <a
          href="/docs/White_Paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-300 transition"
        >
          View full White Paper (PDF)
        </a>
      </div>
    </main>
  );
}
