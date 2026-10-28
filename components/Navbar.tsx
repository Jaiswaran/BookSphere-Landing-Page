'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Download, Menu, Smartphone, Sparkles, X } from 'lucide-react';
import { getAndroidApkDownloadUrl } from '@/lib/books-data';

interface NavbarProps {
  onExploreIdea: () => void;
}

export default function Navbar({ onExploreIdea }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const androidDownloadUrl = getAndroidApkDownloadUrl();

  const handleNavClick = (selector: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-[#FFFDF9]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-8 px-3.5 py-3.5 sm:px-8 lg:px-12">
        {/* Zone 1: BookSphere Logo Matching Reference Image */}
        <a
          href="#top"
          className="group flex items-center gap-2 sm:gap-3 text-xl font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6]"
        >
          <motion.span
            whileHover={{ rotate: -8, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            className="flex h-9 w-9 sm:h-10 sm:w-10 -rotate-3 items-center justify-center rounded-xl bg-gradient-to-br from-[#9333EA] to-[#6D28D9] text-white shadow-[0_6px_16px_-3px_rgba(139,92,246,0.5)]"
          >
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </motion.span>
          <span className="font-editorial text-[19px] sm:text-[22px] font-bold tracking-tight">
            <span className="text-[#0F172A]">Book</span>
            <span className="text-[#8B5CF6]">Sphere</span>
          </span>
        </a>

        {/* Zone 2 & 3 Right Aligned Navigation & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-6 lg:gap-8">
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#1E293B]"
          >
            <a
              href="#how-it-works"
              className="relative py-1 transition-colors hover:text-[#8B5CF6] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B5CF6] after:transition-all hover:after:w-full"
            >
              Explore
            </a>
            <a
              href="#for-authors"
              className="relative py-1 transition-colors hover:text-[#8B5CF6] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B5CF6] after:transition-all hover:after:w-full"
            >
              For Authors
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <motion.button
              type="button"
              onClick={onExploreIdea}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="hidden lg:inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-4px_rgba(217,70,239,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Discover Books</span>
            </motion.button>

            <motion.a
              href={androidDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-download-app-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="inline-flex cursor-pointer items-center justify-center gap-1.5 sm:gap-2 rounded-2xl border-2 border-[#8B5CF6]/25 bg-gradient-to-r from-[#0D9488] to-[#0EA5E9] px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_20px_-4px_rgba(14,165,233,0.45)] transition-colors hover:from-[#0F766E] hover:to-[#0284C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9] whitespace-nowrap shrink-0"
            >
              <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden="true" />
              <span>Download App</span>
              <Download className="hidden sm:inline-block h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden="true" />
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-[#0F172A] hover:bg-purple-50"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200/70 bg-[#FFFDF9] px-4 pt-3 pb-5 md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#how-it-works');
              }}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-[#0F172A] hover:bg-purple-50"
            >
              Explore
            </a>
            <a
              href="#for-authors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#for-authors');
              }}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-[#0F172A] hover:bg-purple-50"
            >
              For Authors
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreIdea();
              }}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Discover Books</span>
            </button>
            <a
              href={androidDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0EA5E9] px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span>Download App</span>
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
