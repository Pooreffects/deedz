'use client';

import { HeroSection } from '@/components/sections/hero';

export default function Home() {
  return (
    <div className='relative flex flex-col w-full bg-[#0a0a0a]'>
      <main className='flex flex-col w-full'>
        {/* DIRECTOR VIEW: Sequential Sections */}
        <HeroSection />

        {/* SECTION 2: THE CURTAIN (ABOUT) */}
        <section
          id='about'
          className='relative z-20 w-full min-h-screen py-32 px-6 md:px-24 bg-[#050a18] rounded-t-[48px] md:rounded-t-[80px] border-t border-white/5'
        >
          {/* ... about content ... */}
        </section>
      </main>
    </div>
  );
}
