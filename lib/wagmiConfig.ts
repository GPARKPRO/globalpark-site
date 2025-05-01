// lib/wagmiConfig.ts
'use client'

import { configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'wagmi/chains'
import { QueryClient } from '@tanstack/react-query'

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
})

export const queryClient = new QueryClient()
