import Link from 'next/link'
import TopicList from '@/components/forum/TopicList'

export default function ForumHomePage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-12 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
          Forum
        </h1>
        <Link
          href="/forum/new"
          className="border border-yellow-400 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
        >
          ➕ New Topic
        </Link>
      </div>

      <div className="hidden md:grid grid-cols-12 px-2 py-3 text-sm text-gray-400 border-b border-white/10 mb-4">
        <div className="col-span-7">Topic</div>
        <div className="col-span-2">Replies</div>
        <div className="col-span-3 text-right">Last Activity</div>
      </div>

      <TopicList />
    </div>
  )
}
