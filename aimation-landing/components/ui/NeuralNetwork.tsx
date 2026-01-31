/**
 * NeuralNetwork Komponente
 *
 * Erstellt ein animiertes neuronales Netzwerk mit Canvas.
 * Partikel bewegen sich organisch und verbinden sich, wenn sie nahe beieinander sind.
 *
 * Features:
 * - Canvas-basiert (Performance!)
 * - Mouse-Interaktion (Partikel reagieren auf Cursor)
 * - Verbindungslinien zwischen nahen Partikeln
 * - Magenta-Farbschema
 * - Responsive (passt sich an Bildschirmgröße an)
 *
 * Beispiel:
 * <NeuralNetwork particleCount={50} connectionDistance={150} />
 */

'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface NeuralNetworkProps {
  /** Anzahl der Partikel (Standard: 50) */
  particleCount?: number;

  /** Maximale Distanz für Verbindungen in Pixel (Standard: 150) */
  connectionDistance?: number;

  /** Partikelgröße (Standard: 2) */
  particleSize?: number;

  /** Bewegungsgeschwindigkeit (Standard: 0.5) */
  speed?: number;

  /** Magenta-Farbe (Design System) */
  color?: string;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  particleCount = 50,
  connectionDistance = 150,
  particleSize = 2,
  speed = 0.5,
  color = '#f90093', // Magenta aus Design System
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas-Größe an Fenster anpassen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partikel initialisieren
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: particleSize,
        });
      }
    };
    initParticles();

    // Maus-Position tracken
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animationsschleife
    const animate = () => {
      // Canvas leeren (mit leichtem Fade-Effekt für Trails)
      ctx.fillStyle = 'rgba(250, 249, 247, 0.1)'; // Warm White mit Transparenz
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Partikel aktualisieren und zeichnen
      particles.forEach((particle, i) => {
        // Bewegung
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce an Wänden
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Maus-Interaktion: Partikel werden von Maus angezogen
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.03;
          particle.vy += (dy / distance) * force * 0.03;
        }

        // Geschwindigkeit begrenzen
        const maxSpeed = speed * 2;
        const currentSpeed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (currentSpeed > maxSpeed) {
          particle.vx = (particle.vx / currentSpeed) * maxSpeed;
          particle.vy = (particle.vy / currentSpeed) * maxSpeed;
        }

        // Verbindungen zu nahen Partikeln zeichnen
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Linien-Opacity abhängig von Distanz
            const opacity = (1 - dist / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(249, 0, 147, ${opacity})`; // Magenta
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        // Partikel zeichnen (mit Glow-Effekt)
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, connectionDistance, particleSize, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default NeuralNetwork;
