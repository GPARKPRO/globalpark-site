import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedLogo from '@/components/AnimatedLogo'

export const metadata: Metadata = {
  title: 'Vision & Philosophy | GlobalPark',
  description:
    'Explore the philosophical and cultural foundation of Global Park DAO — from decentralized space to long-term memory systems.',
}

export default function VisionPage() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Navigation buttons */}
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
      </main>

      <div
        className="relative w-full h-[300px] bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('/banners/1920.png')" }}
        aria-hidden="true"
      >
        <AnimatedLogo />
      </div>
    </>
  )
}
