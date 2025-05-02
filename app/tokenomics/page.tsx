'use client'

import { useEffect, useState } from 'react'
import { getGparkContract } from '@/lib/contract'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'

const COLORS = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#a855f7']

const data = [
  { name: 'DAO Treasury', value: 9_000_000 },
  { name: 'Team (Locked)', value: 3_000_000 },
  { name: 'Market Maker', value: 1_000_000 },
  { name: 'Airdrop', value: 1_500_000 },
  { name: 'Staking', value: 3_000_000 },
  { name: 'Partnerships', value: 2_000_000 },
  { name: 'Public Circulation', value: 1_500_000 }
]

export default function TokenomicsPage() {
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchCirculating = async () => {
      try {
        const contract = await getGparkContract()
        const treasury = await contract.balanceOf('0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183')
        const total = await contract.totalSupply()
        const circ = Number(total - treasury) / 1e18
        setCirculating(circ.toFixed(2))
      } catch (err) {
        console.error('Error fetching circulating supply:', err)
      }
    }
    fetchCirculating()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">GPARK Tokenomics</h1>

      <p className="text-center text-gray-400 mb-10">
        Explore how the GPARK token is distributed, managed, and used across the ecosystem.
      </p>

      <div className="mb-16">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={120}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(v: number) => `${v.toLocaleString()} GPARK`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-zinc-900 rounded-lg p-6 mb-10 text-center text-lg">
        <span className="text-gray-400">Circulating Supply:</span>{' '}
        <span className="text-green-400 font-semibold">
          {circulating ? `${circulating} GPARK` : 'Loading...'}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-1">{d.name}</h3>
            <p className="text-gray-400 text-sm">
              {d.value.toLocaleString()} GPARK ({((d.value / 21_000_000) * 100).toFixed(1)}%)
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/"
          className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
