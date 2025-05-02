'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { getGparkContract } from '@/lib/contract'

export default function TokenomicsPage() {
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const contract = await getGparkContract()
        if (!contract) return
        const treasury = await contract.balanceOf('0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183')
        const total = await contract.totalSupply()
        const circ = Number(total - treasury) / 1e18
        setCirculating(circ.toFixed(2))
      } catch (err) {
        console.error('Error fetching supply:', err)
      }
    }
    fetchSupply()
  }, [])

  const data = [
    { name: 'Treasury', value: 21000000 },
    { name: 'Circulating', value: Number(circulating ?? 0) },
  ]

  const COLORS = ['#6366F1', '#22C55E']

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10">
        Explore the real-time distribution of GPARK tokens across the DAO ecosystem.
      </p>

      <div className="bg-zinc-900 rounded-lg p-6 text-center mb-8 border border-zinc-800">
        <h2 className="text-lg font-semibold text-gray-300 mb-1">Circulating Supply</h2>
        <p className="text-2xl font-mono text-green-400 mb-2">{circulating ?? 'Loading...'} GPARK</p>
        <p className="text-xs text-gray-500">
          Data fetched directly from the blockchain and Etherscan.
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name }) => name}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
