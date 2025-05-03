import Link from 'next/link';
import { getAllMarkdownPages } from '@/lib/mdx';
import Icon from '@/components/Icon';
import { getRandomIcon } from '@/lib/getRandomIcon';

export default async function DocsIndexPage() {
  const pages = await getAllMarkdownPages();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      <ul className="space-y-4">
        {pages.map(({ slug }) => (
          <li key={slug} className="flex items-center gap-3">
            <Icon name={getRandomIcon()} className="w-5 h-5" />
            <Link href={`/docs/${slug}`} className="text-blue-500 hover:underline">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
