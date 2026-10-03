'use client';
import { useRef, type PointerEvent } from 'react';
import { useLocale } from 'next-intl';

export default function EngineeringDrawing() {
  const ref = useRef<HTMLDivElement>(null);
  const en = useLocale() === 'en';
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    ref.current?.style.setProperty('--scene-x', `${(x - 0.5) * 16}px`);
    ref.current?.style.setProperty('--scene-y', `${(y - 0.5) * 12}px`);
    ref.current?.style.setProperty('--light-x', `${x * 100}%`);
    ref.current?.style.setProperty('--light-y', `${y * 100}%`);
  };
  return (
    <div className="engineering-scene" ref={ref} onPointerMove={move} onPointerLeave={() => {
      ref.current?.style.setProperty('--scene-x', '0px');
      ref.current?.style.setProperty('--scene-y', '0px');
    }}>
      <div className="drawing-sheet" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/engineering-connector.svg" width="900" height="600" alt="" />
      </div>
      <p className="drawing-disclaimer">{en ? 'Illustration of the principle · example drawing' : 'Prinzipdarstellung · Beispielzeichnung'}</p>
    </div>
  );
}
