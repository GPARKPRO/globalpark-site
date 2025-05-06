import { useEffect, useState } from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

export function useEnsName(address: string) {
  const [ens, setEns] = useState<string | null>(null)

  useEffect(() => {
    async function resolve() {
      try {
        const name = await client.getEnsName({ address: address as `0x${string}` })
        setEns(name)
      } catch {
        setEns(null)
      }
    }

    resolve()
  }, [address])

  return ens
}
