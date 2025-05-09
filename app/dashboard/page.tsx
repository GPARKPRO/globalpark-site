'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'
import { getGparkContract } from '@/lib/contract'

export default function DashboardPage() {
  const router = useRouter()
  const { address, status } = useAccount()
  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (status === 'disconnected') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address) return
      try {
        const contract = await getGparkContract()
        const raw = await contract.balanceOf([address])
        const formatted = Number(raw) / 1e18
        setBalance(formatted.toFixed(2))
      } catch (err) {
        console.error('Error fetching balance:', err)
      }
    }

    fetchBalance()
  }, [address])

  if (status === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Checking connection...
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Welcome to Your Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 text-center">
        <span className="border border-yellow-500 text-yellow-400 font-mono px-5 py-2 rounded-full">
          {address
            ? `🟡 Wallet Connected: ${address.slice(0, 6)}...${address.slice(-4)}`
            : '🔴 Wallet Not Connected'}
        </span>
        {balance !== null && (
          <span className="border border-pink-500 text-pink-500 font-mono px-5 py-2 rounded-full">
            GPARK Balance: {balance}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'NFT Inventory',
            description: 'View and manage your Global Park NFTs.',
          },
          {
            title: 'DAO Voting',
            description: 'Vote on key decisions and proposals.',
          },
          {
            title: 'Proof of Presence',
            description: 'Register your physical presence in the park.',
          },
          {
            title: 'Staking Program',
            description: 'Earn rewards by staking your tokens.',
          },
        ].map(({ title, description }) => (
          <div
            key={title}
            className="relative bg-gradient-to-br from-zinc-900 to-black hover:from-zinc-800 hover:to-zinc-900 transition-all duration-300 rounded-xl p-6 border border-white shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
            <p className="mt-2 text-yellow-400 text-xs italic">Coming soon…</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => router.push('/')}
          className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
