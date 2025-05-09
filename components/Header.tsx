'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  HomeIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  MapIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { isConnected } = useAccount()

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
    { label: 'Circulation', icon: <ChartBarIcon className="w-4 h-4 mr-2" />, path: '/circulation' },
    { label: 'Roadmap', icon: <MapIcon className="w-4 h-4 mr-2" />, path: '/roadmap' },
    { label: 'Participation Wall', icon: <RectangleStackIcon className="w-4 h-4 mr-2" />, path: '/participation-wall' },
    { label: 'Forum', icon: <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />, path: '/forum' },
  ]

  return (
    <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md borderb border-gray-800 px-4 py-4 flex items-center justify-between">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-200"
          aria-label="Explore"
        >
          ⋯
        </button>
        {showMenu && (
          <div className="absolute top-full left-0 mt-2 w-56 rounded bg-black shadow-lg z-[9999]">
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

      <div className="flex items-center space-x-4">
        {isConnected && (
          <button
            onClick={() => router.push('/dashboard')}
            className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-200"
          >
            Dashboard
          </button>
        )}
        <ConnectButton showBalance={false} accountStatus="avatar" />
      </div>
    </header>
  )
}
