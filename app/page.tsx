'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          if (accounts.length > 0) {
            router.push('/dashboard')
          }
        } catch (err) {
          console.error('Error checking wallet connection', err)
        }
      }
    }

    checkConnection()
  }, [router])

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-20 text-center md:text-left max-w-6xl mx-auto">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          GLOBAL PARK
        </h1>
        <p className="text-lg md:text-xl font-light">
          A Decentralized Initiative for Art, Technology & Collective Memory
        </p>
        <p className="text-sm text-gray-400 max-w-md md:max-w-full font-mono">
          We’re building a decentralized initiative where every token and action contributes
          to preserving digital and physical heritage.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
          <Image
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="animate-pulse drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
