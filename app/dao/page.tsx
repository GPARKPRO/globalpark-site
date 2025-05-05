'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getRandomIcon } from '@/lib/getRandomIcon';

export default function DaoPage() {
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
  ];

  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const generated = epochs.map(() => getRandomIcon());
    setIcons(generated);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-purple-400">
          Join the Global Park DAO
        </h1>

        <p className="text-lg text-gray-400 mb-4">
          The <span className="text-yellow-400 font-semibold">Governance NFT</span> is your exclusive key to Global Park's decentralized future.
        </p>
        <p className="text-md text-gray-500 mb-4">
          Each NFT represents one of the 1000 founding seats in our DAO. The earlier you join — the lower the price, and the closer you are to Genesis.
        </p>
        <p className="text-md text-gray-500 mb-10">
          Epochs increase the mint price by design. This curve rewards early contributors while preserving fairness.
        </p>

        <video
          src="/videos/NFT_GOV(3.9).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow-lg"
        />

        <button
          disabled
          className="bg-yellow-400/30 text-black/50 px-8 py-3 rounded-xl text-lg font-semibold cursor-not-allowed"
        >
          Mint coming soon
        </button>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
          {epochs.map((epoch, i) => (
            <div
              key={epoch.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group border border-zinc-800 bg-zinc-900"
            >
              {icons[i] && (
                <Image
                  src={`/icons/${icons[i]}.svg`}
                  alt={`Epoch ${epoch.id}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
                />
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h3 className="text-xl font-bold text-white drop-shadow mb-1">Epoch {epoch.id}</h3>
                <p className="text-sm text-gray-300 drop-shadow">{epoch.range}</p>
                <p className="text-yellow-400 font-semibold text-lg mt-2 drop-shadow">{epoch.price.toFixed(2)} ETH</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition font-medium"
          >
            🔙 Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
