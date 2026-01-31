/**
 * MouseGradient Komponente
 *
 * Erstellt einen interaktiven Gradient, der der Maus folgt.
 * Erzeugt ein "Spotlight"-Effekt, der sich mit dem Cursor bewegt.
 *
 * Features:
 * - Smooth mouse tracking
 * - Radial gradient mit Magenta
 * - Blend-Mode für subtile Integration
 * - Performance-optimiert mit requestAnimationFrame
 *
 * Beispiel:
 * <MouseGradient intensity={0.3} size={600} />
 */

'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MouseGradientProps {
  /** Intensität des Gradients (0-1, Standard: 0.2) */
  intensity?: number;

  /** Größe des Gradient-Kreises in Pixel (Standard: 600) */
  size?: number;

  /** Primäre Farbe (Magenta) */
  color?: string;
}

export const MouseGradient: React.FC<MouseGradientProps> = ({
  intensity = 0.2,
  size = 600,
  color = '#f90093', // Magenta
}) => {
  // Motion values für smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics für smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y),
          ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')},
          transparent 80%)`,
        // @ts-ignore - CSS variables
        '--mouse-x': x,
        '--mouse-y': y,
      }}
    />
  );
};

export default MouseGradient;
