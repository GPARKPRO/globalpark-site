import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Global Park',
  projectId: '404ebf9e40a036343451598086ce75e5', //ID
  chains: [mainnet],
  ssr: true
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
