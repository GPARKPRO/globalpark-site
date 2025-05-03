'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Icon from '@/components/Icon';

export default function MdxContent({ children }: { children: string }) {
  return (
    <article className="prose prose-zinc dark:prose-invert lg:prose-lg max-w-none prose-headings:text-white prose-p:text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          Icon: ({ node, ...props }) => <Icon {...(props as any)} />,
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
