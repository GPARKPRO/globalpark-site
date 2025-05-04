import '../styles/globals.css'
import type { Metadata } from 'next'
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <meta property="og:title" content="Global Park DAO" />
        <meta property="og:description" content="A Decentralized Initiative for Art, Technology & Collective Memory" />
        <meta property="og:url" content="https://globalpark.io" />
        <meta property="og:image" content="https://globalpark.io/opengraph.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Park DAO" />
        <meta name="twitter:description" content="Art, Tech, and Collective Memory on-chain." />
        <meta name="twitter:image" content="https://globalpark.io/opengraph.png" />
      </head>
      <body className="relative bg-black text-white min-h-screen flex flex-col">
        <header
          className="w-full flex justify-end px-4 py-4"
          role="banner"
          aria-label="Top navigation"
        >
          <ConnectWallet />
        </header>
        <main
          className="flex-grow flex flex-col items-center justify-center px-6"
          role="main"
        >
          {children}
        </main>
        <Footer />
        <Script strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify({
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
              url: 'https://globalpark.io/opengraph.png'
            }
          })}
        </Script>
      </body>
    </html>
  )
}
