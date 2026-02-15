import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const fontHeading = localFont({
  src: '../../public/fonts/GeistVF.woff2',
  variable: '--font-geist',
  display: 'block', // 'block' is better for LCP as it hides fallback-to-custom layout shifts
  weight: '100 900',
  preload: true, // Critical
});

export const metadata: Metadata = {
  title: 'DEEDZ | Product Architect',
  description: 'High-performance digital systems and productized assets.',
  metadataBase: new URL('https://deedz.tech'),
};

export const viewport: Viewport = {
  themeColor: '#020617',
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
      className={`dark scroll-smooth ${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className='antialiased selection:bg-accent/20 selection:text-white bg-bg text-fg'>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
