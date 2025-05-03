import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/mdx';
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
    const { content } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return content;
  } catch {
    return null;
  }
};
