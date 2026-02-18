import { MotionValue } from 'framer-motion';

export interface ScrollChaptersReturn {
  entrances: {
    canvas: MotionValue<number>;
    narrative: MotionValue<number>;
  };
  activeChapter: number;
}
