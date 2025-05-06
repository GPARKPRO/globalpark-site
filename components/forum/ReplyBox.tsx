'use client'

import { useState } from 'react'

interface ReplyBoxProps {
  onSubmit: (message: string) => void
}

export default function ReplyBox({ onSubmit }: ReplyBoxProps) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setLoading(true)
    await onSubmit(message)
    setMessage('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-10">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your reply..."
        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows={4}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2 border border-pink-500 text-pink-400 rounded hover:bg-pink-500 hover:text-black transition duration-200"
      >
        {loading ? 'Sending...' : 'Reply'}
      </button>
    </form>
  )
}
