// lib/wagmiConfig.ts
'use client'

import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet } from 'wagmi/chains'
import { http } from 'wagmi'
import { QueryClient } from '@tanstack/react-query'

export const config = getDefaultConfig({
  appName: 'Global Park',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`)
  },
  ssr: true
})

export const queryClient = new QueryClient()
