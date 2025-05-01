'use client'

import dynamic from 'next/dynamic'

//
const ConnectButton = dynamic(
  () =>
    import('@rainbow-me/rainbowkit').then((mod) => mod.ConnectButton),
  { ssr: false }
)

export default function ConnectWallet() {
  return (
    <div className="mt-6">
      <ConnectButton
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        chainStatus="icon"
        showBalance={false}
      />
    </div>
  )
}
