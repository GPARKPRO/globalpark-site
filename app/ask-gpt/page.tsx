// app/ask-gpt/page.tsx

'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AskGPTPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      })
      const data = await res.json()
      setMessages((prev) => [...prev, `🧑 ${input}`, `🧠 ${data.reply}`])
    } catch (err) {
      setMessages((prev) => [...prev, `🚧 Failed to connect to GPT.`])
    } finally {
      setInput('')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Ask the Global Park Assistant
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Your personal guide to all documents of the Global Park DAO — White Paper, Constitution, Tokenomics, and more.
        Ask questions in any language. The assistant gives structured and trusted answers based on official sources.
      </p>

      <div className="space-y-3 mb-10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-sm whitespace-pre-wrap"
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <input
          className="flex-1 p-4 text-black rounded-lg border border-gray-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
        />
        <button
          className="relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-60"
          onClick={ask}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="loading"
                width={20}
                height={20}
                className="animate-spin"
              />
              <span>Thinking...</span>
            </div>
          ) : 'Ask'}
        </button>
      </div>

      <div className="mt-14 text-center">
        <button
          onClick={() => window.location.href = '/'}
          className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
