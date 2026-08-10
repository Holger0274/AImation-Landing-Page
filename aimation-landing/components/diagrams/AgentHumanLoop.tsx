import { Inbox, Search, FileEdit, UserCheck, Archive, type LucideIcon } from 'lucide-react';

interface AgentHumanLoopProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const STEPS: { lines: string[]; icon: LucideIcon; focus?: boolean }[] = [
  { lines: ['Eingang'], icon: Inbox },
  { lines: ['Agent sammelt', 'Kontext'], icon: Search },
  { lines: ['Entwurf'], icon: FileEdit },
  { lines: ['Ingenieur', 'prüft'], icon: UserCheck, focus: true },
  { lines: ['Lessons', 'Learned'], icon: Archive },
];

const BOX_W = 116;
const BOX_H = 78;
const GAP = 34;
const Y = 26;

export default function AgentHumanLoop({ variant = 'light', className }: AgentHumanLoopProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.55)' : '#071013';
  const boxFill = isDark ? 'rgba(255,255,255,0.06)' : '#ffffff';
  const boxStroke = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(7,16,19,0.12)';
  const labelColor = isDark ? '#ffffff' : '#071013';
  const iconColor = isDark ? 'rgba(255,255,255,0.75)' : '#4b5563';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.12)';
  const focus = '#f90093';
  const accent = '#60AFFF';

  const svgWidth = STEPS.length * (BOX_W + GAP) - GAP;
  const svgHeight = Y + BOX_H + 20;
  const markerId = `agent-loop-arrow-${variant}`;
  const centerY = Y + BOX_H / 2;

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      role="img"
      aria-label="Agent mit Mensch in der Schleife: Eingang, Agent sammelt Kontext aus Ihren Systemen, Entwurf, Ingenieur prüft und gibt frei, Ablage in Lessons Learned"
    >
      <title>Agent mit Mensch in der Schleife</title>
      <defs>
        <marker id={markerId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={lineColor} />
        </marker>
        <filter id="ahlShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={shadowColor} />
        </filter>
      </defs>

      {/* Verbindungslinien: zeichnen sich beim Laden ein */}
      {STEPS.slice(0, -1).map((step, i) => {
        const x1 = i * (BOX_W + GAP) + BOX_W;
        const x2 = x1 + GAP;
        return (
          <line
            key={`edge-${step.lines.join(' ')}`}
            x1={x1}
            y1={centerY}
            x2={x2}
            y2={centerY}
            stroke={lineColor}
            strokeWidth={1.5}
            markerEnd={`url(#${markerId})`}
            strokeDasharray={GAP}
            strokeDashoffset={GAP}
          >
            <animate attributeName="stroke-dashoffset" from={GAP} to={0} dur="0.5s" begin={`${0.5 + i * 0.25}s`} fill="freeze" />
          </line>
        );
      })}

      {STEPS.map((step, i) => {
        const x = i * (BOX_W + GAP);
        const isFocus = Boolean(step.focus);
        const Icon = step.icon;
        const lineOffset = step.lines.length > 1 ? 6 : 8;

        return (
          <g key={step.lines.join(' ')}>
            <rect
              x={x}
              y={Y}
              width={BOX_W}
              height={BOX_H}
              rx={10}
              fill={isFocus ? 'rgba(249,0,147,0.06)' : boxFill}
              stroke={isFocus ? focus : boxStroke}
              strokeWidth={isFocus ? 2 : 1.3}
              filter="url(#ahlShadow)"
            />
            <foreignObject x={x + BOX_W / 2 - 10} y={Y + 12} width={20} height={20}>
              <Icon size={20} color={isFocus ? focus : accent} strokeWidth={1.8} />
            </foreignObject>
            <text
              x={x + BOX_W / 2}
              y={Y + 44 + lineOffset}
              textAnchor="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={600}
              fontSize={11}
              fill={isFocus ? focus : labelColor}
            >
              {step.lines.map((line, li) => (
                <tspan key={li} x={x + BOX_W / 2} dy={li === 0 ? 0 : 13}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* Durchlaufender Impuls: zeigt eine Anfrage, die die gesamte Kette durchläuft */}
      <circle r={4} fill={focus}>
        <animateMotion
          dur="4s"
          begin="1.8s"
          repeatCount="indefinite"
          path={`M6,${centerY} L${svgWidth - 6},${centerY}`}
        />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.92;1" dur="4s" begin="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
