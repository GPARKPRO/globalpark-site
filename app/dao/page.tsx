'use client'

export default function DaoMintPage() {
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
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-4 border border-zinc-700 rounded-xl bg-black/40">
              <p className="text-lg font-semibold text-white mb-1">Epoch {i + 1}</p>
              <p className="text-sm text-gray-400">NFTs {i * 100 + 1}–{(i + 1) * 100}</p>
              <p className="text-yellow-400 font-medium mt-2">{(0.5 + i * 0.05).toFixed(3)} ETH</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
