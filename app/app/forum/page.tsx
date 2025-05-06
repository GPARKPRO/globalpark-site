// app/forum/page.tsx

import Link from 'next/link'
import TopicList from '@/components/forum/TopicList'

export default function ForumHomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Forum
      </h1>

      <div className="mb-6">
        <Link
          href="/forum/new"
          className="inline-block border border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-500 hover:text-black transition duration-200"
        >
          ➕ New Topic
        </Link>
      </div>

      <TopicList />
    </div>
  )
}
