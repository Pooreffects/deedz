'use client';

import { useCallback, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AboutModel({ activeChapter }: { activeChapter: number }) {
  const { scene } = useGLTF('/models/model.glb');
  const ref = useRef<THREE.Group>(null);

  const frameCallback = useCallback(
    (state: { clock: THREE.Clock }) => {
      if (!ref.current) return;
      const targetRotY = activeChapter * 0.6;
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotY,
        0.08,
      );
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    },
    [activeChapter],
  );

  useFrame(frameCallback);

  return <primitive ref={ref} object={scene} />;
}
