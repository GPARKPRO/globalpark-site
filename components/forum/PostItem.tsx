import { useEnsProfile } from '@/lib/hooks/useEnsProfile'

interface PostItemProps {
  author: string
  content: string
  createdAt: string
}

export default function PostItem({ author, content, createdAt }: PostItemProps) {
  const { ensName, avatarUrl } = useEnsProfile(author)

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 shadow-sm hover:bg-white/10 transition">
      <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
        <span className="flex items-center gap-2">
          {avatarUrl && (
            <img src={avatarUrl} alt="avatar" className="w-5 h-5 rounded-full" />
          )}
          {ensName ?? shortenAddress(author)}
        </span>
        <span>{createdAt}</span>
      </div>
      <p className="text-white whitespace-pre-line">{content}</p>
    </div>
  )
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
