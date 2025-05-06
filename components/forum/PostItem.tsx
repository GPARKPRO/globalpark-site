import { useEnsProfile } from '@/lib/hooks/useEnsProfile'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostItemProps {
  author: string
  content: string
  createdAt: string
  isFirst?: boolean
}

export default function PostItem({ author, content, createdAt, isFirst }: PostItemProps) {
  const { ensName, avatarUrl } = useEnsProfile(author)

  return (
    <div
      className={`px-8 py-6 border border-white/10 rounded-lg ${
        isFirst ? 'bg-white/5 shadow-md' : ''
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white/10" />
        )}
        <div className="flex-1">
          <div className="text-sm text-neutral-300 mb-2">
            {ensName ?? shortenAddress(author)} · {createdAt}
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-invert prose-sm max-w-none"
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
