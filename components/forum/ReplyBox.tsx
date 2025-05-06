// components/forum/ReplyBox.tsx

'use client'

import { useState } from 'react'

interface ReplyBoxProps {
  onSubmit: (message: string) => void
}

export default function ReplyBox({ onSubmit }: ReplyBoxProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    onSubmit(message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your reply..."
        className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows={4}
        required
      />
      <button
        type="submit"
        className="px-5 py-2 border border-yellow-400 text-yellow-300 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
      >
        Post Reply
      </button>
    </form>
  )
}
