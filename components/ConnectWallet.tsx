'use client'

import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const ConnectButton = dynamic(
  () => import('@rainbow-me/rainbowkit').then(mod => mod.ConnectButton),
  { ssr: false }
)

export default function ConnectWallet() {
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard')
    }
  }, [isConnected, router])

  return (
    <div className="mt-8">
      <div className="inline-block border border-white px-5 py-2 font-medium rounded hover:bg-white hover:text-black transition text-white">
        <ConnectButton
          accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
          chainStatus="icon"
          showBalance={false}
        />
      </div>
    </div>
  )
}
