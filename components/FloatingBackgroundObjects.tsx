'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function FloatingBackgroundObjects() {
  const { scrollYProgress } = useScroll();

  // Parallax vertical & rotational transforms driven by page scroll
  const ySlowUp = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yMediumDown = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFastUp = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const rotateCounter = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-Left Soft Lavender Ambient Glow */}
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#E9D5FF]/35 blur-3xl" />

      {/* Right-Center Warm Peach Ambient Glow */}
      <div className="absolute top-1/4 -right-24 h-[460px] w-[460px] rounded-full bg-[#FED7AA]/35 blur-3xl" />

      {/* Bottom-Left Soft Sky Blue Glow */}
      <div className="absolute bottom-10 left-1/4 h-[380px] w-[380px] rounded-full bg-[#BAE6FD]/30 blur-3xl" />

      {/* Parallax Floating Rounded Pink Square (Top Left-Center) */}
      <motion.div
        style={{ y: yMediumDown, rotate: rotateClockwise }}
        className="absolute top-[18%] left-[6%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-9 rounded-xl border border-white/80 bg-[#F9A8D4]/45 shadow-xs backdrop-blur-xs"
        />
      </motion.div>

      {/* Parallax Floating Golden Star / Diamond (Upper Center) */}
      <motion.div
        style={{ y: ySlowUp, rotate: rotateCounter }}
        className="absolute top-[13%] left-[44%] hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-5 w-5 rotate-45 rounded-md bg-[#FBBF24]/50"
        />
      </motion.div>

      {/* Parallax Floating Sky Blue Ring (Mid-Left Viewport) */}
      <motion.div
        style={{ y: yFastUp }}
        className="absolute top-[54%] left-[4%] hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-12 w-12 rounded-full border-4 border-[#38BDF8]/35 bg-white/30"
        />
      </motion.div>

      {/* Parallax Floating Mini Book Leaf (Mid-Right Viewport) */}
      <motion.div
        style={{ y: ySlowUp, rotate: rotateClockwise }}
        className="absolute top-[62%] right-[5%] hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-11 w-9 -rotate-12 rounded-lg border border-[#C4B5FD]/60 bg-[#EDE9FE]/60 shadow-xs"
        />
      </motion.div>

      {/* Parallax Floating Coral Orb (Lower Left) */}
      <motion.div
        style={{ y: yMediumDown }}
        className="absolute top-[82%] left-[12%] hidden sm:block"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], y: [0, -9, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-7 w-7 rounded-full border-2 border-white bg-[#FB7185]/45 shadow-xs"
        />
      </motion.div>

      {/* Parallax Floating Violet Pill (Lower Right) */}
      <motion.div
        style={{ y: yFastUp, rotate: rotateCounter }}
        className="absolute top-[88%] right-[14%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-8 rounded-xl border border-white/80 bg-[#A78BFA]/45 shadow-xs"
        />
      </motion.div>
    </div>
  );
}
