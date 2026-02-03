'use client';

import { PlaceholderType } from './types';
import { SOLUTION_WORLD_COLORS, SolutionWorld } from './types';

interface ImagePlaceholderProps {
  type: PlaceholderType;
  solutionWorld: SolutionWorld;
  alt: string;
}

export default function ImagePlaceholder({ type, solutionWorld, alt }: ImagePlaceholderProps) {
  const accentColor = SOLUTION_WORLD_COLORS[solutionWorld];

  if (type === 'n8n') {
    return (
      <div className="relative w-full h-full bg-[#1a1a2e] rounded-lg overflow-hidden">
        {/* n8n-style workflow */}
        <svg
          className="w-full h-full p-8"
          viewBox="0 0 400 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={alt}
        >
          {/* Connection lines */}
          <line x1="100" y1="80" x2="180" y2="80" stroke="#374151" strokeWidth="2" />
          <line x1="220" y1="80" x2="300" y2="80" stroke="#374151" strokeWidth="2" />
          <line x1="200" y1="100" x2="200" y2="140" stroke="#374151" strokeWidth="2" />

          {/* Node 1 */}
          <rect x="60" y="60" width="40" height="40" rx="8" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="80" cy="80" r="4" fill="#60a5fa" />

          {/* Node 2 (Accent) */}
          <rect x="180" y="60" width="40" height="40" rx="8" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="2" />
          <circle cx="200" cy="80" r="4" fill={accentColor} />

          {/* Node 3 */}
          <rect x="300" y="60" width="40" height="40" rx="8" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="320" cy="80" r="4" fill="#60a5fa" />

          {/* Node 4 (Bottom) */}
          <rect x="180" y="140" width="40" height="40" rx="8" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="200" cy="160" r="4" fill="#60a5fa" />

          {/* Label */}
          <text x="200" y="210" textAnchor="middle" fill="#9ca3af" fontSize="12" fontFamily="Inter, sans-serif">
            n8n Workflow
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'excalidraw') {
    return (
      <div className="relative w-full h-full bg-[#fffce8] rounded-lg overflow-hidden">
        {/* Excalidraw-style diagram */}
        <svg
          className="w-full h-full p-8"
          viewBox="0 0 400 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={alt}
        >
          {/* Hand-drawn style boxes */}
          <path
            d="M 60 50 L 140 52 L 138 100 L 62 98 Z"
            stroke="#4b5563"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 260 48 L 340 50 L 342 98 L 258 100 Z"
            stroke={accentColor}
            strokeWidth="2"
            fill={accentColor}
            fillOpacity="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Arrow */}
          <path
            d="M 145 75 L 250 73"
            stroke="#4b5563"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
            </marker>
          </defs>

          {/* Bottom boxes */}
          <path
            d="M 60 140 L 140 138 L 142 186 L 58 188 Z"
            stroke="#4b5563"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 260 142 L 340 140 L 338 188 L 262 186 Z"
            stroke="#4b5563"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Connecting lines */}
          <path d="M 100 105 L 102 135" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
          <path d="M 300 105 L 298 135" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />

          {/* Label */}
          <text x="200" y="215" textAnchor="middle" fill="#6b7280" fontSize="12" fontFamily="Inter, sans-serif">
            Prozess-Diagramm
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'screenshot') {
    return (
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden border border-gray-200">
        {/* Screenshot-style UI mockup */}
        <div className="p-4">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* URL bar */}
          <div className="h-6 bg-gray-100 rounded mb-6" />

          {/* Content area */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded" />
              <div className="h-3 bg-gray-100 rounded w-5/6" />
              <div className="h-3 bg-gray-100 rounded w-4/6" />
            </div>

            {/* Accent element */}
            <div
              className="h-10 rounded"
              style={{ backgroundColor: accentColor, opacity: 0.2 }}
            />
          </div>
        </div>

        {/* Label */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-xs text-gray-500 font-inter">UI Screenshot</span>
        </div>
      </div>
    );
  }

  if (type === 'diagram') {
    return (
      <div className="relative w-full h-full bg-gray-50 rounded-lg overflow-hidden">
        {/* Architecture diagram */}
        <svg
          className="w-full h-full p-8"
          viewBox="0 0 400 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={alt}
        >
          {/* Top input box */}
          <rect x="170" y="30" width="60" height="30" rx="4" fill="white" stroke="#6b7280" strokeWidth="1.5" />
          <text x="200" y="50" textAnchor="middle" fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">
            Input
          </text>

          {/* Vertical line */}
          <line x1="200" y1="60" x2="200" y2="90" stroke="#6b7280" strokeWidth="1.5" />

          {/* Split lines */}
          <line x1="200" y1="90" x2="100" y2="120" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="200" y2="120" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="300" y2="120" stroke="#6b7280" strokeWidth="1.5" />

          {/* Bottom boxes */}
          <rect x="70" y="120" width="60" height="30" rx="4" fill="white" stroke="#6b7280" strokeWidth="1.5" />
          <text x="100" y="140" textAnchor="middle" fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">
            A
          </text>

          <rect
            x="170"
            y="120"
            width="60"
            height="30"
            rx="4"
            fill={accentColor}
            fillOpacity="0.1"
            stroke={accentColor}
            strokeWidth="1.5"
          />
          <text x="200" y="140" textAnchor="middle" fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">
            B
          </text>

          <rect x="270" y="120" width="60" height="30" rx="4" fill="white" stroke="#6b7280" strokeWidth="1.5" />
          <text x="300" y="140" textAnchor="middle" fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">
            C
          </text>

          {/* Bottom lines to output */}
          <line x1="100" y1="150" x2="100" y2="170" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="200" y1="150" x2="200" y2="170" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="300" y1="150" x2="300" y2="170" stroke="#6b7280" strokeWidth="1.5" />

          <line x1="100" y1="170" x2="200" y2="170" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="300" y1="170" x2="200" y2="170" stroke="#6b7280" strokeWidth="1.5" />

          {/* Label */}
          <text x="200" y="210" textAnchor="middle" fill="#6b7280" fontSize="12" fontFamily="Inter, sans-serif">
            Architektur-Diagramm
          </text>
        </svg>
      </div>
    );
  }

  return null;
}
