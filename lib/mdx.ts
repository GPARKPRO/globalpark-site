import fs from 'fs/promises';
import path from 'path';

export const getAllMarkdownPages = async () => {
  const docsPath = path.join(process.cwd(), 'app/docs');

  const walk = async (dir: string): Promise<string[]> => {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? walk(res) : res;
      })
    );
    return Array.prototype.concat(...files);
  };

  const allFiles = await walk(docsPath);

  return allFiles
    .filter((file) => file.endsWith('.mdx'))
    .map((rawFile) => ({
      slug: rawFile
        .replace(docsPath + path.sep, '')
        .replace(/\.mdx$/, '')
        .split(path.sep)
        .join('/'),
    }));
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
