// app/forum/[topicId]/page.tsx

'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import PostItem from '@/components/forum/PostItem'
import ReplyBox from '@/components/forum/ReplyBox'

interface Post {
  id: string
  author: string
  content: string
  createdAt: string
}

export default function TopicPage() {
  const { topicId } = useParams()
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: '0x123...abc',
      content: 'Welcome to the forum!',
      createdAt: 'Today',
    },
    {
      id: '2',
      author: '0x456...def',
      content: 'How do I join the DAO?',
      createdAt: 'Today',
    },
  ])

  const handleNewReply = (message: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: 'you.eth',
      content: message,
      createdAt: 'Now',
    }
    setPosts([...posts, newPost])
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Topic #{topicId}
      </h1>

      <div className="space-y-6 mb-10">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            author={post.author}
            content={post.content}
            createdAt={post.createdAt}
          />
        ))}
      </div>

      <ReplyBox onSubmit={handleNewReply} />
    </div>
  )
}
