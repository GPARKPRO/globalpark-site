'use client'

import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { getGparkReadContract } from '@/lib/contract'

const TOTAL_SUPPLY = 21_000_000
const TREASURY_ADDRESS = '0x4C7635EC1f6870CBBD58c13e3aEB4e43B7EE7183'
const COLORS = ['#6366F1', '#22C55E']

export default function TokenomicsPage() {
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contract = getGparkReadContract()

        const [total, treasury] = await Promise.all([
          contract.read.totalSupply(),
          contract.read.balanceOf([TREASURY_ADDRESS]),
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
      value: circulating ? TOTAL_SUPPLY - Number(circulating) : TOTAL_SUPPLY,
    },
    {
      name: 'Circulating',
      value: Number(circulating ?? 0),
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10">
        Real-time breakdown of the GPARK token supply across the ecosystem.
      </p>

      {/* Circulating Supply */}
      <div className="border border-yellow-500 bg-yellow-900/10 text-center rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">Circulating Supply</h2>
        <p className="text-2xl font-mono text-green-400">
          {circulating !== null ? `${circulating} GPARK` : 'Loading...'}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Data fetched from Ethereum Mainnet (read-only).
        </p>
      </div>

      {/* Token Chart */}
      <div className="w-full max-w-full h-[300px] sm:h-[400px] mb-6">
        <h2 className="text-lg font-semibold mb-2 text-center text-gray-300">Supply Breakdown</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 text-sm text-gray-400 mb-8">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 inline-block rounded-full bg-indigo-500" />
          Treasury
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 inline-block rounded-full bg-green-500" />
          Circulating
        </div>
      </div>

      {/* Treasury Info */}
      <div className="text-center text-gray-400 text-sm max-w-2xl mx-auto">
        <p>
          <strong className="text-white">Treasury</strong> refers to the DAO's central reserve of GPARK tokens,
          managed exclusively through
          <a
            href="https://snapshot.org/#/globalpark.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-500 mx-1"
          >
            Snapshot
          </a>
          proposals and community voting.
        </p>
        <p className="mt-2">
          All disbursements are subject to decentralized governance, ensuring transparency,
          accountability, and collective decision-making by token holders.
        </p>
      </div>
    </div>
  )
}
