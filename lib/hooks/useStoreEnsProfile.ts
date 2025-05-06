import { useEffect, useState } from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { supabase } from '@/lib/supabaseClient'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

export function useStoreEnsProfile(address: string | null) {
  const [stored, setStored] = useState(false)

  useEffect(() => {
    if (!address || stored) return

    async function storeProfile() {
      try {
        const { data: existing } = await supabase
          .from('user_profiles')
          .select('address')
          .eq('address', address)
          .single()

        if (existing) {
          setStored(true)
          return
        }

        const name = await client.getEnsName({ address: address as `0x${string}` })
        let avatar = null

        if (name) {
          avatar = await client.getEnsAvatar({ name })
        }

        await supabase.from('user_profiles').insert({
          address,
          ens_name: name,
          ens_avatar: avatar,
        })

        setStored(true)
      } catch (error) {
        console.error('Failed to store ENS profile', error)
      }
    }

    storeProfile()
  }, [address, stored])
}
