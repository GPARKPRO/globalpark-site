'use client'

import { WagmiProvider, http } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { config, queryClient } from '@/lib/wagmiConfig'
import { mainnet } from 'wagmi/chains'

export default function Providers({ children }: { children: React.ReactNode }) {
  const { wallets } = getDefaultWallets({
    appName: 'Global Park',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [mainnet],
  })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[mainnet]} wallets={wallets}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
