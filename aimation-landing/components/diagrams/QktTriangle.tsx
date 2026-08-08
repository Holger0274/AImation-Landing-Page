interface QktTriangleProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function QktTriangle({ variant = 'light', className }: QktTriangleProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.85)' : '#071013';
  const fillColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(7,16,19,0.04)';
  const accent = '#60AFFF';

  const top = { x: 90, y: 18, label: 'Qualität' };
  const left = { x: 18, y: 152, label: 'Kosten' };
  const right = { x: 162, y: 152, label: 'Timing' };
  const points = [top, left, right];

  return (
    <svg
      viewBox="0 0 180 182"
      className={className}
      role="img"
      aria-label="QKT-Dreieck: Qualität, Kosten und Timing als Steuerungsdreieck jeder Entwicklungsabteilung"
    >
      <title>QKT-Dreieck: Qualität, Kosten, Timing</title>
      <polygon
        points={`${top.x},${top.y} ${left.x},${left.y} ${right.x},${right.y}`}
        fill={fillColor}
        stroke={lineColor}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      {points.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r={5} fill={accent} />
          <text
            x={p.x}
            y={p === top ? p.y - 14 : p.y + 22}
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight={700}
            fontSize={13}
            fill={lineColor}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
