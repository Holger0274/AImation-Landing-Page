import React from 'react';

interface NotebookLMIconProps {
  size?: number;
  className?: string;
}

export const NotebookLMIcon: React.FC<NotebookLMIconProps> = ({
  size = 56,
  className = ''
}) => {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Google NotebookLM - Notebook with AI sparkle */}
      <rect
        x="8"
        y="6"
        width="32"
        height="36"
        rx="2"
        fill={`url(#notebooklm-grad-${id})`}
      />

      {/* Notebook lines */}
      <line x1="14" y1="16" x2="34" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
      <line x1="14" y1="21" x2="30" y2="21" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
      <line x1="14" y1="26" x2="32" y2="26" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
      <line x1="14" y1="31" x2="28" y2="31" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>

      {/* AI Sparkle */}
      <path
        d="M36 10L37 13L40 14L37 15L36 18L35 15L32 14L35 13L36 10Z"
        fill="#FBBC04"
      />
      <path
        d="M30 34L30.5 35.5L32 36L30.5 36.5L30 38L29.5 36.5L28 36L29.5 35.5L30 34Z"
        fill="#EA4335"
      />

      <defs>
        <linearGradient
          id={`notebooklm-grad-${id}`}
          x1="8"
          y1="6"
          x2="40"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4285F4"/>
          <stop offset="0.5" stopColor="#34A853"/>
          <stop offset="1" stopColor="#FBBC04"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
