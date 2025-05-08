'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function NewTopicPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    setLoading(true)

    const { data: topic, error } = await supabase
      .from('forum_topics')
      .insert({ title })
      .select()
      .single()

    if (!error && topic) {
      await supabase.from('forum_posts').insert({
        topic_id: topic.id,
        author: 'anonymous', // позже заменить на user ID
        content,
      })
      router.push(`/forum/${topic.id}`)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8">New Topic</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic title"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Initial post content"
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 text-black px-6 py-2 rounded transition disabled:opacity-50"
        >
          {loading ? 'Creating…' : 'Create Topic'}
        </button>
      </form>
    </div>
  )
}
