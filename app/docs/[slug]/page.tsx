import { getMdSlug, getAllMarkdownPages } from '../../../lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const pages = await getAllMarkdownPages();
  return pages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug} | GPARK Docs`,
  };
}

export default async function DocsPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await getMdSlug(params.slug);

  if (!content) {
    return notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <article>
        <pre>{content}</pre>
      </article>
    </main>
  );
}
