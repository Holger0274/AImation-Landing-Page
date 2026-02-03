import React from 'react';

interface AirtableIconProps {
  size?: number;
  className?: string;
}

export const AirtableIcon: React.FC<AirtableIconProps> = ({
  size = 56,
  className = ''
}) => {
  return (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 170"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="#FCB400"
      d="M100.01 0L0 31.25v106.25L100.01 170l99.99-32.5V31.25L100.01 0z"
    />
    <path
      fill="#18BFFF"
      d="M100.01 0L0 31.25l100.01 32.5 99.99-32.5L100.01 0z"
    />
    <path
      fill="#F82B60"
      d="M99.99 63.75L0 95l99.99 32.5L200 95l-100.01-31.25z"
    />
  </svg>
  );
};
