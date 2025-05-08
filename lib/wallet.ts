'use client'

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { createConfig, WagmiProvider, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const chains = [mainnet]

const { connectors } = getDefaultWallets({
  appName: 'GlobalPark',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  chains
})

const wagmiConfig = createConfig({
  connectors,
  chains,
  transports: {
    [mainnet.id]: http()
  }
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
