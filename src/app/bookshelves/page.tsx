"use client"
import type React from "react"
import { useState, useEffect } from "react"
import {
  Heart,
  TrendingUp,
  Brain,
  Award,
} from "lucide-react"
import { useMobile } from "../../hooks/use-mobile"
import { Sparkles, Star } from "lucide-react"
import "../../styles/globals.css"
import "./styles.css"
import Footer from "../components/footer"
import Header from "../components/header"
import CreateBookshelfCard from "../components/bookCard"
import BookshelfSection from "../components/bookshelfSection"
import { StarRating2 } from "../components/starRating2" 
// Book data structure
interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  rating: number
}

interface Bookshelf {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  books: Book[]
  style: "colorful" | "vintage" | "modern" | "fantasy"
}

// Sample bookshelf data
const bookshelves: Bookshelf[] = [
  {
    id: "most-visited",
    name: "Most Visited Bookshelf",
    icon: <TrendingUp className="h-5 w-5" />,
    description: "The books our magical community visits most frequently",
    style: "colorful",
    books: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: [
        "The Enchanted Journey",
        "Whispers of Magic",
        "Crystal Spellbook",
        "Moonlit Pages",
        "Enchanted Realms",
        "Astral Chronicles",
        "Mystic Whispers",
        "Celestial Spells",
        "Arcane Secrets",
        "Ethereal Tales",
        "Magical Beginnings",
        "Sorcery & Stardust",
      ][i],
      author: [
        "Mystic Author",
        "Luna Spellbound",
        "Orion Starweaver",
        "Elara Nightshade",
        "Thorne Willowbrook",
        "Zephyr Moonshadow",
      ][i % 6],
      coverImage: `/placeholder.svg?height=450&width=300&text=${encodeURIComponent(
        [
          "The Enchanted Journey",
          "Whispers of Magic",
          "Crystal Spellbook",
          "Moonlit Pages",
          "Enchanted Realms",
          "Astral Chronicles",
          "Mystic Whispers",
          "Celestial Spells",
          "Arcane Secrets",
          "Ethereal Tales",
          "Magical Beginnings",
          "Sorcery & Stardust",
        ][i],
      )}`,
      rating: Math.floor(Math.random() * 2) + 3 + Math.random() * 0.9,
    })),
  },
  {
    id: "must-reads",
    name: "Must Reads",
    icon: <Award className="h-5 w-5" />,
    description: "Essential magical books for every enchanted reader",
    style: "vintage",
    books: Array.from({ length: 14 }, (_, i) => ({
      id: i + 1,
      title: [
        "Forgotten Incantations",
        "Twilight Grimoire",
        "Fables of Wonder",
        "Enchanted Realms",
        "Astral Chronicles",
        "Mystic Whispers",
        "Celestial Spells",
        "Arcane Secrets",
        "Ethereal Tales",
        "Magical Beginnings",
        "Sorcery & Stardust",
        "Crystal Spellbook",
        "Moonlit Pages",
        "The Enchanted Journey",
      ][i],
      author: [
        "Aria Dreamweaver",
        "Nova Starlight",
        "Sage Mistral",
        "Lyra Frostwind",
        "Mystic Author",
        "Luna Spellbound",
        "Orion Starweaver",
      ][i % 7],
      coverImage: `/placeholder.svg?height=450&width=300&text=${encodeURIComponent(
        [
          "Forgotten Incantations",
          "Twilight Grimoire",
          "Fables of Wonder",
          "Enchanted Realms",
          "Astral Chronicles",
          "Mystic Whispers",
          "Celestial Spells",
          "Arcane Secrets",
          "Ethereal Tales",
          "Magical Beginnings",
          "Sorcery & Stardust",
          "Crystal Spellbook",
          "Moonlit Pages",
          "The Enchanted Journey",
        ][i],
      )}`,
      rating: Math.floor(Math.random() * 2) + 3 + Math.random() * 0.9,
    })),
  },
  {
    id: "popular-tropes",
    name: "Popular Tropes",
    icon: <Heart className="h-5 w-5" />,
    description: "Beloved magical themes and storylines",
    style: "modern",
    books: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: [
        "Enemies to Lovers",
        "Chosen One",
        "Hidden Magic",
        "Academy of Magic",
        "Lost Heir",
        "Forbidden Spell",
        "Secret Society",
        "Magical Tournament",
        "Reluctant Hero",
        "Ancient Prophecy",
      ][i],
      author: ["Elara Nightshade", "Thorne Willowbrook", "Zephyr Moonshadow", "Aria Dreamweaver", "Nova Starlight"][
        i % 5
      ],
      coverImage: `/placeholder.svg?height=450&width=300&text=${encodeURIComponent(
        [
          "Enemies to Lovers",
          "Chosen One",
          "Hidden Magic",
          "Academy of Magic",
          "Lost Heir",
          "Forbidden Spell",
          "Secret Society",
          "Magical Tournament",
          "Reluctant Hero",
          "Ancient Prophecy",
        ][i],
      )}`,
      rating: Math.floor(Math.random() * 2) + 3 + Math.random() * 0.9,
    })),
  },
  {
    id: "self-development",
    name: "Self Development",
    icon: <Brain className="h-5 w-5" />,
    description: "Magical guides to personal growth and enlightenment",
    style: "fantasy",
    books: Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      title: [
        "Mindful Magic",
        "Enchanted Habits",
        "Spells for Success",
        "Inner Alchemy",
        "Magical Meditation",
        "Wizarding Wisdom",
        "Potions for Productivity",
        "Enchanted Journaling",
        "Magical Mindset",
        "Spellbound Goals",
        "Mystical Morning Routines",
      ][i],
      author: [
        "Sage Mistral",
        "Lyra Frostwind",
        "Mystic Author",
        "Luna Spellbound",
        "Orion Starweaver",
        "Elara Nightshade",
      ][i % 6],
      coverImage: `/placeholder.svg?height=450&width=300&text=${encodeURIComponent(
        [
          "Mindful Magic",
          "Enchanted Habits",
          "Spells for Success",
          "Inner Alchemy",
          "Magical Meditation",
          "Wizarding Wisdom",
          "Potions for Productivity",
          "Enchanted Journaling",
          "Magical Mindset",
          "Spellbound Goals",
          "Mystical Morning Routines",
        ][i],
      )}`,
      rating: Math.floor(Math.random() * 2) + 3 + Math.random() * 0.9,
    })),
  },
]


