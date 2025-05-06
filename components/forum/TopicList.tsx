'use client'

import { useEffect, useState } from 'react'
import TopicCard from './TopicCard'
import { fetchTopics } from '@/lib/forum/api'

interface Topic {
  id: string
  title: string
  replies: number
}

export default function TopicList() {
  const [topics, setTopics] = useState<Topic[]>([])

  useEffect(() => {
    async function load() {
      const data = await fetchTopics()
      setTopics(data)
    }
    load()
  }, [])

  if (topics.length === 0) {
    return <p className="text-neutral-400 mt-8">No topics yet.</p>
  }

  return (
    <div className="divide-y divide-white/10 border border-white/10 rounded-lg overflow-hidden">
      <div className="hidden md:grid grid-cols-12 px-6 py-3 bg-white/5 text-neutral-200 text-sm font-medium">
        <div className="col-span-7">Topic</div>
        <div className="col-span-2">Replies</div>
        <div className="col-span-3 text-right">Last Activity</div>
      </div>

      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          id={topic.id}
          title={topic.title}
          replies={topic.replies}
        />
      ))}
    </div>
  )
}
