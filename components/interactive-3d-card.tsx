"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, Box } from "@react-three/drei"
import type * as THREE from "three"

interface Interactive3DCardProps {
  title: string
  description: string
  color?: string
}

function Card3D({ title, description, color = "#6366f1" }: Interactive3DCardProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.1
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        <Box
          ref={meshRef}
          args={[2, 1.2, 0.1]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial color={color} transparent opacity={0.8} roughness={0.1} metalness={0.8} />
        </Box>
        <Text
          position={[0, 0.2, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          {title}
        </Text>
        <Text
          position={[0, -0.1, 0.06]}
          fontSize={0.08}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
          font="/fonts/Inter_Regular.json"
        >
          {description}
        </Text>
      </group>
    </Float>
  )
}

export function Interactive3DCard(props: Interactive3DCardProps) {
  return (
    <div className="w-full h-64">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Card3D {...props} />
      </Canvas>
    </div>
  )
}
