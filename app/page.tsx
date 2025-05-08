'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getRandomIcon } from '@/lib/getRandomIcon'
import { Web3Provider } from '@/components/Web3Provider'

export default function Home() {
  const router = useRouter()
  const [backgroundIcon, setBackgroundIcon] = useState<string | null>(null)

  useEffect(() => {
    setBackgroundIcon(getRandomIcon())
  }, [])

  return (
    <Web3Provider>
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

        {/* Background Visual Layer */}
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

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-20 text-center md:text-left max-w-6xl mx-auto text-white">
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
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <button
                onClick={() => router.push('/ask-gpt')}
                className="border border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-500 hover:text-black transition duration-200 animate-pulse"
                aria-label="Ask AI Assistant"
              >
                AI Assistant
              </button>
              <button
                onClick={() => router.push('/docs')}
                className="border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-white hover:text-black transition duration-200"
                aria-label="Read Documentation"
              >
                Docs
              </button>
              <button
                onClick={() => router.push('/dao')}
                className="border border-yellow-500 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
                aria-label="Join the DAO"
              >
                Join DAO
              </button>
            </div>
          </div>

          {/* Logo Section */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
              <Image
                src="/logo.png"
                alt="Global Park DAO Logo"
                layout="fill"
                objectFit="contain"
                className="animate-pulse drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </>
    </Web3Provider>
  )
}
