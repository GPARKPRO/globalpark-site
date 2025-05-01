'use client'

import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injectedConnector } from '@wagmi/connectors/injected'
import { QueryClient } from '@tanstack/react-query'

export const config = createConfig({
  connectors: [
    injectedConnector({ chains: [mainnet] }),
  ],
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
})

export const queryClient = new QueryClient()
