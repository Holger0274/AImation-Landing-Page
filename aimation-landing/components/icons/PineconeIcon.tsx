import React from 'react';

interface PineconeIconProps {
  size?: number;
  className?: string;
}

export const PineconeIcon: React.FC<PineconeIconProps> = ({
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
      {/* Pinecone Database Logo - Geometric Pine Cone */}
      <path
        d="M24 4L8 13V31L24 40L40 31V13L24 4Z"
        fill={`url(#pinecone-grad-outer-${id})`}
      />
      <path
        d="M24 4L8 13V31L24 40L40 31V13L24 4Z"
        stroke="#1A5F7A"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Inner hexagon */}
      <path
        d="M24 14L16 18.5V27.5L24 32L32 27.5V18.5L24 14Z"
        fill={`url(#pinecone-grad-inner-${id})`}
      />

      {/* Center dot */}
      <circle cx="24" cy="24" r="3" fill="#0DB3E3"/>

      <defs>
        <linearGradient
          id={`pinecone-grad-outer-${id}`}
          x1="8"
          y1="4"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A5F7A"/>
          <stop offset="1" stopColor="#0DB3E3"/>
        </linearGradient>
        <linearGradient
          id={`pinecone-grad-inner-${id}`}
          x1="16"
          y1="14"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0DB3E3"/>
          <stop offset="1" stopColor="#57C4E5"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
