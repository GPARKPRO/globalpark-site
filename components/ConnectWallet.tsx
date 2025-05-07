'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function ConnectWallet() {
  return (
    <div className="flex items-center gap-4 mt-2">
      <ConnectButton
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={false}
        chainStatus="icon"
      />
    </div>
  )
}
