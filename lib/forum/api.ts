// lib/forum/api.ts

import { supabase } from '../supabaseClient'

export async function fetchTopics() {
  const { data, error } = await supabase
    .from('forum_topics')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching topics:', error.message)
    return []
  }

  return data
}
