import { ReactElement } from 'react';

export default function MdxContent({ children }: { children: ReactElement }) {
  return (
    <div className="prose space-y-4 prose-lg max-w-5xl">
      {children}
    </div>
  );
}
