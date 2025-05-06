'use client'

import { useEffect, useState } from 'react'
import TopicCard from './TopicCard'
import { fetchTopics } from '@/lib/forum/api'

interface Topic {
  id: string
  title: string
  created_at: string
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

  if (!topics.length) {
    return <p className="text-gray-400">No topics yet.</p>
  }

  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          id={topic.id}
          title={topic.title}
          replies={0} // placeholder — we’ll fetch replies count later
        />
      ))}
    </div>
  )
}
