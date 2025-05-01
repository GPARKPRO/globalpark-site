'use client'

import dynamic from 'next/dynamic'

// Динамически подключаем обычную кнопку
const ConnectButton = dynamic(
  () => import('@rainbow-me/rainbowkit').then((mod) => mod.ConnectButton),
  { ssr: false }
)

export default function ConnectWallet() {
  return (
    <div className="mt-8">
      <div className="inline-block border border-white px-5 py-2 font-medium rounded hover:bg-white hover:text-black transition text-white">
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus="address"
        />
      </div>
    </div>
  )
}
