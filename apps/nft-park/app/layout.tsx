// apps/nft-park/app/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Park',
  description: 'NFT Park by GlobalPark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
