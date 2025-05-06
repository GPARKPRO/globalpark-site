'use client'

import { useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function AskGPTPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    if (!input.trim()) return
    setLoading(true)
    setMessages((prev) => [...prev, { role: 'user', content: input }])
    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '❌ Failed to connect to GPT.' }])
    } finally {
      setInput('')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-mono">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
        Ask the Global Park Assistant
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Your personal guide to all documents of the Global Park DAO — White Paper, Constitution, Tokenomics, and more.
        Ask questions in <span className="text-pink-500 font-semibold">any language</span>. The assistant gives structured and trusted answers based on official sources.
      </p>

      <div className="space-y-4 mb-10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-xl p-5 shadow-md text-sm whitespace-pre-wrap border transition-all duration-300 ${
              msg.role === 'user'
                ? 'bg-zinc-900 text-white border-zinc-700'
                : 'bg-white text-black border-purple-300'
            }`}
          >
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} className="text-blue-600 underline hover:text-blue-800" target="_blank" />
                ),
                li: ({ node, ...props }) => (
                  <li className="ml-4 list-disc">{props.children}</li>
                )
              }}
            >
              {msg.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 items-center justify-center">
        <input
          className="flex-1 p-3 text-black rounded w-full md:w-auto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
        />
        <button
          className="border border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-500 hover:text-black transition duration-200 animate-pulse"
          onClick={ask}
          disabled={loading}
        >
          {loading ? (
            <>
              <Image src="/logo.png" alt="Thinking..." width={20} height={20} className="mr-2 animate-spin" />
              Thinking...
            </>
          ) : (
            'Ask'
          )}
        </button>
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => window.location.href = '/'}
          className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
