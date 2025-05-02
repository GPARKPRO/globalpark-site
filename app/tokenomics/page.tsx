'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getGparkContract } from '@/lib/contract'

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444']

const dataTemplate = [
  { name: 'Treasury', value: 0 },
  { name: 'In Circulation', value: 0 },
]

export default function TokenomicsPage() {
  const [data, setData] = useState(dataTemplate)
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const contract = await getGparkContract()
      if (!contract) return

      try {
        const treasury = await contract.balanceOf('0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183')
        const total = await contract.totalSupply()
        const circ = Number(total - treasury) / 1e18

        setCirculating(circ.toFixed(2))
        setData([
          { name: 'Treasury', value: Number(treasury) / 1e18 },
          { name: 'In Circulation', value: circ },
        ])
      } catch (err) {
        console.error('Error fetching tokenomics data:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10">
        Explore the real-time distribution of GPARK tokens across the DAO ecosystem.
      </p>

      <div className="bg-zinc-900 rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Current Circulating Supply</h2>
        <p className="text-center text-3xl text-green-400 font-mono">
          {circulating !== null ? `${circulating} GPARK` : 'Loading...'}
        </p>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          On-chain data source: GPARKToken smart contract.
        </p>
      </div>
    </div>
  )
}
