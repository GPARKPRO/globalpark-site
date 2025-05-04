import { getAllMarkdownPages, getMdSlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MdxContent from '@/app/components/mdx/MdxContent';

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getAllMarkdownPages();
  return pages.map(({ slug }) => ({ slug: slug.split('/') }));
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  return {
    title: `${params.slug.join(' / ')} | GlobalPark Docs`,
  };
}

export default async function DocsPage({ params }: { params: { slug: string[] } }) {
  const fullPath = params.slug.join('/');
  const content = await getMdSlug(fullPath);
  if (!content) return notFound();

  return <MdxContent>{content}</MdxContent>;
}
