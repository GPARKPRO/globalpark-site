// lib/getRandomIcon.ts
import { availableIcons } from './icons';

export function getRandomIcon(): string {
  const index = Math.floor(Math.random() * availableIcons.length);
  return availableIcons[index];
}
