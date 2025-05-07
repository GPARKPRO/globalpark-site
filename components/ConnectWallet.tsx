'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Link from 'next/link'

export default function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="flex items-center gap-4 mt-2">
      {!isConnected ? (
        <button
          onClick={() => connect()}
          className="bg-white text-black px-5 py-2 rounded hover:bg-gray-300 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <span className="text-sm font-mono hidden sm:inline">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <Link
            href="/dashboard"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm transition"
          >
            Dashboard
          </Link>
          <button
            onClick={() => disconnect()}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  )
}
