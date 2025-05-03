use client;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark gfm';

export default function MdxContent({ content }: { content: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-5xl">
      <ReactMarkdown remarkPlugins=[remarkGfm]>
        {content}
      </ReactMarkdown>
    </article>
  );
}