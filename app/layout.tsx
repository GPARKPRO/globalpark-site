import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '../components/Footer'
import ConnectWallet from '../components/ConnectWallet'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="w-full flex justify-end px-4 py-4" role="banner" aria-label="Top navigation">
        <ConnectWallet />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-6" role="main">
        {children}
      </main>
      <Footer />
      <Script strategy="afterInteractive" type="application/ld+json">
        {`{
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "Global Park DAO",
  "url": "https://globalpark.io",
  "sameAsAsset": true,
  "logo": {
    "type": "image",
    "url": "https://globalpark.io/opengraph.png"
  }
}`}
      </Script>
    </div>
  )
}
