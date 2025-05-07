'use client'
import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Script from 'next/script'

import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { wagmiConfig, chains } from '../lib/wagmi'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global Park DAO" />
        <meta property="og:description" content="A Decentralized Initiative for Art, Technology & Collective Memory" />
        <meta property="og:url" content="https://globalpark.io" />
        <meta property="og:image" content="https://globalpark.io/og.png" />
        <meta property="og:logo" content="https://globalpark.io/og.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Park DAO" />
        <meta name="twitter:description" content="Art, Tech, and Collective Memory on-chain." />
        <meta name="twitter:image" content="https://globalpark.io/og.png" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center px-6">
              {children}
            </main>
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
        <Script
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Organization',
              name: 'Global Park DAO',
              url: 'https://globalpark.io',
              email: 'theglobalpark@gmail.com',
              sameAs: [
                'https://t.me/globalpark_io',
                'https://twitter.com/GlobalPark_io'
              ],
              logo: {
                type: 'image',
                url: 'https://globalpark.io/og.png'
              }
            })
          }}
        />
      </body>
    </html>
  )
}
