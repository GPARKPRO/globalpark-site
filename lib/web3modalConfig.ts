'use client'

import { EthereumClient, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { Web3Modal } from '@web3modal/html'
import { InjectedConnector } from '@wagmi/core/connectors/injected'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

// Configure chains & providers
const { chains, publicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
)

// Create wagmi config
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
        showQrModal: false,
      },
    }),
  ],
  publicClient,
})

// Create EthereumClient & Web3Modal
export const ethereumClient = new EthereumClient(wagmiConfig, chains)

export const web3Modal = new Web3Modal({
  projectId,
  themeMode: 'dark',
  themeColor: 'blackWhite',
  themeBackground: 'themeColor',
}, ethereumClient)
