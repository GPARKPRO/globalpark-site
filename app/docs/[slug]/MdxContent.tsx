'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MdxContent({ children }: { children: string }) {
  return (
    <div className="prose prose-neutral max-w-5xl mx-auto py-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
