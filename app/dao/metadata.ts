import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Park DAO',
  description: 'Decentralized governance for cultural memory using Web3 infrastructure, NFT coordinates, and on-chain voting.',
  openGraph: {
    title: 'Global Park DAO',
    description: 'Community-led governance of a phygital park through smart contracts, Gnosis Safe, and Snapshot voting.',
    url: 'https://globalpark.io/dao',
    images: [
      {
        url: 'https://globalpark.io/og',
        width: 1200,
        height: 630,
        alt: 'Global Park DAO'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Park DAO',
    description: 'Own a piece of decentralized legacy. Govern space, culture, and permanence on-chain.',
    images: ['https://globalpark.io/og.png']
  }
}
