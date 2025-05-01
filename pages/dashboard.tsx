// pages/dashboard.tsx

'use client'

import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.push('/')
    }
  }, [isConnected, router])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Welcome to your Dashboard
        </h1>

        <div className="bg-gray-900 rounded-lg p-6 max-w-lg w-full shadow-lg">
          <p className="mb-2">
            <strong>Wallet Address:</strong> {address}
          </p>
          <p className="mb-2 text-gray-300">More modules coming soon:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>NFT Inventory</li>
            <li>DAO Voting</li>
            <li>Proof of Presence</li>
            <li>Staking Program</li>
          </ul>
        </div>

        <button
          onClick={() => router.push('/')}
          className="mt-8 bg-white text-black px-5 py-2 font-medium rounded hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>
      </main>

      <Footer />
    </div>
  )
}
