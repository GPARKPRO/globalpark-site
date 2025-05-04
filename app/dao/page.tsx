'use client'

import { useState } from 'react'
import { ethers } from 'ethers'

export default function DaoMintPage() {
  const [minting, setMinting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleMint = async () => {
    setError('')
    setSuccess('')
    setMinting(true)

    try {
      if (!window.ethereum) throw new Error('MetaMask not found')
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        '0xYourNFTContractAddress',
        [
          {
            inputs: [],
            name: 'mint',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
        ],
        signer
      )
      const tx = await contract.mint({
        value: ethers.utils.parseEther('0.777'), // динамически можно подставлять цену по эпохе
      })
      await tx.wait()
      setSuccess('NFT успешно отчеканен!')
    } catch (err) {
      console.error(err)
      setError('Не удалось произвести чеканку. Проверьте кошелек.')
    } finally {
      setMinting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-purple-400">
          Join the Global Park DAO
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Mint your <span className="text-yellow-400 font-semibold">Governance NFT</span> and become 1 of 1000 founding members. A new pricing epoch begins every 100 mints.
        </p>
        <button
          onClick={handleMint}
          disabled={minting}
          className="bg-yellow-400 text-black px-8 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition"
        >
          {minting ? 'Minting...' : 'Mint for 0.777 ETH'}
        </button>

        {success && <p className="mt-6 text-green-400 font-medium">{success}</p>}
        {error && <p className="mt-6 text-red-500 font-medium">{error}</p>}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-4 border border-zinc-700 rounded-xl bg-black/40">
              <p className="text-lg font-semibold text-white mb-1">Epoch {i + 1}</p>
              <p className="text-sm text-gray-400">NFTs {i * 100 + 1}–{(i + 1) * 100}</p>
              <p className="text-yellow-400 font-medium mt-2">{(0.5 + i * 0.05).toFixed(3)} ETH</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
