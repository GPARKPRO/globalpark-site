import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const docsPath = path.join(process.cwd(), 'app/docs');

export const getAllMarkdownPages = async () => {
  const files = await fs.readdir(docsPath);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(id => ({ slug: id.replace(/\\.mdx$/, '') });
};

export const getMdSlug = async (slug: string): Promise<string | null> => {
  const filePath = path.join(docsPath, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { content } = matter(fileContent);
    return content;
  } catch {
    return null;
  }
};
