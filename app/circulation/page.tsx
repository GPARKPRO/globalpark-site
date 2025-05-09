'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'
import { useEnsProfile } from '@/lib/hooks/useEnsProfile'
import { getGparkReadContract } from '@/lib/contract'

export default function CirculationPage() {
  const router = useRouter()
  const { address, status } = useAccount()

  const { ensName, avatarUrl } = useEnsProfile(address as `0x${string}`)

  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'connecting') return
    if (status === 'disconnected') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address) return
      try {
        const contract = getGparkReadContract()
        const raw = await contract.read.balanceOf([address])
        const formatted = Number(raw) / 1e18
        setBalance(formatted.toFixed(2))
      } catch (err) {
        console.error('Error fetching balance:', err)
      }
    }

    fetchBalance()
  }, [address])

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Circulation</h1>
      <p className="text-gray-400 text-center mb-10">
        Monitor the live distribution of GPARK tokens between the DAO Treasury and circulating supply.
      </p>

      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex items-center gap-3 border border-yellow-500 text-yellow-400 font-mono px-5 py-2 rounded-full">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="ENS Avatar"
              className="w-6 h-6 rounded-full object-cover"
            />
          )}
          <span>
            {ensName ?? `${address?.slice(0, 6)}...${address?.slice(-4)}`}
          </span>
        </div>

        {balance !== null && (
          <span className="border border-pink-500 text-pink-500 font-mono px-5 py-2 rounded-full">
            GPARK Balance: {balance}
          </span>
        )}
      </div>

      <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-sm text-gray-300">
        <p>
          The <strong>Treasury</strong> is the collective reserve of the DAO.
          Tokens in this pool are only disbursed through community voting on Snapshot.
        </p>
      </div>
    </div>
  )
}
