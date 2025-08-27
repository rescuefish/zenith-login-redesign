import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LucideIcon, X } from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedContent: {
    overview: string;
    features: string[];
    benefits: string[];
  };
}

const FeatureModal = ({ 
  isOpen, 
  onClose, 
  onGetStarted, 
  icon: Icon, 
  title, 
  description, 
  detailedContent 
}: FeatureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[80vw] max-h-[80vh] overflow-y-auto bg-gradient-card border-border/50 backdrop-blur-xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-4 -right-4 h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-emerald rounded-xl flex items-center justify-center shadow-glow">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold text-foreground">{title}</DialogTitle>
              <p className="text-muted-foreground text-lg mt-2">{description}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{detailedContent.overview}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              {detailedContent.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-emerald rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
            <ul className="space-y-3">
              {detailedContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-emerald rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end mt-8 pt-6 border-t border-border/50">
          <Button 
            variant="premium" 
            size="lg"
            onClick={onGetStarted}
            className="px-8"
          >
            Get Started
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureModal;