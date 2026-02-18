'use client';

import { Canvas } from '@react-three/fiber';
import { memo, Suspense, useState } from 'react';
import {
  PerspectiveCamera,
  Environment,
  Preload,
  PerformanceMonitor,
} from '@react-three/drei';
import { suspend } from 'suspend-react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { AboutModel } from './AboutModel';
// Preset from drei files
const cityaHdri = import('@pmndrs/assets/hdri/city.exr').then(
  (module: { default: string }) => module.default,
);

export const AboutCanvas = memo(function AboutCanvas({
  entrances,
  activeChapter,
}: {
  entrances: { canvas: MotionValue<number> };
  activeChapter: number;
}) {
  const [dpr, setDpr] = useState(1.5);
  const opacity = useTransform(entrances.canvas, [0, 1], [0, 1]);
  const scale = useTransform(entrances.canvas, [0, 1], [0.92, 1]);
  const glConfig = { alpha: true };

  return (
    <motion.div style={{ opacity, scale }} className='w-full h-full'>
      <Canvas dpr={dpr} gl={glConfig}>
        <PerformanceMonitor onDecline={() => setDpr(1)} />
        <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={15} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[6, 6, 10]} intensity={2.5} />
        <Suspense fallback={null}>
          <Environment files={suspend(cityaHdri) as string} />
        </Suspense>
        <Suspense fallback={null}>
          <AboutModel activeChapter={activeChapter} />
        </Suspense>
        <Preload all />
      </Canvas>
    </motion.div>
  );
});
