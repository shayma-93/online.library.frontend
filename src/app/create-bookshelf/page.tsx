"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Textarea } from "../components/ui/textarea"
import { BookOpen, Sparkles, Plus, BookMarked } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

const bookshelfThemes = [
  { id: "magical", name: "Magical", description: "Enchanted forest with sparkling elements" },
  { id: "cozy", name: "Cozy", description: "Warm, comfortable reading nook aesthetic" },
  { id: "vintage", name: "Vintage", description: "Classic library with antique elements" },
  { id: "modern", name: "Modern", description: "Clean, minimalist design with bold accents" },
  { id: "fantasy", name: "Fantasy", description: "Mystical worlds with dragons and castles" },
]

export default function CreateBookshelf() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    theme: "magical",
  })
  const [books, setBooks] = useState<{ title: string; author: string }[]>([])
  const [newBook, setNewBook] = useState({ title: "", author: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleThemeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, theme: value }))
  }

  const handleNewBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewBook((prev) => ({ ...prev, [name]: value }))
  }

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks((prev) => [...prev, { ...newBook }])
      setNewBook({ title: "", author: "" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in a real app
    console.log("Bookshelf created:", { ...formData, books })
  }

  return (
    <div className="container py-12">
      <Header/>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-dancing-script text-4xl font-bold text-purple-800 mb-2">Create Your Magical Bookshelf</h1>
          <p className="text-purple-700">
            Design a personalized bookshelf to organize your enchanted reading collection
          </p>
        </div>

        <div className="bg-white/80 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Bookshelf Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-800 border-b border-purple-200 pb-2">
                Bookshelf Details
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-purple-800">
                    Bookshelf Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="My Magical Collection"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-purple-200 focus-visible:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-purple-800">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your magical bookshelf..."
                    value={formData.description}
                    onChange={handleChange}
                    className="border-purple-200 focus-visible:ring-purple-500 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Bookshelf Theme */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-800 border-b border-purple-200 pb-2">
                Choose Your Bookshelf Aesthetic
              </h2>

              <RadioGroup
                value={formData.theme}
                onValueChange={handleThemeChange}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {bookshelfThemes.map((theme) => (
                  <div key={theme.id} className="relative">
                    <RadioGroupItem value={theme.id} id={theme.id} className="peer sr-only" />
                    <Label
                      htmlFor={theme.id}
                      className="flex flex-col items-center justify-between rounded-md border-2 border-purple-200 p-4 hover:border-purple-400 peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50"
                    >
                      <div className="mb-2">
                        <div className="w-full h-24 bg-purple-100 rounded-md flex items-center justify-center">
                          {theme.id === "magical" && <Sparkles className="h-12 w-12 text-purple-500" />}
                          {theme.id === "cozy" && <BookOpen className="h-12 w-12 text-purple-500" />}
                          {theme.id === "vintage" && <BookMarked className="h-12 w-12 text-purple-500" />}
                          {theme.id === "modern" && <BookOpen className="h-12 w-12 text-purple-500" />}
                          {theme.id === "fantasy" && <Sparkles className="h-12 w-12 text-purple-500" />}
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-purple-800">{theme.name}</span>
                        <p className="text-xs text-purple-600 mt-1">{theme.description}</p>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Add Books */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-800 border-b border-purple-200 pb-2">
                Add Books to Your Shelf
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="bookTitle" className="text-purple-800">
                      Book Title
                    </Label>
                    <Input
                      id="bookTitle"
                      name="title"
                      placeholder="Enter book title"
                      value={newBook.title}
                      onChange={handleNewBookChange}
                      className="border-purple-200 focus-visible:ring-purple-500 mt-1"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="bookAuthor" className="text-purple-800">
                      Author
                    </Label>
                    <Input
                      id="bookAuthor"
                      name="author"
                      placeholder="Enter author name"
                      value={newBook.author}
                      onChange={handleNewBookChange}
                      className="border-purple-200 focus-visible:ring-purple-500 mt-1"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      onClick={addBook}
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Book
                    </Button>
                  </div>
                </div>

                {/* Book List */}
                <div className="mt-4">
                  {books.length > 0 ? (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-purple-800">Your Books:</h3>
                      <div className="border border-purple-200 rounded-md divide-y divide-purple-100">
                        {books.map((book, index) => (
                          <div key={index} className="p-3 flex justify-between items-center">
                            <div>
                              <p className="font-medium text-purple-800">{book.title}</p>
                              <p className="text-sm text-purple-600">by {book.author}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-purple-600 italic">
                      No books added yet. Start building your magical collection!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <Button type="submit" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 px-8">
                Create Magical Bookshelf
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
