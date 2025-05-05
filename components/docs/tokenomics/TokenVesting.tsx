export default function TokenVesting() {
  return (
    <section id="vesting" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-6">5. Vesting & Token Locking</h2>

      <p className="text-neutral-300 mb-4">
        Vesting is a key mechanism used to ensure the long-term sustainability of the GPARK
        ecosystem and to prevent speculative behavior. All major token categories subject to
        internal allocation — such as the Core Team, DAO Council, and Partnerships — are locked
        by default and gradually released according to preset schedules.
      </p>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">
        5.1 Vesting Rules for the Team and DAO Council
      </h3>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li><strong className="text-white">Total allocated:</strong> 3,000,000 GPARK</li>
        <li><strong className="text-white">Initial lock period:</strong> 12 months (until May 1, 2026)</li>
        <li><strong className="text-white">Linear release:</strong> over 24 months, 125,000 GPARK/month</li>
        <li><strong className="text-white">Full vesting complete:</strong> May 1, 2028</li>
        <li><strong className="text-white">Lock enforcement:</strong> DAO-owned smart contract with <code>lockTokens()</code> function</li>
      </ul>
      <p className="text-neutral-300 mb-4">
        These tokens cannot be transferred, sold, or used for voting during the lock period.
        Vesting protects the integrity of governance and ensures commitment beyond the initial phase.
      </p>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">
        5.2 Lock Rules for Institutional Partners
      </h3>
      <p className="text-neutral-300 mb-4">
        Each institutional partnership or grant may be accompanied by a lockup period of 6 to 12 months,
        defined individually per case. This avoids opportunistic behavior and aligns institutional
        contributors with DAO timelines and roadmap phases.
      </p>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Lock status and unlock dates must be public</li>
        <li>Unlock conditions must be clear and pre-approved by DAO vote</li>
      </ul>

      <h3 className="text-lg font-semibold text-white mt-8 mb-3">5.3 Technical Implementation</h3>
      <p className="text-neutral-300 mb-4">
        All locked tokens are stored in the GPARK smart contract. The DAO (via multisig) uses the
        <code> lockTokens()</code> function to assign locks to any address, along with the unlock schedule.
      </p>
      <p className="text-neutral-300 mb-4">
        To check the current status of any wallet:
      </p>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2">
        <li><code>getUnlockedBalance(address)</code></li>
        <li><code>lockedAmount(address)</code></li>
        <li><code>getNextUnlockDate(address)</code></li>
      </ul>
      <p className="text-neutral-300 mt-4">
        These functions are public and can be verified through block explorers or GPARK’s open dashboard.
      </p>
    </section>
  );
}
