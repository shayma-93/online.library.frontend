import type React from "react"
import { cn } from "../../lib/utils"

interface MagicalCardProps {
  className?: string
  children: React.ReactNode
  glowing?: boolean
}

export function MagicalCard({ className, children, glowing = false }: MagicalCardProps) {
  return <div className={cn("magical-card", glowing && "glow", className)}>{children}</div>
}
