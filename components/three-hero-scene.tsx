"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, Center, Float, Environment } from "@react-three/drei"
import type * as THREE from "three"
import {} from 'three'

function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {"</>"}
          <meshStandardMaterial color="#6366f1" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Center>
    </Float>
  )
}

function OrbitingElements() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.3}>
          <mesh
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 3,
              Math.sin((i / 6) * Math.PI * 2) * 0.5,
              Math.sin((i / 6) * Math.PI * 2) * 3,
            ]}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#10b981" : "#8b5cf6"}
              emissive={i % 2 === 0 ? "#10b981" : "#8b5cf6"}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export function ThreeHeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: "transparent" }}>
        {/* <Environment preset="night" /> */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

        {/* <AnimatedText /> */}
        <OrbitingElements /> 
      </Canvas>
    </div>
  )
}
