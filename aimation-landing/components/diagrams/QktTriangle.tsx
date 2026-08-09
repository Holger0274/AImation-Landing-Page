interface QktTriangleProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function QktTriangle({ variant = 'light', className }: QktTriangleProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.9)' : '#071013';
  const mutedFill = isDark ? 'rgba(255,255,255,0.08)' : '#eef0f2';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.16)';
  const accent = '#60AFFF';

  const top = { x: 100, y: 30, label: 'Qualität' };
  const left = { x: 26, y: 176, label: 'Kosten' };
  const right = { x: 174, y: 176, label: 'Timing' };
  const points = [top, left, right];

  return (
    <svg
      viewBox="0 0 200 212"
      className={className}
      role="img"
      aria-label="QKT-Dreieck: Qualität, Kosten und Timing als Steuerungsdreieck jeder Entwicklungsabteilung"
    >
      <title>QKT-Dreieck: Qualität, Kosten, Timing</title>
      <defs>
        <linearGradient id="qktFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? 'rgba(255,255,255,0.12)' : '#ffffff'} />
          <stop offset="100%" stopColor={mutedFill} />
        </linearGradient>
        <filter id="qktShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor={shadowColor} />
        </filter>
      </defs>
      <polygon
        points={`${top.x},${top.y} ${left.x},${left.y} ${right.x},${right.y}`}
        fill="url(#qktFill)"
        stroke={lineColor}
        strokeWidth={3}
        strokeLinejoin="round"
        filter="url(#qktShadow)"
      />
      {points.map((p) => (
        <g key={p.label}>
          <circle
            cx={p.x}
            cy={p.y}
            r={7.5}
            fill={accent}
            stroke={isDark ? 'none' : '#ffffff'}
            strokeWidth={isDark ? 0 : 3}
          />
          <text
            x={p.x}
            y={p === top ? p.y - 18 : p.y + 28}
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight={700}
            fontSize={17}
            fill={lineColor}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
