'use client'

import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet } from 'wagmi/chains'
import { createConfig, http } from 'wagmi'
import { QueryClient } from '@tanstack/react-query'

// Альтернатива Viem для подключения (используется в wagmi@v2)
export const config = createConfig(
  getDefaultConfig({
    appName: 'Global Park',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`)
    },
  })
)

export const queryClient = new QueryClient()
