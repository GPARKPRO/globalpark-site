'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function ConnectWallet() {
  return (
    <div className="mt-6">
      <ConnectButton
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        chainStatus="icon"
        showBalance={false}
      />
    </div>
  )
}
