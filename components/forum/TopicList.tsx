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
    return <p className="text-gray-400 mt-8">No topics yet.</p>
  }

  return (
    <div className="divide-y divide-white/5">
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
