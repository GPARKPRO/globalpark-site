import { useEffect, useState } from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

export function useEnsProfile(address: string) {
  const [ensName, setEnsName] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!address) return

    async function fetchProfile() {
      try {
        const name = await client.getEnsName({ address: address as `0x${string}` })
        if (name) {
          setEnsName(name)
          const avatar = await client.getEnsAvatar({ name })
          if (avatar) setAvatarUrl(avatar)
        }
      } catch {
        setEnsName(null)
        setAvatarUrl(null)
      }
    }

    fetchProfile()
  }, [address])

  return { ensName, avatarUrl }
}
