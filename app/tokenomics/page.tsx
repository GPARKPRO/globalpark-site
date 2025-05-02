'use client'

import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getGparkContract } from '@/lib/contract'

const COLORS = ['#6366F1', '#10B981']

const contractAddress = '0x18dD9d45f42B34F665ac2Dc4b97f10e4e81C7938'
const treasuryAddress = '0x4C7635EC1f6870cBBD58c13e3aEB4e43B7EE7183'

export default function TokenomicsPage() {
  const [data, setData] = useState([
    { name: 'Treasury', value: 0 },
    { name: 'In Circulation', value: 0 },
  ])
  const [circulating, setCirculating] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const contract = await getGparkContract()
      if (!contract) return

      try {
        const treasury = await contract.balanceOf(treasuryAddress)
        const total = await contract.totalSupply()
        const circ = Number(total - treasury) / 1e18

        setCirculating(circ.toFixed(2))
        setData([
          { name: 'Treasury', value: Number(treasury) / 1e18 },
          { name: 'In Circulation', value: circ },
        ])
      } catch (err) {
        console.error('Ошибка при получении токенов:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Tokenomics</h1>
      <p className="text-center text-gray-400 mb-10 text-sm">
        Real-time visualization of GPARK token supply across DAO infrastructure.
      </p>

      <div className="bg-zinc-900 rounded-lg p-6 text-center mb-8 border border-zinc-800">
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Circulating Supply</h2>
        <p className="text-2xl font-mono text-green-400">{circulating ?? 'Loading...'} GPARK</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-zinc-800 p-4 rounded-lg text-sm break-all">
          <p className="text-gray-400 mb-1">Contract Address</p>
          <p className="text-blue-400 hover:underline">
            <a href={`https://etherscan.io/address/${contractAddress}`} target="_blank" rel="noopener noreferrer">
              {contractAddress}
            </a>
          </p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg text-sm break-all">
          <p className="text-gray-400 mb-1">DAO Treasury Address</p>
          <p className="text-blue-400 hover:underline">
            <a href={`https://etherscan.io/address/${treasuryAddress}`} target="_blank" rel="noopener noreferrer">
              {treasuryAddress}
            </a>
          </p>
        </div>
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
              outerRadius={110}
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
    </div>
  )
}
