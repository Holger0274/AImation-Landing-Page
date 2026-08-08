interface WissenVorherNachherProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const BEFORE_NODES = [
  { x: 40, y: 40, label: 'E-Mail' },
  { x: 112, y: 24, label: 'SharePoint' },
  { x: 172, y: 68, label: 'Kopf' },
  { x: 58, y: 112, label: 'Ordner' },
  { x: 140, y: 132, label: 'Wiki' },
];

const AFTER_NODES = [
  { x: 336, y: 40, label: 'E-Mail' },
  { x: 408, y: 24, label: 'SharePoint' },
  { x: 468, y: 68, label: 'Ingenieur prüft', focus: true },
  { x: 354, y: 112, label: 'Ordner' },
  { x: 436, y: 132, label: 'Wiki' },
];

const AFTER_EDGES: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [0, 3],
  [1, 4],
];

export default function WissenVorherNachher({ variant = 'dark', className }: WissenVorherNachherProps) {
  const isDark = variant === 'dark';
  const dividerColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(7,16,19,0.2)';
  const nodeFill = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(7,16,19,0.08)';
  const nodeStroke = isDark ? 'rgba(255,255,255,0.5)' : '#071013';
  const labelColor = isDark ? 'rgba(255,255,255,0.75)' : '#374151';
  const accent = '#60AFFF';
  const focus = '#f90093';

  return (
    <svg
      viewBox="0 0 528 170"
      className={className}
      role="img"
      aria-label="Wissen vorher und nachher: links unverbundene Wissenssilos in Köpfen, E-Mails und Ordnern, rechts ein vernetzter Wissensgraph mit Fokus auf den Knoten Ingenieur prüft"
    >
      <title>Wissen vorher unverbunden, nachher vernetzt</title>

      {/* Vorher: isolierte Knoten, keine Verbindungen */}
      {BEFORE_NODES.map((n) => (
        <g key={`before-${n.label}`}>
          <circle cx={n.x} cy={n.y} r={9} fill={nodeFill} stroke={nodeStroke} strokeWidth={1.2} />
          <text
            x={n.x}
            y={n.y + 22}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize={9}
            fill={labelColor}
          >
            {n.label}
          </text>
        </g>
      ))}

      <line x1={264} y1={8} x2={264} y2={162} stroke={dividerColor} strokeDasharray="3 4" />

      {/* Nachher: vernetzter Graph */}
      {AFTER_EDGES.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={AFTER_NODES[a].x}
          y1={AFTER_NODES[a].y}
          x2={AFTER_NODES[b].x}
          y2={AFTER_NODES[b].y}
          stroke={accent}
          strokeWidth={1}
          opacity={0.55}
        />
      ))}
      {AFTER_NODES.map((n) => (
        <g key={`after-${n.label}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.focus ? 11 : 9}
            fill={n.focus ? 'rgba(249,0,147,0.15)' : nodeFill}
            stroke={n.focus ? focus : accent}
            strokeWidth={n.focus ? 2 : 1.2}
          />
          <text
            x={n.x}
            y={n.y + (n.focus ? 26 : 22)}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize={9}
            fontWeight={n.focus ? 700 : 400}
            fill={n.focus ? focus : labelColor}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
