import dynamic from 'next/dynamic';
import DocumentationLayout from '@/components/docs/layouts/DocumentationLayout';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

const sections = [
  dynamic(() => import('@/components/docs/tokenomics/Introduction')),
  dynamic(() => import('@/components/docs/tokenomics/TokenUtility'))
  // next
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
