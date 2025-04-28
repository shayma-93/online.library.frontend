"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { ArrowLeft, Sparkles } from "lucide-react"
import TarotThemeCard from "../components/tarot-theme-card"
import BookshelfDisplay from "../components/bookshelf-display"

// Define tarot-themed bookshelf themes
const tarotThemes = [
  {
    id: "magical",
    name: "The Enchanted",
    description: "Mystical realms of wonder and magic",
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    icon: "sparkles",
    romanNumeral: "I",
  },
  {
    id: "cozy",
    name: "The Comfort",
    description: "Warm embrace of familiar tales",
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    icon: "book-open",
    romanNumeral: "II",
  },
  {
    id: "vintage",
    name: "The Ancient",
    description: "Timeless wisdom of bygone eras",
    color: "from-stone-50 to-stone-100",
    borderColor: "border-stone-200",
    icon: "book",
    romanNumeral: "III",
  },
  {
    id: "modern",
    name: "The Clarity",
    description: "Clean lines of contemporary thought",
    color: "from-gray-50 to-gray-100",
    borderColor: "border-gray-200",
    icon: "sun",
    romanNumeral: "IV",
  },
  {
    id: "fantasy",
    name: "The Dreamer",
    description: "Fantastical worlds beyond imagination",
    color: "from-blue-50 to-indigo-100",
    borderColor: "border-blue-200",
    icon: "moon",
    romanNumeral: "V",
  },
]

export default function CreateBookshelf() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    theme: "magical",
  })
  const [books, setBooks] = useState([])

  // Create a preview bookshelf object that updates as the user makes changes
  const previewBookshelf = {
    id: "preview",
    name: formData.name || "My Magical Bookshelf",
    description: formData.description || "A place for my favorite enchanted reads",
    theme: formData.theme,
    owner: {
      id: "current-user",
      name: "You",
    },
    books: books,
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleThemeChange = (themeId: string) => {
    setFormData((prev) => ({ ...prev, theme: themeId }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please give your bookshelf a magical name.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    // In a real app, this would save to a database
    toast({
      title: "Bookshelf Created!",
      description: "Your magical bookshelf has been created successfully.",
      duration: 3000,
    })

    // Navigate to bookshelves page
    setTimeout(() => {
      router.push("/bookshelves")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100/30 pb-16">
      {/* Header */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Link href="/bookshelves" className="inline-flex items-center text-purple-700 hover:text-purple-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bookshelves
          </Link>

          <div className="space-y-2">
            <h1 className="font-dancing-script text-3xl md:text-4xl font-bold text-purple-800">
              Create Your Magical Bookshelf
            </h1>
            <p className="text-purple-700">Design a personalized bookshelf to showcase your favorite magical reads</p>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="container px-4 md:px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Basic Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Bookshelf Details</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-800">
                  Bookshelf Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter a magical name for your bookshelf"
                  required
                  className="border-purple-200 focus-visible:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-purple-800">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the theme or purpose of your bookshelf"
                  className="min-h-[100px] border-purple-200 focus-visible:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Choose Aesthetic */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Choose Your Bookshelf Aesthetic</h2>
            <p className="text-purple-700 mb-6">Select a magical theme that reflects your reading personality</p>

            {/* Tarot-inspired theme cards */}
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[url('/images/tarot-cards-bg.png')] opacity-5 rounded-lg"></div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {tarotThemes.map((theme) => (
                  <TarotThemeCard
                    key={theme.id}
                    theme={theme}
                    isSelected={formData.theme === theme.id}
                    onSelect={() => handleThemeChange(theme.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* MyShelf Preview Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-purple-800 mb-4">MyShelf Preview</h2>
            <p className="text-purple-700 mb-6">
              Add books to your shelf and see how it will look. You can add, remove, or lend books to customize your
              collection.
            </p>

            <div className="mt-6">
              <BookshelfDisplay bookshelf={previewBookshelf} editable={true} />
            </div>

            <div className="mt-6 text-center text-sm text-purple-600">
              <p>
                Click the <span className="font-medium">+ Add Book</span> button on the shelf to start building your
                collection
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full text-lg"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Create Magical Bookshelf
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}
