'use client'

import { useState } from 'react'
import { ADMIN_ADDRESS } from '@/lib/permissions'

interface ReplyBoxProps {
  onSubmit: (message: string) => void
  address: string | null
}

export default function ReplyBox({ onSubmit, address }: ReplyBoxProps) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const isAdmin = address?.toLowerCase() === ADMIN_ADDRESS

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !isAdmin) return

    setLoading(true)
    await onSubmit(message)
    setMessage('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          address
            ? isAdmin
              ? 'Write your reply using Markdown (e.g., **bold**, [link](url))'
              : 'Only the admin can reply at this stage.'
            : 'Connect wallet to reply'
        }
        disabled={!address || !isAdmin}
        rows={6}
        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono"
        required
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading || !isAdmin}
          className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-black rounded transition disabled:opacity-40"
        >
          {loading ? 'Sending…' : 'Reply'}
        </button>
      </div>
    </form>
  )
}
