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
      className={`px-6 py-6 border border-white/10 rounded-xl ${
        isFirst ? 'bg-white/5 shadow-lg' : 'bg-black/5'
      }`}
    >
      <div className="flex gap-4 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
          {avatarUrl && <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1 text-sm text-neutral-300">
            <span className="font-mono">{ensName ?? author}</span>

            {isFirst && (
              <span className="text-xs text-yellow-500 bg-yellow-500/10 border border-yellow-500 px-2 py-0.5 rounded-full">
                Author
              </span>
            )}
          </div>

          <div className="text-xs text-neutral-500 mb-4">{createdAt}</div>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-invert prose-base max-w-full"
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
