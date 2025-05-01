import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, chain, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Global Park',
  projectId: 'gpark-dev',
  chains
})

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
