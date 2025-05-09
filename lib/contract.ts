import { getContract } from 'viem'
import { getWalletClient } from 'wagmi/actions'

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'

export const GPARK_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  }
] as const

export const getGparkContract = async () => {
  const walletClient = await getWalletClient()
  if (!walletClient) throw new Error('Wallet client not available')

  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  })
}
