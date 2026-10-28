'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS, HowItWorksStep } from '@/lib/books-data';
import { BookOpen, Compass, Eye } from 'lucide-react';

export default function HowItWorksSection() {
  const [activeStepId, setActiveStepId] =
    useState<HowItWorksStep['id']>('preview');

  const getStepIcon = (id: HowItWorksStep['id']) => {
    if (id === 'discover') return Compass;
    if (id === 'preview') return Eye;
    return BookOpen;
  };

  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#DDD6FE] bg-[#F3E8FF]/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#7C3AED]">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 font-editorial text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl text-balance">
            Three Simple Steps from Discovery to Reading
          </h2>
        </div>

        {/* Three Colourful Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = getStepIcon(step.id);
            const isSelected = activeStepId === step.id;

            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActiveStepId(step.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 360, damping: 18 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`group cursor-pointer flex flex-col justify-between rounded-3xl border-2 p-7 text-left transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] ${
                  isSelected
                    ? 'shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)]'
                    : 'shadow-xs hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.1)]'
                }`}
                style={{
                  backgroundColor: step.colorTheme.cardBg,
                  borderColor: isSelected
                    ? step.colorTheme.iconBg
                    : step.colorTheme.border,
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                      style={{
                        backgroundColor: step.colorTheme.iconBg,
                        color: step.colorTheme.iconText,
                      }}
                    >
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </motion.span>

                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: step.colorTheme.badgeText }}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="mt-6 font-editorial text-2xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-base font-medium leading-relaxed text-[#334155]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-900/10 pt-3">
                  <p className="text-xs font-semibold text-[#475569]">
                    {step.conceptTakeaway}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
