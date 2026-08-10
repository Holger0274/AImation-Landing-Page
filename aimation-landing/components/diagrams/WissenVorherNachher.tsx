import {
  Mail,
  Cloud,
  Brain,
  FileText,
  NotebookText,
  Folder,
  BookOpen,
  Database,
  Boxes,
  BrainCircuit,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

interface WissenVorherNachherProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const ICONS: Record<string, LucideIcon> = {
  'E-Mail': Mail,
  SharePoint: Cloud,
  Kopf: Brain,
  PDF: FileText,
  OneNote: NotebookText,
  Ordner: Folder,
  Wiki: BookOpen,
  ERP: Database,
  PDM: Boxes,
};

const BEFORE_PANEL = { x: 16, y: 48, width: 290, height: 340 };
const AFTER_PANEL = { x: 374, y: 48, width: 290, height: 340 };

// Vorher: organisches 3x3-Raster mit Jitter und leichter Rotation je Knoten,
// verstärkt den "verstreut/unsortiert"-Eindruck, ohne dass Icons oder Labels sich berühren.
const BEFORE_NODES = [
  { x: 62, y: 84, label: 'E-Mail', rotate: -7 },
  { x: 155, y: 94, label: 'SharePoint', rotate: 5 },
  { x: 266, y: 86, label: 'ERP', rotate: -5 },
  { x: 54, y: 220, label: 'Kopf', rotate: -4 },
  { x: 166, y: 209, label: 'OneNote', rotate: -6 },
  { x: 261, y: 217, label: 'PDM', rotate: 6 },
  { x: 61, y: 312, label: 'PDF', rotate: 6 },
  { x: 157, y: 322, label: 'Ordner', rotate: 4 },
  { x: 268, y: 315, label: 'Wiki', rotate: -3 },
];

// KI-Betriebssystem als zentraler Struktur-Layer: acht Datenquellen speisen den Hub,
// der Hub wiederum ist über eine einzelne, deutlich abgesetzte Leitung mit dem Ingenieur
// verbunden (kein Direktzugriff auf Rohdaten). Oktagon um 22.5° gedreht, damit oben und
// unten je eine freie Schneise entsteht (Label oben, Ingenieur-Leitung unten). Radius und
// Abstand zum Ingenieur-Knoten sind bewusst großzügig (siehe Kommentar bei ENGINEER_NODE).
const AFTER_HUB = { x: 519, y: 165, label: 'KI-Betriebssystem' };
// 160px Leitung zum Hub, 68px Kantenabstand zum nächsten Spoke: liest sich als eigene,
// klar abgesetzte zweite Ebene statt als neunter Spoke im selben Cluster.
const ENGINEER_NODE = { x: 519, y: 325, label: 'Ingenieur' };
const AFTER_SPOKES = [
  { x: 591, y: 195, label: 'PDF', labelDy: 26 },
  { x: 549, y: 237, label: 'Ordner', labelDy: 26 },
  { x: 489, y: 237, label: 'OneNote', labelDy: 26 },
  { x: 447, y: 195, label: 'E-Mail', labelDy: 26 },
  { x: 447, y: 135, label: 'Wiki', labelDy: -20 },
  { x: 489, y: 93, label: 'SharePoint', labelDy: -20 },
  { x: 549, y: 93, label: 'ERP', labelDy: -20 },
  { x: 591, y: 135, label: 'PDM', labelDy: -20 },
];

export default function WissenVorherNachher({ variant = 'light', className }: WissenVorherNachherProps) {
  const isDark = variant === 'dark';
  const panelFill = isDark ? 'rgba(255,255,255,0.04)' : '#ffffff';
  const panelStroke = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(7,16,19,0.08)';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.12)';
  const nodeFill = isDark ? 'rgba(255,255,255,0.10)' : '#eef0f2';
  const nodeStroke = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(7,16,19,0.4)';
  const iconColorBefore = isDark ? 'rgba(255,255,255,0.6)' : '#6b7280';
  const labelColor = isDark ? 'rgba(255,255,255,0.7)' : '#4b5563';
  const beforeCaption = isDark ? 'rgba(255,255,255,0.5)' : '#9ca3af';
  const accent = '#60AFFF';
  const focus = '#f90093';

  return (
    <svg
      viewBox="0 0 680 410"
      className={className}
      role="img"
      aria-label="Wissen vorher und nachher: links neun unverbundene Wissenssilos wie E-Mail, SharePoint, ERP und PDM, rechts ein KI-Betriebssystem, das alle Datenquellen strukturiert und den Ingenieur darüber anbindet"
    >
      <title>Wissen vorher unverbunden, nachher über ein KI-Betriebssystem strukturiert</title>
      <defs>
        <filter id="wvnShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor={shadowColor} />
        </filter>
      </defs>

      {/* Captions */}
      <text
        x={BEFORE_PANEL.x + BEFORE_PANEL.width / 2}
        y={28}
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
        y={28}
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
      {/* Farbcodierter Panel-Akzent: grau = unsortiert, magenta = strukturiert */}
      <rect x={BEFORE_PANEL.x} y={BEFORE_PANEL.y} width={BEFORE_PANEL.width} height={4} rx={2} fill={beforeCaption} opacity={0.5} />
      <rect x={AFTER_PANEL.x} y={AFTER_PANEL.y} width={AFTER_PANEL.width} height={4} rx={2} fill={focus} />

      {/* Transformation Arrow */}
      <circle cx={340} cy={218} r={18} fill={focus} filter="url(#wvnShadow)" />
      <text x={340} y={225} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={700} fontSize={18} fill="#ffffff">
        &#8594;
      </text>

      {/* Vorher: isolierte, leicht verdrehte Knoten, keine Verbindungen */}
      {BEFORE_NODES.map((n) => {
        const Icon = ICONS[n.label];
        return (
          <g key={`before-${n.label}`} transform={`rotate(${n.rotate} ${n.x} ${n.y})`}>
            <circle cx={n.x} cy={n.y} r={12} fill={nodeFill} stroke={nodeStroke} strokeWidth={1.5} filter="url(#wvnShadow)" />
            <foreignObject x={n.x - 7.5} y={n.y - 7.5} width={15} height={15}>
              <Icon size={15} color={iconColorBefore} strokeWidth={1.75} />
            </foreignObject>
            <text x={n.x} y={n.y + 27} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={10.5} fill={labelColor}>
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Nachher: Hub-and-Spoke Netzwerk, zeichnet sich beim Laden ein */}
      {AFTER_SPOKES.map((n, i) => {
        const length = Math.hypot(n.x - AFTER_HUB.x, n.y - AFTER_HUB.y);
        return (
          <line
            key={`edge-${n.label}`}
            x1={AFTER_HUB.x}
            y1={AFTER_HUB.y}
            x2={n.x}
            y2={n.y}
            stroke={accent}
            strokeWidth={2}
            opacity={0.6}
            strokeDasharray={length}
            strokeDashoffset={length}
          >
            <animate
              attributeName="stroke-dashoffset"
              from={length}
              to={0}
              dur="0.8s"
              begin={`${0.15 * i}s`}
              fill="freeze"
            />
          </line>
        );
      })}

      {/* Wissens-Impulse: laufen dauerhaft von jeder Datenquelle zum KI-Betriebssystem */}
      {AFTER_SPOKES.map((n, i) => (
        <circle key={`pulse-${n.label}`} r={3} fill={focus} opacity={0.85}>
          <animateMotion
            dur="2.4s"
            begin={`${1 + i * 0.35}s`}
            repeatCount="indefinite"
            path={`M${n.x},${n.y} L${AFTER_HUB.x},${AFTER_HUB.y}`}
          />
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="2.4s"
            begin={`${1 + i * 0.35}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {AFTER_SPOKES.map((n) => {
        const Icon = ICONS[n.label];
        return (
          <g key={`after-${n.label}`}>
            <circle cx={n.x} cy={n.y} r={12} fill="rgba(96,175,255,0.14)" stroke={accent} strokeWidth={1.8} filter="url(#wvnShadow)" />
            <foreignObject x={n.x - 7.5} y={n.y - 7.5} width={15} height={15}>
              <Icon size={15} color={accent} strokeWidth={1.9} />
            </foreignObject>
            <text x={n.x} y={n.y + n.labelDy} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={10.5} fontWeight={500} fill={labelColor}>
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Verbindung Hub zu Ingenieur: einzige Leitung nach außen, kein Direktzugriff auf Rohdaten.
          Läuft exakt senkrecht (x=519) durch die freie Schneise des Oktagons, kreuzt keine Spoke-Linie. */}
      {(() => {
        const length = Math.hypot(ENGINEER_NODE.x - AFTER_HUB.x, ENGINEER_NODE.y - AFTER_HUB.y);
        return (
          <line
            x1={AFTER_HUB.x}
            y1={AFTER_HUB.y}
            x2={ENGINEER_NODE.x}
            y2={ENGINEER_NODE.y}
            stroke={isDark ? 'rgba(255,255,255,0.55)' : '#071013'}
            strokeWidth={2.5}
            opacity={0.7}
            strokeDasharray={length}
            strokeDashoffset={length}
          >
            <animate attributeName="stroke-dashoffset" from={length} to={0} dur="0.8s" begin="1.2s" fill="freeze" />
          </line>
        );
      })()}
      {/* Antwort-Impuls: läuft dauerhaft vom KI-Betriebssystem zum Ingenieur, Gegenrichtung zu den Daten-Impulsen */}
      <circle r={3.5} fill={isDark ? '#ffffff' : '#071013'} opacity={0.85}>
        <animateMotion
          dur="2.4s"
          begin="2s"
          repeatCount="indefinite"
          path={`M${AFTER_HUB.x},${AFTER_HUB.y} L${ENGINEER_NODE.x},${ENGINEER_NODE.y}`}
        />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.4s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Ingenieur: einziger Zugang, verbunden über das KI-Betriebssystem statt direkt mit den Rohdaten.
          Deutlich abgesetzt vom Ring (siehe Kommentar bei ENGINEER_NODE), damit er als eigene Ebene liest. */}
      <circle cx={ENGINEER_NODE.x} cy={ENGINEER_NODE.y} r={14} fill={nodeFill} stroke={isDark ? 'rgba(255,255,255,0.6)' : '#071013'} strokeWidth={1.8} filter="url(#wvnShadow)" />
      <foreignObject x={ENGINEER_NODE.x - 8.5} y={ENGINEER_NODE.y - 8.5} width={17} height={17}>
        <UserCheck size={17} color={isDark ? '#ffffff' : '#071013'} strokeWidth={1.9} />
      </foreignObject>
      <text
        x={ENGINEER_NODE.x}
        y={ENGINEER_NODE.y + 30}
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontSize={11.5}
        fontWeight={700}
        fill={isDark ? '#ffffff' : '#071013'}
      >
        {ENGINEER_NODE.label}
      </text>

      {/* Radar-Ping: pulsierender Ring um das KI-Betriebssystem, signalisiert eingehende Synthese */}
      <circle cx={AFTER_HUB.x} cy={AFTER_HUB.y} r={16} fill="none" stroke={focus} strokeWidth={2}>
        <animate attributeName="r" values="16;28;16" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
      </circle>
      {/* Blickdichte Fuellung: verdeckt die acht im Zentrum zusammenlaufenden Linien vollstaendig */}
      <circle cx={AFTER_HUB.x} cy={AFTER_HUB.y} r={16} fill={isDark ? '#3d0a24' : '#fde7f3'} stroke={focus} strokeWidth={2.5} filter="url(#wvnShadow)" />
      <foreignObject x={AFTER_HUB.x - 8.5} y={AFTER_HUB.y - 8.5} width={17} height={17}>
        <BrainCircuit size={17} color={focus} strokeWidth={1.9} />
      </foreignObject>

      {/* Label-Chip oberhalb des Hubs: sitzt in der schmalen Lücke zwischen Hub und den beiden
          oberen Spokes (rechnerisch geprüft, min. 9px Abstand zu jedem Knoten), kreuzt keine Linie. */}
      <rect x={AFTER_HUB.x - 50} y={AFTER_HUB.y - 37} width={100} height={14} rx={6} fill={panelFill} />
      <text
        x={AFTER_HUB.x}
        y={AFTER_HUB.y - 26}
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontSize={10}
        fontWeight={700}
        fill={focus}
      >
        {AFTER_HUB.label}
      </text>
    </svg>
  );
}
