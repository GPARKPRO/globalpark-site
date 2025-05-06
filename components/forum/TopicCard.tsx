// components/forum/TopicCard.tsx

import Link from 'next/link'

interface TopicCardProps {
  id: string
  title: string
  replies: number
}

export default function TopicCard({ id, title, replies }: TopicCardProps) {
  return (
    <Link href={`/forum/${id}`} className="block border border-gray-700 bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-200 rounded-xl px-6 py-4">
      <h2 className="text-lg md:text-xl font-light text-white mb-1">{title}</h2>
      <p className="text-sm text-gray-400">{replies} replies</p>
    </Link>
  )
}
