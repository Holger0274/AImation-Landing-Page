import React from 'react';

interface PineconeIconProps {
  size?: number;
  className?: string;
}

export const PineconeIcon: React.FC<PineconeIconProps> = ({
  size = 56,
  className = ''
}) => {
  return (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Simple Icons Pinecone logo */}
    <path
      d="M12 0L2.524 6v12L12 24l9.476-6V6L12 0zm0 2.5l7.976 5.05v9.9L12 22.5l-7.976-5.05v-9.9L12 2.5z"
      fill="#000000"
    />
    <path
      d="M12 5.5L8.5 7.75v4.5L12 14.5l3.5-2.25v-4.5L12 5.5z"
      fill="#000000"
    />
  </svg>
  );
};
