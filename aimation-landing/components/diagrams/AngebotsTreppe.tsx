import { PRICING } from '@/lib/data/pricing';

interface AngebotsTreppeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const STEP_WIDTH = 100;
const GAP = 18;
const BASE_Y = 196;
const HEIGHTS = [40, 74, 108, 142, 176];

export default function AngebotsTreppe({ variant = 'light', className }: AngebotsTreppeProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(255,255,255,0.85)' : '#071013';
  const mutedColor = isDark ? 'rgba(255,255,255,0.55)' : '#6b7280';
  const shadowColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(7,16,19,0.14)';
  const baselineColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(7,16,19,0.1)';
  const focus = '#f90093';

  const steps = [
    { label: PRICING.erstgespraech.label, price: PRICING.erstgespraech.price },
    { label: PRICING.kiLandkarte.label, price: `ab ${PRICING.kiLandkarte.priceFrom.toLocaleString('de-DE')} €` },
    { label: PRICING.pilot.label, price: `${PRICING.pilot.price.toLocaleString('de-DE')} €` },
    { label: PRICING.umsetzung.label, price: 'nach Aufwand' },
    { label: PRICING.begleitung.label, price: 'nach Aufwand' },
  ];

  const svgWidth = steps.length * (STEP_WIDTH + GAP) - GAP;
  const svgHeight = 236;

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      role="img"
      aria-label="Angebots-Treppe: fünf Stufen von Erstgespräch bis Begleitung, mit Fokus auf die KI-Landkarte als Einstiegspunkt"
    >
      <title>Angebots-Treppe: von Erstgespräch bis Begleitung</title>
      <defs>
        <linearGradient id="treppeStepFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? 'rgba(255,255,255,0.10)' : '#f6f7f8'} />
          <stop offset="100%" stopColor={isDark ? 'rgba(255,255,255,0.04)' : '#e7e9eb'} />
        </linearGradient>
        <linearGradient id="treppeFocusFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(249,0,147,0.16)" />
          <stop offset="100%" stopColor="rgba(255,78,205,0.10)" />
        </linearGradient>
        <filter id="treppeShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor={shadowColor} />
        </filter>
        {isDark && (
          <filter id="treppeFocusGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={focus} floodOpacity="0.6" />
          </filter>
        )}
      </defs>
      <line x1={0} y1={BASE_Y} x2={svgWidth} y2={BASE_Y} stroke={baselineColor} strokeWidth={1} />
      {steps.map((step, i) => {
        const x = i * (STEP_WIDTH + GAP);
        const h = HEIGHTS[i];
        const y = BASE_Y - h;
        const isFocus = i === 1;
        return (
          <g key={step.label}>
            <rect
              x={x}
              y={y}
              width={STEP_WIDTH}
              height={h}
              rx={10}
              fill={isFocus ? 'url(#treppeFocusFill)' : 'url(#treppeStepFill)'}
              stroke={isFocus ? focus : lineColor}
              strokeWidth={isFocus ? 2 : 1}
              filter="url(#treppeShadow)"
            />
            {isFocus && (
              <circle
                cx={x + STEP_WIDTH - 10}
                cy={y + 10}
                r={4}
                fill={focus}
                stroke={isDark ? 'none' : '#ffffff'}
                strokeWidth={isDark ? 0 : 2}
                filter={isDark ? 'url(#treppeFocusGlow)' : undefined}
              />
            )}
            <text
              x={x + STEP_WIDTH / 2}
              y={y - 12}
              textAnchor="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={700}
              fontSize={isFocus ? 12.5 : 12}
              fill={isFocus ? focus : lineColor}
            >
              {step.label}
            </text>
            <text
              x={x + STEP_WIDTH / 2}
              y={BASE_Y + 22}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontWeight={isFocus ? 700 : 500}
              fontSize={10.5}
              fill={isFocus ? focus : mutedColor}
            >
              {step.price}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
