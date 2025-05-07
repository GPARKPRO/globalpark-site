'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import PostItem from '@/components/forum/PostItem'
import ReplyBox from '@/components/forum/ReplyBox'
import { useStoreEnsProfile } from '@/lib/hooks/useStoreEnsProfile'

interface Post {
  id: string
  author: string
  content: string
  created_at: string
}

export default function TopicPage() {
  const { topicId } = useParams()
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState('Loading...')
  const [address, setAddress] = useState<string | null>(null)

  useStoreEnsProfile(address)

  useEffect(() => {
    async function load() {
      const { data: topic } = await supabase
        .from('forum_topics')
        .select('title')
        .eq('id', topicId)
        .single()

      const { data: posts } = await supabase
        .from('forum_posts')
        .select('*')
        .eq('topic_id', topicId)
        .order('created_at', { ascending: true })

      if (topic) setTitle(topic.title)
      if (posts) setPosts(posts)

      // Get wallet address if connected
      if (typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0])
        }
      }
    }

    load()
  }, [topicId])

  const handleNewReply = async (message: string) => {
    if (!address) return

    const { data, error } = await supabase.from('forum_posts').insert({
      topic_id: topicId,
      author: address,
      content: message,
    })

    if (!error && data) {
      setPosts((prev) => [...prev, data[0]])
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        {title}
      </h1>

      <div className="space-y-6 mb-12">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            author={post.author}
            content={post.content}
            createdAt={new Date(post.created_at).toLocaleString()}
          />
        ))}
      </div>

      <ReplyBox onSubmit={handleNewReply} address={address} />
    </div>
  )
}
