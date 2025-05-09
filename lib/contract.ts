// lib/contract.ts

import { getAccount, getWalletClient } from 'wagmi/actions'
import { getContract } from 'viem'
import GPARK_ABI from './GPARKTokenABI.json'

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da' as `0x${string}`

export const getGparkContract = async () => {
  const account = getAccount()
  const walletClient = await getWalletClient({ chainId: account?.chainId })

  if (!walletClient) {
    throw new Error('Wallet client not available')
  }

  const contract = getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  })

  return contract
}
