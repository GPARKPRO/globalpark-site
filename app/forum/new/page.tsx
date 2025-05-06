'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function NewTopicPage() {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    setLoading(true)
    const { error } = await supabase.from('forum_topics').insert({ title })

    setLoading(false)
    if (error) {
      alert('Error creating topic: ' + error.message)
    } else {
      router.push('/forum')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Create a New Topic
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your topic title"
          className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-black transition duration-200"
        >
          {loading ? 'Creating...' : 'Publish'}
        </button>
      </form>
    </div>
  )
}
