import dynamic from 'next/dynamic';
import TokenomicsNav from '@/components/docs/TokenomicsNav';

const Overview = dynamic(() => import('@/components/docs/tokenomics/Overview'));

export default function TokenomicsPage() {
  return (
    <div className="flex gap-10">
      <TokenomicsNav />
      <div className="prose dark:prose-invert flex-1 py-10">
        <Overview />
      </div>
    </div>
  );
}
