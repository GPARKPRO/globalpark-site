'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MdxContent({ children }: { children: string }) {
  return (
    <article className="prose lg:prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </article>
  );
}
