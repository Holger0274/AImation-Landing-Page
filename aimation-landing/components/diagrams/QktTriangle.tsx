import { useId } from 'react';

interface QktTriangleProps {
  variant?: 'light' | 'dark';
  className?: string;
  locale?: 'de' | 'en';
  active?: 'quality' | 'cost' | 'timing';
  animated?: boolean;
}

export default function QktTriangle({ variant = 'light', className, locale = 'de', active, animated = true }: QktTriangleProps) {
  const instanceId = useId().replace(/:/g, '');
  const fillId = `qktFill-${instanceId}`;
  const shadowId = `qktShadow-${instanceId}`;
  const en = locale === 'en';
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.9)' : '#071013';
  const mutedFill = isDark ? 'rgba(255,255,255,0.08)' : '#eef0f2';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.16)';
  const accent = '#60AFFF';
  const focus = isDark ? '#b8c7d1' : '#4a6573';

  const top = { x: 100, y: 30, label: en ? 'Quality' : 'Qualität', id: 'quality' };
  const left = { x: 26, y: 176, label: en ? 'Cost' : 'Kosten', id: 'cost' };
  const right = { x: 174, y: 176, label: 'Timing', id: 'timing' };
  const points = [top, left, right];
  const centroid = {
    x: (top.x + left.x + right.x) / 3,
    y: (top.y + left.y + right.y) / 3,
  };
  const motionPath = `M${top.x},${top.y} L${right.x},${right.y} L${left.x},${left.y} Z`;

  return (
    <svg
      viewBox="-15 -8 230 230"
      className={className}
      role="img"
      aria-label={en ? 'QKT triangle: quality, cost and timing in product development' : 'QKT-Dreieck: Qualität, Kosten und Timing in der Produktentwicklung'}
    >
      <title>{en ? 'QKT triangle: quality, cost, timing' : 'QKT-Dreieck: Qualität, Kosten, Timing'}</title>
      <defs>
        <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? 'rgba(255,255,255,0.12)' : '#ffffff'} />
          <stop offset="100%" stopColor={mutedFill} />
        </linearGradient>
        <filter id={shadowId} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor={shadowColor} />
        </filter>
      </defs>

      <polygon
        points={`${top.x},${top.y} ${left.x},${left.y} ${right.x},${right.y}`}
        fill={`url(#${fillId})`}
        stroke={lineColor}
        strokeWidth={active ? 1.3 : 3}
        strokeLinejoin="round"
        filter={`url(#${shadowId})`}
      />

      {/* Blueprint-Guides: Zentrum zu den drei Ecken, dezent gestrichelt */}
      {points.map((p) => (
        <line
          key={`guide-${p.label}`}
          x1={centroid.x}
          y1={centroid.y}
          x2={p.x}
          y2={p.y}
          stroke={accent}
          strokeWidth={1}
          strokeDasharray="2.5 4"
          opacity={isDark ? 0.35 : 0.4}
        />
      ))}
      <circle cx={centroid.x} cy={centroid.y} r={2.5} fill={accent} opacity={0.6} />

      {points.map((p, i) => (
        <g key={p.label}>
          {active === p.id && <circle cx={p.x} cy={p.y} r={14} fill="none" stroke="#ff4ecd" strokeWidth={1} />}
          <circle
            cx={p.x}
            cy={p.y}
            r={7.5}
            fill={active === p.id ? '#f90093' : accent}
            stroke={isDark ? 'none' : '#ffffff'}
            strokeWidth={isDark ? 0 : 3}
          >
            {animated && <animate
              attributeName="r"
              values="7.5;9;7.5"
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />}
          </circle>
          <text
            x={p.x}
            y={p === top ? p.y - 18 : p.y + 28}
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight={700}
            fontSize={17}
            fill={active === p.id ? '#ff4ecd' : lineColor}
          >
            {p.label}
          </text>
        </g>
      ))}

      {/* Wanderpunkt: läuft dauerhaft die drei Konten ab, einzige Magenta-Fokus-Ausnahme im Diagramm */}
      {animated && <g>
      <circle r={6.5} fill={isDark ? '#071013' : '#ffffff'}>
        <animateMotion dur="6s" repeatCount="indefinite" path={motionPath} />
      </circle>
      <circle r={4.5} fill={focus}>
        <animateMotion dur="6s" repeatCount="indefinite" path={motionPath} />
      </circle>
      </g>}
    </svg>
  );
}
