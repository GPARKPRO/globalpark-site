'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'overview', label: 'Introduction' },
  { id: 'utility', label: 'Token Utility' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'governance', label: 'Governance' },
  { id: 'deflation', label: 'Deflation' },
  { id: 'compliance', label: 'Compliance' },
];

export default function TokenomicsNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const visible = offsets.find(({ top }) => top >= 0) || offsets[offsets.length - 1];
      setActiveId(visible.id);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="sticky top-24 text-sm font-medium w-48 hidden lg:block">
      <ul className="space-y-2 border-l border-neutral-700 pl-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block hover:text-yellow-500 transition-colors ${
                activeId === id ? 'text-yellow-500' : 'text-neutral-400'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
