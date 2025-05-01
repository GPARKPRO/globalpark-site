'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useEffect } from 'react'

export default function ConnectWallet() {
  // Можно добавить отладку, если нужно видеть в консоли, когда компонент монтируется
  useEffect(() => {
    console.log('[ConnectWallet] rendered')
  }, [])

  return (
    <div className="mt-10 z-10 relative w-full max-w-xs sm:max-w-sm md:max-w-md">
      <ConnectButton
        showBalance={false}
        accountStatus="address"
        chainStatus="icon"
      />
    </div>
  )
}
