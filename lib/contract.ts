import { getWalletClient, getAccount } from '@wagmi/core'
import { getContract } from 'viem'
import GPARK_ABI from './GPARKTokenABI.json'

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'

export const getGparkContract = async () => {
  const { address, chainId } = getAccount()
  const walletClient = await getWalletClient({ chainId })

  if (!walletClient || !address) {
    throw new Error('Wallet not connected')
  }

  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  }) as any
}
