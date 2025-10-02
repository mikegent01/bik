import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-zinc-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;