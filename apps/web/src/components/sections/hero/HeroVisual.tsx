'use client';

import { useRef, useMemo } from 'react';
import { useGLTF, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

export function HeroVisual() {
  const { scene } = useGLTF('/models/model.glb', '/draco/');
  const meshRef = useRef<THREE.Group>(null);

  // 2. Optimization: Memoize the scene to prevent unnecessary re-computations
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Center>
        <primitive
          ref={meshRef}
          object={clonedScene}
          scale={1}
          // A11y: Standard for 3D content
          role='img'
          aria-label='Deedz Foundry Core Visual'
        />
      </Center>
    </Float>
  );
}

useGLTF.preload('/models/model.glb', '/draco/');
