'use client'

import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { walletConnect } from 'wagmi/connectors'
import { QueryClient } from '@tanstack/react-query'

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      showQrModal: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },
})

export const queryClient = new QueryClient()
