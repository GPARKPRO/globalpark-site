'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getGparkContract } from '@/lib/contract'

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
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Welcome to Your Dashboard
      </h1>

      <div className="bg-zinc-900 rounded-lg p-4 md:p-6 text-sm md:text-base mb-6 text-center font-mono">
        Connected Wallet: {address}
      </div>

      {balance !== null && (
        <div className="bg-green-900 rounded-lg p-4 md:p-6 text-sm md:text-base mb-10 text-center font-mono">
          GPARK Balance: <strong>{balance}</strong>
        </div>
      )}

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
            className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-200 rounded-lg p-6 shadow-sm border border-zinc-700"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
            <p className="mt-2 text-yellow-500 text-xs">Coming soon…</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
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
