'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Feather, Heart, Sparkles, Star } from 'lucide-react';

interface MotivationalSlogansSectionProps {
  onStartJourney: () => void;
}

export default function MotivationalSlogansSection({
  onStartJourney,
}: MotivationalSlogansSectionProps) {
  const slogans = [
    {
      id: 'slogan-1',
      cardBg: '#F5F3FF',
      borderColor: '#DDD6FE',
      iconBg: '#8B5CF6',
      icon: Sparkles,
      renderText: () => (
        <>
          “Your <span className="text-[#8B5CF6]">Words Have Power</span>. Your
          Story Deserves to Be Read.”
        </>
      ),
    },
    {
      id: 'slogan-2',
      cardBg: '#FFF7ED',
      borderColor: '#FED7AA',
      iconBg: '#F97316',
      icon: Feather,
      renderText: () => (
        <>
          “Write Your Dreams.{' '}
          <span className="text-[#F97316]">Publish Your Passion</span>. Inspire
          the World.”
        </>
      ),
    },
    {
      id: 'slogan-3',
      cardBg: '#F0F9FF',
      borderColor: '#BAE6FD',
      iconBg: '#0EA5E9',
      icon: Star,
      renderText: () => (
        <>
          “Every Author Starts with a{' '}
          <span className="text-[#0EA5E9]">Single Page</span>.”
        </>
      ),
    },
    {
      id: 'slogan-4',
      cardBg: '#FDF2F8',
      borderColor: '#FBCFE8',
      iconBg: '#EC4899',
      icon: Heart,
      renderText: () => (
        <>
          “Turn Your Imagination into{' '}
          <span className="text-[#EC4899]">Stories That Connect Hearts</span>.”
        </>
      ),
    },
  ];

  return (
    <motion.section
      id="motivational-slogans"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#FBCFE8] bg-[#FDF2F8] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#DB2777]">
            FOR CREATORS &amp; STORYTELLERS
          </span>
          <h2 className="mt-4 font-editorial text-3xl font-bold tracking-tight text-[#0F172A] sm:text-5xl text-balance">
            Every Great Story Starts Somewhere.
          </h2>
        </div>

        {/* Four Motivational Slogans Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {slogans.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                className="flex flex-col justify-between rounded-3xl border-2 p-7 shadow-xs sm:p-8"
                style={{
                  backgroundColor: item.cardBg,
                  borderColor: item.borderColor,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-xs"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <blockquote className="mt-6 font-editorial text-2xl font-bold leading-snug text-[#0F172A] sm:text-[26px] text-balance">
                  {item.renderText()}
                </blockquote>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Message & Colourful CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="font-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
            Your story matters. The world is waiting to read it.
          </p>

          <div className="mt-6">
            <motion.button
              type="button"
              onClick={onStartJourney}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="cursor-pointer inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] px-8 py-4 text-base font-bold text-white shadow-[0_14px_30px_-6px_rgba(236,72,153,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] whitespace-nowrap shrink-0"
            >
              <span>Start Your BookSphere Journey</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
