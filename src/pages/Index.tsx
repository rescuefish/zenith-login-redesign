import React from 'react';
import { BarChart3, Users, Shield, TrendingUp } from 'lucide-react';
import Logo from '@/components/ui/logo';
import FeatureCard from '@/components/auth/feature-card';
import LoginForm from '@/components/auth/login-form';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 relative overflow-hidden">
        {/* Gradient Background Effects */}
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-emerald rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10" />
        
        <div className="relative z-10 max-w-2xl">
          {/* Header */}
          <div className="mb-12">
            <Logo size="lg" className="mb-6" />
            <p className="text-muted-foreground text-lg">
              Insights for your expenses.
            </p>
          </div>

          {/* Hero Content */}
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              Take control of your{' '}
              <span className="bg-gradient-emerald bg-clip-text text-transparent">
                financial future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Exight helps you understand and control your money effortlessly.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon={BarChart3}
              title="EMI Tracking"
              description="Track monthly EMIs and visualize spending patterns with smart reminders and notifications."
            />
            <FeatureCard
              icon={Users}
              title="Loan Management"
              description="Manage loans given to friends with person-wise history and comprehensive payment tracking."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Smart Insights"
              description="Get actionable insights and financial projections to plan your finances much better."
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Level Security"
              description="Your financial data stays protected with industry-standard bank-level security measures."
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
    </div>
  );
};

export default Index;