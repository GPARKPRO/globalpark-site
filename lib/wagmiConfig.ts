'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';
import { http } from 'wagmi';
import { QueryClient } from '@tanstack/react-query';

export const config = getDefaultConfig({
  appName: 'Global Park',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export const queryClient = new QueryClient();
