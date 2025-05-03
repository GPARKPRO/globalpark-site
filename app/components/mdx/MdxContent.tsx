import { ReactElement, React } from 'react';

export default function MdxContent({type: { children: ReactElement }) {
  return (
    <div className=\"prose space-y4 prose-lg custom max-w-5xl\">
      {type.children]
    </div>
  );
}