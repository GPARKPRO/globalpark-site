import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision & Philosophy | GlobalPark',
  description:
    'Discover the foundational philosophy and cultural framework of Global Park DAO — where NFTs become architecture, and memory becomes infrastructure.',
};

const iconStyle = 'w-5 h-5';

export default function VisionPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">Vision & Philosophy</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400 font-medium">Global Park DAO</span> is a next-generation cultural system in which
        digital artifacts (NFTs) become the foundation for creating physical installations, public spaces, and
        architectural expressions of memory.
      </p>

      <p className="text-gray-300 mb-12">
        We are building more than just a <span className="text-pink-500">token ecosystem</span> — we’re designing a
        living cultural landscape, where each unit of digital heritage is anchored in space, tied to coordinates,
        and brought to life.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-6">Three Core Pillars</h2>

      <div className="space-y-10">

        {/* Block 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-yellow-400 text-black rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L3 10.25l1.5-1.5L9.75 14l10.5-10.5 1.5 1.5L9.75 17z" />
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

        {/* Block 2 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-pink-500 text-black rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Technology as Transparency</h3>
            <p className="text-gray-300">
              Every proposal, transaction, and object is <span className="text-yellow-400">visible on-chain</span>.
              Governance is open. Control is distributed.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 p-2 bg-gray-500 text-white rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Memory as Coordination</h3>
            <p className="text-gray-300">
              Physical and digital memory objects work as infrastructure — not only static records,
              but <span className="text-pink-500">dynamic anchors</span> of interaction.
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
