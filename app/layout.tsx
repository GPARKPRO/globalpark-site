// app/layout.tsx

import '../styles/globals.css'
import type { ReactNode } from 'react'
import Providers from './providers'

export const metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <div className="relative z-0 flex flex-col min-h-screen">
          <Providers>
            {/* ⬇️ cut */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
              {children}
            </div>
          </Providers>
        </div>
      </body>
    </html>
  )
}
