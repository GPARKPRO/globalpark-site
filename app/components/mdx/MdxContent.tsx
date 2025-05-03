import { ReactElement } from 'react';

export default function MdxContent({ children }: { children: ReactElement }) {
  return (
    <div className=\"prose space-y4 prose-lg custom max-w-5xl\">
      {children}
    </div>
  );
}