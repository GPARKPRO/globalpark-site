'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ConnectWallet from './ConnectWallet'

export default function WalletModalPortal() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className="fixed z-[9999] inset-0 pointer-events-none">
      <div className="absolute right-4 top-4 pointer-events-auto">
        <ConnectWallet />
      </div>
    </div>,
    document.body
  )
}
