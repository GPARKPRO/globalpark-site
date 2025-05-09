// lib/hooks/useEnsName.ts

import { useEffect, useState } from 'react'
import { useEnsName } from 'wagmi'

export function useEnsDisplayName(address: string | null | undefined): string | null {
  const [ens, setEns] = useState<string | null>(null)

  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
    chainId: 1,
    enabled: !!address,
  })

  useEffect(() => {
    if (ensName) {
      setEns(ensName)
    } else if (address) {
      const shortened = `${address.slice(0, 6)}...${address.slice(-4)}`
      setEns(shortened)
    } else {
      setEns(null)
    }
  }, [ensName, address])

  return ens
}
