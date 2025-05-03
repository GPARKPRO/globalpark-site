export const dynamic = 'force-static';
import { getMdSlug, getAllMarkdownPages } from '../../../lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import MdxContent from '../../components/mdx/MdxContent';

export async function generateStaticParams() {
  const pages = await getAllMarkdownPages();
  return pages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata( { params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug} | GPARK Docs`
  };
}

export default async function DocsPage({ params }: { params: { slug: string } }) {
  const content = await getMdSlug(params.slug);

  if (!content) {
    return notFound();
  }

  return (
    <main className=\"max-w-5xl mx-auto px-4 py-16\">
      <MdxContent>{content}</MdxContent>
    </main>
  );
}