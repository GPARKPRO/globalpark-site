'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const router = useRouter()

  // При необходимости можно в будущем добавить авторизацию через Supabase
  useEffect(() => {
    // router.push('/') — если нужна проверка авторизации
  }, [router])

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Welcome to Your Dashboard
      </h1>

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
