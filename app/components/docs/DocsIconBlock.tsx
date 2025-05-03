// components/docs/DocsIconBlock.tsx
'use client';

import { useEffect, useState } from 'react';
import Icon from '../Icon';

const iconNames = [
  'book', 'data', 'governance', 'map', 'network',
  'shield', 'token', 'vision', 'wallet', 'globe'
];

function getRandomIcons(count: number) {
  const shuffled = iconNames.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function DocsIconBlock() {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    setIcons(getRandomIcons(3));
  }, []);

  return (
    <div className="flex gap-6 justify-center mt-10">
      {icons.map(name => (
        <div key={name} className="flex flex-col items-center">
          <Icon name={name} className="w-12 h-12 text-white/80" />
          <span className="text-sm mt-2 text-white/70">{name}</span>
        </div>
      ))}
    </div>
  );
}
