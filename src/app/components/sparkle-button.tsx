"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "../../lib/utils"

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  sparkleColors?: string[]
}

export function SparkleButton({
  className,
  variant = "default",
  size = "default",
  children,
  sparkleColors = ["#c084fc", "#818cf8", "#38bdf8", "#fb7185"],
  ...props
}: SparkleButtonProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; color: string; size: number }>>([])

  const addSparkle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - button.left
    const y = e.clientY - button.top

    const newSparkles = [...sparkles]

    // Add 3-5 sparkles at slightly different positions
    for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
      const offsetX = (Math.random() - 0.5) * 20
      const offsetY = (Math.random() - 0.5) * 20
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)]
      const size = Math.random() * 10 + 5

      newSparkles.push({
        id: Date.now() + i,
        x: x + offsetX,
        y: y + offsetY,
        color,
        size,
      })
    }

    setSparkles(newSparkles)

    // Remove sparkles after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.includes(s)))
    }, 2000)
  }

  return (
    <Button
      className={cn("magical-button relative overflow-hidden", className)}
      variant={variant}
      size={size}
      onMouseDown={addSparkle}
      {...props}
    >
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle absolute pointer-events-none"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
          }}
        />
      ))}
      {children}
    </Button>
  )
}
