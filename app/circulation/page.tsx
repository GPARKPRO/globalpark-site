"use client"

import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { getGparkReadContract } from "@/lib/contract"
import Link from "next/link"

const TOTAL_SUPPLY = 21_000_000
const TREASURY_ADDRESS = "0x4C7635EC1f6870CBBD58c13e3aEB4e43B7EE7183"

export default function CirculationPage() {
  const [circulating, setCirculating] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contract = getGparkReadContract()
        const [total, treasury] = await Promise.all([
          contract.read.totalSupply(),
          contract.read.balanceOf([TREASURY_ADDRESS])
        ])

        const totalNum = Number(formatUnits(total, 18))
        const treasuryNum = Number(formatUnits(treasury, 18))
        const circulatingVal = Math.max(totalNum - treasuryNum, 0)

        setCirculating(circulatingVal)
      } catch (err) {
        console.error("Error fetching token data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const chartData = [
    {
      name: "Treasury",
      value: circulating !== null ? TOTAL_SUPPLY - circulating : TOTAL_SUPPLY,
      color: "#6366F1"
    },
    {
      name: "Circulating",
      value: circulating ?? 0,
      color: "#22C55E"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Circulation</h1>
        <span className="text-xs bg-green-600/20 border border-green-600 text-green-400 px-3 py-1 rounded-full font-mono">
          ✓ Verified on-chain
        </span>
      </div>

      <p className="text-gray-400 mb-10 text-center">
        Live data from Ethereum Mainnet — GPARK token distribution.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Pie Chart */}
        <div className="w-full h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#111"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null
                  const data = payload[0].payload
                  return (
                    <div className="bg-zinc-800 text-white p-2 rounded shadow text-sm">
                      {data.name}: {data.value.toLocaleString()} GPARK
                    </div>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats and Legend */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Circulating Supply
          </h2>
          <div className="text-3xl font-mono text-green-400 mb-2">
            {loading ? "Loading..." : `${circulating?.toLocaleString()} GPARK`}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            {chartData.map(({ name, value, color }) => {
              const percentage = ((value / TOTAL_SUPPLY) * 100).toFixed(1)
              return (
                <div key={name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="w-28 text-white font-medium">{name}</span>
                  <div className="flex-1 bg-white/10 h-2 rounded">
                    <div
                      className="h-2 rounded"
                      style={{ width: `${percentage}%`, backgroundColor: color }}
                    />
                  </div>
                  <span className="w-14 text-right text-white">{percentage}%</span>
                </div>
              )
            })}
          </div>

          <div className="mt-6">
            <Link
              href={`https://etherscan.io/token/${process.env.NEXT_PUBLIC_GPARK_TOKEN_ADDRESS}`}
              target="_blank"
              className="text-sm text-pink-500 hover:underline"
            >
              → View on Etherscan
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
