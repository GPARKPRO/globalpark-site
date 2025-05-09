'use client'

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
      className={`px-4 md:px-8 py-6 border border-white/10 rounded-lg ${
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
          <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
        )}

        <div className="flex-1 overflow-hidden">
          <div className="text-sm text-neutral-300 mb-1 break-words">
            <a
              href={`https://etherscan.io/address/${author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-pink-400"
              title={author}
            >
              {ensName ?? `${author.slice(0, 6)}...${author.slice(-4)}`}
            </a>
          </div>
          <div className="text-xs text-neutral-500">{createdAt}</div>
        </div>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert prose-sm max-w-none break-words"
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
