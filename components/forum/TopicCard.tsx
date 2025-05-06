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
      className="grid grid-cols-12 items-center py-4 px-2 border-b border-white/5 hover:bg-white/5 transition"
    >
      <div className="col-span-7 truncate">
        <span className="text-white font-medium">{title}</span>
      </div>
      <div className="col-span-2 text-sm text-gray-400">{replies}</div>
      <div className="col-span-3 text-right text-sm text-gray-500">→</div>
    </Link>
  )
}
