'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUTHOR_PRICE_OPTIONS } from '@/lib/books-data';
import { BookUp, CheckCircle2, Sparkles } from 'lucide-react';

export default function AuthorSection() {
  const [selectedPrice, setSelectedPrice] = useState<string>(
    AUTHOR_PRICE_OPTIONS[1]
  );
  const [showAuthorInfo, setShowAuthorInfo] = useState<boolean>(false);

  return (
    <motion.section
      id="for-authors"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[32px] border-2 border-[#DDD6FE] bg-gradient-to-br from-[#F5F3FF] via-[#FFFDF9] to-[#FEF3C7]/45 p-8 shadow-[0_20px_50px_-18px_rgba(124,58,237,0.12)] sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Side: Compact Author Copy & "Built for Authors" Button */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border border-[#DDD6FE] bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#7C3AED]">
                FOR INDEPENDENT AUTHORS
              </span>

              <h2 className="mt-4 font-editorial text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl text-balance">
                Your Story. Your Price.
              </h2>

              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#475569]">
                Publish your e-book, choose your price, and help your story find
                its readers.
              </p>

              <div className="mt-8">
                <motion.button
                  type="button"
                  onClick={() => setShowAuthorInfo((prev) => !prev)}
                  aria-expanded={showAuthorInfo}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F97316] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_24px_-6px_rgba(249,115,22,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] whitespace-nowrap shrink-0"
                >
                  <Sparkles
                    className="h-4 w-4 text-[#FDE047]"
                    aria-hidden="true"
                  />
                  <span>Built for Authors</span>
                </motion.button>
              </div>

              {/* Smooth Informational Message When Clicked (No Signup Flow) */}
              <AnimatePresence>
                {showAuthorInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    data-testid="author-info-message"
                    className="mt-5 rounded-2xl border border-[#8B5CF6]/25 bg-white p-4 text-sm leading-relaxed text-[#0F172A] shadow-sm"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#8B5CF6]"
                        aria-hidden="true"
                      />
                      <p>
                        <strong className="font-semibold">
                          How Author Publishing Works:
                        </strong>{' '}
                        Independent writers upload their finished e-book, choose
                        their own selling price, and automatically share the
                        first 2–3 pages as a free preview so readers can
                        discover their work directly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Side: Interactive Book Publishing Illustration */}
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mx-auto max-w-md rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_18px_40px_-15px_rgba(15,23,42,0.1)] sm:p-7"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0EA5E9] text-white shadow-xs">
                      <BookUp className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">
                        Publishing Illustration
                      </p>
                      <p className="text-xs text-[#64748B]">
                        Direct from author to reader
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#8B5CF6]">
                    Ready to Share
                  </span>
                </div>

                {/* Visual Book Card Being Published */}
                <div className="mt-5 flex items-center gap-5 rounded-2xl bg-[#FFFDF7] border border-amber-100 p-4">
                  <motion.div
                    whileHover={{ rotate: -3, scale: 1.05 }}
                    className="relative flex h-28 w-20 shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-b from-[#8B5CF6] to-[#5B21B6] p-2.5 text-white shadow-md"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-2 bg-[#4C1D95]"
                    />
                    <span className="pl-1 font-mono text-[8px] uppercase text-[#FACC15]">
                      New Book
                    </span>
                    <div
                      aria-hidden="true"
                      className="my-auto mx-auto h-6 w-6 rounded-full bg-[#FACC15]"
                    />
                    <span className="pl-1 font-editorial text-[10px] font-bold leading-tight">
                      Your Story
                    </span>
                  </motion.div>

                  {/* Author Price Selector Illustration */}
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Author Sets the Price
                    </p>
                    <p className="mt-0.5 font-editorial text-lg font-bold text-[#0F172A]">
                      Selected Price: {selectedPrice}
                    </p>

                    <div
                      role="group"
                      aria-label="Sample Author Price Selector"
                      className="mt-2.5 flex items-center gap-2"
                    >
                      {AUTHOR_PRICE_OPTIONS.map((price) => (
                        <motion.button
                          key={price}
                          type="button"
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedPrice(price)}
                          className={`cursor-pointer rounded-lg px-3 py-1 font-mono text-xs font-bold transition-colors ${
                            selectedPrice === price
                              ? 'bg-[#FACC15] text-[#0F172A] shadow-2xs'
                              : 'bg-slate-100 text-[#475569] hover:bg-purple-100'
                          }`}
                        >
                          {price}
                        </motion.button>
                      ))}
                    </div>

                    <p className="mt-2.5 text-xs font-medium text-[#64748B]">
                      Pages 1–3 unlocked for reader preview
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
