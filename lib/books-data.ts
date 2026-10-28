export interface ShowcaseBook {
  id: string;
  title: string;
  shortTitle: string;
  author: string;
  category: string;
  priceLabel: string;
  artVariant: 'moon-feather' | 'sailboat-sun' | 'geometric-shapes';
  palette: {
    gradientFrom: string;
    gradientTo: string;
    innerBoxBg: string;
    accentColor: string;
    textColor: string;
  };
  previewPages: {
    pageNumber: number;
    heading: string;
    chapterTitle: string;
    excerpt: string;
  }[];
}

export interface HowItWorksStep {
  id: 'discover' | 'preview' | 'read';
  stepNumber: string;
  title: 'Discover' | 'Preview' | 'Read';
  description: string;
  colorTheme: {
    cardBg: string;
    border: string;
    iconBg: string;
    iconText: string;
    badgeText: string;
  };
  conceptTakeaway: string;
}

export const HERO_SHOWCASE_BOOKS: ShowcaseBook[] = [
  {
    id: 'midnight-story',
    title: 'The Midnight Library of Dreams',
    shortTitle: 'The Midnight...',
    author: 'Clara Vance',
    category: 'Fiction & Wonder',
    priceLabel: '₹199',
    artVariant: 'moon-feather',
    palette: {
      gradientFrom: '#7C3AED',
      gradientTo: '#4C1D95',
      innerBoxBg: '#3B0764',
      accentColor: '#FACC15',
      textColor: '#FFFFFF',
    },
    previewPages: [
      {
        pageNumber: 1,
        heading: 'PAGE 1',
        chapterTitle: 'Chapter One',
        excerpt:
          'At midnight, the shelves between sleeping and waking began to hum with unwritten stories waiting for a curious reader.',
      },
      {
        pageNumber: 2,
        heading: 'PAGE 2',
        chapterTitle: 'The Whispering Spine',
        excerpt:
          'Clara reached for the violet volume. Its first three pages glowed softly, offering a glimpse into another world before she chose to make it hers.',
      },
      {
        pageNumber: 3,
        heading: 'PAGE 3',
        chapterTitle: 'End of 3-Page Preview',
        excerpt:
          'Enjoyed the first 3 pages? Authors set their own accessible prices on BookSphere so you can unlock the full story online.',
      },
    ],
  },
  {
    id: 'uncharted-voyage',
    title: 'Voyage of Golden Horizons',
    shortTitle: 'Voyage of...',
    author: 'Mateo Silva',
    category: 'Adventure & Ideas',
    priceLabel: '₹249',
    artVariant: 'sailboat-sun',
    palette: {
      gradientFrom: '#F59E0B',
      gradientTo: '#EF4444',
      innerBoxBg: '#B45309',
      accentColor: '#38BDF8',
      textColor: '#FFFFFF',
    },
    previewPages: [
      {
        pageNumber: 1,
        heading: 'PAGE 1',
        chapterTitle: 'Chapter One',
        excerpt:
          'Every new venture feels like setting sail before sunrise—guided by a simple compass and the courage to begin.',
      },
      {
        pageNumber: 2,
        heading: 'PAGE 2',
        chapterTitle: 'Charting Your Course',
        excerpt:
          'Independent creators no longer need permission from distant harbours to share their discoveries with the world.',
      },
      {
        pageNumber: 3,
        heading: 'PAGE 3',
        chapterTitle: 'End of 3-Page Preview',
        excerpt:
          'Love this journey? Unlock the complete digital book for ₹249—priced directly by the author.',
      },
    ],
  },
  {
    id: 'design-for-dreamers',
    title: 'Design for Dreamers',
    shortTitle: 'Design for Dreamers',
    author: 'Sora Takahashi',
    category: 'Creativity & Craft',
    priceLabel: '₹179',
    artVariant: 'geometric-shapes',
    palette: {
      gradientFrom: '#06B6D4',
      gradientTo: '#2563EB',
      innerBoxBg: '#0369A1',
      accentColor: '#F472B6',
      textColor: '#FFFFFF',
    },
    previewPages: [
      {
        pageNumber: 1,
        heading: 'PAGE 1',
        chapterTitle: 'Chapter One',
        excerpt:
          'Playful geometry—a square, a circle, a triangle—is where every memorable visual story begins.',
      },
      {
        pageNumber: 2,
        heading: 'PAGE 2',
        chapterTitle: 'Simplicity in Motion',
        excerpt:
          'When you strip away clutter and let ideas breathe, readers understand your vision at a single glance.',
      },
      {
        pageNumber: 3,
        heading: 'PAGE 3',
        chapterTitle: 'End of 3-Page Preview',
        excerpt:
          'Ready to read the full book online? Support Sora Takahashi directly for ₹179 on BookSphere.',
      },
    ],
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 'discover',
    stepNumber: '01.',
    title: 'Discover',
    description: 'Find interesting e-books across different categories.',
    colorTheme: {
      cardBg: '#F0F9FF',
      border: '#BAE6FD',
      iconBg: '#0EA5E9',
      iconText: '#FFFDF7',
      badgeText: '#0369A1',
    },
    conceptTakeaway:
      'Readers explore stories and ideas directly from independent authors.',
  },
  {
    id: 'preview',
    stepNumber: '02.',
    title: 'Preview',
    description: 'Read the first 2–3 pages before deciding to buy.',
    colorTheme: {
      cardBg: '#F5F3FF',
      border: '#DDD6FE',
      iconBg: '#7C3AED',
      iconText: '#FFFDF7',
      badgeText: '#6D28D9',
    },
    conceptTakeaway:
      'No more guessing from a cover—sample the opening pages first.',
  },
  {
    id: 'read',
    stepNumber: '03.',
    title: 'Read',
    description: 'Purchase the book and read it online.',
    colorTheme: {
      cardBg: '#FFF1F2',
      border: '#FECDD3',
      iconBg: '#FF6B6B',
      iconText: '#FFFDF7',
      badgeText: '#BE123C',
    },
    conceptTakeaway:
      'Authors set their own prices and readers enjoy instant online access.',
  },
];

