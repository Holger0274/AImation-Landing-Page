'use client';
import { useEffect, useRef } from 'react';

/** Decorative motion is disabled for touch and reduced-motion preferences. */
export default function EngineeringBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0, x = 0, y = 0, targetX = 0, targetY = 0;
    const paint = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      ref.current?.style.setProperty('--drift-x', `${x.toFixed(2)}px`);
      ref.current?.style.setProperty('--drift-y', `${y.toFixed(2)}px`);
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1 ? requestAnimationFrame(paint) : 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== 'mouse') return;
      targetX = (event.clientX / window.innerWidth - 0.5) * 28;
      targetY = (event.clientY / window.innerHeight - 0.5) * 20;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const reset = () => { targetX = targetY = 0; if (!frame) frame = requestAnimationFrame(paint); };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    media.addEventListener('change', reset);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', reset);
      media.removeEventListener('change', reset);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div ref={ref} className="engineering-backdrop" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="blueprint-drift blueprint-drift-a" src="/images/engineering-connector.svg" alt="" width="900" height="600" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="blueprint-drift blueprint-drift-b" src="/images/engineering-spring.svg" alt="" width="640" height="440" />
    </div>
  );
}
