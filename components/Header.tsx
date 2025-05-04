'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ConnectWallet from './ConnectWallet'
import {
  HomeIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  MapIcon,
  RectangleStackIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const menuItems = [
    { label: 'Home', icon: <HomeIcon className="w-4 h-4 mr-2" />, path: '/' },
    { label: 'Join DAO', icon: <UserGroupIcon className="w-4 h-4 mr-2" />, path: '/dao' },
    { label: 'AI Assistant', icon: <CpuChipIcon className="w-4 h-4 mr-2" />, path: '/ask-gpt' },
    { label: 'Tokenomics', icon: <ChartBarIcon className="w-4 h-4 mr-2" />, path: '/tokenomics' },
    { label: 'Roadmap', icon: <MapIcon className="w-4 h-4 mr-2" />, path: '/roadmap' },
    { label: 'Participation Wall', icon: <RectangleStackIcon className="w-4 h-4 mr-2" />, path: '/wall' },
  ]

  return (
    <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-4 flex items-center justify-between">
      {/* Left: Menu */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-200"
          aria-label="Explore"
        >
          ⋯
        </button>
        {showMenu && (
          <div className="absolute mt-2 bg-black border border-gray-700 rounded shadow-lg z-50 w-56">
            {menuItems.map(({ label, icon, path }) => (
              <button
                key={label}
                onClick={() => {
                  setShowMenu(false)
                  router.push(path)
                }}
                className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-800 text-sm"
              >
                {icon}
                {label}
              </button>
            ))}
            <div className="border-t border-gray-700 my-1" />
            <button
              onClick={() => {
                setShowMenu(false)
                router.push('/docs')
              }}
              className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-800 text-sm"
            >
              <DocumentTextIcon className="w-4 h-4 mr-2" />
              Docs
            </button>
          </div>
        )}
      </div>

      {/* Right: Wallet */}
      <div className="flex items-center space-x-4">
        <ConnectWallet />
      </div>
    </header>
  )
}
