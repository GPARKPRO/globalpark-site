import { useEnsProfile } from '@/lib/hooks/useEnsProfile'

interface PostItemProps {
  author: string
  content: string
  createdAt: string
}

export default function PostItem({ author, content, createdAt }: PostItemProps) {
  const { ensName, avatarUrl } = useEnsProfile(author)

  return (
    <div className="flex items-start gap-4 py-6 border-b border-white/10">
      {/* Аватар и имя */}
      <div className="min-w-[56px]">
        {avatarUrl ? (
          <img src={avatarUrl} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white/10" />
        )}
      </div>

      {/* Контент */}
      <div className="flex-1">
        <div className="text-sm text-gray-400 mb-1">
          {ensName ?? shortenAddress(author)} · {createdAt}
        </div>
        <div className="text-white whitespace-pre-line">{content}</div>
      </div>
    </div>
  )
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
