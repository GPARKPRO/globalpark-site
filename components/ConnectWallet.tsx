// components/ConnectWallet.tsx
'use client'

import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

export default function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
      } catch (error) {
        console.error('Connection error:', error)
      }
    } else {
      alert('MetaMask is not installed')
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
  }

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null)
      })
    }
  }, [])

  return (
    <div className="mt-8 w-full max-w-sm">
      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition w-full"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md">
          <span className="text-sm font-mono truncate">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={disconnectWallet}
            className="text-sm text-red-400 hover:text-red-300 transition"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
