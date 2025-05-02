export default function DaoPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Global Park DAO</h1>
      <p className="text-gray-300 mb-4">
        The DAO governs the development of Global Park as a decentralized cultural and technological hub.
      </p>
      <p className="text-gray-500">
        Governance will be conducted via Snapshot, with token-based and NFT-based voting power.
      </p>

      <div className="mt-8">
        <a
          href="https://snapshot.org/#/globalpark.eth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Go to Snapshot
        </a>
      </div>
    </div>
  )
}
