import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const points = useRef<THREE.Points>(null!);
  
  const particlesCount = 800;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.08;
      
      // Gentle floating animation
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.1 + positions[i];
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3B82F6"
        transparent
        opacity={0.6}
        vertexColors={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

const GeometricShapes = () => {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Floating wireframe cubes */}
      <mesh position={[-5, 2, -5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#FFD700" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[5, -2, -3]}>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[0, 3, -8]}>
        <tetrahedronGeometry args={[1.2]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

export const ParticleBackground = () => {
  return (
    <div className="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles />
        <GeometricShapes />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};