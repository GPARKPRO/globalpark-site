// app/forum/new/page.tsx

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewTopicPage() {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Создана тема:', title)
    router.push('/forum') // redirect soon...
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Create a new topic</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic Title"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create a topic
        </button>
      </form>
    </div>
  )
}
