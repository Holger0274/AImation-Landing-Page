/**
 * AnimatedCounter Komponente
 *
 * Zählt von 0 auf eine Zielzahl hoch, wenn die Komponente in den Viewport scrollt.
 *
 * Features:
 * - Smooth Animation mit Framer Motion
 * - Scroll-triggered (startet nur wenn sichtbar)
 * - Unterstützt Tausendertrennzeichen (z.B. 18,000)
 * - Unterstützt Prefix ($) und Suffix (+)
 * - Einmalige Animation (once: true)
 *
 * Beispiel-Nutzung:
 * <AnimatedCounter target={18000} suffix="+" duration={2.5} />
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  /** Die Zielzahl, bis zu der gezählt werden soll */
  target: number;

  /** Dauer der Animation in Sekunden (Standard: 2) */
  duration?: number;

  /** Text nach der Zahl (z.B. "+", "%") */
  suffix?: string;

  /** Text vor der Zahl (z.B. "$", "€") */
  prefix?: string;

  /** Tausendertrennzeichen verwenden? (Standard: true) */
  separator?: boolean;

  /** Anzahl Dezimalstellen (Standard: 0) */
  decimals?: number;

  /** CSS-Klassen für Styling */
  className?: string;

  /** Verzögerung vor Start der Animation in Sekunden (Standard: 0) */
  delay?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  separator = true,
  decimals = 0,
  className = '',
  delay = 0,
}) => {
  // Ref für das HTML-Element (um zu erkennen, wann es sichtbar ist)
  const ref = useRef<HTMLSpanElement>(null);

  // Motion Value: Der aktuelle Zählwert (startet bei 0)
  const motionValue = useMotionValue(0);

  // Spring: Macht die Animation smooth (nicht linear)
  const springValue = useSpring(motionValue, {
    damping: 30,        // Wie stark die Animation "gebremst" wird
    stiffness: 100,     // Wie "straff" die Feder ist
    duration: duration * 1000, // In Millisekunden
  });

  // Ist die Komponente im Viewport? (once: true = nur einmal triggern)
  const isInView = useInView(ref, {
    once: true,           // Animation nur einmal abspielen
    margin: '-100px'      // 100px bevor Element sichtbar ist, schon triggern
  });

  // Der angezeigte Wert (formatiert mit Tausendertrennzeichen, Prefix, Suffix)
  const [displayValue, setDisplayValue] = React.useState('0');

  // Effekt: Startet die Animation, wenn Komponente sichtbar wird
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(target); // Setze Ziel → Animation startet!
      }, delay * 1000);

      return () => clearTimeout(timeout); // Cleanup
    }
  }, [isInView, target, motionValue, delay]);

  // Effekt: Aktualisiert den angezeigten Wert während der Animation
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      // Aktuelle Zahl aus der Spring-Animation
      const value = latest.toFixed(decimals);
      const numericValue = parseFloat(value);

      // Formatierung (Dezimalstellen)
      let formatted = numericValue.toFixed(decimals);

      // Tausendertrennzeichen hinzufügen (18000 → 18,000)
      if (separator) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }

      // Prefix und Suffix anhängen
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    return () => unsubscribe(); // Cleanup
  }, [springValue, separator, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
