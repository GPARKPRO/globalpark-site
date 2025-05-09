// lib/contract.ts
import { getWalletClient, getAccount, getPublicClient } from '@wagmi/core'
import { getContract } from 'viem'
import GPARK_ABI from './GPARKTokenABI.json'
import { wagmiConfig } from './wagmiConfig'

export const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'
export const TREASURY_ADDRESS = '0x4C7635EC1f6870CBBD58c13e3aEB4e43B7EE7183' // добавлен адрес сокровищницы

// Public contract for reads
export const getGparkReadContract = () => {
  const publicClient = getPublicClient(wagmiConfig)
  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: publicClient,
  }) as any
}

// Wallet-based contract for writes
export const getGparkWriteContract = async () => {
  const { address, chainId } = getAccount(wagmiConfig)
  const walletClient = await getWalletClient(wagmiConfig, { chainId })

  if (!walletClient || !address) {
    throw new Error('Wallet not connected')
  }

  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  }) as any
}
