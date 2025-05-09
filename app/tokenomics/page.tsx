'use client'

import { useEffect, useState } from 'react'
import {
  readContract,
  getPublicClient,
  formatUnits,
} from 'viem'
import GPARK_ABI from '@/lib/GPARKTokenABI.json'
import { CONTRACT_ADDRESS, TREASURY_ADDRESS } from '@/lib/contract'

export default function TokenomicsPage() {
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = getPublicClient()

        const [total, treasury] = await Promise.all([
          readContract(client, {
            address: TOKEN_ADDRESS,
            abi: GPARK_ABI,
            functionName: 'totalSupply',
          }),
          readContract(client, {
            address: TOKEN_ADDRESS,
            abi: GPARK_ABI,
            functionName: 'balanceOf',
            args: [TREASURY_ADDRESS],
          }),
        ])

        const totalNum = Number(formatUnits(total, 18))
        const treasuryNum = Number(formatUnits(treasury, 18))
        const circulatingValue = Math.max(totalNum - treasuryNum, 0)

        setCirculating(circulatingValue.toFixed(2))
      } catch (err) {
        console.error('Error fetching token data:', err)
        setCirculating('0.00')
      }
    }

    fetchData()
  }, [])

  const data = [
    {
      name: 'Treasury',
      value: circulating ? 21000000 - Number(circulating) : 21000000,
    },
    {
      name: 'Circulating',
      value: Number(circulating ?? 0),
    },
  ]

  const COLORS = ['#6366F1', '#22C55E']

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10">
        Explore the real-time distribution of GPARK tokens across the DAO ecosystem.
      </p>

      <div className="border border-yellow-500 bg-yellow-900/10 text-center rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">Circulating Supply</h2>
        <p className="text-2xl font-mono text-green-400">
          {circulating !== null ? `${circulating} GPARK` : 'Loading...'}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Data fetched from Ethereum Mainnet via viem.
        </p>
      </div>

      {/* Token Chart */}
      <div className="w-full max-w-full h-[300px] sm:h-[400px] mb-6">
        <h2 className="text-lg font-semibold mb-2 text-center text-gray-300">
          Supply Breakdown
        </h2>
        <div className="w-full h-full flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 36 36" className="text-center">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#6366F1"
              strokeWidth="4"
              strokeDasharray={`${(data[0].value / 21000000) * 100}, 100`}
              transform="rotate(-90 18 18)"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#22C55E"
              strokeWidth="4"
              strokeDasharray={`${(data[1].value / 21000000) * 100}, 100`}
              transform={`rotate(${(data[0].value / 21000000) * 360 - 90} 18 18)`}
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 inline-block rounded-full bg-indigo-500" />
          Treasury
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 inline-block rounded-full bg-green-500" />
          Circulating
        </div>
      </div>
    </div>
  )
}
