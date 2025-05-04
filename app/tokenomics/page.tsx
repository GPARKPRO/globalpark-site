'use client'

import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const TOKEN_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'
const TREASURY_ADDRESS = '0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183'

const erc20Abi = [
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address account) view returns (uint256)',
]

export default function TokenomicsPage() {
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com')
        const contract = new ethers.Contract(TOKEN_ADDRESS, erc20Abi, provider)

        const total = await contract.totalSupply()
        const treasury = await contract.balanceOf(TREASURY_ADDRESS)

        const circulatingValue = Number(total - treasury) / 1e18
        setCirculating(circulatingValue.toFixed(2))
      } catch (err) {
        console.error('Error fetching token data:', err)
      }
    }

    fetchData()
  }, [])

  const data = [
    { name: 'Treasury', value: 21000000 },
    { name: 'Circulating', value: Number(circulating ?? 0) },
  ]

  const COLORS = ['#6366F1', '#22C55E']

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10">
        Explore the real-time distribution of GPARK tokens across the DAO ecosystem.
      </p>

      <div className="bg-zinc-900 rounded-lg p-6 mb-12 border border-zinc-800 text-center">
        <h2 className="text-xl font-semibold text-gray-300 mb-2">Circulating Supply</h2>
        <p className="text-2xl font-mono text-green-400">
          {circulating ? `${circulating} GPARK` : 'Loading...'}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Data fetched from Ethereum Mainnet via public RPC.
        </p>
      </div>

      <div className="w-full max-w-full h-[300px] sm:h-[400px] mb-6">
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
              label={false}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
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