// Component for rendering star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3 w-3 ${
            star <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

type BookshelvesPageProps = {}

// Book data
const books = {
  mustReads: [
    {
      id: 1,
      title: "Forgotten Incantations",
      author: "Aria Dreamweaver",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Twilight Grimoire",
      author: "Elias Nightshade",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Whispers of the Ancient",
      author: "Luna Moonshadow",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "Crystal Enchantments",
      author: "Orion Stargazer",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "Runes of Power",
      author: "Thorne Wildwood",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 6,
      title: "Ethereal Bindings",
      author: "Seraphina Dusk",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
  ],
  vintage: [
    {
      id: 7,
      title: "The Alchemist's Legacy",
      author: "Percival Blackwood",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 8,
      title: "Grimoire of Shadows",
      author: "Morgana Ravenwood",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 9,
      title: "Ancient Runes Decoded",
      author: "Thaddeus Thornfield",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 10,
      title: "Celestial Manuscripts",
      author: "Ophelia Starling",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 11,
      title: "Forgotten Lore",
      author: "Barnabas Crowe",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 12,
      title: "Arcane Histories",
      author: "Eleanora Blackthorn",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
  ],
  modern: [
    {
      id: 13,
      title: "Digital Enchantments",
      author: "Zara Codeweaver",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 14,
      title: "Modern Magical Theory",
      author: "Jasper Brightwood",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 15,
      title: "Quantum Spellcasting",
      author: "Nova Lightbringer",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 16,
      title: "Urban Witchcraft",
      author: "Rowan Citywhisper",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 17,
      title: "Techno-Magical Fusion",
      author: "Pixel Stormchaser",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 18,
      title: "Spells for the Digital Age",
      author: "Echo Wireweaver",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
  ],
  fantasy: [
    {
      id: 19,
      title: "Dragon's Breath Chronicles",
      author: "Faelan Emberscale",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 20,
      title: "Realm of the Fae",
      author: "Willow Moonwhisper",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 21,
      title: "Sword of Destiny",
      author: "Griffin Stormforge",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 22,
      title: "Enchanted Kingdoms",
      author: "Lyra Spellsong",
      rating: 5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 23,
      title: "Mythical Beasts",
      author: "Orion Beastcaller",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 24,
      title: "Legends of the Void",
      author: "Astrid Voidwalker",
      rating: 4,
      cover: "/placeholder.svg?height=300&width=200",
    },
  ],
}



// Book component
const Book = ({ book }: { book: any }) => {
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-cover">
          <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <StarRating2 rating={book.rating} />
        </div>
      </div>
    </div>
  )
}

// Bookshelf component
const Bookshelf = ({
  title,
  description,
  books,
  style,
}: { title: string; description: string; books: any[]; style: string }) => {
  // Split books into rows (3 books per row)
  const rows = []
  for (let i = 0; i < books.length; i += 3) {
    rows.push(books.slice(i, i + 3))
  }

  return (
    <section className={`bookshelf-section ${style}`}>
      <div className="bookshelf-header">
        <h2 className="flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          {title}
        </h2>
        <p className="bookshelf-description">{description}</p>
      </div>

      <div className="bookshelf">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="shelf-row">
            <div className="shelf-books">
              {row.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
            <div className="shelf-wood"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function BookshelvesPage({}: BookshelvesPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMobile()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-purple-900 font-sans relative overflow-hidden">

    <Header/>

    <main className="flex flex-col items-center w-full px-4 md:px-6 py-8">
    {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="decorative-flourish">✦</span>
            <span className="decorative-dot"></span>
            <span className="decorative-flourish">✦</span>
          </div>
          <h1 className="section-title text-center">Magical Bookshelves</h1>
          <div className="decorative-line"></div>
          <p className="text-purple-700 md:text-lg text-center max-w-2xl mx-auto">
            Explore our enchanted collection of curated bookshelves, each filled with magical stories waiting to be
            discovered
          </p>
        </div>

        {/* Bookshelves */}
        <div className="space-y-24 mb-16">
        <BookshelfSection
          icon={<TrendingUp className="h-5 w-5" />}
          title={bookshelves[0].name}
          description={bookshelves[0].description}
          books={bookshelves[0].books}
          bookshelfClassName="colorful-bookshelf"
          isMobile={isMobile}
          booksPerRowDesktop={6}
        />
        <BookshelfSection
          icon={<Award className="h-5 w-5" />}
          title={bookshelves[1].name}
          description={bookshelves[1].description}
          books={bookshelves[1].books}
          bookshelfClassName="vintage-bookshelf"
          isMobile={isMobile}
          booksPerRowDesktop={7}
        />
        <BookshelfSection
          icon={<Heart className="h-5 w-5" />}
          title={bookshelves[2].name}
          description={bookshelves[2].description}
          books={bookshelves[2].books}
          bookshelfClassName="modern-bookshelf"
          isMobile={isMobile}
          booksPerRowDesktop={5}
        />
        <BookshelfSection
          icon={<Brain className="h-5 w-5" />}
          title={bookshelves[3].name}
          description={bookshelves[3].description}
          books={bookshelves[3].books}
          bookshelfClassName="fantasy-bookshelf"
          isMobile={isMobile}
          booksPerRowDesktop={5}
        />
      </div>

        {/* Create Your Own Bookshelf CTA */}
        <CreateBookshelfCard />

      </main>

   <Footer/>
   </div>
  );
}