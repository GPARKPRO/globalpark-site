'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getGparkContract } from '@/lib/contract'
import Image from 'next/image'

export default function DashboardPage() {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          if (accounts.length === 0) {
            router.push('/')
          } else {
            setAddress(accounts[0])
          }
        } catch (err) {
          console.error(err)
          router.push('/')
        }
      } else {
        router.push('/')
      }
    }

    checkConnection()
  }, [router])

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address) return
      const contract = await getGparkContract()
      if (!contract) return
      try {
        const raw = await contract.balanceOf(address)
        const formatted = Number(raw) / 1e18
        setBalance(formatted.toFixed(2))
      } catch (err) {
        console.error('Ошибка при получении баланса:', err)
      }
    }

    fetchBalance()
  }, [address])

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        🧭 Welcome to Your Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 text-center">
        <span className="bg-gradient-to-r from-green-700 to-emerald-500 text-black font-mono px-5 py-2 rounded-full">
          {address ? `🟢 Wallet Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : '🔴 Not Connected'}
        </span>
        {balance !== null && (
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono px-5 py-2 rounded-full">
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
            className="relative bg-gradient-to-br from-zinc-900 to-indigo-900 hover:from-zinc-800 hover:to-indigo-800 transition-all duration-300 rounded-xl p-6 border border-indigo-600 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
            <p className="mt-2 text-indigo-300 text-xs italic">Coming soon…</p>
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
