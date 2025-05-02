"use client"

import { cn } from "@/lib/utils"
import { BookOpen, Sparkles, BookMarked, Book, Moon, Sun } from "lucide-react"

type TarotThemeProps = {
  id: string
  name: string
  description: string
  color: string
  borderColor: string
  icon: string
  romanNumeral: string
}

interface TarotThemeCardProps {
  theme: TarotThemeProps
  isSelected: boolean
  onSelect: () => void
}

export default function TarotThemeCard({ theme, isSelected, onSelect }: TarotThemeCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className="h-12 w-12" />
      case "book-open":
        return <BookOpen className="h-12 w-12" />
      case "book-marked":
        return <BookMarked className="h-12 w-12" />
      case "book":
        return <Book className="h-12 w-12" />
      case "moon":
        return <Moon className="h-12 w-12" />
      case "sun":
        return <Sun className="h-12 w-12" />
      default:
        return <BookOpen className="h-12 w-12" />
    }
  }

  return (
    <div
      className={cn(
        "relative cursor-pointer transition-all duration-300 transform hover:scale-105",
        isSelected ? "scale-105" : "",
      )}
      onClick={onSelect}
    >
      {/* Card border */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg border-4",
          theme.borderColor,
          isSelected ? "border-purple-500 shadow-lg" : "",
        )}
      ></div>

      {/* Card content */}
      <div className={cn("relative rounded-lg overflow-hidden p-5 bg-gradient-to-b", theme.color)}>
        {/* Roman numeral */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-600">
          {theme.romanNumeral}
        </div>

        {/* Decorative frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600/30 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-600/30 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-600/30 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600/30 rounded-br-lg"></div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gray-600/30 rounded-tl"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gray-600/30 rounded-tr"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gray-600/30 rounded-bl"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gray-600/30 rounded-br"></div>
        </div>

        {/* Card illustration */}
        <div className="pt-6 pb-2 flex flex-col items-center justify-center min-h-[180px]">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-md transform scale-90"></div>
            <div className="relative">{getIcon(theme.icon)}</div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-gray-600/20"></div>
          <div className="absolute top-1/2 right-2 w-2 h-2 rounded-full bg-gray-600/20"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-[1px] bg-gray-600/30"></div>
        </div>

        {/* Card title */}
        <div className="text-center mt-2 border-t border-gray-600/20 pt-2">
          <h3 className="font-dancing-script text-lg font-bold text-gray-800">{theme.name}</h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{theme.description}</p>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
