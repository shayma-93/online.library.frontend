"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "../../../lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
  className={cn(
    "block h-5 w-5 rounded-full border-2 border-purple-400 bg-gradient-to-r from-blue-200 to-purple-200",
    "ring-offset-background transition-colors",
    "focus-visible:outline-none focus-visible:ring-0", // Remove the focus ring
    "focus-visible:ring-purple-500", // Optional: Change to a purple focus ring if desired
    "disabled:pointer-events-none disabled:opacity-50"
  )}
  aria-label="Slider thumb"
/>

  </SliderPrimitive.Root>
))

Slider.displayName = "Slider"

export { Slider }
