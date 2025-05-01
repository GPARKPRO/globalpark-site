// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Global Park DAO',
  description: 'A decentralized initiative for art, technology & collective memory.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
