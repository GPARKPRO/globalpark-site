// lib/hooks/useEnsDisplayName.ts
import { useEnsName } from 'wagmi'

export function useEnsDisplayName(address: string | null | undefined) {
  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
    chainId: 1,
  })

  if (!address) return ''
  return ensName ?? `${address.slice(0, 6)}...${address.slice(-4)}`
}
