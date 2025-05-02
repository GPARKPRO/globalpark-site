'use client'

import { useState } from 'react'

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAddress(accounts[0])
        setConnected(true)
      } catch (err) {
        console.error('Connection error', err)
      }
    } else {
      alert('MetaMask not found')
    }
  }

  const disconnect = () => {
    setConnected(false)
    setAddress(null)
  }

  return (
    <div className="mt-6">
      {!connected ? (
        <button
          onClick={connect}
          className="bg-white text-black px-5 py-2 rounded hover:bg-gray-300"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={disconnect}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
