import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface/60 backdrop-blur-lg border border-border/20 shadow-glass ${className}`}>
      {children}
    </div>
  );
};

export const GlassContainer: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface border border-border backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
};
