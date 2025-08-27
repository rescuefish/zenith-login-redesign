import React, { useState } from 'react';
import { BarChart3, Users, Shield, TrendingUp } from 'lucide-react';
import Logo from '@/components/ui/logo';
import FeatureCard from '@/components/auth/feature-card';
import LoginForm from '@/components/auth/login-form';
import FeatureModal from '@/components/auth/feature-modal';
import ThemeToggle from '@/components/ui/theme-toggle';

const Index = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const featureDetails = {
    'EMI Tracking': {
      overview: 'Transform how you manage your monthly EMIs with intelligent tracking and smart insights. Our advanced system helps you stay on top of all your installments while providing valuable analytics.',
      features: [
        'Automated EMI reminder notifications with customizable timing',
        'Visual spending pattern analysis with interactive charts',
        'Integration with multiple bank accounts and payment methods',
        'Predictive analytics for better financial planning',
        'Categorized expense tracking across different loan types',
        'Monthly and yearly EMI summaries with detailed breakdowns'
      ],
      benefits: [
        'Never miss an EMI payment again',
        'Understand your spending patterns better',
        'Optimize your payment schedules',
        'Reduce financial stress with automated tracking',
        'Make informed decisions about future loans'
      ]
    },
    'Loan Management': {
      overview: 'Keep track of money lent to friends and family with comprehensive loan management tools. Build trust and maintain relationships while ensuring financial transparency.',
      features: [
        'Person-wise loan history with detailed records',
        'Automated payment reminders for borrowers',
        'Digital loan agreements and documentation',
        'Interest calculation and tracking capabilities',
        'Payment milestone tracking and notifications',
        'Secure communication platform for loan discussions'
      ],
      benefits: [
        'Maintain healthy relationships while managing money',
        'Clear documentation prevents disputes',
        'Automated tracking saves time and effort',
        'Build a trustworthy lending reputation',
        'Reduce awkward money conversations'
      ]
    },
    'Smart Insights': {
      overview: 'Leverage AI-powered analytics to gain deep insights into your financial behavior and receive personalized recommendations for better money management.',
      features: [
        'AI-powered spending analysis and categorization',
        'Personalized financial recommendations',
        'Predictive cash flow forecasting',
        'Goal-based savings planning and tracking',
        'Investment opportunity identification',
        'Risk assessment and mitigation strategies'
      ],
      benefits: [
        'Make data-driven financial decisions',
        'Identify hidden spending patterns',
        'Optimize your financial strategy',
        'Achieve financial goals faster',
        'Reduce financial risks and uncertainties'
      ]
    },
    'Bank-Level Security': {
      overview: 'Your financial data is protected with enterprise-grade security measures that meet and exceed banking industry standards, ensuring complete privacy and protection.',
      features: [
        'AES-256 encryption for all data transmission',
        'Multi-factor authentication with biometric support',
        'Regular security audits and compliance checks',
        '24/7 fraud monitoring and detection systems',
        'Secure API integrations with bank-level protocols',
        'Data anonymization and privacy protection'
      ],
      benefits: [
        'Complete peace of mind with your data',
        'Protection against fraud and identity theft',
        'Compliance with international security standards',
        'Secure integration with financial institutions',
        'Privacy-first approach to data handling'
      ]
    }
  };

  const handleFeatureClick = (title: string) => {
    setSelectedFeature(title);
  };

  const handleGetStarted = () => {
    setSelectedFeature(null);
    setShowLoginForm(true);
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Left Panel - Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 relative overflow-hidden">
        {/* Gradient Background Effects */}
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-emerald rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10" />
        
        <div className="relative z-10 max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <Logo size="lg" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Insights for your expenses.
            </p>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Take control of your{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary-emerald bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_200%]">
                financial future
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Exight helps you understand and control your money effortlessly.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FeatureCard
              icon={BarChart3}
              title="EMI Tracking"
              description="Track monthly EMIs and visualize spending patterns with smart reminders and notifications."
              onClick={() => handleFeatureClick('EMI Tracking')}
            />
            <FeatureCard
              icon={Users}
              title="Loan Management"
              description="Manage loans given to friends with person-wise history and comprehensive payment tracking."
              onClick={() => handleFeatureClick('Loan Management')}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Smart Insights"
              description="Get actionable insights and financial projections to plan your finances much better."
              onClick={() => handleFeatureClick('Smart Insights')}
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Level Security"
              description="Your financial data stays protected with industry-standard bank-level security measures."
              onClick={() => handleFeatureClick('Bank-Level Security')}
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-[480px] xl:w-[520px] flex items-center justify-center p-8 bg-background-secondary relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-emerald rounded-full blur-3xl opacity-20" />
        
        <div className="relative z-10 w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Feature Modals */}
      {selectedFeature && featureDetails[selectedFeature as keyof typeof featureDetails] && (
        <FeatureModal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          onGetStarted={handleGetStarted}
          icon={
            selectedFeature === 'EMI Tracking' ? BarChart3 :
            selectedFeature === 'Loan Management' ? Users :
            selectedFeature === 'Smart Insights' ? TrendingUp :
            Shield
          }
          title={selectedFeature}
          description={
            selectedFeature === 'EMI Tracking' ? "Track monthly EMIs and visualize spending patterns with smart reminders and notifications." :
            selectedFeature === 'Loan Management' ? "Manage loans given to friends with person-wise history and comprehensive payment tracking." :
            selectedFeature === 'Smart Insights' ? "Get actionable insights and financial projections to plan your finances much better." :
            "Your financial data stays protected with industry-standard bank-level security measures."
          }
          detailedContent={featureDetails[selectedFeature as keyof typeof featureDetails]}
        />
      )}
    </div>
  );
};

export default Index;