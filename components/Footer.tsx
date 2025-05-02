import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white px-6 py-12 text-sm font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left block */}
        <div>
          <h3 className="text-white text-base mb-4 tracking-wide">Global Park DAO</h3>
          <p className="text-zinc-400 mb-2">
            Fully open-source & community-governed initiative for art & memory.
          </p>
          <p className="text-zinc-500">
            Source & docs:{" "}
            <Link
              href="https://github.com/GPARKPRO/GlobalPark-DAO"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              GitHub
            </Link>
          </p>
        </div>

        {/* Right block */}
        <div>
          <h3 className="text-white text-base mb-4 tracking-wide">Official Documents</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>
              <Link
                href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/White_Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                White Paper
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Constitution_DAO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                DAO Constitution
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Declaration_DAO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Declaration of Decentralization
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Tokenomics_&_Economic_Model.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Tokenomics & Economic Model
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-zinc-500 mt-12 text-xs tracking-wider">
        © {new Date().getFullYear()} Global Park DAO. All rights reserved.
      </div>
    </footer>
  )
}
