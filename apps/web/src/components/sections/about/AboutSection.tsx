'use client';

import { useRef } from 'react';
import { ABOUT_NARRATIVE } from '@/content/about';
import { AboutNarrativeBlock } from './AboutNarrativeBlock';
import { AboutCanvas } from './AboutCanvas';
import { useScrollChapters } from '@/hooks/useScrollChapters';

export function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);

  const { entrances, activeChapter } = useScrollChapters(
    ref,
    ABOUT_NARRATIVE.length,
  );

  return (
    <section
      ref={ref}
      className='relative w-full flex bg-bg '
      style={{
        height: `${ABOUT_NARRATIVE.length * 150}vh`,
      }}
    >
      {/* Narrative Stage */}
      <div className='sticky top-0 h-screen w-[60%] flex items-center'>
        <div className='w-full pl-[6vw] pr-[4vw]'>
          <AboutNarrativeBlock
            entrances={entrances}
            activeChapter={activeChapter}
          />
        </div>
      </div>

      {/* Canvas Stage */}
      <div className='sticky top-0 h-screen w-[40%] flex items-center justify-center'>
        <AboutCanvas entrances={entrances} activeChapter={activeChapter} />
      </div>
    </section>
  );
}
