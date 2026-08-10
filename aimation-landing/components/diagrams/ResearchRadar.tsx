import { Scale, FileSearch, TrendingUp, Sparkles, ClipboardList, CalendarClock, type LucideIcon } from 'lucide-react';

interface ResearchRadarProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const CENTER = { x: 135, y: 130 };
const RING_R = 60;

const SOURCES: { x: number; y: number; label: string; icon: LucideIcon; labelDy: number }[] = [
  { x: 135, y: 72, label: 'Normen', icon: Scale, labelDy: -22 },
  { x: 193, y: 130, label: 'Patente', icon: FileSearch, labelDy: 26 },
  { x: 135, y: 188, label: 'Wettbewerb', icon: TrendingUp, labelDy: 26 },
  { x: 77, y: 130, label: 'Tech-Trends', icon: Sparkles, labelDy: 26 },
];

const BRIEFING_CARD = { x: 300, y: 88, width: 158, height: 84 };

export default function ResearchRadar({ variant = 'light', className }: ResearchRadarProps) {
  const isDark = variant === 'dark';
  const panelFill = isDark ? 'rgba(255,255,255,0.06)' : '#ffffff';
  const panelStroke = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(7,16,19,0.1)';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.12)';
  const nodeFill = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(96,175,255,0.14)';
  const ringColor = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(96,175,255,0.35)';
  const labelColor = isDark ? 'rgba(255,255,255,0.75)' : '#4b5563';
  const titleColor = isDark ? '#ffffff' : '#071013';
  const accent = '#60AFFF';
  const focus = '#f90093';

  // Sweep-Keil: 50°-Segment, wird per animateTransform dauerhaft um das Zentrum rotiert.
  const sweepStart = { x: CENTER.x + RING_R * Math.cos((-25 * Math.PI) / 180), y: CENTER.y + RING_R * Math.sin((-25 * Math.PI) / 180) };
  const sweepEnd = { x: CENTER.x + RING_R * Math.cos((25 * Math.PI) / 180), y: CENTER.y + RING_R * Math.sin((25 * Math.PI) / 180) };
  const sweepPath = `M${CENTER.x},${CENTER.y} L${sweepStart.x.toFixed(1)},${sweepStart.y.toFixed(1)} A${RING_R},${RING_R} 0 0,1 ${sweepEnd.x.toFixed(1)},${sweepEnd.y.toFixed(1)} Z`;

  const connectorStart = { x: 215, y: CENTER.y };
  const connectorEnd = { x: BRIEFING_CARD.x, y: CENTER.y };
  const connectorLength = connectorEnd.x - connectorStart.x;

  return (
    <svg
      viewBox="0 0 460 240"
      className={className}
      role="img"
      aria-label="Recherche-Radar: ein Agent überwacht laufend Normen, Patente, Wettbewerb und Technologie-Trends und stellt vor jedem Kundengespräch ein kompaktes Briefing bereit"
    >
      <title>Recherche-Radar mit laufendem Monitoring und Briefing</title>
      <defs>
        <filter id="radarShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={shadowColor} />
        </filter>
      </defs>

      {/* Radar-Ringe */}
      {[20, 40, 60].map((r) => (
        <circle key={r} cx={CENTER.x} cy={CENTER.y} r={r} fill="none" stroke={ringColor} strokeWidth={1} />
      ))}

      {/* Rotierender Sweep, dauerhafte Überwachung */}
      <g>
        <path d={sweepPath} fill={focus} opacity={0.16} />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${CENTER.x} ${CENTER.y}`}
          to={`360 ${CENTER.x} ${CENTER.y}`}
          dur="5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Zentrum: scannender Agent */}
      <circle cx={CENTER.x} cy={CENTER.y} r={5} fill={focus}>
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Quellen */}
      {SOURCES.map((s) => {
        const Icon = s.icon;
        return (
          <g key={s.label}>
            <circle cx={s.x} cy={s.y} r={15} fill={nodeFill} stroke={accent} strokeWidth={1.8} filter="url(#radarShadow)" />
            <foreignObject x={s.x - 9} y={s.y - 9} width={18} height={18}>
              <Icon size={18} color={accent} strokeWidth={1.9} />
            </foreignObject>
            <text
              x={s.x}
              y={s.y + s.labelDy}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize={10.5}
              fontWeight={500}
              fill={labelColor}
            >
              {s.label}
            </text>
          </g>
        );
      })}

      {/* Verbindung zum Briefing, zeichnet sich ein */}
      <line
        x1={connectorStart.x}
        y1={connectorStart.y}
        x2={connectorEnd.x}
        y2={connectorEnd.y}
        stroke={accent}
        strokeWidth={2}
        opacity={0.6}
        strokeDasharray={connectorLength}
        strokeDashoffset={connectorLength}
      >
        <animate attributeName="stroke-dashoffset" from={connectorLength} to={0} dur="0.7s" begin="0.6s" fill="freeze" />
      </line>
      {/* Impuls: laufend vom Radar zum Briefing, zeigt kontinuierlichen Zufluss */}
      <circle r={3.5} fill={focus} opacity={0.85}>
        <animateMotion
          dur="2.2s"
          begin="1.4s"
          repeatCount="indefinite"
          path={`M${connectorStart.x},${connectorStart.y} L${connectorEnd.x},${connectorEnd.y}`}
        />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
      </circle>

      {/* Briefing-Karte */}
      <rect {...BRIEFING_CARD} rx={14} fill={panelFill} stroke={panelStroke} strokeWidth={1.5} filter="url(#radarShadow)" />
      <foreignObject x={BRIEFING_CARD.x + 16} y={BRIEFING_CARD.y + 16} width={22} height={22}>
        <ClipboardList size={22} color={focus} strokeWidth={1.8} />
      </foreignObject>
      <text
        x={BRIEFING_CARD.x + 46}
        y={BRIEFING_CARD.y + 28}
        fontFamily="Space Grotesk, sans-serif"
        fontWeight={700}
        fontSize={12.5}
        fill={titleColor}
      >
        <tspan x={BRIEFING_CARD.x + 46} dy={0}>Kompaktes</tspan>
        <tspan x={BRIEFING_CARD.x + 46} dy={15}>Briefing</tspan>
      </text>
      <foreignObject x={BRIEFING_CARD.x + 16} y={BRIEFING_CARD.y + 58} width={14} height={14}>
        <CalendarClock size={14} color={accent} strokeWidth={1.9} />
      </foreignObject>
      <text
        x={BRIEFING_CARD.x + 36}
        y={BRIEFING_CARD.y + 69}
        fontFamily="Inter, sans-serif"
        fontSize={9.5}
        fill={labelColor}
      >
        Vor jedem Gespräch
      </text>
    </svg>
  );
}
