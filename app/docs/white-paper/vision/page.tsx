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

      <p className="text-gray-300 mb-6">
        Global Park DAO is a next-generation cultural system in which digital artifacts (NFTs) become the
        foundation for creating physical installations, public spaces, and architectural expressions of memory.
      </p>

      <p className="text-gray-300 mb-12">
        We are building more than just a token ecosystem — we’re designing a living cultural landscape,
        where each unit of digital heritage is anchored in space, tied to coordinates, and brought to life.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-6">Three Core Pillars</h2>

      <div className="space-y-10">

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-yellow-400 text-black rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.586a1 1 0 0 1 .707 1.707l-7.586 7.586a1 1 0 0 1-1.414 0L2.707 14.707A1 1 0 0 1 3.414 13H8v-2" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Art as Infrastructure</h3>
            <p className="text-gray-300">
              Not decoration, but the backbone of public architecture.
              Every block is a message — and every message, a building element.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-pink-500 text-black rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4-4H8m0 0v12" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Technology as Transparency</h3>
            <p className="text-gray-300">
              Every proposal, transaction, and object is visible on-chain. Governance is open. Control is distributed.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-gray-500 text-white rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l4-16M8 4h8" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Memory as Coordination</h3>
            <p className="text-gray-300">
              Physical and digital memory objects work as infrastructure — not only static records, but dynamic anchors of interaction.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/docs/white-paper/governance"
          className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
        >
          → Next: Governance Structure
        </a>
      </div>
    </main>
  );
}
