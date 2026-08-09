interface WissenVorherNachherProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const BEFORE_PANEL = { x: 16, y: 42, width: 232, height: 152 };
const AFTER_PANEL = { x: 312, y: 42, width: 232, height: 152 };

const BEFORE_NODES = [
  { x: 60, y: 86, label: 'E-Mail' },
  { x: 146, y: 66, label: 'SharePoint' },
  { x: 206, y: 108, label: 'Kopf' },
  { x: 78, y: 148, label: 'Ordner' },
  { x: 164, y: 158, label: 'Wiki' },
];

const AFTER_HUB = { x: 428, y: 118, label: 'Ingenieur prüft' };
const AFTER_SPOKES = [
  { x: 428, y: 64, label: 'SharePoint' },
  { x: 372, y: 96, label: 'E-Mail' },
  { x: 484, y: 96, label: 'Wiki' },
  { x: 428, y: 172, label: 'Ordner' },
];

export default function WissenVorherNachher({ variant = 'light', className }: WissenVorherNachherProps) {
  const isDark = variant === 'dark';
  const panelFill = isDark ? 'rgba(255,255,255,0.04)' : '#ffffff';
  const panelStroke = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(7,16,19,0.08)';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.12)';
  const nodeFill = isDark ? 'rgba(255,255,255,0.10)' : '#eef0f2';
  const nodeStroke = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(7,16,19,0.4)';
  const labelColor = isDark ? 'rgba(255,255,255,0.7)' : '#4b5563';
  const beforeCaption = isDark ? 'rgba(255,255,255,0.5)' : '#9ca3af';
  const accent = '#60AFFF';
  const focus = '#f90093';

  return (
    <svg
      viewBox="0 0 560 224"
      className={className}
      role="img"
      aria-label="Wissen vorher und nachher: links fünf unverbundene Wissenssilos wie E-Mail, SharePoint und Kopf, rechts ein Wissens-Netzwerk mit dem Knoten Ingenieur prüft im Zentrum"
    >
      <title>Wissen vorher unverbunden, nachher vernetzt</title>
      <defs>
        <filter id="wvnShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor={shadowColor} />
        </filter>
      </defs>

      {/* Captions */}
      <text
        x={BEFORE_PANEL.x + BEFORE_PANEL.width / 2}
        y={24}
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight={700}
        fontSize={15}
        fill={beforeCaption}
      >
        Vorher
      </text>
      <text
        x={AFTER_PANEL.x + AFTER_PANEL.width / 2}
        y={24}
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight={700}
        fontSize={15}
        fill={focus}
      >
        Nachher
      </text>

      {/* Panels */}
      <rect {...BEFORE_PANEL} rx={16} fill={panelFill} stroke={panelStroke} strokeWidth={1.5} filter="url(#wvnShadow)" />
      <rect {...AFTER_PANEL} rx={16} fill={panelFill} stroke={panelStroke} strokeWidth={1.5} filter="url(#wvnShadow)" />

      {/* Transformation Arrow */}
      <circle cx={280} cy={118} r={18} fill={focus} filter="url(#wvnShadow)" />
      <text x={280} y={125} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={700} fontSize={18} fill="#ffffff">
        &#8594;
      </text>

      {/* Vorher: isolierte Knoten, keine Verbindungen */}
      {BEFORE_NODES.map((n) => (
        <g key={`before-${n.label}`}>
          <circle cx={n.x} cy={n.y} r={10} fill={nodeFill} stroke={nodeStroke} strokeWidth={1.5} />
          <text x={n.x} y={n.y + 24} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={10.5} fill={labelColor}>
            {n.label}
          </text>
        </g>
      ))}

      {/* Nachher: Hub-and-Spoke Netzwerk */}
      {AFTER_SPOKES.map((n) => (
        <line
          key={`edge-${n.label}`}
          x1={AFTER_HUB.x}
          y1={AFTER_HUB.y}
          x2={n.x}
          y2={n.y}
          stroke={accent}
          strokeWidth={2}
          opacity={0.6}
        />
      ))}
      {AFTER_SPOKES.map((n) => (
        <g key={`after-${n.label}`}>
          <circle cx={n.x} cy={n.y} r={10} fill="rgba(96,175,255,0.14)" stroke={accent} strokeWidth={1.8} />
          <text x={n.x} y={n.y + 24} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={10.5} fontWeight={500} fill={labelColor}>
            {n.label}
          </text>
        </g>
      ))}
      <circle cx={AFTER_HUB.x} cy={AFTER_HUB.y} r={14} fill="rgba(249,0,147,0.16)" stroke={focus} strokeWidth={2.5} filter="url(#wvnShadow)" />
      {/* Label-Chip: deckt die Linie zum unteren Spoke ab, damit Text nicht auf der Linie liegt */}
      <rect x={AFTER_HUB.x - 62} y={AFTER_HUB.y + 19} width={124} height={20} rx={6} fill={panelFill} />
      <text
        x={AFTER_HUB.x}
        y={AFTER_HUB.y + 32}
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontSize={11}
        fontWeight={700}
        fill={focus}
      >
        {AFTER_HUB.label}
      </text>
    </svg>
  );
}
