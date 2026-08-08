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
  const stepFill = isDark ? 'rgba(255,255,255,0.08)' : '#eef0f2';
  const focus = '#f90093';

  const steps = [
    { label: PRICING.erstgespraech.label, price: PRICING.erstgespraech.price },
    { label: PRICING.kiLandkarte.label, price: `ab ${PRICING.kiLandkarte.priceFrom.toLocaleString('de-DE')} €` },
    { label: PRICING.pilot.label, price: `${PRICING.pilot.price.toLocaleString('de-DE')} €` },
    {
      label: PRICING.umsetzung.label,
      price: `${PRICING.umsetzung.setupFrom.toLocaleString('de-DE')}–${PRICING.umsetzung.setupTo.toLocaleString('de-DE')} €`,
    },
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
              rx={6}
              fill={isFocus ? 'rgba(249,0,147,0.1)' : stepFill}
              stroke={isFocus ? focus : lineColor}
              strokeWidth={isFocus ? 2 : 1}
            />
            <text
              x={x + STEP_WIDTH / 2}
              y={y - 12}
              textAnchor="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={700}
              fontSize={12}
              fill={isFocus ? focus : lineColor}
            >
              {step.label}
            </text>
            <text
              x={x + STEP_WIDTH / 2}
              y={BASE_Y + 22}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize={10.5}
              fill={mutedColor}
            >
              {step.price}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
