'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        {/* Grid Layer */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-black opacity-30 pointer-events-none" />

        {/* Background Icon */}
        <Image
          src="/icons/Scheme-2.svg"
          alt="Visual Scheme"
          width={900}
          height={900}
          className="absolute top-[-150px] right-[-100px] opacity-5 blur-[2px] grayscale mix-blend-overlay pointer-events-none"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-20 text-center md:text-left max-w-6xl mx-auto text-white">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Global Park DAO
          </h1>
          <p className="text-lg md:text-xl font-light">
            A Decentralized Initiative for Art, Technology & Collective Memory
          </p>
          <p className="text-sm text-gray-400 max-w-md md:max-w-full font-mono">
            We’re building a decentralized initiative where every token and action contributes
            to preserving digital and physical heritage.
          </p>

          {/* Button Section */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push('/ask-gpt')}
              className="border border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-500 hover:text-black transition duration-200 animate-pulse"
            >
              AI Assistant
            </button>

            <a
              href="https://github.com/GPARKPRO/GlobalPark-DAO"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-white hover:text-black transition duration-200"
            >
              GitHub
            </a>

            <button
              onClick={() => router.push('/dao')}
              className="border border-yellow-500 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
            >
              Join DAO
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
            <Image
              src="/logo.png"
              alt="Global Park Logo"
              layout="fill"
              objectFit="contain"
              className="animate-pulse drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
