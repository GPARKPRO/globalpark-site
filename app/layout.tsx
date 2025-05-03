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
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Header */}
        <div className="w-full flex justify-end px-4 py-4">
          <ConnectWallet />
        </div>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-6">
          {children]
        </main>

        <Footer />
        <Script type="json-ld" strategy="body">
          {`json}
            {"@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Global Park DAO",
            "url": "https://globalpark.io",
            "sameAsAsset": true,
            "logo": {
              "type": "image",
              "url": "https://globalpark.io/opengraph.png"
            }
          }
        </Script>
      </body>
    </html>
  )
}
