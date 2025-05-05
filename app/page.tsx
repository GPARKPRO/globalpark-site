'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getRandomIcon } from '@/lib/getRandomIcon'

export default function Home() {
  const router = useRouter()
  const [backgroundIcon, setBackgroundIcon] = useState<string | null>(null)

  useEffect(() => {
    setBackgroundIcon(getRandomIcon())
  }, [])

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global Park DAO",
              url: "https://globalpark.io",
              logo: "https://globalpark.io/logo.png",
              description:
                "A decentralized initiative for art, technology and collective memory preservation.",
              sameAs: [
                "https://twitter.com/GlobalParkDAO",
                "https://github.com/GPARKPRO/globalpark-site"
              ]
            })
          }}
        />
      </Head>

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-black opacity-30" />
        {backgroundIcon && (
          <div
            className="absolute top-0 right-0 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-no-repeat bg-contain bg-right-top opacity-25 brightness-150 mix-blend-overlay"
            style={{ backgroundImage: `url(/icons/${backgroundIcon}.svg)` }}
          />
        )}
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <section className="md:w-1/2 text-center md:text-left space-y-6">
          <h1
            id="main-heading"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Global Park DAO
          </h1>
          <p className="text-lg md:text-xl font-light">
            A Decentralized Initiative for Art, Technology & Collective Memory
          </p>
          <p className="text-sm text-gray-400 max-w-xl font-mono">
            We’re building a decentralized initiative where every token and action contributes to preserving digital and physical heritage.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push('/ask-gpt')}
              className="border border-pink-500 text-pink-500 px-5 py-2 rounded hover:bg-pink-500 hover:text-black transition duration-200 animate-pulse"
              aria-label="Ask AI Assistant"
            >
              AI Assistant
            </button>
            <button
              onClick={() => router.push('/docs')}
              className="border border-gray-500 text-gray-300 px-5 py-2 rounded hover:bg-white hover:text-black transition duration-200"
              aria-label="Read Documentation"
            >
              Docs
            </button>
            <button
              onClick={() => router.push('/dao')}
              className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
              aria-label="Join the DAO"
            >
              Join DAO
            </button>
          </div>
        </section>

        {/* Logo Image */}
        <aside className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
            <Image
              src="/logo.png"
              alt="Global Park DAO Logo"
              layout="fill"
              objectFit="contain"
              className="animate-pulse drop-shadow-lg"
              priority
            />
          </div>
        </aside>
      </main>
    </>
  )
}
