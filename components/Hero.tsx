import Image from "next/image";
import ConnectWallet from './ConnectWallet'
...
<ConnectWallet />
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-white">
      <div className="max-w-2xl py-20">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">GLOBAL PARK</h1>
        <p className="mt-6 text-xl font-light">
          A Decentralized Initiative for <br />
          Art, Technology & Collective Memory
        </p>
        <p className="mt-4 text-sm text-gray-300 max-w-md">
          We’re building a decentralized initiative where every token and action contributes to preserving digital and physical heritage.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-white text-black px-5 py-2 font-medium rounded hover:bg-gray-200">
            Connect Wallet
          </button>
          <button className="border border-white px-5 py-2 font-medium rounded hover:bg-white hover:text-black">
            Explore DAO
          </button>
          <button className="border border-white px-5 py-2 font-medium rounded hover:bg-white hover:text-black">
            View GitHub / Docs
          </button>
        </div>
      </div>

      <div className="py-20 hidden md:block">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>
    </section>
  );
}
