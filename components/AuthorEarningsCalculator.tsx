'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  calculateEarningsSplit,
  sanitizePriceInput,
} from '@/lib/books-data';
import { IndianRupee, Users, Wallet } from 'lucide-react';

const EXAMPLE_PRICES = ['100', '149.50', '200', '500'] as const;

export default function AuthorEarningsCalculator() {
  const [priceInput, setPriceInput] = useState<string>('100');

  const calculation = calculateEarningsSplit(priceInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizePriceInput(e.target.value);
    setPriceInput(sanitized);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent negative signs or scientific notation
    if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      id="earnings-calculator"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Heading & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#99F6E4] bg-[#F0FDFA] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0D9488]">
            70 / 30 REVENUE SHARING
          </span>
          <h2 className="mt-4 font-editorial text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl text-balance">
            Your Story. Your Price. Your Earnings.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#475569] sm:text-lg">
            Every story has value. Set your book&apos;s price and discover how
            much you can earn with BookSphere.
          </p>
        </div>

        {/* Main Calculator Container */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[32px] border-2 border-slate-200/90 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(15,23,42,0.1)] sm:p-10">
          {/* Input Field Area */}
          <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-100 pb-8 md:flex-row md:items-end">
            <div className="w-full md:max-w-sm">
              <label
                htmlFor="book-price-calculator-input"
                className="block text-sm font-bold text-[#0F172A]"
              >
                Set Your Book Price (₹)
              </label>
              <div className="relative mt-2.5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-xl font-bold text-[#7C3AED]"
                >
                  ₹
                </span>
                <input
                  id="book-price-calculator-input"
                  type="text"
                  inputMode="decimal"
                  value={priceInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="100"
                  aria-describedby="price-calculator-helper"
                  className="w-full rounded-2xl border-2 border-[#DDD6FE] bg-[#FFFDF9] py-3.5 pr-4 pl-10 font-mono text-2xl font-bold tabular-nums text-[#0F172A] shadow-2xs transition-colors focus:border-[#8B5CF6] focus:bg-white focus:outline-none"
                />
              </div>
              <p
                id="price-calculator-helper"
                className="mt-2 text-xs font-medium text-[#64748B]"
              >
                {calculation.errorMessage ? (
                  <span className="font-semibold text-[#E11D48]">
                    {calculation.errorMessage}
                  </span>
                ) : (
                  'Enter any positive selling price in ₹ (supports decimals like ₹149.50).'
                )}
              </p>
            </div>

            {/* Quick Example Price Presets */}
            <div className="w-full md:w-auto">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Try Example Prices
              </span>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {EXAMPLE_PRICES.map((preset) => {
                  const isActive = priceInput === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setPriceInput(preset)}
                      className={`cursor-pointer rounded-xl px-3.5 py-2 font-mono text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#8B5CF6] text-white shadow-xs'
                          : 'border border-slate-200 bg-[#FFFDF9] text-[#334155] hover:border-[#8B5CF6]/40 hover:bg-purple-50/50'
                      }`}
                    >
                      ₹{preset}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Two Colourful Result Cards Side by Side */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Card 1: Author Earnings (70%) - Teal / Green Accent */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#99F6E4] bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1]/45 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-sm">
                    <Wallet className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                      Author Earnings
                    </h3>
                    <p className="text-xs font-semibold text-[#0F766E]">
                      70% of selling price
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#0D9488]">
                  70%
                </span>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={calculation.formattedAuthorEarnings}
                    initial={{ opacity: 0.4, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    data-testid="calculator-author-earnings"
                    className="font-mono text-3xl font-bold tabular-nums text-[#0F766E] sm:text-4xl"
                  >
                    {calculation.formattedAuthorEarnings}
                  </motion.p>
                </AnimatePresence>
                <p className="mt-1.5 text-xs font-medium text-[#115E59]/80">
                  Paid directly to the independent author per book sold
                </p>
              </div>
            </motion.div>

            {/* Card 2: BookSphere Share (30%) - Purple / Orange Accent */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#DDD6FE] bg-gradient-to-br from-[#F5F3FF] to-[#FFEDD5]/45 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#F97316] text-white shadow-sm">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#0F172A]">
                      BookSphere Share
                    </h3>
                    <p className="text-xs font-semibold text-[#6D28D9]">
                      30% of selling price
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#7C3AED]">
                  30%
                </span>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={calculation.formattedBookSphereShare}
                    initial={{ opacity: 0.4, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    data-testid="calculator-booksphere-share"
                    className="font-mono text-3xl font-bold tabular-nums text-[#6D28D9] sm:text-4xl"
                  >
                    {calculation.formattedBookSphereShare}
                  </motion.p>
                </AnimatePresence>
                <p className="mt-1.5 text-xs font-medium text-[#4C1D95]/80">
                  Supports digital hosting, 3-page preview reader &amp; discovery
                </p>
              </div>
            </motion.div>
          </div>

          {/* Horizontal 70% / 30% Revenue Breakdown Bar */}
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-xs font-bold">
              <span className="text-[#0F766E]">
                70% Author ({calculation.formattedAuthorEarnings})
              </span>
              <span className="text-[#6D28D9]">
                30% BookSphere ({calculation.formattedBookSphereShare})
              </span>
            </div>
            <div
              role="img"
              aria-label="Revenue split bar showing 70 percent for the author and 30 percent for BookSphere"
              className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100 p-0.5 shadow-inner"
            >
              <div
                style={{ width: '70%' }}
                className="h-full rounded-l-full bg-gradient-to-r from-[#10B981] to-[#0D9488] transition-all duration-300"
              />
              <div
                style={{ width: '30%' }}
                className="h-full rounded-r-full bg-gradient-to-r from-[#8B5CF6] to-[#F97316] transition-all duration-300"
              />
            </div>
          </div>

          {/* Dynamic Breakdown Summary Under the Cards */}
          <div
            data-testid="calculator-breakdown-summary"
            className="mt-6 rounded-2xl border border-slate-200/80 bg-[#FFFDF9] p-4 sm:p-5"
          >
            <div className="grid grid-cols-1 gap-3 text-sm font-semibold text-[#0F172A] sm:grid-cols-3">
              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 border border-slate-100 sm:block">
                <span className="text-xs font-medium text-[#64748B] sm:block">
                  Total Book Price:
                </span>
                <span className="font-mono text-base font-bold tabular-nums text-[#0F172A]">
                  {calculation.formattedBookPrice}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 border border-slate-100 sm:block">
                <span className="text-xs font-medium text-[#64748B] sm:block">
                  Author&apos;s Share:
                </span>
                <span className="font-mono text-base font-bold tabular-nums text-[#0F766E]">
                  {calculation.formattedAuthorEarnings} (70%)
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 border border-slate-100 sm:block">
                <span className="text-xs font-medium text-[#64748B] sm:block">
                  BookSphere&apos;s Share:
                </span>
                <span className="font-mono text-base font-bold tabular-nums text-[#6D28D9]">
                  {calculation.formattedBookSphereShare} (30%)
                </span>
              </div>
            </div>
          </div>

          {/* Caption & Transparent Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-[#334155]">
              A transparent revenue-sharing model designed to bring authors and
              readers closer.
            </p>
            <p className="mt-1.5 text-xs text-[#64748B]">
              Illustrative revenue split shown before any applicable taxes,
              payment processing fees, refunds, or other deductions. Does not
              represent guaranteed sales or earnings.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
