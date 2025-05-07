'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'

const { chains, publicClient } = configureChains([mainnet], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'Global Park',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  chains,
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider locale="en-US" chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

