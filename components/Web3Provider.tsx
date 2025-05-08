'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'

// Укажи список сетей отдельно
const chains = [mainnet]

const { connectors } = getDefaultWallets({
  appName: 'GlobalPark',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
})

const config = createConfig({
  connectors,
  transports: {
    [mainnet.id]: http(),
  },
})

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
