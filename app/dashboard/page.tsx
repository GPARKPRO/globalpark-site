'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [address, setAddress] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          if (accounts.length === 0) {
            router.push('/')
          } else {
            setAddress(accounts[0])
          }
        } catch (err) {
          console.error(err)
          router.push('/')
        }
      } else {
        router.push('/')
      }
    }

    checkConnection()
  }, [router])

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-400">Connected wallet:</p>
      <p className="text-sm font-mono">{address}</p>
    </div>
  )
}
