'use client'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { QueryClient } from '@tanstack/react-query'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string

const { chains, publicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
)

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)

export const queryClient = new QueryClient()

export const web3Modal = (
  <Web3Modal
    projectId={projectId}
    ethereumClient={ethereumClient}
    themeMode="dark"
  />
)
