'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'TokenUtility', label: 'Token Utility' },
  { id: 'supply', label: 'Total Supply' },
  { id: 'allocation', label: 'Token Allocation' },
  { id: 'vesting', label: 'Vesting' },
  { id: 'use-cases', label: 'Utility & Use Cases' },
  { id: 'growth', label: 'Demand & Growth' },
  { id: 'modules', label: 'Future Modules' }
];

export default function TokenomicsNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const visible = offsets.find(({ top }) => top >= 0) || offsets[offsets.length - 1];
      setActiveId(visible.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-24 text-sm font-medium space-y-3">
      <ul className="space-y-2 border-l border-neutral-700 pl-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={clsx(
                'block transition-colors hover:text-yellow-400',
                activeId === id ? 'text-yellow-400' : 'text-neutral-500'
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
