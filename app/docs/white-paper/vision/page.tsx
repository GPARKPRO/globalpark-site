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

      <p className="text-gray-300 mb-12">
        We are building more than just a <span className="text-pink-500">token ecosystem</span> — we’re designing a
        living cultural landscape, where each unit of digital heritage is anchored in space, tied to coordinates,
        and brought to life.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-6">Three Core Pillars</h2>

      <div className="space-y-10">

        {/* Block 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded bg-yellow-400 p-1">
            <img src="/icons/Scheme-3.svg" alt="Art icon" className="w-full h-full" />
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
          <div className="w-10 h-10 rounded bg-pink-500 p-1">
            <img src="/icons/Scheme-7.svg" alt="Tech icon" className="w-full h-full" />
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
          <div className="w-10 h-10 rounded bg-gray-500 p-1">
            <img src="/icons/Scheme-5.svg" alt="Memory icon" className="w-full h-full" />
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
