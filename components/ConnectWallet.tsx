'use client'

import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi'
import { useEffect } from 'react'

export default function ConnectWallet() {
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { open } = useWeb3Modal()'use client'

import { useAccount } from 'wagmi'
import { Web3Button } from '@web3modal/wagmi/react'

export default function ConnectWallet() {
  const { address, isConnected } = useAccount()

  return (
    <div className="mt-8 w-full max-w-sm">
      <Web3Button />
      {isConnected && (
        <div className="mt-4 text-sm text-gray-300 font-mono truncate">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
      )}
    </div>
  )
}

  useEffect(() => {
    console.log('[ConnectWallet] mounted')
  }, [])

  return (
    <div className="mt-8 w-full max-w-sm">
      {!isConnected ? (
        <button
          onClick={() => open()}
          className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition w-full"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md">
          <span className="text-sm font-mono truncate">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="text-sm text-red-400 hover:text-red-300 transition"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
