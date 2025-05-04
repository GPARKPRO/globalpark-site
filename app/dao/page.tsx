'use client'

export default function DaoMintPage() {
  const epochs = [
    { id: 1, range: '#1–100', price: 0.33 },
    { id: 2, range: '#101–200', price: 0.44 },
    { id: 3, range: '#201–300', price: 0.55 },
    { id: 4, range: '#301–400', price: 0.66 },
    { id: 5, range: '#401–500', price: 0.77 },
    { id: 6, range: '#501–600', price: 0.88 },
    { id: 7, range: '#601–700', price: 0.99 },
    { id: 8, range: '#701–800', price: 1.11 },
    { id: 9, range: '#801–900', price: 1.23 },
    { id: 10, range: '#901–1000', price: 1.44 },
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-purple-400">
          Join the Global Park DAO
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Mint your <span className="text-yellow-400 font-semibold">Governance NFT</span> and become 1 of 1000 founding members. A new pricing epoch begins every 100 mints.
        </p>
        <button
          disabled
          className="bg-yellow-400/30 text-black/50 px-8 py-3 rounded-xl text-lg font-semibold cursor-not-allowed"
        >
          Mint coming soon
        </button>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6">
          {epochs.map((epoch) => (
            <div
              key={epoch.id}
              className="p-4 border border-zinc-700 rounded-xl bg-black/40 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-500/10 transition"
            >
              <p className="text-lg font-semibold text-white mb-1">Epoch {epoch.id}</p>
              <p className="text-sm text-gray-400">{epoch.range}</p>
              <p className="text-yellow-400 font-medium mt-2">{epoch.price.toFixed(2)} ETH</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
