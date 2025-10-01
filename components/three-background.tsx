"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedStars() {
  const ref = useRef<THREE.Points>(null!)
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 25 + 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#6366f1" size={0.05} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[3, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#10b981" wireframe transparent opacity={0.6} />
    </mesh>
  )
}

function CodeCube() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2
    }
  })

  return (
    <mesh ref={meshRef} position={[-3, 1, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.4} />
    </mesh>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedStars />
        <FloatingGeometry />
        <CodeCube />
      </Canvas>
    </div>
  )
}
