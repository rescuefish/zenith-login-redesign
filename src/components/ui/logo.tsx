import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-emerald rounded-lg shadow-glow" />
        <div className="relative bg-background rounded-md p-1.5 m-0.5">
          <span className={`font-bold bg-gradient-emerald bg-clip-text text-transparent ${textSizeClasses[size]}`}>
            E
          </span>
        </div>
      </div>
      <span className={`font-semibold tracking-tight text-foreground ${textSizeClasses[size]}`}>
        Exight
      </span>
    </div>
  );
};

export default Logo;