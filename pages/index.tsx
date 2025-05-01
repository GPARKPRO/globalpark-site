import Head from 'next/head'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Park</title>
        <meta name="description" content="A decentralized initiative for art, technology & collective memory." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-black text-white min-h-screen">
        <Hero />
        <Footer />
      </main>
    </>
  )
}
