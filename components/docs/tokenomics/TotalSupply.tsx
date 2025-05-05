export default function TotalSupply() {
  return (
    <section id="supply" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-6">
        3. Total Supply and Emission Properties
      </h2>

      <p className="text-neutral-300 mb-4">
        The total supply of GPARK tokens is strictly limited to 21,000,000 units.
        This number was fixed at the time of contract deployment and cannot be increased,
        changed, or recreated.
      </p>

      <p className="text-neutral-300 mb-4">
        This structure reflects the project’s philosophy: a limited, meaningful space requires
        a limited and meaningful resource.
      </p>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">Key Emission Properties</h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>
          <strong className="text-white">Fixed Supply:</strong> The contract contains no <code>mint()</code> function or any method of generating new tokens.
          The total of 21 million GPARK is final and irreversible.
        </li>
        <li>
          <strong className="text-white">No Admin Access:</strong> The contract is built using an Ownable model, where the DAO Treasury (multisig)
          is the owner — not an individual. Ownership transfer is disabled.
        </li>
        <li>
          <strong className="text-white">No Pre-Mine or Hidden Allocations:</strong> Distribution and reserves are publicly defined and reflect
          a model approved by the DAO. All token movements are transparent and verifiable on-chain.
        </li>
        <li>
          <strong className="text-white">No Inflation:</strong> The system does not include automatic emission mechanics
          (no staking rewards, farming, or inflationary loops). All rewards are distributed manually through DAO-approved
          proposals using predefined token pools.
        </li>
        <li>
          <strong className="text-white">DAO-Managed Distribution:</strong> Token allocations for initiatives can only be executed based
          on DAO proposals approved via Snapshot and confirmed by the Gnosis Safe.
        </li>
      </ul>
    </section>
  );
}
