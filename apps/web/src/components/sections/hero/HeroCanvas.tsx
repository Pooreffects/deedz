'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
  Preload,
} from '@react-three/drei';
import { HeroVisual } from './HeroVisual';

export function HeroCanvas() {
  return (
    <div className='absolute inset-0 z-10 h-screen w-full overflow-hidden pointer-events-none'>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={12} />
        <ambientLight intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={5}
        />

        <Suspense fallback={null}>
          <HeroVisual />
          <Environment preset='city' />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.3}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
