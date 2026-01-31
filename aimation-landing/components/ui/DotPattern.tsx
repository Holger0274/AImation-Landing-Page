/**
 * DotPattern Komponente
 *
 * Erstellt ein subtiles Punktmuster als Background.
 * Perfekt für Tech/KI Landing Pages - gibt einen modernen, digitalen Look.
 *
 * Features:
 * - SVG-basiert (crisp & skalierbar)
 * - Anpassbare Punktgröße und Abstand
 * - Mask-Image Support für Fade-Effekte
 * - Sehr performant (statisches SVG)
 *
 * Beispiel:
 * <DotPattern className="[mask-image:radial-gradient(circle,white,transparent)]" />
 */

'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

interface DotPatternProps {
  /** Breite in Pixel (Standard: 16) */
  width?: number;

  /** Höhe in Pixel (Standard: 16) */
  height?: number;

  /** X-Position des Punktes (Standard: 1) */
  x?: number;

  /** Y-Position des Punktes (Standard: 1) */
  y?: number;

  /** Radius des Punktes in Pixel (Standard: 1) */
  cr?: number;

  /** CSS-Klassen für Styling und Masking */
  className?: string;

  /** Inline Styles */
  style?: React.CSSProperties;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 1,
  y = 1,
  cr = 1,
  className,
  style,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30 dark:fill-neutral-600/30',
        className
      )}
      style={style}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={0}
          y={0}
        >
          <circle
            id="pattern-circle"
            cx={x}
            cy={y}
            r={cr}
            className="fill-neutral-400/40 dark:fill-neutral-500/30"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
