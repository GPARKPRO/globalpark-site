'use client'

import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
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
    <div className="mt-6">
      <ConnectButton
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        chainStatus="icon"
        showBalance={false}
      />
    </div>
  )
}
