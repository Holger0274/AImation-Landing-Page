'use client';
import { useEffect } from 'react';
import { movedHomeDestination } from '@/lib/data/discovery';
export default function LegacyHomeAnchors({ en }: { en: boolean }) {
  useEffect(() => {
    const follow = () => {
      const target = movedHomeDestination(window.location.hash);
      if (target) window.location.replace(`${en ? '/en' : ''}${target}`);
    };
    follow();
    window.addEventListener('hashchange', follow);
    return () => window.removeEventListener('hashchange', follow);
  }, [en]);
  return null;
}
