'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getGparkContract } from '@/lib/contract'

interface WallEntry {
  address: string
}

export default function ParticipationWallPage() {
  const [entries, setEntries] = useState<WallEntry[]>([])

  useEffect(() => {
    const fetchOwners = async () => {
      const contract = await getGparkContract()
      if (!contract) return

      try {
        const owners: WallEntry[] = []

        // !!! (next time: NFT)
        for (let i = 0; i < 12; i++) {
          owners.push({
            address: `0xUSERADDRESS${i.toString().padStart(3, '0')}`,
          })
        }

        setEntries(owners)
      } catch (err) {
        console.error('Error loading data:', err)
      }
    }

    fetchOwners()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Participation Wall
      </h1>
      <p className="text-center text-gray-400 mb-12">
        A tribute to early supporters of the Global Park DAO. Each tile represents a wallet that holds a Governance NFT.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-xs text-center hover:bg-zinc-700 transition"
          >
            <p className="break-all mb-2">{entry.address}</p>
            <div className="w-16 h-16 mx-auto">
              <Image
                src="/qr-placeholder.png" // replace later with generated QR
                alt="QR Code"
                width={64}
                height={64}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-gray-500">* Data is temporarily mocked and will be replaced with onchain NFT ownership.</p>
      </div>
    </div>
  )
}
