'use client'

import dynamic from 'next/dynamic'

const ConnectButton = dynamic(
  () => import('@rainbow-me/rainbowkit').then((mod) => mod.ConnectButton),
  { ssr: false }
)

export default function ConnectWallet() {
  return (
    <div className="mt-8">
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          const ready = mounted;
          const connected = ready && account && chain;

          return (
            <button
              onClick={openConnectModal}
              className="border border-white text-white px-5 py-2 font-medium rounded hover:bg-white hover:text-black transition"
              type="button"
            >
              {connected ? `${account.displayName}` : 'Connect Wallet'}
            </button>
          )
        }}
      </ConnectButton.Custom>
    </div>
  )
}
