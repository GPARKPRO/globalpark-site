export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 md:px-16 bg-black text-white border-t border-white/10 mt-10">
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <a href="https://app.ens.domains/name/globalpark.eth" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          ENS <span className="text-white">globalpark.eth</span>
        </a>
        <a href="https://github.com/GPARKPRO/globalpark-site" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="https://etherscan.io/address/globalpark.eth" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Ethsc
        </a>
      </div>
    </footer>
  );
}
