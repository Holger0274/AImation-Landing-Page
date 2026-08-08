interface AgentHumanLoopProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const STEPS: { lines: string[]; focus?: boolean }[] = [
  { lines: ['Eingang'] },
  { lines: ['Agent sammelt', 'Kontext'] },
  { lines: ['Entwurf'] },
  { lines: ['Ingenieur', 'prüft'], focus: true },
  { lines: ['Lessons', 'Learned'] },
];

const BOX_W = 104;
const BOX_H = 56;
const GAP = 22;
const Y = 20;

export default function AgentHumanLoop({ variant = 'light', className }: AgentHumanLoopProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.65)' : '#071013';
  const boxFill = isDark ? 'rgba(255,255,255,0.06)' : '#ffffff';
  const boxStroke = isDark ? 'rgba(255,255,255,0.35)' : '#d1d5db';
  const labelColor = isDark ? '#ffffff' : '#071013';
  const focus = '#f90093';

  const svgWidth = STEPS.length * (BOX_W + GAP) - GAP;
  const svgHeight = 96;
  const markerId = `agent-loop-arrow-${variant}`;

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
      </defs>
      {STEPS.map((step, i) => {
        const x = i * (BOX_W + GAP);
        const isFocus = Boolean(step.focus);
        const lineOffset = step.lines.length > 1 ? -6 : 4;

        return (
          <g key={step.lines.join(' ')}>
            <rect
              x={x}
              y={Y}
              width={BOX_W}
              height={BOX_H}
              rx={8}
              fill={isFocus ? 'rgba(249,0,147,0.1)' : boxFill}
              stroke={isFocus ? focus : boxStroke}
              strokeWidth={isFocus ? 2 : 1.2}
            />
            <text
              x={x + BOX_W / 2}
              y={Y + BOX_H / 2 + lineOffset}
              textAnchor="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={600}
              fontSize={10.5}
              fill={isFocus ? focus : labelColor}
            >
              {step.lines.map((line, li) => (
                <tspan key={li} x={x + BOX_W / 2} dy={li === 0 ? 0 : 13}>
                  {line}
                </tspan>
              ))}
            </text>
            {i < STEPS.length - 1 && (
              <line
                x1={x + BOX_W}
                y1={Y + BOX_H / 2}
                x2={x + BOX_W + GAP}
                y2={Y + BOX_H / 2}
                stroke={lineColor}
                strokeWidth={1.5}
                markerEnd={`url(#${markerId})`}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
