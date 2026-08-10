import { Mic, Wand2, FileText, UserCheck, ClipboardCheck, type LucideIcon } from 'lucide-react';

interface TranscriptToProcessProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const STEPS: { lines: string[]; icon: LucideIcon; badge?: string; focus?: boolean }[] = [
  { lines: ['Gespräch', 'aufnehmen'], icon: Mic },
  { lines: ['KI strukturiert', 'das Transkript'], icon: Wand2 },
  { lines: ['Entwurf'], icon: FileText, badge: '≈80%' },
  { lines: ['Interview', 'schließt Lücken'], icon: UserCheck, focus: true },
  { lines: ['Fertiger', 'Prozess'], icon: ClipboardCheck },
];

const BOX_W = 116;
const BOX_H = 78;
const GAP = 34;
const Y = 30;

export default function TranscriptToProcess({ variant = 'light', className }: TranscriptToProcessProps) {
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
  const svgHeight = Y + BOX_H + 22;
  const markerId = `transcript-process-arrow-${variant}`;
  const centerY = Y + BOX_H / 2;

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      role="img"
      aria-label="Vom Gespräch zum Prozess: Gespräch aufnehmen, KI strukturiert das Transkript, Entwurf mit rund 80 Prozent Abdeckung, Interview schließt die Lücken, fertiger Prozess"
    >
      <title>Vom Gespräch zum fertigen Prozess</title>
      <defs>
        <marker id={markerId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={lineColor} />
        </marker>
        <filter id="ttpShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={shadowColor} />
        </filter>
      </defs>

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
              filter="url(#ttpShadow)"
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
            {step.badge && (
              <>
                <rect x={x + BOX_W / 2 - 22} y={Y - 12} width={44} height={18} rx={9} fill={focus} />
                <text
                  x={x + BOX_W / 2}
                  y={Y - 12 + 13}
                  textAnchor="middle"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight={700}
                  fontSize={10.5}
                  fill="#ffffff"
                >
                  {step.badge}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Durchlaufender Impuls */}
      <circle r={4} fill={focus}>
        <animateMotion
          dur="4.2s"
          begin="1.8s"
          repeatCount="indefinite"
          path={`M6,${centerY} L${svgWidth - 6},${centerY}`}
        />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.92;1" dur="4.2s" begin="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
