'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AuthorSection from '@/components/AuthorSection';
import AuthorEarningsCalculator from '@/components/AuthorEarningsCalculator';
import FinalCtaAndFooter from '@/components/FinalCtaAndFooter';
import FloatingBackgroundObjects from '@/components/FloatingBackgroundObjects';

export default function BookSphereLandingPage() {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFFDF9] text-[#0F172A] overflow-x-hidden">
      {/* Scroll-Reactive Floating Background Objects */}
      <FloatingBackgroundObjects />

      {/* Minimal Colourful Navbar Matching Reference */}
      <Navbar onExploreIdea={() => scrollToSection('#how-it-works')} />

      <main className="relative z-10 flex-1">
        {/* Hero Section Matching Reference Image */}
        <HeroSection
          onDiscoverBookSphere={() => scrollToSection('#how-it-works')}
          onImAnAuthor={() => scrollToSection('#for-authors')}
        />

        {/* How It Works (Discover, Preview, Read) */}
        <HowItWorksSection />

        {/* For Authors (Your Story. Your Price.) */}
        <AuthorSection />

        {/* Interactive 70/30 Author Earnings Calculator */}
        <AuthorEarningsCalculator />

        {/* Final Call to Action, Motivational Slogans Section & Minimal Footer */}
        <FinalCtaAndFooter
          onExploreBookSphere={() => scrollToSection('#top')}
          onStartJourney={() => scrollToSection('#for-authors')}
        />
      </main>
    </div>
  );
}
