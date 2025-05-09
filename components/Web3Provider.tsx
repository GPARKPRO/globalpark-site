'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { chains, wagmiConfig } from '@/lib/wagmi'

type Props = {
  children: React.ReactNode
}

export default function Web3Provider({ children }: Props) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        locale="en-US"
        chains={chains}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
