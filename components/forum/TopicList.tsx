// components/forum/TopicList.tsx

import TopicCard from './TopicCard'

const mockTopics = [
  { id: '1', title: 'Welcome to GlobalPark Forum', replies: 4 },
  { id: '2', title: 'How to connect a wallet?', replies: 2 },
  { id: '3', title: 'DAO Governance discussion', replies: 5 },
]

export default function TopicList() {
  return (
    <div className="space-y-4">
      {mockTopics.map((topic) => (
        <TopicCard key={topic.id} id={topic.id} title={topic.title} replies={topic.replies} />
      ))}
    </div>
  )
}
