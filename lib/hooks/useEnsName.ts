import { useEffect, useState } from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const CACHE_KEY = 'ensCache'
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 // 24 hours

function getCache(): Record<string, { name: string; expires: number }> {
  if (typeof window === 'undefined') return {}
  try {
    const json = localStorage.getItem(CACHE_KEY)
    return json ? JSON.parse(json) : {}
  } catch {
    return {}
  }
}

function setCache(address: string, name: string) {
  const cache = getCache()
  cache[address] = { name, expires: Date.now() + CACHE_TTL_MS }
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
}

export function useEnsName(address: string) {
  const [ens, setEns] = useState<string | null>(null)

  useEffect(() => {
    if (!address) return

    const cache = getCache()
    const cached = cache[address]

    if (cached && cached.expires > Date.now()) {
      setEns(cached.name)
      return
    }

    async function resolve() {
      try {
        const name = await client.getEnsName({ address: address as `0x${string}` })
        if (name) {
          setEns(name)
          setCache(address, name)
        }
      } catch {
        setEns(null)
      }
    }

    resolve()
  }, [address])

  return ens
}
