'use client'

import Link from 'next/link'

interface TopicCardProps {
  id: string
  title: string
  replies: number
}

export default function TopicCard({ id, title, replies }: TopicCardProps) {
  return (
    <Link
      href={`/forum/${id}`}
      className="block bg-white/5 border border-white/10 hover:border-pink-500 rounded-xl p-5 transition duration-200 hover:shadow-lg hover:bg-white/10"
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-pink-400">{replies} replies</span>
      </div>
      <p className="text-sm text-gray-400">Topic ID: {id.slice(0, 8)}...</p>
    </Link>
  )
}
