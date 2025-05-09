import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Executive Summary | GlobalPark',
  description:
    'An overview of the vision, structure, and value framework behind the Global Park DAO.',
}

export default function ExecutiveSummaryPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">Executive Summary</h1>

      <p className="text-gray-300 mb-4">
        <span className="text-yellow-400 font-medium">Global Park DAO</span> is a decentralized initiative at the
        intersection of <span className="text-pink-500">art, technology, and collective memory</span>. Built on Ethereum
        and governed by a multisignature DAO Council, the project seeks to redefine how physical and digital spaces
        can coexist through a shared, blockchain-anchored cultural ecosystem.
      </p>

      <p className="text-gray-300 mb-4">
        In a world where creative expression is often siloed, monetized, and owned by closed systems, Global Park
        proposes a radically open and transparent model. The park is not simply a physical location — it is a living
        layer of programmable space, shaped by its community and made <span className="text-yellow-400">scarce by design</span>.
      </p>

      <p className="text-gray-300 mb-4">
        Every object, digital or physical, represents a unique coordinate in a new kind of landscape, powered by the
        GPARK token and curated by collective governance.
      </p>

      <p className="text-gray-300 mb-4">
        The DAO introduces a system where individuals, creators, and institutions can co-create and claim presence
        within the park. While the token offers no promise of profit, its utility as a gateway to limited physical
        space and network-based collaboration presents an asymmetric opportunity for value generation. In this structure,
        every participant becomes a potential builder, contributor, or steward.
      </p>

      <p className="text-gray-300">
        What makes Global Park unique is its long-view design: every phase, from token launch to real-world deployment,
        is documented, governed, and executed through open-source infrastructure. The scarcity of park space is not a
        limitation — it is an invitation to participate <span className="text-pink-500">early, intentionally, and meaningfully</span> 
        in a cultural landmark of the decentralized era.
      </p>

      {/* Navigation Button */}
      <div className="mt-16 flex justify-end">
        <Link
          href="/docs/white-paper/vision"
          className="text-yellow-400 hover:bg-yellow-400 hover:text-black border border-yellow-500 px-4 py-2 rounded transition"
        >
          Next: Vision & Philosophy →
        </Link>
      </div>

      {/* Bottom Banner */}
      <div className="mt-20 rounded-lg overflow-hidden border border-zinc-800 shadow-lg">
        <img
          src="/banners/1920.png"
          alt="Executive Summary Banner"
          className="w-full object-cover"
        />
      </div>
    </main>
  )
}
