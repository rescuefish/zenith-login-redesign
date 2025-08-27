import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  showText?: boolean;
  iconOnly?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  showText = true,
  iconOnly = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
  };

  return (
    <div className={`flex items-center -space-x-1 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          {/* Top bar */}
          <rect
            x="6"
            y="8"
            width="20"
            height="3"
            fill="url(#iconGradient)"
            opacity="0.3"
          />
          {/* Middle bar (shorter) */}
          <rect
            x="6"
            y="14"
            width="14"
            height="3"
            fill="url(#iconGradient)"
            opacity="0.6"
          />
          {/* Bottom bar */}
          <rect x="6" y="20" width="20" height="3" fill="url(#iconGradient)" />
        </svg>
      </div>

      {/* Text */}
      {showText && !iconOnly && (
        <span
          className={`font-semibold tracking-tight bg-gradient-to-r from-primary via-accent to-primary-emerald bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_200%] ${textSizes[size]}`}
        >
          Exight
        </span>
      )}
    </div>
  );
};

export default Logo;