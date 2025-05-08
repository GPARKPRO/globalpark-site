import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export const chains = [mainnet]

export const wagmiConfig = getDefaultConfig({
  appName: 'GlobalPark',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  chains,
  transports: {
    [mainnet.id]: http()
  }
})
