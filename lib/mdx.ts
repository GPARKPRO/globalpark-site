import fs from 'fs/promises';
import path from 'path';

export const getAllMarkdownPages = async () => {
  const files = await fs.readdir(path.join(process.cwd(), 'app/docs'));
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(rawFile => ({ slug: rawFile.replace(/\.mdx$/, '') }));
};

export const getMdSlug = async (slug: string): Promise<string | null> => {
  const filePath = path.join(process.cwd(), 'app/docs', `${slug}.mdx`);
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    return file;
  } catch {
    return null;
  }
};