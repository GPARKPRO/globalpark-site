// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
