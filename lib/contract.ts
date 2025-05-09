import { Abi, getContract, GetContractReturnType } from 'viem'
import { getWalletClient } from 'wagmi/actions'
import abiJson from './GPARKTokenABI.json'

const GPARK_ABI = abiJson as Abi
const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da'

type GparkContractType = GetContractReturnType<
  typeof GPARK_ABI,
  'wallet'
>

export const getGparkContract = async (): Promise<GparkContractType> => {
  const walletClient = await getWalletClient()
  if (!walletClient) throw new Error('Wallet client not available')

  return getContract({
    address: CONTRACT_ADDRESS,
    abi: GPARK_ABI,
    client: walletClient,
  })
}
