// components/Header.tsx
'use client'

import Link from 'next/link'
import ConnectWallet from './ConnectWallet'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-white text-xl font-bold">GLOBAL PARK</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ConnectWallet />
        </div>
      </div>
    </header>
  )
}
