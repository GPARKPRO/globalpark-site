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
      className="grid grid-cols-12 items-center px-4 py-4 border-b border-white/10 hover:bg-white/5 transition"
    >
      <div className="col-span-7 truncate text-white font-medium">{title}</div>
      <div className="col-span-2 text-sm text-neutral-400">{replies}</div>
      <div className="col-span-3 text-right text-sm text-neutral-500">→</div>
    </Link>
  )
}
