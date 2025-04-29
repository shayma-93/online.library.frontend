import Link from "next/link"
import { Button } from "../components/ui/button"
import { Sparkles, Plus, ArrowRight, BookOpen } from "lucide-react"
import BookshelfDisplay from "../components/bookshelf-display"
import Header from "../components/header"
import Footer from "../components/footer"
import {BookshelfProps} from "../components/enhanced-bookshelf-display"
import CreateBookshelf from "../create-bookshelf/page"

// Sample data for demonstration
const bookshelves: BookshelfProps[] = [
  {
    id: "1",
    name: "Most Visited Bookshelf",
    description: "The books our magical community visits most frequently",
    theme: "magical",
    owner: {
      id: "admin1",
      name: "Enchanted Library",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    books: [
      { id: "1", title: "The Enchanted Forest", author: "Mystic Author", rating: 3.5, availability: "available" },
      { id: "2", title: "Whispers of Magic", author: "Luna Spellbound", rating: 5, availability: "available" },
      {
        id: "3",
        title: "Crystal Spellbook",
        author: "Orion Starweaver",
        rating: 5,
        availability: "borrowed",
        borrowedBy: "Eliza Thornwood",
        borrowDate: "2023-04-15",
        returnDate: "2023-04-29",
      },
      { id: "4", title: "Moonlit Pages", author: "Elara Nightshade", rating: 4, availability: "available" },
      { id: "5", title: "Enchanted Realms", author: "Thorne Willowbrook", rating: 3, availability: "available" },
      {
        id: "6",
        title: "Astral Chronicles",
        author: "Zephyr Moonshadow",
        rating: 4,
        availability: "borrowed",
        borrowedBy: "Marcus Flint",
        borrowDate: "2023-04-20",
        returnDate: "2023-05-04",
      },
    ],
  },
  {
    id: "2",
    name: "Fantasy Favorites",
    description: "Magical worlds and extraordinary adventures await",
    theme: "fantasy",
    owner: {
      id: "user1",
      name: "Aurora Dreamweaver",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    books: [
      { id: "7", title: "Mystic Whispers", author: "Mystic Author", rating: 4, availability: "available" },
      { id: "8", title: "Celestial Spells", author: "Luna Spellbound", rating: 4.5, availability: "available" },
      {
        id: "9",
        title: "Arcane Secrets",
        author: "Orion Starweaver",
        rating: 3.5,
        availability: "borrowed",
        borrowedBy: "Sage Moonshadow",
        borrowDate: "2023-04-18",
        returnDate: "2023-05-02",
      },
      { id: "10", title: "Ethereal Tales", author: "Elara Nightshade", rating: 4, availability: "available" },
      { id: "11", title: "Magical Beginnings", author: "Thorne Willowbrook", rating: 4.5, availability: "available" },
      { id: "12", title: "Sorcery & Stardust", author: "Zephyr Moonshadow", rating: 4, availability: "available" },
    ],
  },
  {
    id: "3",
    name: "Cozy Reads",
    description: "Perfect companions for rainy days and warm tea",
    theme: "cozy",
    owner: {
      id: "user2",
      name: "Willow Fernsby",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    books: [
      { id: "13", title: "Cottage Mysteries", author: "Hazel Thornfield", rating: 4.5, availability: "available" },
      {
        id: "14",
        title: "Teacup Tales",
        author: "Ember Rosewood",
        rating: 5,
        availability: "borrowed",
        borrowedBy: "Lily Whiterose",
        borrowDate: "2023-04-10",
        returnDate: "2023-04-24",
      },
      { id: "15", title: "Fireside Stories", author: "Aspen Oakley", rating: 4, availability: "available" },
      { id: "16", title: "Autumn Whispers", author: "Rowan Mapleton", rating: 3.5, availability: "available" },
      { id: "17", title: "Garden Secrets", author: "Willow Fernsby", rating: 4, availability: "available" },
    ],
  },
  {
    id: "4",
    name: "Mystical Journeys",
    description: "Embark on adventures beyond imagination",
    theme: "magical",
    owner: {
      id: "user3",
      name: "Orion Eclipse",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    books: [
      { id: "18", title: "Portal to Elsewhere", author: "Lyra Starlight", rating: 4, availability: "available" },
      {
        id: "19",
        title: "The Forgotten Realm",
        author: "Orion Eclipse",
        rating: 4.5,
        availability: "borrowed",
        borrowedBy: "Astrid Silverleaf",
        borrowDate: "2023-04-05",
        returnDate: "2023-04-19",
      },
      { id: "20", title: "Whispers of the Void", author: "Nova Shadowmoon", rating: 3.5, availability: "available" },
      { id: "21", title: "Enchanted Pathways", author: "Sage Moonstone", rating: 5, availability: "available" },
    ],
  },
]

export default function BookshelvesPage() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 pb-16">
  <section className="w-full py-12 md:py-16 relative overflow-hidden">
    {/* Background floating dots */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-10 left-[10%] w-8 h-8 bg-purple-200 rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-20 right-[15%] w-6 h-6 bg-purple-300 rounded-full opacity-30 animate-float-delayed"></div>
      <div className="absolute bottom-10 left-[20%] w-10 h-10 bg-purple-100 rounded-full opacity-50 animate-float-slow"></div>
    </div>

    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
      <div className="flex items-center justify-center mb-4">
        <div className="h-px w-12 bg-purple-300"></div>
        <Sparkles className="h-5 w-5 mx-2 text-purple-500" />
        <div className="h-px w-12 bg-purple-300"></div>
      </div>
      <h1 className="font-dancing-script text-4xl md:text-5xl font-bold text-purple-800 mb-4">
        Magical Bookshelves
      </h1>
      <p className="text-purple-700 md:text-lg max-w-2xl mx-auto">
        Explore our enchanted collection of curated bookshelves, each filled with magical stories waiting to be discovered
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link href="/create-bookshelf">
      <Button className="bg-blue-300 hover:bg-blue-200 text-purple-900 font-bold rounded-lg relative overflow-hidden group w-full px-8">
  <span className="relative z-10 flex items-center">
    <Plus className="h-4 w-4 mr-2" />
    Create Your Own Bookshelf
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>

        </Link>
        <Link href="/library-card">
        <Button className="bg-purple-400 hover:bg-purple-300 text-blue-900 font-bold rounded-lg relative overflow-hidden group w-full px-8">
  <span className="relative z-10 flex items-center">
    <BookOpen className="h-4 w-4 mr-2" />
    My Library Card
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>

        </Link>
      </div>
    </div>
  </section>

  {/* Bookshelves Section */}
  <section className="container mx-auto px-4 md:px-6 space-y-16">
    {bookshelves.map((bookshelf) => (
      <div key={bookshelf.id} className="space-y-6 text-center">
        <div className="space-y-2">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 font-dancing-script">{bookshelf.name}</h2>
            <ArrowRight className="h-5 w-5 ml-2 text-purple-600" />
          </div>
          <p className="text-purple-700">{bookshelf.description}</p>
        </div>

        <BookshelfDisplay bookshelf={bookshelf} />

        <div className="flex justify-center">
          <Link href={`/bookshelves/${bookshelf.id}`}>
            <Button
              variant="outline"
              className="rounded-sm border-purple-200 text-purple-700 hover:bg-purple-100"
            >
              View All Books in this Shelf
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    ))}
  </section>
</div>

    <Footer/>
    </div>
  )
}
