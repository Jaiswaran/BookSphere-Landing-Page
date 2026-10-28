import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'BookSphere — Great Stories Deserve Great Readers',
  description:
    'BookSphere connects independent authors with readers through a simple digital book marketplace. Discover new stories, preview before you buy, and let authors set their own prices.',
  openGraph: {
    title: 'BookSphere — Great Stories Deserve Great Readers',
    description:
      'Connecting stories with readers. Preview the first 2–3 pages before buying, and let authors set their own prices.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookSphere — Great Stories Deserve Great Readers',
    description:
      'BookSphere connects independent authors with readers through a simple digital book marketplace.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FFFDF7] text-[#1E1B4B] font-sans antialiased selection:bg-[#FACC15]/40 selection:text-[#1E1B4B]"
      >
        {children}
      </body>
    </html>
  );
}
