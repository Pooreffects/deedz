'use client';

import { AboutSection } from '@/components/sections/about';
import { HeroSection } from '@/components/sections/hero';

export default function Home() {
  return (
    <div className='relative flex flex-col w-full '>
      <main className='flex flex-col w-full'>
        {/* Sequential UX Curtain Effect */}
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
