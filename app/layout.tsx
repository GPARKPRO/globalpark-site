// app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Global Park',
  description: 'A Decentralized Initiative for Art, Technology & Collective Memory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <main className="flex-grow flex justify-center items-center px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
