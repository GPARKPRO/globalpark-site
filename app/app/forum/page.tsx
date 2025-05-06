// app/forum/page.tsx

import Link from 'next/link'

const mockTopics = [
  { id: '1', title: 'Welcome to the forum!', replies: 3 },
  { id: '2', title: 'How to connect to DAO?', replies: 1 },
]

export default function ForumHomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Forum</h1>
      <div className="mb-6">
        <Link href="/forum/new" className="text-blue-600 hover:underline">
          ➕ Create a new topic
        </Link>
      </div>
      <ul className="space-y-4">
        {mockTopics.map((topic) => (
          <li key={topic.id} className="border p-4 rounded">
            <Link href={`/forum/${topic.id}`} className="text-lg font-semibold hover:underline">
              {topic.title}
            </Link>
            <p className="text-sm text-gray-500">{topic.replies} answer(s)</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
