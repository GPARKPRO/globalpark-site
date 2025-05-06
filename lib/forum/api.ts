import { supabase } from '@/lib/supabaseClient'

export async function fetchTopics() {
  const { data, error } = await supabase
    .from('forum_topics')
    .select(`
      id,
      title,
      forum_posts ( id )
    `)

  if (error) {
    console.error(error)
    return []
  }

  return data.map((topic) => ({
    id: topic.id,
    title: topic.title,
    replies: Array.isArray(topic.forum_posts) ? topic.forum_posts.length : 0,
  }))
}
