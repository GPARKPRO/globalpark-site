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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {topics.length === 0 ? (
        <p className="text-gray-400">No topics yet.</p>
      ) : (
        topics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            replies={topic.replies}
          />
        ))
      )}
    </div>
  )
}
