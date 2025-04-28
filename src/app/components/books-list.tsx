"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Star, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample book data - expanded from popular books
const allBooks = [
  {
    id: "1",
    title: "The Enchanted Forest",
    author: "Mystic Author",
    rating: 4.5,
    coverUrl: "/images/book-covers/enchanted-forest.png",
    genre: "Fantasy",
    year: 2020,
    pages: 320,
  },
  {
    id: "2",
    title: "Whispers of Magic",
    author: "Luna Spellbound",
    rating: 5,
    coverUrl: "/images/book-covers/whispers-magic.png",
    genre: "Magic",
    year: 2019,
    pages: 280,
  },
  {
    id: "3",
    title: "Crystal Spellbook",
    author: "Orion Starweaver",
    rating: 4.8,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Spells",
    year: 2021,
    pages: 350,
  },
  {
    id: "4",
    title: "Moonlit Pages",
    author: "Elara Nightshade",
    rating: 4.2,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Mystery",
    year: 2018,
    pages: 290,
  },
  {
    id: "5",
    title: "Enchanted Realms",
    author: "Thorne Willowbrook",
    rating: 4.7,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Adventure",
    year: 2022,
    pages: 410,
  },
  {
    id: "6",
    title: "Astral Chronicles",
    author: "Zephyr Moonshadow",
    rating: 4.4,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Fantasy",
    year: 2020,
    pages: 380,
  },
  {
    id: "7",
    title: "The Wizard's Apprentice",
    author: "Merlin Ambrose",
    rating: 4.6,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Magic",
    year: 2021,
    pages: 340,
  },
  {
    id: "8",
    title: "Potions & Possibilities",
    author: "Sage Willowroot",
    rating: 4.3,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Spells",
    year: 2019,
    pages: 300,
  },
  {
    id: "9",
    title: "Mythical Creatures Guide",
    author: "Fauna Beastkeeper",
    rating: 4.9,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Creatures",
    year: 2022,
    pages: 420,
  },
  {
    id: "10",
    title: "Ancient Runes Decoded",
    author: "Runic Scholar",
    rating: 4.7,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "History",
    year: 2018,
    pages: 380,
  },
  {
    id: "11",
    title: "Herbology Essentials",
    author: "Flora Greenthumb",
    rating: 4.5,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Nature",
    year: 2020,
    pages: 290,
  },
  {
    id: "12",
    title: "Divination: Seeing Beyond",
    author: "Cassandra Seer",
    rating: 4.2,
    coverUrl: "/placeholder.svg?height=300&width=200",
    genre: "Divination",
    year: 2021,
    pages: 260,
  },
]

export default function BooksList() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 9

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook)
  const totalPages = Math.ceil(allBooks.length / booksPerPage)

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-purple-200 text-purple-200" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-purple-200" />
            <Star className="absolute top-0 left-0 h-4 w-4 fill-purple-200 text-purple-200 overflow-hidden w-[50%]" />
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-purple-100" />)
      }
    }
    return stars
  }

  // Function to generate a random rotation for the photo effect
  const getRandomRotation = (id: string) => {
    // Use the book ID to generate a consistent but seemingly random rotation
    const charSum = id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    return (charSum % 6) - 3 // Range from -3 to +3 degrees
  }

  return (
    <div>
      {/* View Controls */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-purple-500">View:</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode("grid")}
            className={cn(
              "p-1 rounded-sm",
              viewMode === "grid" ? "bg-purple-100 text-purple-500" : "text-purple-300 hover:text-purple-500",
            )}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode("list")}
            className={cn(
              "p-1 rounded-sm",
              viewMode === "list" ? "bg-purple-100 text-purple-500" : "text-purple-300 hover:text-purple-500",
            )}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Books Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBooks.map((book) => (
            <Link href={`/books/${book.id}`} key={book.id} className="group relative flex flex-col">
              {/* Photo frame effect */}
              <div
                className="relative bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{
                  transform: `rotate(${getRandomRotation(book.id)}deg)`,
                  transformOrigin: "center top",
                }}
              >
                {/* Pin/clip decoration */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-100 rounded-full border border-yellow-200 shadow-sm z-10"></div>

                {/* Book cover */}
                <div className="relative h-[220px] overflow-hidden mb-2">
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-300"></div>
                  <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>

                {/* Book info */}
                <div className="p-2 flex-1 flex flex-col">
                  <h3 className="font-medium text-purple-700 group-hover:text-purple-500 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-purple-500">{book.author}</p>
                  <div className="flex mt-2 mb-2">{renderStars(book.rating)}</div>
                  <div className="flex justify-between mt-auto pt-2 border-t border-purple-50">
                    <span className="text-xs text-purple-400 bg-purple-50 px-2 py-0.5 rounded-sm">{book.genre}</span>
                    <span className="text-xs text-purple-500">{book.pages} pages</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {currentBooks.map((book) => (
            <Link
              href={`/books/${book.id}`}
              key={book.id}
              className="flex bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              style={{
                transform: `rotate(${getRandomRotation(book.id) * 0.5}deg)`, // Smaller rotation for list view
                transformOrigin: "center left",
              }}
            >
              <div className="relative w-[100px] h-[150px] flex-shrink-0 overflow-hidden">
                <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-medium text-purple-700 group-hover:text-purple-500 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-purple-500">{book.author}</p>
                <div className="flex mt-2">{renderStars(book.rating)}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs text-purple-400 bg-purple-50 px-2 py-0.5 rounded-sm">{book.genre}</span>
                  <span className="text-xs text-purple-500">{book.year}</span>
                  <span className="text-xs text-purple-500">{book.pages} pages</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-purple-200 text-purple-400 hover:bg-purple-50 rounded-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "rounded-sm min-w-[2rem] px-2",
                    currentPage === page
                      ? "bg-purple-300 hover:bg-purple-400 text-white"
                      : "border-purple-200 text-purple-400 hover:bg-purple-50",
                  )}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-purple-200 text-purple-400 hover:bg-purple-50 rounded-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
