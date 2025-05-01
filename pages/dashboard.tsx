'use client'

import { useAccount, useEnsName } from 'wagmi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.push('/') // если не подключён — вернём на главную
    }
  }, [isConnected, router])

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <p><strong>Wallet Address:</strong> {ensName || address}</p>
          <p className="mt-2 text-gray-400">More modules coming soon:</p>
          <ul className="list-disc list-inside mt-1 text-sm text-gray-400">
            <li>NFT Inventory</li>
            <li>DAO Voting</li>
            <li>Proof of Presence</li>
            <li>Staking Program</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
