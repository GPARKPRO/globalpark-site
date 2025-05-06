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
      className="flex items-center justify-between px-4 py-4 border-b border-white/10 hover:bg-white/5 transition"
    >
      <div className="flex-1 min-w-0">
        <span className="text-white font-medium truncate block">{title}</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400 pl-4 flex-shrink-0">
        <span className="text-white">{replies}</span>
        <span className="text-gray-500">→</span>
      </div>
    </Link>
  )
}
