'use client'

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Web3Modal } from '@web3modal/react'
import { EthereumClient } from '@web3modal/ethereum'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

const chains = [mainnet]

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'Global Park',
    description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
    url: 'https://globalpark.io',
    icons: ['https://globalpark.io/logo.png']
  }
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
export const queryClient = new QueryClient()

export function Web3Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export function Web3ModalWrapper() {
  return <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark" />
}
