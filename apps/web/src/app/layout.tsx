import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';

/**
 * DEEDZ Typography Engine
 * Self-hosted via Next.js for zero-CLS and high performance.
 */
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fontHeading = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

/**
 * Marketable Metadata Strategy
 * Positioned as a Product Architect's HQ and a System Foundry.
 */
export const metadata: Metadata = {
  title: {
    default: 'DEEDZ | Product Architect & High-Performance Systems',
    template: '%s | DEEDZ',
  },
  description:
    'Orchestrating premium frontend systems and productized assets. We build the digital engines that power scalable startups and high-impact solutions.',
  metadataBase: new URL('https://deedz.tech'), // Update when you have your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DEEDZ | Product Architect',
    description: 'Building the digital engines for high-impact solutions.',
    url: 'https://deedz.tech',
    siteName: 'DEEDZ',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Viewport Strategy
 * Ensures the Midnight theme is respected at the browser level (mobile status bars, etc.)
 */
export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`dark ${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}
      suppressHydrationWarning // Prevents browser extension-induced hydration mismatch
    >
      <body className='bg-midnight text-slate-200 font-sans antialiased selection:bg-slate-800 selection:text-white'>
        {/* This is the core shell. 
            In the future, common elements like Global Modals or Shared Nav 
            from @deedz/ui will wrap {children} here.
        */}
        <div className='relative min-h-screen flex flex-col'>{children}</div>
      </body>
    </html>
  );
}
