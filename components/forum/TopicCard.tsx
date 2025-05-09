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
      className="group flex items-center justify-between px-6 py-4 border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-base truncate group-hover:text-pink-400 transition-colors">
          {title}
        </h3>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-400 pl-4 flex-shrink-0">
        <span className="bg-white/10 text-white px-2 py-0.5 rounded-full text-xs font-mono">
          {replies}
        </span>
        <span className="text-gray-500 group-hover:text-pink-400 transition">→</span>
      </div>
    </Link>
  )
}
