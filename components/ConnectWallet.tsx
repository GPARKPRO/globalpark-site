'use client'

import { useConnect } from 'wagmi'
import { InjectedConnector } from '@wagmi/connectors/injected'

export default function ConnectWallet() {
  const { connect, connectors, isLoading, pendingConnector } = useConnect()

  return (
    <button
      onClick={() => connect({ connector: new InjectedConnector() })}
      className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-200 transition"
    >
      Connect Wallet
    </button>
  )
}
