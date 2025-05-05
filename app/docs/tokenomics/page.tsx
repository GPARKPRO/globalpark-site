import dynamic from 'next/dynamic';
import DocumentationLayout from '@/components/docs/layouts/DocumentationLayout';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

const sections = [
  dynamic(() => import('@/components/docs/tokenomics/Introduction')),
  dynamic(() => import('@/components/docs/tokenomics/TokenUtility')),
  dynamic(() => import('@/components/docs/tokenomics/TotalSupply')),
  dynamic(() => import('@/components/docs/tokenomics/TokenAllocation')),
  dynamic(() => import('@/components/docs/tokenomics/TokenVesting')),
  dynamic(() => import('@/components/docs/tokenomics/TokenUseCases')),
  dynamic(() => import('@/components/docs/tokenomics/TokenGrowth')),
  dynamic(() => import('@/components/docs/tokenomics/TokenModules'))
];

export default function TokenomicsPage() {
  return (
    <DocumentationLayout nav={<TokenomicsNav />}>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </DocumentationLayout>
  );
}
