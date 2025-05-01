// app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        <Providers>
          <div className="flex flex-col min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
