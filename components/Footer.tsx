import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <p className="mb-4 font-semibold">Global Park DAO</p>
          <p className="text-gray-400 mb-2">
            This project is fully open-source and community-governed.
          </p>
          <p className="text-gray-400">
            Source code and all official documents are available on{' '}
            <Link href="https://github.com/GPARKPRO/GlobalPark-DAO" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold">Official Documents</p>
          <ul className="space-y-2">
            <li>
              <Link href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/White_Paper.pdf" target="_blank" rel="noopener noreferrer">
                White Paper
              </Link>
            </li>
            <li>
              <Link href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Constitution_DAO.pdf" target="_blank" rel="noopener noreferrer">
                DAO Constitution
              </Link>
            </li>
            <li>
              <Link href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Declaration_DAO.pdf" target="_blank" rel="noopener noreferrer">
                Declaration of Decentralization
              </Link>
            </li>
            <li>
              <Link href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Founder_Manifesto.pdf" target="_blank" rel="noopener noreferrer">
                Founder's Manifesto
              </Link>
            </li>
            <li>
              <Link href="https://github.com/GPARKPRO/GlobalPark-DAO/blob/main/docs/Tokenomics_&_Economic_Model.pdf" target="_blank" rel="noopener noreferrer">
                Tokenomics & Economic Model
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-10 text-xs">
        © {new Date().getFullYear()} Global Park DAO. All rights reserved.
      </div>
    </footer>
  )
}
