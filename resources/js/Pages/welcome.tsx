import React from 'react';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Head } from '@inertiajs/react';

// Define types for the Cube component props
interface CubeProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}

const Cube: React.FC<CubeProps> = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

function LearnNewWords() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Head title="Learn New Words" />
      
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Controls - allows you to drag to rotate, scroll to zoom */}
          <OrbitControls enableZoom={true} />
          
          {/* Grid helper to see the space */}
          <gridHelper args={[10, 10]} />
          
          {/* Axis helper to see directions */}
          <axesHelper args={[5]} />
          
          {/* Your cubes */}
          <group position={[0, 0, 0]}>
            <Cube position={[1, 0, 0]} color="blue" size={[1, 1, 1]} />
            <Cube position={[-1, 0, 0]} color="green" size={[1, 1, 1]} />
            <Cube position={[-1, 2, 0]} color="hotpink" size={[1, 1, 1]} />
            <Cube position={[1, 2, 0]} color="red" size={[1, 1, 1]} />
          </group>
        </Canvas>
      </div>
    </>
  );
}

export default LearnNewWords;