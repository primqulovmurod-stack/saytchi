import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial, 
  MeshTransmissionMaterial, 
  PerspectiveCamera, 
  Environment,
  ContactShadows,
  OrbitControls
} from '@react-three/drei'
import * as THREE from 'three'

function Scene() {
  const mesh = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.cos(time / 4) / 8
    mesh.current.rotation.y = Math.sin(time / 4) / 8
    mesh.current.rotation.z = Math.sin(time / 4) / 20
    mesh.current.position.y = Math.sin(time / 4) / 10
  })

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={mesh} scale={2}>
          <torusKnotGeometry args={[1, 0.35, 256, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
          />
        </mesh>
      </Float>
      
      {/* Decorative clean particles */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshDistortMaterial
          distort={0.4}
          speed={4}
          color="#f0f9ff"
          transparent
          opacity={0.05}
        />
      </mesh>
    </>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Scene />
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2.4} 
          far={4.5} 
        />
      </Canvas>
    </div>
  )
}
