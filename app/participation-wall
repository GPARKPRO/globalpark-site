'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getGparkNftContract } from '@/lib/contract'

interface WallEntry {
  address: string
  tokenId: number
  message?: string
}

export default function ParticipationWallPage() {
  const [entries, setEntries] = useState<WallEntry[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const contract = await getGparkNftContract()
      if (!contract) return

      const promises: Promise<WallEntry | null>[] = []
      for (let i = 0; i < 1000; i++) {
        promises.push(
          contract
            .ownerOf(i)
            .then((address: string) => ({ address, tokenId: i }))
            .catch(() => null)
        )
      }

      const results = await Promise.all(promises)
      const filled = results.filter((x): x is WallEntry => x !== null)
      setEntries(filled)
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Participation Wall
      </h1>
      <p className="text-center text-gray-400 mb-12">
        The first physical monument of Global Park — 1000 NFT Governance holders engraved in digital stone.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
        {[...Array(1000)].map((_, i) => {
          const entry = entries.find(e => e.tokenId === i)
          return (
            <div
              key={i}
              className={`rounded border text-[10px] text-center p-2 transition-all duration-300 h-[80px] flex flex-col items-center justify-center font-mono
              ${entry ? 'bg-zinc-800 border-green-500 text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-600'}`}
            >
              <div className="truncate w-full">
                {entry ? entry.address.slice(0, 6) + '...' + entry.address.slice(-4) : `Slot #${i + 1}`}
              </div>
              {entry && (
                <div className="mt-1 text-xs italic text-green-400">NFT #{i}</div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        Data fetched live from the blockchain (Ethereum Mainnet)
      </div>
    </div>
  )
}
