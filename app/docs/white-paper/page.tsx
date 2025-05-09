import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'White Paper | GlobalPark',
  description:
    'Welcome to the foundational document of Global Park DAO. Start your journey into our vision, governance, and token economy.',
}

export default function WhitePaperIntroPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Header Banner */}
      <div className="mb-10 rounded-lg overflow-hidden border border-zinc-800 shadow-lg">
        <img
          src="/banners/1500-3.png"
          alt="Global Park DAO Banner"
          className="w-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to the GlobalPark White Paper
      </h1>

      <p className="text-gray-300 mb-4">
        We're truly grateful to have you here. Reaching this point means you're
        diving deeper into our shared vision — and that matters.
      </p>

      <p className="text-gray-300 mb-4">
        This White Paper is not just a document — it's a cultural blueprint.
        Inside, you'll find the philosophical, architectural, and economic
        principles that define the GlobalPark DAO.
      </p>

      <p className="text-gray-300 mb-4">
        For your convenience, we've included a structured navigation panel{' '}
        <span className="text-yellow-400 font-medium">on the left</span>, so
        you can easily jump between sections or start from wherever you're most
        curious.
      </p>

      <p className="text-gray-300">
        Thank you for being part of this journey.{' '}
        <span className="text-pink-500">Enjoy your reading.</span>
      </p>

      <div className="mt-16 flex justify-center">
        <Link
          href="/docs/white-paper/summary"
          className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
        >
          Start Reading White Paper →
        </Link>
      </div>
    </main>
  )
}
