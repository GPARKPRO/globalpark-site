import dynamic from 'next/dynamic';
import DocumentationLayout from '@/components/docs/layouts/DocumentationLayout';
import TokenomicsNav from '@/components/docs/tokenomics/TokenomicsNav';

const Introduction = dynamic(() => import('@/components/docs/tokenomics/Introduction'));

export default function TokenomicsPage() {
  return (
    <DocumentationLayout nav={<TokenomicsNav />}>
      <Introduction />
    </DocumentationLayout>
  );
}
