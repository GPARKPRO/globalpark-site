'use client'

import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-xl text-center py-20">
          <h1 className="text-5xl font-bold">GLOBAL PARK</h1>
          <p className="mt-4 text-lg font-light">
            A Decentralized Initiative for Art, Technology & Collective Memory
          </p>
          <p className="mt-2 text-sm text-gray-400">
            We’re building a decentralized initiative where every token and action contributes
            to preserving digital and physical heritage.
          </p>

          <div className="mt-10">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
