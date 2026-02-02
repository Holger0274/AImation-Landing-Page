'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if device is mobile based on viewport width
 * Uses 768px breakpoint (Tailwind md breakpoint)
 *
 * @returns {boolean} true if viewport width < 768px, false otherwise
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;

    // Set initial value
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
}
