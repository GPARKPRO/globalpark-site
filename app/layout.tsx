// app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Global Park DAO',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
  openGraph: {
    title: 'Global Park DAO',
    description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
    url: 'https://globalpark.io',
    siteName: 'Global Park DAO',
    images: [
      {
        url: 'https://globalpark.io/og.png',
        width: 1200,
        height: 630,
        alt: 'Global Park OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Park DAO',
    description: 'Art, Tech, and Collective Memory on-chain.',
    images: ['https://globalpark.io/og.png'],
    creator: '@GlobalPark_io',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center px-6">
          {children}
        </main>
        <Footer />
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
                'https://twitter.com/GlobalPark_io',
              ],
              logo: {
                '@type': 'ImageObject',
                url: 'https://globalpark.io/og.png',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
