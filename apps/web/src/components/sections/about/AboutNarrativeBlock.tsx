'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { ABOUT_NARRATIVE } from '@/content/about';
import { memo } from 'react';

export const AboutNarrativeBlock = memo(function AboutNarrativeBlock({
  entrances,
  activeChapter,
}: {
  entrances: { narrative: MotionValue<number> };
  activeChapter: number;
}) {
  const opacity = useTransform(entrances.narrative, [0, 1], [0, 1]);
  const y = useTransform(entrances.narrative, [0, 1], [50, 0]);

  return (
    <motion.div style={{ opacity, y }} className='relative w-full h-125'>
      {ABOUT_NARRATIVE.map((block, i) => (
        <motion.div
          key={block.tag}
          className='absolute inset-0 flex flex-col justify-center'
          animate={{
            opacity: activeChapter === i ? 1 : 0,
            y: activeChapter === i ? 0 : 30,
            filter: activeChapter === i ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Phase */}
          <header className='flex items-center gap-4 mb-10'>
            <div className='h-px w-10 bg-accent/60' />
            <span className='font-mono text-[11px] tracking-[0.25em] uppercase text-accent'>
              Phase 0{i + 1}
            </span>
          </header>

          {/* Title */}
          <h2 className='font-heading font-black text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] uppercase mb-10'>
            {block.title.split('\n')[0]}
            <span className='block text-accent font-light italic normal-case mt-4'>
              {block.title.split('\n')[1]}
            </span>
          </h2>

          {/* Body */}
          <div className='border-l border-white/10 pl-10 space-y-8 max-w-xl'>
            <p className='text-[clamp(1.05rem,1.2vw,1.35rem)] leading-[1.7] text-fg/75 font-light'>
              {block.content}
            </p>

            <p className='font-mono text-[11px] uppercase tracking-widest text-muted'>
              {block.sub}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
});
