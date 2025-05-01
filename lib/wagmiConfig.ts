'use client'

import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { QueryClient } from '@tanstack/react-query'
import { walletConnectProvider } from '@rainbow-me/rainbowkit/providers/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    walletConnectProvider({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      metadata: {
        name: 'Global Park',
        description: 'A Decentralized Initiative for Art, Tech & Memory',
        url: 'https://globalpark.io',
      },
    }),
    publicProvider(),
  ]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [],
})

export const queryClient = new QueryClient()
