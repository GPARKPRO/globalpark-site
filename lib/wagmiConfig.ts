// lib/wagmiConfig.ts
'use client'

import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient } from '@tanstack/react-query'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

// ❗️ обязательно укажи реальный URL сайта
const metadata = {
  name: 'Global Park',
  description: 'A Decentralized Initiative for Art, Tech & Collective Memory',
  url: 'https://www.globalpark.io', // ⚠️ важно: должен совпадать с фактическим URL
  icons: ['https://www.globalpark.io/logo.png'],
}

export const config = getDefaultConfig({
  appName: metadata.name,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },
  ssr: true,
  metadata,
})

export const queryClient = new QueryClient()
