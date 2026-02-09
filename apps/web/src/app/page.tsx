'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='relative flex flex-col w-full bg-midnight'>
      <main className='flex flex-col w-full'>
        {/* --- SECTION 1: THE FOUNDRY STAGE (HERO) --- */}
        <section className='relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden'>
          {/* THE 3D ANCHOR 
              This is where our R3F Canvas will live. 
              We'll use inset-0 to make it fill the background of this section.
          */}
          <div className='absolute inset-0 z-0'>
            {/* <HeroScene /> will be injected here */}
          </div>

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='relative z-10 flex flex-col items-center text-center px-6'
          >
            <h1 className='text-6xl md:text-[10rem] lg:text-[13rem] font-heading font-bold tracking-tighter uppercase italic leading-[0.8]'>
              DEEDZ<span className='text-accent not-italic'>.</span>
            </h1>

            <div className='flex items-center gap-4 mt-8'>
              <div className='h-px w-8 bg-accent/30' />
              <p className='text-xs md:text-sm text-brand-muted font-mono uppercase tracking-[0.5em]'>
                Product Architect <span className='mx-2 opacity-30'>/ /</span>{' '}
                Digital Foundry
              </p>
              <div className='h-px w-8 bg-accent/30' />
            </div>
          </motion.div>

          {/* HUD: SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'
          >
            <span className='text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted'>
              Initialize_Scroll
            </span>
            <div className='relative w-px h-16 bg-white/10 overflow-hidden'>
              <motion.div
                animate={{ y: [0, 64] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className='absolute top-0 w-full h-1/2 bg-accent'
              />
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: THE CURTAIN (ABOUT) --- */}
        <section
          id='about'
          /* UX DESIGN NOTE: The rounded-t-[64px] combined with a slightly 
             darker 'surface' color creates a physical layer feel. 
             This is the "Storytelling" transition point.
          */
          className='relative z-20 w-full min-h-screen py-32 px-6 md:px-24 bg-[#050a18] rounded-t-[48px] md:rounded-t-[80px] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]'
        >
          <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20'>
            {/* LEFT: THE HOOK */}
            <div className='flex flex-col justify-start pt-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-4xl md:text-7xl font-heading font-bold leading-[1.1]'>
                  Architecture <br />
                  <span className='text-brand-muted font-normal italic'>
                    is more than code.
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* RIGHT: THE CORE */}
            <div className='flex flex-col'>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='text-xl md:text-3xl text-brand-muted leading-relaxed font-sans font-light'
              >
                I engineer high-performance frontend systems that bridge the gap
                between
                <span className='text-white font-medium'>
                  {' '}
                  visionary product strategy{' '}
                </span>
                and technical precision.
              </motion.p>

              {/* MANIFESTO CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mt-16 p-10 rounded-4xl border border-white/5 bg-white/2 relative overflow-hidden group'
              >
                <div className='absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity'>
                  <span className='text-8xl font-heading font-bold'>00</span>
                </div>

                <h4 className='text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8'>
                  Core_Manifesto
                </h4>

                <ul className='space-y-6'>
                  {[
                    { id: '01', title: 'Scalable Monorepo Architecture' },
                    { id: '02', title: 'Realtime 3D Engine Integration' },
                    { id: '03', title: 'Productized Asset Pipelines' },
                  ].map((item) => (
                    <li
                      key={item.id}
                      className='flex items-baseline gap-6 group/item'
                    >
                      <span className='text-xs font-mono text-brand-muted group-hover/item:text-accent transition-colors'>
                        {item.id}
                      </span>
                      <span className='text-lg md:text-xl font-heading font-medium tracking-tight text-brand-primary'>
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
