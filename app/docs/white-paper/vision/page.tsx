import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Vision & Philosophy | GlobalPark',
  description: 'Explore the philosophical and cultural foundation of Global Park DAO — from decentralized space to long-term memory systems.',
};

export default function VisionPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">2. Vision and Philosophical Foundation</h1>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">2.1 Vision: Decentralized Cultural Landscape</h2>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400 font-medium">Global Park DAO</span> is a next-generation cultural system in which
        digital artifacts (NFTs) become the foundation for creating physical installations, public spaces, and architectural expressions of memory.
      </p>

      <p className="text-gray-300 mb-4">
        We are building more than just a token ecosystem — we’re designing a living cultural landscape,
        where each unit of digital heritage is anchored in space, tied to coordinates, and brought to life.
      </p>

      <p className="text-gray-300 mb-4">
        This park exists in three parallel dimensions:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li><span className="text-white font-medium">Physically</span> — as an evolving, walkable terrain of architecture, sculptures, and curated spaces.</li>
        <li><span className="text-white font-medium">On-chain</span> — as a DAO-managed structure of governance, token utility, and NFT provenance.</li>
        <li><span className="text-white font-medium">Culturally</span> — as a long-term initiative that safeguards, co-creates, and archives collective memory.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        The ultimate goal of <span className="text-yellow-400">GPARK</span> is to create the world’s first decentralized cultural landscape — 
        not governed by centralized institutions or private interests, but by a transparent, token-based protocol of participation and presence.
      </p>

      <p className="text-gray-300 mb-8">
        Each NFT is not just a collectible — it’s a programmable coordinate, a signal of contribution, and a permanent fixture in a shared spatial narrative.
      </p>

      <h2 className="text-2xl text-yellow-400 font-semibold mb-4">2.2 Philosophy: Art, Transparency, Memory</h2>

      <p className="text-gray-300 mb-4">
        Global Park DAO arises from a simple yet vital idea: <span className="text-pink-500">culture, art, and memory deserve decentralized foundations</span>.
      </p>

      <p className="text-gray-300 mb-4">
        We envision a future in which both physical and digital spaces are not owned or exploited, but co-created, protected, and activated by the communities that inhabit them.
      </p>

      <p className="text-gray-300 mb-4">
        While institutions and cities are often shaped by invisible hierarchies, <span className="text-yellow-400">GPARK</span> offers an alternative — a programmable space where rules, access, and growth are defined not by private control, but by consensus.
      </p>

      <p className="text-gray-300 mb-4">
        Our philosophical base rests on three pillars:
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        <li><span className="text-white font-medium">Art as infrastructure</span> – not decoration, but the backbone of public architecture.</li>
        <li><span className="text-white font-medium">Technology as transparency</span> – every decision, transaction, and permission is recorded on-chain.</li>
        <li><span className="text-white font-medium">Memory as coordination</span> – every object is not just a file or sculpture, but a fragment of shared significance.</li>
      </ul>

      <p className="text-gray-300">
        Aligned with long-term cultural frameworks such as <span className="text-yellow-400">Dubai 2040</span>,
        the project is not speculative — it is architectural. Every coordinate, every participant, every block on-chain
        is a building block in a decentralized cultural future.
      </p>
      <div className="mt-16 flex justify-between items-center gap-4 text-sm">
  <Link
    href="/docs/white-paper/summary"
    className="text-gray-400 hover:text-white border border-white/20 px-4 py-2 rounded"
  >
    ← Previous: Executive Summary
  </Link>
  <Link
    href="/docs/white-paper/digital-heritage"
    className="text-yellow-400 hover:bg-yellow-400 hover:text-black border border-yellow-500 px-4 py-2 rounded transition"
  >
    Next: Digital Heritage →
  </Link>
</div>
{/* Full-Width Background Banner with Animated SVG Logo */}
<div
  className="relative w-full h-[300px] bg-cover bg-center mt-20"
  style={{ backgroundImage: "url('/banners/1920.png')" }}
  aria-hidden="true"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.4, ease: 'easeOut' }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <img
      src="/logo.svg"
      alt="GlobalPark Logo"
      className="w-48 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
    />
  </motion.div>
</div>
    </main>
  );
}
