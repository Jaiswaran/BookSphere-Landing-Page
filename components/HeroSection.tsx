'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HERO_SHOWCASE_BOOKS,
  ShowcaseBook,
  getAndroidApkDownloadUrl,
  getNextPreviewPageIndex,
  getShowcaseBookById,
} from '@/lib/books-data';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Download,
  Eye,
  Feather,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onDiscoverBookSphere: () => void;
  onImAnAuthor: () => void;
}

export default function HeroSection({
  onDiscoverBookSphere,
  onImAnAuthor,
}: HeroSectionProps) {
  const [selectedBookId, setSelectedBookId] = useState<string>(
    HERO_SHOWCASE_BOOKS[0].id
  );
  const [previewPageIdx, setPreviewPageIdx] = useState<number>(0);
  const [readerExpanded, setReaderExpanded] = useState<boolean>(false);

  const activeBook = getShowcaseBookById(HERO_SHOWCASE_BOOKS, selectedBookId);
  const activePage =
    activeBook.previewPages[previewPageIdx] || activeBook.previewPages[0];
  const androidDownloadUrl = getAndroidApkDownloadUrl();

  const handleSelectBook = (book: ShowcaseBook) => {
    setSelectedBookId(book.id);
    setPreviewPageIdx(0);
    setReaderExpanded(true);
  };

  const handleTurnPreviewPage = () => {
    setPreviewPageIdx((prev) =>
      getNextPreviewPageIndex(prev, activeBook.previewPages.length)
    );
  };

  return (
    <motion.section
      id="top"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: Exact Match to Reference Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Eyebrow Kicker */}
            <div className="inline-flex items-center rounded-full border border-[#DDD6FE] bg-[#F3E8FF]/75 px-5 py-1.5 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C3AED]">
                A NEW WORLD OF READING
              </span>
            </div>

            {/* 3-Line Editorial Headline with Purple Highlight & Curved Orange Underline */}
            <h1 className="mt-6 font-editorial text-[clamp(2.25rem,3.8vw,3.6rem)] font-bold leading-[1.12] tracking-tight text-[#0F172A]">
              <span className="block">Your Next</span>
              <span className="mt-1 block sm:whitespace-nowrap">
                <span className="relative inline-block text-[#8B5CF6]">
                  Favourite Book
                  {/* Curved Hand-Drawn Orange Underline SVG */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 320 16"
                    fill="none"
                    className="pointer-events-none absolute -bottom-2 left-0 w-full h-3.5"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 11.5C82 4.5 225 4.5 317 11.5"
                      stroke="#F59E0B"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                <span className="text-[#0F172A]">Is</span>
              </span>
              <span className="mt-1.5 block sm:whitespace-nowrap">
                Just a Page Away.
              </span>
            </h1>

            {/* Supporting Paragraph with Cyan-Underlined Phrase */}
            <p className="mt-7 max-w-xl text-lg leading-[1.65] text-[#475569] sm:text-[19px]">
              Discover exciting e-books, explore independent authors, and{' '}
              <span className="font-semibold text-[#0F172A] underline decoration-[#0EA5E9] decoration-2 underline-offset-4">
                preview the first 2–3 pages
              </span>{' '}
              before you buy. BookSphere brings stories and readers together.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                onClick={onDiscoverBookSphere}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="cursor-pointer inline-flex items-center justify-center gap-3 rounded-2xl bg-[#8B5CF6] px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_-6px_rgba(139,92,246,0.55)] transition-colors hover:bg-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] whitespace-nowrap shrink-0"
              >
                <span>Explore Books</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <motion.button
                type="button"
                onClick={onImAnAuthor}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-7 py-4 text-base font-bold text-[#0F172A] shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] transition-colors hover:border-[#8B5CF6]/40 hover:bg-purple-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] whitespace-nowrap shrink-0"
              >
                <Feather
                  className="h-4 w-4 text-[#F97316]"
                  aria-hidden="true"
                />
                <span>I&apos;m an Author</span>
              </motion.button>
            </div>

            {/* Android APK Download Secondary Button Below Existing Hero Buttons */}
            <div className="mt-4">
              <motion.a
                href={androidDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-download-android-btn"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-[#0EA5E9]/30 bg-gradient-to-r from-[#0D9488] to-[#0EA5E9] px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_24px_-6px_rgba(14,165,233,0.45)] transition-colors hover:from-[#0F766E] hover:to-[#0284C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9] whitespace-nowrap shrink-0"
              >
                <Smartphone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Get BookSphere for Android</span>
                <Download className="h-4 w-4 shrink-0 opacity-95" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Bottom Interactive Hint */}
            <div className="mt-7 flex items-center gap-3 text-sm text-[#475569]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFEDD5] text-[#F97316]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p>
                Click any floating book cover on the right to test a live{' '}
                <strong className="font-bold text-[#0F172A]">
                  3–page preview
                </strong>
                !
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Spatial Floating Book Composition Matching Reference Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[560px]">
              {/* Large Soft Pastel Circular Backdrop */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="pointer-events-none absolute top-14 left-6 h-[380px] w-[380px] rounded-full border border-white/80 bg-gradient-to-tr from-[#FCE7F3]/85 via-[#F3E8FF]/70 to-[#E0F2FE]/85 shadow-inner sm:h-[420px] sm:w-[420px]"
              />

              {/* Floating Pink Rounded Square (Bottom-Left of Circle) */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="pointer-events-none absolute bottom-12 left-8 z-20 h-14 w-14 rounded-2xl border-2 border-white bg-[#F9A8D4]/75 shadow-md"
              />

              {/* Floating Purple Circle Accent (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="pointer-events-none absolute right-9 bottom-14 z-10 h-9 w-9 rounded-full border-2 border-white bg-[#A855F7] shadow-md"
              />

              {/* FLOATING BOOK 1 (TOP-LEFT): "The Midnight..." by Clara Vance */}
              <motion.button
                type="button"
                onClick={() => handleSelectBook(HERO_SHOWCASE_BOOKS[0])}
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{
                  scale: 1.05,
                  y: -14,
                  rotate: -1.5,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="Preview The Midnight Library of Dreams by Clara Vance"
                className={`group absolute top-2 left-2 sm:left-5 z-20 flex w-[195px] sm:w-[220px] cursor-pointer flex-col justify-between rounded-[24px] bg-gradient-to-b from-[#7C3AED] to-[#4C1D95] p-4 text-left text-white shadow-[0_22px_45px_-12px_rgba(109,40,217,0.55)] focus-visible:outline-3 focus-visible:outline-[#FACC15] ${
                  selectedBookId === HERO_SHOWCASE_BOOKS[0].id
                    ? 'ring-3 ring-[#FACC15] ring-offset-2'
                    : ''
                }`}
              >
                {/* Top Preview Pill & Eye Icon */}
                <div className="flex w-full items-center justify-between">
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    PREVIEW 3 PAGES
                  </span>
                  <Eye className="h-3.5 w-3.5 text-white/80 transition-transform group-hover:scale-110" />
                </div>

                {/* Inner Artwork Box: Crescent Moon & Feather */}
                <div className="my-3.5 flex h-28 sm:h-32 w-full items-center justify-center rounded-2xl bg-[#3B0764]/65 shadow-inner">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#6D28D9]/70">
                    <svg
                      viewBox="0 0 40 40"
                      className="h-8 w-8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M23.5 8C17.5 9.2 14 15 15.5 21.2C17 27.4 23 30.8 29 29.2C24.5 32.5 18 32 14 27.5C10 23 10.5 15.5 15 11.2C17.5 8.8 20.5 7.8 23.5 8Z"
                        fill="#FACC15"
                      />
                      <path
                        d="M19 25L28 14"
                        stroke="#F472B6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Title & Author */}
                <div>
                  <p className="truncate font-editorial text-base sm:text-[17px] font-bold leading-snug text-white">
                    {HERO_SHOWCASE_BOOKS[0].shortTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-white/80">
                    by {HERO_SHOWCASE_BOOKS[0].author}
                  </p>
                </div>
              </motion.button>

              {/* FLOATING BOOK 2 (TOP-RIGHT): Warm Orange/Coral Sailboat Book */}
              <motion.button
                type="button"
                onClick={() => handleSelectBook(HERO_SHOWCASE_BOOKS[1])}
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  rotate: 2,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="Preview Voyage of Golden Horizons by Mateo Silva"
                className={`group absolute top-7 right-1 sm:right-3 z-10 flex w-[185px] sm:w-[210px] rotate-2 cursor-pointer flex-col justify-between rounded-[24px] bg-gradient-to-b from-[#F59E0B] via-[#F97316] to-[#EF4444] p-4 text-left text-white shadow-[0_22px_45px_-12px_rgba(239,68,68,0.45)] focus-visible:outline-3 focus-visible:outline-[#7C3AED] ${
                  selectedBookId === HERO_SHOWCASE_BOOKS[1].id
                    ? 'ring-3 ring-[#7C3AED] ring-offset-2'
                    : ''
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="rounded-full bg-white/25 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    PREVIEW 3 PAGES
                  </span>
                  <Eye className="h-3.5 w-3.5 text-white/85 transition-transform group-hover:scale-110" />
                </div>

                {/* Inner Artwork Box: Sailboat & Sun */}
                <div className="my-3.5 flex h-28 sm:h-32 w-full items-center justify-center rounded-2xl bg-[#B45309]/55 shadow-inner">
                  <svg
                    viewBox="0 0 60 60"
                    className="h-14 w-14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="38" cy="20" r="6" fill="#FDE047" />
                    <path d="M29 18L19 36H29V18Z" fill="#FFFFFF" />
                    <path
                      d="M31 22L39 36H31V22Z"
                      fill="#FEF08A"
                      fillOpacity="0.9"
                    />
                    <path d="M16 38H42L38 45H20L16 38Z" fill="#38BDF8" />
                  </svg>
                </div>

                <div>
                  <p className="truncate font-editorial text-base font-bold leading-snug text-white">
                    {HERO_SHOWCASE_BOOKS[1].shortTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-white/85">
                    by {HERO_SHOWCASE_BOOKS[1].author}
                  </p>
                </div>
              </motion.button>

              {/* CENTER-RIGHT OVERLAPPING OPEN BOOK PREVIEW CARD */}
              <motion.div
                layout
                className="
                  absolute top-[200px] left-1/2 z-20 w-[265px] -translate-x-1/4 rounded-[26px] border border-slate-200/80 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.16)]
                  sm:top-[205px] sm:left-[185px] sm:w-[275px] sm:translate-x-0
                "
              >
                {/* Floating Dark Pill Header Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0F172A] px-3.5 py-1 text-[11px] font-semibold text-white shadow-md flex items-center gap-1.5">
                  <BookOpen
                    className="h-3 w-3 text-[#F59E0B]"
                    aria-hidden="true"
                  />
                  <span>Instant 2–3 Page Preview</span>
                </div>

                {/* Two Miniature Open Pages */}
                <div className="mt-2 grid grid-cols-2 gap-2.5">
                  {/* Left Mini Page */}
                  <div className="flex flex-col justify-between rounded-xl border border-amber-200/70 bg-[#FFFDF7] p-3">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-[#8B5CF6]">
                        {activePage.heading}
                      </span>
                      <p className="mt-1 font-editorial text-xs font-bold leading-tight text-[#0F172A]">
                        {activePage.chapterTitle}
                      </p>
                      <div className="mt-2.5 space-y-1.5" aria-hidden="true">
                        <div className="h-1.5 w-full rounded-full bg-slate-200" />
                        <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
                        <div className="h-1.5 w-4/6 rounded-full bg-slate-200" />
                      </div>
                    </div>
                    <span className="mt-4 block font-mono text-[9px] text-slate-400">
                      p. 0{activePage.pageNumber}
                    </span>
                  </div>

                  {/* Right Mini Page */}
                  <div className="flex flex-col justify-between rounded-xl border border-amber-200/70 bg-[#FFFDF7] p-3">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-[#F97316]">
                        PAGE {Math.min(activePage.pageNumber + 1, 3)}
                      </span>
                      <div className="mt-2 space-y-1.5" aria-hidden="true">
                        <div className="h-1.5 w-full rounded-full bg-slate-200" />
                        <div className="h-1.5 w-11/12 rounded-full bg-[#FED7AA]" />
                        <div className="h-1.5 w-4/5 rounded-full bg-slate-200" />
                      </div>
                      <button
                        type="button"
                        onClick={handleTurnPreviewPage}
                        className="mt-3 cursor-pointer inline-flex items-center gap-0.5 rounded-md bg-purple-50 px-2 py-1 text-[10px] font-bold text-[#7C3AED] transition-colors hover:bg-purple-100"
                      >
                        <span>Flip Page</span>
                        <ChevronRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING BOOK 3 (BOTTOM-RIGHT FOREGROUND): "Design for Dreamers" by Sora Takahashi */}
              <motion.button
                type="button"
                onClick={() => handleSelectBook(HERO_SHOWCASE_BOOKS[2])}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.1,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  rotate: -1.5,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="Preview Design for Dreamers by Sora Takahashi"
                className={`group absolute right-4 bottom-0 z-30 flex w-[200px] sm:right-10 sm:w-[225px] cursor-pointer flex-col justify-between rounded-[24px] bg-gradient-to-b from-[#06B6D4] to-[#2563EB] p-4 text-left text-white shadow-[0_24px_50px_-12px_rgba(37,99,235,0.5)] focus-visible:outline-3 focus-visible:outline-[#FACC15] ${
                  selectedBookId === HERO_SHOWCASE_BOOKS[2].id
                    ? 'ring-3 ring-[#FACC15] ring-offset-2'
                    : ''
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    PREVIEW 3 PAGES
                  </span>
                  <Eye className="h-3.5 w-3.5 text-white/85 transition-transform group-hover:scale-110" />
                </div>

                {/* Inner Artwork Box: 4 Playful Geometric Shapes */}
                <div className="my-3.5 flex h-24 sm:h-28 w-full items-center justify-center rounded-2xl bg-[#0369A1]/65 shadow-inner">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-4 w-4 rounded-xs bg-[#F472B6]" />
                    <div className="h-4 w-4 rounded-full bg-[#FACC15]" />
                    <div className="h-4 w-4 rounded-full bg-[#A855F7]" />
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <polygon points="8,1 15,15 1,15" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                <div>
                  <p className="truncate font-editorial text-base sm:text-[17px] font-bold leading-snug text-white">
                    {HERO_SHOWCASE_BOOKS[2].title}
                  </p>
                  <p className="mt-0.5 text-xs text-white/85">
                    by {HERO_SHOWCASE_BOOKS[2].author}
                  </p>
                </div>
              </motion.button>
            </div>

            {/* Live Interactive 3-Page Preview Bar (Reveals when clicking any floating book cover) */}
            <AnimatePresence mode="wait">
              {readerExpanded && (
                <motion.div
                  key={`${activeBook.id}-${activePage.pageNumber}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto mt-6 max-w-lg rounded-2xl border border-purple-200/80 bg-white/95 p-4 shadow-md backdrop-blur-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                      <span className="font-editorial text-sm font-bold text-[#0F172A]">
                        {activeBook.title}
                      </span>
                      <span className="text-xs text-slate-500">
                        by {activeBook.author}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7C3AED]">
                      Author Price: {activeBook.priceLabel}
                    </span>
                  </div>

                  <p
                    data-testid="hero-open-book-excerpt"
                    className="mt-2.5 font-serif text-xs sm:text-sm leading-relaxed text-[#334155]"
                  >
                    <strong className="font-sans text-xs font-bold text-[#8B5CF6]">
                      {activePage.heading} ({activePage.chapterTitle}):
                    </strong>{' '}
                    “{activePage.excerpt}”
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      {activeBook.previewPages.map((p, idx) => (
                        <button
                          key={p.pageNumber}
                          type="button"
                          onClick={() => setPreviewPageIdx(idx)}
                          className={`cursor-pointer rounded-md px-2 py-0.5 font-mono text-[11px] font-bold transition-colors ${
                            previewPageIdx === idx
                              ? 'bg-[#8B5CF6] text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-purple-100'
                          }`}
                        >
                          Page {p.pageNumber}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setReaderExpanded(false)}
                      className="cursor-pointer text-[11px] font-semibold text-slate-500 hover:text-[#0F172A]"
                    >
                      Close Preview
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
