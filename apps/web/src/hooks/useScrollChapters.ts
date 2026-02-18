'use client';

import { RefObject, useMemo, useState } from 'react';
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

import { ScrollChaptersReturn } from '@/types/scroll';

export function useScrollChapters(
  ref: RefObject<HTMLElement | null>,
  totalChapters: number,
): ScrollChaptersReturn {
  /* ----------------------------
     Scroll Tracking
  ---------------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  /* ----------------------------
     Cinematic smoothing
  ---------------------------- */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  /* ----------------------------
     Entrance pacing (staggered)
  ---------------------------- */
  const canvasEntrance = useTransform(smooth, [0, 0.06], [0, 1]);
  const narrativeEntrance = useTransform(smooth, [0.03, 0.1], [0, 1]);

  /* ----------------------------
     Chapter Timeline
  ---------------------------- */
  const chapterTimeline = useTransform(smooth, [0.1, 0.9], [0, totalChapters]);
  const chapterIndex = useTransform(chapterTimeline, (v) => Math.floor(v));
  /* ----------------------------
     Active Chapter State
  ---------------------------- */
  const [activeChapter, setActiveChapter] = useState(0);
  useMotionValueEvent(chapterIndex, 'change', setActiveChapter);

  const entrances = useMemo(
    () => ({
      canvas: canvasEntrance,
      narrative: narrativeEntrance,
    }),
    [canvasEntrance, narrativeEntrance],
  );

  /* ----------------------------
     Return Scroll Contract
  ---------------------------- */
  return { entrances, activeChapter };
}
