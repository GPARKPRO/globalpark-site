'use client'

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet } from 'wagmi/chains'
import { createConfig } from 'wagmi'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

export const wagmiConfig = createConfig(
  defaultWagmiConfig({
    chains: [mainnet],
    projectId,
    metadata: {
      name: 'Global Park',
      description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
      url: 'https://globalpark.io',
      icons: ['https://globalpark.io/logo.png']
    }
  })
)
