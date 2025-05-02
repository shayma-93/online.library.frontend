"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, PresentationControls, Html } from "@react-three/drei"
import { useEffect, useState } from "react"

// Define the type for Book component props
type BookProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
};

function Book({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, color = "#8B4513" }: BookProps) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1.5, 0.2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Define the type for BookModel component props
type BookModelProps = {
  scale?: number;
};

function BookModel({ }: BookModelProps) {
  return (
    <group>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.8}>
        <boxGeometry args={[1.2, 1.8, 0.3]} />
        <meshStandardMaterial color="#c084fc" />
      </mesh>
    </group>
  );
}

export default function BookshelfScene() {
  // Safe check for browser environment
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const bookColors = [
    "#c084fc", // Purple
    "#818cf8", // Indigo
    "#38bdf8", // Blue
    "#fb7185", // Pink
    "#a78bfa", // Violet
    "#60a5fa", // Light Blue
    "#f472b6", // Pink
    "#34d399", // Emerald
    "#a855f7", // Purple
    "#2dd4bf", // Teal
  ]

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#c084fc" />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} color="#38bdf8" />
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float rotationIntensity={0.2}>
          <group position={[0, -0.5, 0]}>
            {/* Bookshelf - curved design */}
            <mesh position={[0, 0, -0.6]} receiveShadow>
              <cylinderGeometry args={[2.5, 2.5, 3, 32, 1, true, -Math.PI / 4, Math.PI / 2]} />
              <meshStandardMaterial color="#7e22ce" />
            </mesh>

            {/* Shelves */}
            <mesh position={[0, -1, 0]} receiveShadow>
              <cylinderGeometry args={[2.5, 2.5, 0.1, 32, 1, true, -Math.PI / 4, Math.PI / 2]} />
              <meshStandardMaterial color="#9333ea" />
            </mesh>

            <mesh position={[0, 1, 0]} receiveShadow>
              <cylinderGeometry args={[2.5, 2.5, 0.1, 32, 1, true, -Math.PI / 4, Math.PI / 2]} />
              <meshStandardMaterial color="#9333ea" />
            </mesh>

            {/* Books on bottom shelf */}
            {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((x, i) => (
              <Book
                key={`bottom-${i}`}
                position={[x, -1.6, 0]}
                rotation={[0, i % 3 === 0 ? 0.1 : i % 3 === 1 ? -0.1 : 0, 0]}
                color={bookColors[i % bookColors.length]}
              />
            ))}

            {/* Books on top shelf */}
            {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((x, i) => (
              <Book
                key={`top-${i}`}
                position={[x, 0.4, 0]}
                rotation={[0, i % 3 === 0 ? -0.1 : i % 3 === 1 ? 0.1 : 0, 0]}
                color={bookColors[(i + 5) % bookColors.length]}
              />
            ))}

            {/* Featured book */}
            <group position={[0, 0, 1.5]} rotation={[0, 0, 0]}>
              <BookModel scale={0.7} />
              <Html position={[0, 1.5, 0]} center transform>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center w-40 border border-purple-200">
                  <p className="font-display text-purple-700 font-bold">Featured Book</p>
                  <p className="text-xs text-purple-500">Discover our collection</p>
                </div>
              </Html>
            </group>

            {/* Magical particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <mesh
                key={i}
                position={[(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2]}
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
        </Float>
        <Environment preset="apartment" />
      </PresentationControls>
    </Canvas>
  )
}
