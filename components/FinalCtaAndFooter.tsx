'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import MotivationalSlogansSection from './MotivationalSlogansSection';

interface FinalCtaAndFooterProps {
  onExploreBookSphere: () => void;
  onStartJourney: () => void;
}

export default function FinalCtaAndFooter({
  onExploreBookSphere,
  onStartJourney,
}: FinalCtaAndFooterProps) {
  return (
    <>
      {/* Final Call to Action Banner with Framer Motion Scroll Reveal */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#6D28D9] px-6 py-14 text-center text-white shadow-[0_24px_60px_-15px_rgba(124,58,237,0.4)] sm:px-12 sm:py-20">
            {/* Animated Floating Decorative Shapes Inside Banner */}
            <motion.div
              animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#FF6B6B]/35"
            />
            <motion.div
              animate={{ y: [0, 12, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-[#38BDF8]/35"
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-editorial text-3xl font-bold tracking-tight text-white sm:text-5xl text-balance">
                Every Book Has a World. Find Yours.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                BookSphere brings stories, knowledge, authors, and readers
                together.
              </p>

              <div className="mt-8">
                <motion.button
                  type="button"
                  onClick={onExploreBookSphere}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FACC15] px-8 py-4 text-sm font-bold text-[#0F172A] shadow-md transition-colors hover:bg-[#FDE047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
                >
                  <span>Explore BookSphere</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Motivational Slogans Section Directly Above Footer */}
      <MotivationalSlogansSection onStartJourney={onStartJourney} />

      {/* Minimal Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-t border-slate-200/70 bg-[#FFFDF9]/90 py-10 backdrop-blur-xs"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 font-editorial text-lg font-bold"
            >
              <span className="flex h-8 w-8 -rotate-3 items-center justify-center rounded-xl bg-gradient-to-br from-[#9333EA] to-[#6D28D9] text-white shadow-xs">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="text-[#0F172A]">Book</span>
                <span className="text-[#8B5CF6]">Sphere</span>
              </span>
            </a>
            <span
              aria-hidden="true"
              className="hidden text-slate-300 sm:inline"
            >
              ·
            </span>
            <p className="text-sm font-medium text-[#475569]">
              Connecting stories with readers.
            </p>
          </div>

          <p className="text-xs font-medium text-[#64748B]">
            © 2026 BookSphere. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </>
  );
}
