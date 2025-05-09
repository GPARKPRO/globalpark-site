// lib/hooks/useEnsName.ts
import { useEnsName as useWagmiEnsName } from 'wagmi'

export function useEnsName(address: string | null | undefined) {
  const { data: ensName } = useWagmiEnsName({
    address: address as `0x${string}`,
    chainId: 1, // Mainnet
    // no 'enabled' prop here — wagmi v1/v2 doesn't support it
  })

  return ensName
}
