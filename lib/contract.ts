// lib/contract.ts
import { getPublicClient, getWalletClient } from 'wagmi/actions'
import { getContract } from 'viem'
import GPARK_ABI from './GPARKTokenABI.json'

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'

export const getGparkContract = async () => {
  const walletClient = await getWalletClient()
  if (!walletClient) throw new Error('Wallet client not available')

  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  })
}
