'use client'

import { useConnect, useDisconnect, useAccount } from 'wagmi'
import { walletConnect } from 'wagmi/connectors'

export default function ConnectWallet() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()

  return (
    <div className="mt-6 w-full max-w-xs">
      {!isConnected ? (
        <button
          onClick={() =>
            connect({
              connector: walletConnect({
                projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
              }),
            })
          }
          className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="bg-gray-800 px-4 py-2 rounded flex justify-between items-center">
          <span className="text-sm font-mono truncate">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          <button onClick={() => disconnect()} className="text-red-400 text-sm">
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
