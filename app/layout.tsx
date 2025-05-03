import '../styles/globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import ConnectWallet from '../components/ConnectWallet'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+ml" sizes="any" />
        <meta property="og:title" content="Global Park DAO" />
        <meta property="og:description" content="A Decentralized Initiative for Art, Technology & Collective Memory" />
        <meta property="og:url" content="https://globalpark.io" />
        <meta property="og:image" content="https://globalpark.io/opengraph.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Park DAO" />
        <meta name="twitter:description" content="Art, Tech, and Collective Memory on-chain." />
        <meta name="twitter:image" content="https://globalpark.io/opengraph.png" />
      </Head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <header className="w