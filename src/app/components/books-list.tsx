"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample book data - expanded from popular books
const allBooks = [
  {
    id: "1",
    title: "The Enchanted Forest",
    author: "Mystic Author",
    rating: 4.5,
    coverUrl: "https://covers.openlibrary.org/b/id/10200092-L.jpg",
    genre: "Fantasy",
    year: 2020,
    pages: 320,
  },
  {
    id: "2",
    title: "Whispers of Magic",
    author: "Luna Spellbound",
    rating: 5,
    coverUrl: "https://covers.openlibrary.org/b/id/10200091-L.jpg",
    genre: "Magic",
    year: 2019,
    pages: 280,
  },
  {
    id: "3",
    title: "Crystal Spellbook",
    author: "Orion Starweaver",
    rating: 4.8,
    coverUrl: "https://covers.openlibrary.org/b/id/10200090-L.jpg",
    genre: "Spells",
    year: 2021,
    pages: 350,
  },
  {
    id: "13",
    title: "The Dragon's Hoard",
    author: "Aldric Dragonheart",
    rating: 4.6,
    coverUrl: "https://covers.openlibrary.org/b/id/10200095-L.jpg",
    genre: "Fantasy",
    year: 2023,
    pages: 450,
  },
  {
    id: "14",
    title: "Witch's Brew",
    author: "Seraphina Vood",
    rating: 4.7,
    coverUrl: "https://covers.openlibrary.org/b/id/10200093-L.jpg",
    genre: "Horror",
    year: 2022,
    pages: 370,
  },
  {
    id: "15",
    title: "Fables from the Forest",
    author: "Bramble Thorn",
    rating: 4.4,
    coverUrl: "https://covers.openlibrary.org/b/id/10200097-L.jpg",
    genre: "Adventure",
    year: 2018,
    pages: 300,
  },
  {
    id: "16",
    title: "Secrets of the Elders",
    author: "Liora Windstrider",
    rating: 4.9,
    coverUrl: "https://covers.openlibrary.org/b/id/10200099-L.jpg",
    genre: "Mystery",
    year: 2024,
    pages: 480,
  },
  {
    id: "17",
    title: "Arcane Legacy",
    author: "Raven Darkcloud",
    rating: 4.3,
    coverUrl: "https://covers.openlibrary.org/b/id/10200094-L.jpg",
    genre: "Fantasy",
    year: 2020,
    pages: 400,
  },
  {
    id: "18",
    title: "Journeys Through Time",
    author: "Clara Timekeeper",
    rating: 4.5,
    coverUrl: "https://covers.openlibrary.org/b/id/10200096-L.jpg",
    genre: "Sci-Fi",
    year: 2021,
    pages: 340,
  },
  {
    id: "19",
    title: "The Sorcerer's Code",
    author: "Isolde Frost",
    rating: 4.6,
    coverUrl: "https://covers.openlibrary.org/b/id/10200098-L.jpg",
    genre: "Fantasy",
    year: 2023,
    pages: 410,
  },
  {
    id: "20",
    title: "Echoes of the Past",
    author: "Dorian Graves",
    rating: 4.8,
    coverUrl: "https://covers.openlibrary.org/b/id/10200100-L.jpg",
    genre: "Historical Fiction",
    year: 2019,
    pages: 370,
  },
  // Additional books
  {
    id: "21",
    title: "The Shattered Crown",
    author: "Elara Moonshadow",
    rating: 4.7,
    coverUrl: "https://covers.openlibrary.org/b/id/10200101-L.jpg",
    genre: "Fantasy",
    year: 2024,
    pages: 500,
  },
  {
    id: "22",
    title: "Veil of Shadows",
    author: "Galen Blackthorn",
    rating: 4.5,
    coverUrl: "https://covers.openlibrary.org/b/id/10200102-L.jpg",
    genre: "Thriller",
    year: 2023,
    pages: 420,
  },
  {
    id: "23",
    title: "The Timekeeper's Daughter",
    author: "Sylvia Starlight",
    rating: 4.8,
    coverUrl: "https://covers.openlibrary.org/b/id/10200103-L.jpg",
    genre: "Time Travel",
    year: 2022,
    pages: 375,
  },
  {
    id: "24",
    title: "The Moonlit Path",
    author: "Daphne Nightshade",
    rating: 4.9,
    coverUrl: "https://covers.openlibrary.org/b/id/10200104-L.jpg",
    genre: "Romance",
    year: 2024,
    pages: 310,
  },
  {
    id: "25",
    title: "Dark Wings",
    author: "Lucian Shadowmere",
    rating: 4.6,
    coverUrl: "https://covers.openlibrary.org/b/id/10200105-L.jpg",
    genre: "Fantasy",
    year: 2021,
    pages: 380,
  },
  {
    id: "26",
    title: "The Forbidden Realm",
    author: "Mira Windwhisper",
    rating: 4.7,
    coverUrl: "https://covers.openlibrary.org/b/id/10200106-L.jpg",
    genre: "Adventure",
    year: 2023,
    pages: 450,
  },
  {
    id: "27",
    title: "Firestorm",
    author: "Kieran Blaze",
    rating: 4.5,
    coverUrl: "https://covers.openlibrary.org/b/id/10200107-L.jpg",
    genre: "Sci-Fi",
    year: 2022,
    pages: 330,
  },
  {
    id: "28",
    title: "Winds of Fate",
    author: "Seraphina Stormrider",
    rating: 4.8,
    coverUrl: "https://covers.openlibrary.org/b/id/10200108-L.jpg",
    genre: "Fantasy",
    year: 2023,
    pages: 460,
  },
]


export default function BooksList() {
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 15

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
    return (charSum % 10) - 4 // Range from -3 to +3 degrees
  }

 
  return (
    <div>
      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {currentBooks.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id} className="group relative flex flex-col">
            <div
              className="relative bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              style={{
                transform: `rotate(${getRandomRotation(book.id)}deg)`,
                transformOrigin: "center top",
              }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-200 rounded-full border border-yellow-200 shadow-sm z-10"></div>

              <div className="relative h-[220px] rounded-xl shadow-lg overflow-hidden mb-2">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-300"></div>
                <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover shadow-lg" />
              </div>

              <div className="p-2 flex-1 flex flex-col">
                <h3 className="italic font-bold text-purple-900 font-akaya-kanadaka text-xl group-hover:text-purple-500 transition-colors">
                  {book.title}
                </h3>
                <p className="text-lg  font-akaya-kanadaka  text-purple-800">{book.author}</p>
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
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(index + 1)}
                  className={cn(
                    "rounded-sm",
                    currentPage === index + 1
                      ? "bg-purple-400 text-white"
                      : "border-purple-200 text-purple-400 hover:bg-purple-50",
                  )}
                >
                  {index + 1}
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