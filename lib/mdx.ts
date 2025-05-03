import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export const getAllMarkdownPages = async () => {
  const files = await fs.readdir(path.join(process.cwd(), 'app/docs'));
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
};

export const getMdSlug = async (slug: string) => {
  const fullPath = path.join(process.cwd(), 'app/docs', `${slug}.mdx`);

  try {
    const source = await fs.readFile(fullPath, 'utf8');
    const { content } = matter(source);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });

    return mdxSource;
  } catch {
    return null;
  }
};
