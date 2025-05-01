'use client'

import { WagmiConfig } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { wagmiConfig, Web3ModalWrapper } from '@/lib/web3modalConfig'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Web3ModalWrapper />
      </QueryClientProvider>
    </WagmiConfig>
  )
}
