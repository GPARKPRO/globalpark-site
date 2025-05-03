import Link from 'next/link';
import { getAllMarkdownPages } from '@/lib/mdx';

export default async function DocsIndexPage() {
  const pages = await getAllMarkdownPages();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      <ul className="space-y-4">
        {pages.map(({ slug }) => (
          <li key={slug}>
            <Link href={`/docs/${slug}`} className="text-blue-600 hover:underline">
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}