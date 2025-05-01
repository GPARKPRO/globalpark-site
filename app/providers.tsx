'use client'

import { WagmiProvider } from 'wagmi'
import { Web3ModalProvider } from '@web3modal/wagmi/react'
import { wagmiConfig } from '@/lib/web3modalConfig'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <Web3ModalProvider>{children}</Web3ModalProvider>
    </WagmiProvider>
  )
}
