import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, className = '', onClick }: FeatureCardProps) => {
  return (
    <div 
      className={`group relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-emerald rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      
      <div className="relative bg-gradient-card rounded-xl p-6 border border-border/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-card-hover h-full">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-emerald rounded-lg flex items-center justify-center shadow-glow">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;