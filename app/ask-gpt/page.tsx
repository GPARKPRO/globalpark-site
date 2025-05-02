// /app/ask-gpt/page.tsx
'use client'

import { useState } from 'react'

export default function AskGPTPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    if (!input.trim()) return
    setLoading(true)
    const res = await fetch('/api/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    })
    const data = await res.json()
    setMessages((prev) => [...prev, `🧑 ${input}`, `🤖 ${data.reply}`])
    setInput('')
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Спроси у ассистента Global Park</h1>
      <div className="space-y-2 mb-6">
        {messages.map((msg, i) => (
          <div key={i} className="bg-zinc-800 p-3 rounded whitespace-pre-wrap">{msg}</div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 p-2 text-black rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Напиши вопрос..."
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={ask}
          disabled={loading}
        >
          {loading ? '...' : 'Спросить'}
        </button>
      </div>
    </div>
  )
}
