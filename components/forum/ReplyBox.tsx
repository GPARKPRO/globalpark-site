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
  const disabled = !address || !isAdmin || loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (disabled || !message.trim()) return

    setLoading(true)
    await onSubmit(message.trim())
    setMessage('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <label htmlFor="reply" className="sr-only">Reply Message</label>
      <textarea
        id="reply"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          !address
            ? 'Connect wallet to reply.'
            : !isAdmin
              ? 'Only the admin can reply at this stage.'
              : 'Write your reply using Markdown (e.g., **bold**, [link](url))'
        }
        disabled={disabled}
        rows={6}
        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono"
        required
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={disabled}
          className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-black rounded transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending…' : 'Reply'}
        </button>
      </div>
    </form>
  )
}
