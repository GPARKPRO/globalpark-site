'use client'

import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { QueryClient } from '@tanstack/react-query'

export const config = createConfig({
  connectors: [
    injected({
      targetChain: mainnet,
    }),
  ],
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
})

export const queryClient = new QueryClient()
