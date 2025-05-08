'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider, createConfig, http, configureChains } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'

const { chains, publicClient } = configureChains(
  [mainnet],
  [http()]
)

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
    <WagmiProvider config={config}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
