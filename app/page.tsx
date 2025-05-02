'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">GLOBAL PARK</h1>
      <p className="mt-4 text-lg md:text-xl font-light">
        A Decentralized Initiative for Art, Technology & Collective Memory
      </p>
      <p className="mt-2 text-sm text-gray-400 max-w-md">
        We’re building a decentralized initiative where every token and action contributes
        to preserving digital and physical heritage.
      </p>

      <div className="mt-10">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </div>
    </div>
  )
}
