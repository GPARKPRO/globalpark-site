'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface WallEntry {
  address: string
  id: number
  message: string
}

export default function ParticipationWallPage() {
  const [entries, setEntries] = useState<WallEntry[]>([])

  useEffect(() => {
    // Temporary: 120 mock records to show scale
    const data: WallEntry[] = Array.from({ length: 120 }).map((_, i) => ({
      address: `0xUSERADDRESS${String(i).padStart(3, '0')}`,
      id: i + 1,
      message: 'Together we build the Global Park DAO.',
    }))
    setEntries(data)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Participation Wall</h1>
      <p className="text-center text-gray-400 mb-12">
        A tribute to early supporters of the Global Park DAO. Each tile represents a wallet that holds a Governance NFT.
      </p>

      <div className="mb-6 text-center text-sm text-gray-400">
        🧱 {entries.length} / 1000 Governance Tiles Placed
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="break-inside-avoid rounded-xl bg-zinc-900 border border-zinc-800 p-4 shadow-sm hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">#{entry.id}</span>
              <Image src="/logo.png" alt="Logo" width={20} height={20} className="opacity-60" />
            </div>
            <div className="text-xs text-green-400 truncate mb-2">{entry.address}</div>
            <div className="text-xs text-gray-300 italic mb-2">“{entry.message}”</div>
            <div className="text-center text-gray-500 text-xs">QR (soon)</div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        * Data is temporarily mocked and will be replaced with onchain NFT ownership.
      </div>
    </div>
  )
}
