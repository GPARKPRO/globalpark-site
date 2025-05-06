import { useEnsName } from '@/lib/hooks/useEnsName'

interface PostItemProps {
  author: string
  content: string
  createdAt: string
}

export default function PostItem({ author, content, createdAt }: PostItemProps) {
  const ens = useEnsName(author)

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 shadow-sm hover:bg-white/10 transition">
      <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
        <span>{ens ?? shortenAddress(author)}</span>
        <span>{createdAt}</span>
      </div>
      <p className="text-white whitespace-pre-line">{content}</p>
    </div>
  )
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
