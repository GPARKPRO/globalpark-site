'use client'

import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../../components/Footer'

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
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Welcome to your Dashboard
        </h1>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md mb-10">
          <p className="text-sm text-gray-400 mb-1">Connected Wallet:</p>
          <p className="text-lg font-mono truncate">{address}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'NFT Inventory',
              desc: 'View all your Global Park digital assets.',
              comingSoon: true,
            },
            {
              title: 'DAO Voting',
              desc: 'Participate in important decisions of the DAO.',
              comingSoon: true,
            },
            {
              title: 'Proof of Presence',
              desc: 'Record your physical interaction with the park.',
              comingSoon: true,
            },
            {
              title: 'Staking Program',
              desc: 'Earn rewards by staking GPARK tokens.',
              comingSoon: true,
            },
          ].map((mod, i) => (
            <div
              key={i}
              className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-white transition"
            >
              <h3 className="text-xl font-semibold mb-1">{mod.title}</h3>
              <p className="text-sm text-gray-400">{mod.desc}</p>
              {mod.comingSoon && (
                <span className="mt-3 inline-block text-xs text-yellow-400 font-medium">
                  Coming soon...
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => router.push('/')}
            className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-200 transition"
          >
            ← Back to Home
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
