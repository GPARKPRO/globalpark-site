'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ConnectWallet from './ConnectWallet'

export default function WalletModalPortal() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log('[WalletModalPortal] useEffect triggered — setting mounted = true')
    setMounted(true)
  }, [])

  if (typeof window === 'undefined') {
    console.warn('[WalletModalPortal] Skipped render on server')
    return null
  }

  if (!mounted) {
    console.log('[WalletModalPortal] Not mounted yet')
    return null
  }

  try {
    return createPortal(
      <div className="fixed z-[9999] inset-0 pointer-events-none">
        <div className="absolute right-4 top-4 pointer-events-auto">
          <ConnectWallet />
        </div>
      </div>,
      document.body
    )
  } catch (error) {
    console.error('[WalletModalPortal] Portal rendering failed:', error)
    return null
  }
}

