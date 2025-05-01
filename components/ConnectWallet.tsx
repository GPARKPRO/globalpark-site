'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="mt-6">
      {!isConnected ? (
        <button
          onClick={() => connect()}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-sm text-gray-300">
          <p className="mb-2">Connected as {address?.slice(0, 6)}...{address?.slice(-4)}</p>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
