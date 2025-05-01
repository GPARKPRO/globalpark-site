'use client'

import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.push('/')
    }
  }, [isConnected, router])

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
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

      <footer className="bg-zinc-950 text-sm text-gray-400 px-6 py-6 mt-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Global Park DAO
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/GPARKPRO/GlobalPark-DAO" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/White_Paper.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">WhitePaper</a>
            <a href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Declaration_DAO.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">DAO Declaration</a>
            <a href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Tokenomics_&_Economic_Model.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Tokenomics</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
