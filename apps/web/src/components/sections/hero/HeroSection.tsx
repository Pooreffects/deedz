'use client';

import { motion, Variants } from 'framer-motion';

const headingContainerVars: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const letterVars: Variants = {
  initial: { opacity: 0, y: '110%', skewY: 10 },
  animate: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// New Variants for the sequenced entrance of the pitch/button
const contentContainerVars: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.9, // Timing it to follow the "deedz." animation
    },
  },
};

const contentItemVars: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HeroSection() {
  const title = 'deedz';

  return (
    <section className='relative min-h-dvh w-full flex flex-col items-center justify-center bg-bg overflow-hidden text-center pt-32 pb-20 md:pt-40'>
      <h1 className='sr-only'>DEEDZ. Product Architecture & Venture Lab</h1>
      <div className='container relative z-20 mx-auto px-6 flex flex-col items-center mt-auto mb-auto'>
        {/* THE HEADING */}
        <motion.div
          variants={headingContainerVars}
          initial='initial'
          animate='animate'
          className='flex font-heading text-[18vw] md:text-[14vw] font-bold tracking-tighter leading-[0.8] lowercase text-fg antialiased mb-8 md:mb-12'
        >
          {title.split('').map((char, i) => (
            <span
              key={i}
              className='inline-block overflow-hidden py-4 px-1 -my-4'
            >
              <motion.span
                variants={letterVars}
                className='inline-block will-change-transform'
              >
                {char}
              </motion.span>
            </span>
          ))}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            className='text-accent'
          >
            .
          </motion.span>
        </motion.div>

        {/* THE PITCH: Now using contentContainerVars for internal staggering */}
        <motion.div
          variants={contentContainerVars}
          initial='initial'
          animate='animate'
          className='flex flex-col items-center'
        >
          <div className='max-w-xl space-y-4'>
            <h2
              className='animate-lcp-fade text-xl md:text-2xl font-medium tracking-tight text-fg leading-tight'
              style={{
                willChange: 'opacity, transform',
                animationDelay: '0.1s', // Slightly earlier than the paragraph for a natural flow
              }} // Hinting the browser for better performance
            >
              Put your entire business operations in your pocket.
            </h2>

            {/* PERFORMANCE TWEAK: Using a faster, independent animation for the LCP element */}
            <p
              className='animate-lcp-fade text-[13px] md:text-sm text-fg/70 leading-relaxed max-w-md mx-auto font-light antialiased'
              style={{
                willChange: 'opacity, transform',
                animationDelay: '0.5s', // Syncing with the main animation sequence
              }} // Hinting the browser for better performance
            >
              A venture lab incubating{' '}
              <span className='relative inline-block px-1 py-0.3'>
                <span className='absolute inset-0 bg-accent/10 border-x border-accent/20 -skew-x-12' />
                <span className='relative z-10 font-medium text-accent italic'>
                  Phone-is-my-HQ
                </span>
              </span>{' '}
              tools to automate your logistics, field operations, and critical
              workflows in between.
            </p>
          </div>

          {/* THE UNIFIED CORE */}
          <motion.div
            variants={contentItemVars}
            className='mt-8 flex flex-col items-center'
          >
            <div className='h-8 w-px bg-linear-to-b from-transparent via-accent/40 to-accent' />

            <div className='flex flex-col items-center py-3 bg-bg z-10'>
              <div className='flex items-center gap-2'>
                <span className='w-1.5 h-px bg-accent/30' />
                <p className='text-[9px] font-mono uppercase tracking-[0.4em] text-accent font-medium'>
                  Venture_Lab
                </p>
                <span className='w-1.5 h-px bg-accent/30' />
              </div>
              <p className='text-[8px] font-mono uppercase tracking-[0.2em] text-muted/50 mt-1'>
                Frontend_Engineering // Product_Architect
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, letterSpacing: '0.4em' }}
              whileTap={{ scale: 0.98 }}
              className='group relative mt-1 px-8 py-3.5 overflow-hidden rounded-full border border-fg/10 bg-bg transition-all hover:border-accent/50'
            >
              <span className='relative z-10 font-mono text-[9px] tracking-[0.3em] uppercase text-fg group-hover:text-accent transition-colors'>
                Init_Core_Systems
              </span>
              <div className='absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl' />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className='noise-overlay' />
    </section>
  );
}
