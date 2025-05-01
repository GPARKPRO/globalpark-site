'use client'

import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient } from '@tanstack/react-query'
import { walletConnect, injected, metaMask, coinbaseWallet } from 'wagmi/connectors'

const alchemyHttpUrl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(alchemyHttpUrl),
  },
  connectors: [
    injected(),
    metaMask(),
    coinbaseWallet({
      appName: 'Global Park',
    }),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      metadata: {
        name: 'Global Park',
        description: 'Connect to the Global Park DAO',
        url: 'https://globalpark.io',
        icons: ['https://globalpark.io/logo.png'],
      },
    }),
  ],
  ssr: true,
})

export const queryClient = new QueryClient()
