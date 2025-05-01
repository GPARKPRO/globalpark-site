// app/layout.tsx

import '../styles/globals.css'
import type { ReactNode } from 'react'
import Providers from './providers'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        <Providers>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
