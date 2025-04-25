"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, PresentationControls, Text } from "@react-three/drei"
import { useEffect, useState } from "react"

export default function HeroBookScene() {
  // Safe check for browser environment
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#c084fc" />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} color="#38bdf8" />
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 6, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float rotationIntensity={0.4}>
          <group position={[0, 0, 0]}>
            {/* Open book */}
            <group>
              {/* Left page */}
              <mesh position={[-0.5, 0, 0]} rotation={[0, -0.3, 0]}>
                <boxGeometry args={[1, 1.5, 0.05]} />
                <meshStandardMaterial color="#f5f3ff" />
              </mesh>

              {/* Right page */}
              <mesh position={[0.5, 0, 0]} rotation={[0, 0.3, 0]}>
                <boxGeometry args={[1, 1.5, 0.05]} />
                <meshStandardMaterial color="#f5f3ff" />
              </mesh>

              {/* Book spine */}
              <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1, 16, 1, true, 0, Math.PI]} />
                <meshStandardMaterial color="#c084fc" />
              </mesh>

              {/* Book text */}
              <Text
                position={[-0.5, 0.2, 0.03]}
                rotation={[0, -0.3, 0]}
                fontSize={0.1}
                color="#7e22ce"
                anchorX="center"
                anchorY="middle"
              >
                EnchantedReads
              </Text>

              {/* Magical particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <mesh
                  key={i}
                  position={[(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3]}
                >
                  <sphereGeometry args={[0.03, 8, 8]} />
                  <meshStandardMaterial
                    color={i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#818cf8" : "#38bdf8"}
                    emissive={i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#818cf8" : "#38bdf8"}
                    emissiveIntensity={0.5}
                  />
                </mesh>
              ))}
            </group>
          </group>
        </Float>
        <Environment preset="apartment" />
      </PresentationControls>
    </Canvas>
  )
}
