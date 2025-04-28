import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, BookOpen } from "lucide-react"

// Sample data for demonstration
const bookshelves = [
  {
    id: "1",
    name: "Most Visited Bookshelf",
    description: "The books our magical community visits most frequently",
    theme: "magical",
    books: [
      {
        id: "1",
        title: "The Enchanted Forest",
        author: "Mystic Author",
        rating: 3.5,
        description: "A journey through a forest where magic comes alive and trees whisper ancient secrets.",
      },
      {
        id: "2",
        title: "Whispers of Magic",
        author: "Luna Spellbound",
        rating: 5,
        description: "Discover the hidden language of spells and enchantments in this comprehensive guide.",
      },
      {
        id: "3",
        title: "Crystal Spellbook",
        author: "Orion Starweaver",
        rating: 5,
        description:
          "Harness the power of crystals to enhance your magical abilities and connect with celestial energies.",
      },
      {
        id: "4",
        title: "Moonlit Pages",
        author: "Elara Nightshade",
        rating: 4,
        description:
          "A collection of stories best read under the silver light of the moon, when magic is at its strongest.",
      },
      {
        id: "5",
        title: "Enchanted Realms",
        author: "Thorne Willowbrook",
        rating: 3,
        description: "Explore magical worlds beyond our own, where different rules of magic apply and wonders await.",
      },
      {
        id: "6",
        title: "Astral Chronicles",
        author: "Zephyr Moonshadow",
        rating: 4,
        description: "Journey through the astral plane and discover the secrets of consciousness and spiritual magic.",
      },
      {
        id: "22",
        title: "Fae Whispers",
        author: "Willow Fernsby",
        rating: 4.5,
        description:
          "The secret language and customs of the fae folk, revealed by a rare human visitor to their realm.",
      },
      {
        id: "23",
        title: "Elemental Mastery",
        author: "Ember Rosewood",
        rating: 3.5,
        description: "Master the four elements and become one with the natural forces that shape our world.",
      },
      {
        id: "24",
        title: "Grimoire of Shadows",
        author: "Nova Shadowmoon",
        rating: 5,
        description: "Ancient spells and rituals passed down through generations of shadow practitioners.",
      },
    ],
  },
  {
    id: "2",
    name: "Fantasy Favorites",
    description: "Magical worlds and extraordinary adventures await",
    theme: "fantasy",
    books: [
      {
        id: "7",
        title: "Mystic Whispers",
        author: "Mystic Author",
        rating: 4,
        description: "The wind carries secrets for those who know how to listen. A tale of ancient communication.",
      },
      {
        id: "8",
        title: "Celestial Spells",
        author: "Luna Spellbound",
        rating: 4.5,
        description: "Harness the power of stars and planets in this comprehensive guide to celestial magic.",
      },
      {
        id: "9",
        title: "Arcane Secrets",
        author: "Orion Starweaver",
        rating: 3.5,
        description: "Forbidden knowledge from the ancient magical archives, now revealed to worthy practitioners.",
      },
      {
        id: "10",
        title: "Ethereal Tales",
        author: "Elara Nightshade",
        rating: 4,
        description: "Stories from the realm between worlds, where reality blends with dreams and imagination.",
      },
      {
        id: "11",
        title: "Magical Beginnings",
        author: "Thorne Willowbrook",
        rating: 4.5,
        description: "The perfect introduction to magical practice for those just discovering their abilities.",
      },
      {
        id: "12",
        title: "Sorcery & Stardust",
        author: "Zephyr Moonshadow",
        rating: 4,
        description:
          "Combine the earthly arts of sorcery with the cosmic power of stardust for spectacular magical results.",
      },
    ],
  },
  // Other bookshelves...
]

// Function to render stars based on rating
function renderStars(rating: number) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <Star className="absolute top-0 left-0 h-4 w-4 fill-yellow-400 text-yellow-400 overflow-hidden w-[50%]" />
        </div>,
      )
    } else {
      stars.push(<Star key={i} className="h-4 w-4 text-yellow-400" />)
    }
  }
  return stars
}

export default function BookshelfDetailPage({ params }: { params: { id: string } }) {
  // Find the bookshelf by ID
  const bookshelf = bookshelves.find((shelf) => shelf.id === params.id)

  if (!bookshelf) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-purple-800 mb-4">Bookshelf Not Found</h1>
        <p className="text-purple-700 mb-6">The magical bookshelf you're looking for seems to have vanished.</p>
        <Link href="/bookshelves">
          <Button className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Bookshelves
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-lavender-50 pb-16">
      {/* Header */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <Link href="/bookshelves" className="inline-flex items-center text-purple-700 hover:text-purple-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Bookshelves
          </Link>

          <div className="space-y-2">
            <h1 className="font-dancing-script text-3xl md:text-4xl font-bold text-purple-800">{bookshelf.name}</h1>
            <p className="text-purple-700">{bookshelf.description}</p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookshelf.books.map((book) => (
            <Link href={`/books/${book.id}`} key={book.id}>
              <div className="bg-white/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-purple-800">{book.title}</h3>
                      <p className="text-sm text-purple-600">{book.author}</p>
                    </div>
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex mt-2 mb-4">{renderStars(book.rating)}</div>
                  <p className="text-sm text-purple-700 line-clamp-3">{book.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
