// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import ConnectWallet from './ConnectWallet'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Explore menu button */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-200"
            aria-label="Explore"
          >
            ⋯
          </button>
          {showMenu && (
            <div className="absolute mt-2 bg-black border border-gray-700 rounded shadow-lg z-50 w-40">
              <button
                onClick={() => {
                  setShowMenu(false)
                  router.push('/tokenomics')
                }}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-800 text-sm"
              >
                Tokenomics
              </button>
              <button
                onClick={() => {
                  setShowMenu(false)
                  router.push('/roadmap')
                }}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-800 text-sm"
              >
                Roadmap
              </button>
            </div>
          )}
        </div>

        {/* Logo */}
        <Link href="/">
          <span className="text-white text-xl font-bold">GLOBAL PARK</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <ConnectWallet />
      </div>
    </header>
  )
}
