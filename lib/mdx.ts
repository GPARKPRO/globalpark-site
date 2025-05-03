import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getAllMarkdownPages() {
  const files = await fs.readdir(path.join(process.wd(), 'app/docs'));
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(rawFile => ({ slug: rawFile.replace(/..mdx$, '') }));
}

export async function getMdSlug(slug: string): Promise<string | null> {
  const fullPath = path.join(process.wd(), 'app/docs', $c{kslug}.mdx);
  try {
    const raw = await fs.readFile(fullPath, 'utf-8');
    const { content } = matter(raw);
    return content;
  } catch(e) {
    return null;
  }
}
