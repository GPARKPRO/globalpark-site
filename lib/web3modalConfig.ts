'use client'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

const { chains, publicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId }), publicProvider()]
)

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
export const web3Modal = (
  <Web3Modal
    projectId={projectId}
    ethereumClient={ethereumClient}
    themeMode="dark"
  />
)
