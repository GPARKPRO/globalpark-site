import {React, ReactElement} from 'react';

export default function MdxContent({
  children: ReactElement || void
}) {
  return (
    <div className=\"prose space-y4 prose-lg prose-custom max-w-5xl\">
      {children }
    </div>
  );
}