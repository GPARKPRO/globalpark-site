// components/docs/DocsIconBlock.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const iconNames = [
  'book', 'data', 'governance', 'map', 'network', 'node', 'orbit', 'structure', 'token'
];

function getRandomIconName() {
  const index = Math.floor(Math.random() * iconNames.length);
  return iconNames[index];
}

export default function DocsIconBlock() {
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    setIcon(getRandomIconName());
  }, []);

  if (!icon) return null;

  return (
    <div className="w-8 h-8 mb-2">
      <Image
        src={`/icons/${icon}.svg`}
        alt={`${icon} icon`}
        width={32}
        height={32}
        className="opacity-80"
      />
    </div>
  );
}
