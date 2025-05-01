'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function ConnectWallet() {
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div>
      <ConnectButton />
    </div>
  )
}
