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

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard</h1>

      <div className="bg-zinc-900 rounded-lg p-6 mb-10">
        <p className="mb-2 text-sm text-gray-400">
          <span className="font-semibold text-white">Wallet Address:</span> {address}
        </p>

        <p className="text-sm text-gray-400 mb-2">More modules coming soon:</p>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2">
          <li>NFT Inventory</li>
          <li>DAO Voting</li>
          <li>Proof of Presence</li>
          <li>Staking Program</li>
        </ul>
      </div>

      <Link
        href="/"
        className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
