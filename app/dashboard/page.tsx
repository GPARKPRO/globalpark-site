'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const [address, setAddress] = useState<string | null>(null)
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

  const modules = [
    { title: 'NFT Inventory', description: 'View and manage your Global Park NFTs.' },
    { title: 'DAO Voting', description: 'Vote on key decisions and proposals.' },
    { title: 'Proof of Presence', description: 'Register your physical presence in the park.' },
    { title: 'Staking Program', description: 'Earn rewards by staking your tokens.' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Welcome to Your Dashboard</h1>

      <div className="bg-zinc-900 rounded-xl p-6 mb-12 text-sm text-gray-300">
        <p className="mb-1">Connected Wallet:</p>
        <p className="font-mono text-white">{address}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition hover:border-white hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">
              {mod.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300">{mod.description}</p>
            <span className="mt-3 inline-block text-xs text-yellow-400 font-medium">
              Coming soon...
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
