import { redirect } from 'next/navigation';
import { getAllMarkdownPages } from '@/lib/mdx';

export default async function DocsIndexPage() {
  const pages = await getAllMarkdownPages();

  if (!pages.length) {
    return (
      <main className="px-6 py-16 text-center text-gray-400">
        <p>No documentation pages found.</p>
      </main>
    );
  }

  redirect(`/docs/${pages[0].slug}`);
}
