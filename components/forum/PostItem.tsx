// components/forum/PostItem.tsx

interface PostItemProps {
  author: string
  content: string
  createdAt: string
}

export default function PostItem({ author, content, createdAt }: PostItemProps) {
  return (
    <div className="border border-gray-700 bg-black bg-opacity-40 rounded-xl px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
        <span>{author}</span>
        <span>{createdAt}</span>
      </div>
      <p className="text-white">{content}</p>
    </div>
  )
}