export const AUTHOR_PRICE_OPTIONS = ['₹149', '₹199', '₹249'] as const;

export function getShowcaseBookById(
  books: ShowcaseBook[],
  id: string
): ShowcaseBook {
  return books.find((b) => b.id === id) || books[0];
}

export function getNextPreviewPageIndex(
  currentIndex: number,
  totalPages: number
): number {
  if (totalPages <= 0) return 0;
  return (currentIndex + 1) % totalPages;
}

export interface EarningsCalculationResult {
  isValid: boolean;
  bookPrice: number;
  authorEarnings: number;
  bookSphereShare: number;
  formattedBookPrice: string;
  formattedAuthorEarnings: string;
  formattedBookSphereShare: string;
  errorMessage?: string;
}

/**
 * Formats a numeric INR value with the ₹ symbol.
 * Uses integer display when the value is a whole number (e.g. ₹100, ₹70, ₹30)
 * and exactly two decimal places when fractional paise exist (e.g. ₹149.50, ₹104.65).
 */
export function formatRupeeAmount(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) {
    return '₹0';
  }
  const roundedPaise = Math.round(amount * 100);
  const isWholeNumber = roundedPaise % 100 === 0;
  const numericValue = roundedPaise / 100;

  if (isWholeNumber) {
    return `₹${numericValue.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
    })}`;
  }

  return `₹${numericValue.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/**
 * Calculates the 70% Author Earnings and 30% BookSphere Share for a given book price input.
 * Ensures the two shares always add up to the exact entered selling price.
 */
export function calculateEarningsSplit(
  rawInput: string | number
): EarningsCalculationResult {
  const str = String(rawInput).trim();

  if (str === '') {
    return {
      isValid: false,
      bookPrice: 0,
      authorEarnings: 0,
      bookSphereShare: 0,
      formattedBookPrice: '₹0',
      formattedAuthorEarnings: '₹0',
      formattedBookSphereShare: '₹0',
      errorMessage: 'Enter a positive book price in ₹ to calculate earnings.',
    };
  }

  const parsed = Number(str);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return {
      isValid: false,
      bookPrice: 0,
      authorEarnings: 0,
      bookSphereShare: 0,
      formattedBookPrice: '₹0',
      formattedAuthorEarnings: '₹0',
      formattedBookSphereShare: '₹0',
      errorMessage: 'Please enter a valid positive selling price.',
    };
  }

  // Round to nearest paisa (2 decimal places) so shares always sum to the exact selling price
  const totalPaise = Math.round(parsed * 100);
  const authorPaise = Math.round(totalPaise * 0.7);
  const platformPaise = totalPaise - authorPaise;

  const bookPrice = totalPaise / 100;
  const authorEarnings = authorPaise / 100;
  const bookSphereShare = platformPaise / 100;

  return {
    isValid: totalPaise > 0,
    bookPrice,
    authorEarnings,
    bookSphereShare,
    formattedBookPrice: formatRupeeAmount(bookPrice),
    formattedAuthorEarnings: formatRupeeAmount(authorEarnings),
    formattedBookSphereShare: formatRupeeAmount(bookSphereShare),
    errorMessage:
      totalPaise === 0
        ? 'Enter a book price greater than ₹0 to see your 70% earnings.'
        : undefined,
  };
}

/**
 * Sanitizes raw keyboard input so negative signs and invalid characters are prevented
 * while allowing digits and at most one decimal point (up to 2 decimal places).
 */
export function sanitizePriceInput(raw: string): string {
  const withoutNegativesAndLetters = raw.replace(/[^0-9.]/g, '');
  const parts = withoutNegativesAndLetters.split('.');
  if (parts.length <= 1) {
    return withoutNegativesAndLetters;
  }
  const integerPart = parts[0];
  const decimalPart = parts.slice(1).join('').slice(0, 2);
  return `${integerPart}.${decimalPart}`;
}

export const ANDROID_APK_DRIVE_URL =
  'https://drive.google.com/file/d/1tmb5lO5ssLFgnISf9piO5eo36IBHs2Ov/view?usp=sharing';

export function getAndroidApkDownloadUrl(): string {
  return ANDROID_APK_DRIVE_URL;
}

