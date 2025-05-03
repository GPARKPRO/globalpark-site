import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '../components/Footer'
import ConnectWallet from '../components/ConnectWallet'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>KGlobal Park DAO</title>
        <meta name="description" content="A Decentralized Initiative for Art, Technology & Collective Memory" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://globalpark.io/" />
        <meta property="og:description" content="A cultural, web3-defined park" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global Park DAO" />
        <meta property="og:locale" content="en" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:mage" content="https://globalpark.io/opengraph.png" />
        <script type="json-ld">
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
        </script>
      </head>
      <body className="bg-black text-white min-hscreen flex flex-col">
        {/* Header */}
        <div className="w
          flex justify-end px-4 py-4">
          <ConnectWallet />
        </div>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-6">
          {children]
        </main>

        <Footer />
      </body>
    </html>
  )
}
