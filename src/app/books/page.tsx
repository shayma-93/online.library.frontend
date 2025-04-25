"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import {
  Star,
  ChevronDown,
  ChevronUp,
  Filter,
  X
} from "lucide-react";
import { motion } from "framer-motion";

// Book data structure
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string[];
  rating: number;
  reviews: number;
  publicationYear: number;
  coverImage: string;
}
import Header from "../components/header";
import Footer from "../components/footer";

// Sample book data
const sampleBooks: Book[] = Array.from({ length: 30 }, (_, i) => ({
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
    "Forgotten Incantations",
    "Twilight Grimoire",
    "Fables of Wonder",
  ][i % 15],
  author: [
    "Mystic Author",
    "Luna Spellbound",
    "Orion Starweaver",
    "Elara Nightshade",
    "Thorne Willowbrook",
    "Zephyr Moonshadow",
    "Aria Dreamweaver",
    "Nova Starlight",
    "Sage Mistral",
    "Lyra Frostwind",
  ][i % 10],
  genre: [
    ["Fantasy", "Adventure"],
    ["Mystery", "Magic"],
    ["Fantasy", "Romance"],
    ["Science Fiction", "Fantasy"],
    ["Historical", "Magic"],
    ["Adventure", "Young Adult"],
    ["Romance", "Fantasy"],
    ["Mystery", "Thriller"],
    ["Fantasy", "Horror"],
    ["Science Fiction", "Adventure"],
  ][i % 10],
  rating: Math.floor(Math.random() * 2) + 3 + Math.random() * 0.9,
  reviews: Math.floor(Math.random() * 150) + 20,
  publicationYear: Math.floor(Math.random() * 10) + 2013,
  coverImage: `/placeholder.svg?height=450&width=300&text=Magical+Book+${
    i + 1
  }`,
}));

// Available genres for filtering
const availableGenres = [
  "Fantasy",
  "Adventure",
  "Mystery",
  "Magic",
  "Romance",
  "Science Fiction",
  "Historical",
  "Young Adult",
  "Thriller",
  "Horror",
];

// Available authors for filtering
const availableAuthors = [
  "Mystic Author",
  "Luna Spellbound",
  "Orion Starweaver",
  "Elara Nightshade",
  "Thorne Willowbrook",
  "Zephyr Moonshadow",
  "Aria Dreamweaver",
  "Nova Starlight",
  "Sage Mistral",
  "Lyra Frostwind",
];

export default function BooksPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sparkleElements, setSparkleElements] = useState<React.ReactElement[]>(
    []
  );
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter states
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<[number, number]>([2013, 2023]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  // Create random sparkles for the background
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 10 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;

      return (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={
                i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#818cf8" : "#38bdf8"
              }
              opacity="0.3"
              className="animate-pulse"
            />
          </svg>
        </div>
      );
    });

    setSparkleElements(newSparkles);
  }, []);

  // Apply filters when any filter changes
  useEffect(() => {
    let result = [...books];

    // Apply search term filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
      );
    }

    // Apply genre filter
    if (selectedGenres.length > 0) {
      result = result.filter((book) =>
        book.genre.some((genre) => selectedGenres.includes(genre))
      );
    }

    // Apply author filter
    if (selectedAuthors.length > 0) {
      result = result.filter((book) => selectedAuthors.includes(book.author));
    }

    // Apply year range filter
    result = result.filter(
      (book) =>
        book.publicationYear >= yearRange[0] &&
        book.publicationYear <= yearRange[1]
    );

    // Apply rating filter
    if (ratingFilter > 0) {
      result = result.filter((book) => book.rating >= ratingFilter);
    }

    setFilteredBooks(result);
  }, [
    books,
    searchTerm,
    selectedGenres,
    selectedAuthors,
    yearRange,
    ratingFilter,
  ]);

  // Toggle genre selection
  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // Toggle author selection
  const toggleAuthor = (author: string) => {
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((a) => a !== author)
        : [...prev, author]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedAuthors([]);
    setYearRange([2013, 2023]);
    setRatingFilter(0);
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-purple-900 font-sans relative overflow-hidden">
      {/* Background sparkles */}
      {sparkleElements}

      <Header />

      <main className="flex-1 container px-4 md:px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="decorative-flourish">✦</span>
            <span className="decorative-dot"></span>
            <span className="decorative-flourish">✦</span>
          </div>
          <h1 className="section-title text-center md:text-left">
            Magical Book Collection
          </h1>
          <div className="decorative-line ml-0 md:mx-0"></div>
          <p className="text-purple-700 md:text-lg text-center md:text-left">
            Explore our enchanted collection of magical books
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-purple-200 text-purple-700"
          >
            <Filter className="h-4 w-4" />
            {isSidebarOpen ? "Hide Filters" : "Show Filters"}
            {isSidebarOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-64 lg:w-72 shrink-0 transition-all duration-300 ease-in-out`}
          >
            <div className="magical-card p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl text-purple-700">
                  Filter Books
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-500 hover:text-purple-700 p-0 h-auto"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-purple-700 mb-2"
                >
                  Search
                </label>
                <div className="relative">
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search titles or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="magical-input"
                  />
                  {searchTerm && (
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Genre Filter */}
              <div className="mb-6">
                <h3 className="font-serif italic font-bold text-purple-700 mb-2">
                  Genre
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {availableGenres.map((genre) => (
                    <div key={genre} className="flex items-center">
                      <Checkbox
                        id={`genre-${genre}`}
                        checked={selectedGenres.includes(genre)}
                        onCheckedChange={() => toggleGenre(genre)}
                        className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <label
                        htmlFor={`genre-${genre}`}
                        className="ml-2 text-sm font-medium text-purple-700 cursor-pointer"
                      >
                        {genre}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Filter */}
              <div className="mb-6">
                <h3 className="font-serif italic font-bold text-purple-700 mb-2">
                  Author
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {availableAuthors.map((author) => (
                    <div key={author} className="flex items-center">
                      <Checkbox
                        id={`author-${author}`}
                        checked={selectedAuthors.includes(author)}
                        onCheckedChange={() => toggleAuthor(author)}
                        className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <label
                        htmlFor={`author-${author}`}
                        className="ml-2 text-sm font-medium text-purple-700 cursor-pointer"
                      >
                        {author}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publication Year Filter */}
              <div className="mb-6">
                <h3 className="font-serif italic font-bold text-purple-700 mb-2">
                  Publication Year
                </h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[yearRange[0], yearRange[1]]}
                    min={2013}
                    max={2023}
                    step={1}
                    value={[yearRange[0], yearRange[1]]}
                    onValueChange={(value: [number, number]) =>
                      setYearRange([value[0], value[1]])
                    }
                    className="my-6"
                  />

                  <div className="flex justify-between text-sm text-purple-700">
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-serif italic font-bold text-purple-700 mb-2">
                  Minimum Rating
                </h3>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() =>
                        setRatingFilter(rating === ratingFilter ? 0 : rating)
                      }
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          rating <= ratingFilter
                            ? "text-purple-500 fill-purple-500"
                            : "text-purple-300"
                        }`}
                      />
                    </button>
                  ))}
                  {ratingFilter > 0 && (
                    <button
                      className="ml-2 text-xs text-purple-500 hover:text-purple-700"
                      onClick={() => setRatingFilter(0)}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Book Grid */}
          <div className="flex-1">
            {filteredBooks.length === 0 ? (
              <div className="magical-card p-8 text-center">
                <h3 className="font-display text-xl text-purple-700 mb-2">
                  No Books Found
                </h3>
                <p className="text-purple-600 mb-4">
                  We couldn't find any books matching your current filters.
                </p>
                <Button
                  onClick={clearFilters}
                  className="magical-button bg-gradient-to-r from-purple-500 to-indigo-500"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                {/* Results count */}
                <div className="mb-6">
                  <p className="text-purple-700">
                    Showing{" "}
                    <span className="font-bold">{filteredBooks.length}</span>{" "}
                    magical books
                  </p>
                </div>

                {/* Books grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto">
                  {filteredBooks.map((book) => (
                    <motion.div
                      key={book.id}
                      whileHover={{
                        scale: 1.03,
                        rotate: Math.random() > 0.5 ? "1deg" : "-1deg",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="photo-pin"
                      style={{
                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                      }}
                    >
                      <div className="aspect-[4/5] overflow-hidden mb-3">
                        <Image
                          src={book.coverImage || "/placeholder.svg"}
                          alt={book.title}
                          width={300}
                          height={450}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 bg-white">
                        <h3 className="font-serif italic font-bold truncate text-purple-700 text-sm">
                          {book.title}
                        </h3>
                        <p className="text-xs text-purple-600">{book.author}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= Math.round(book.rating)
                                    ? "text-purple-500 fill-purple-500"
                                    : "text-purple-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-purple-600 ml-1">
                            ({book.reviews})
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {book.genre.map((g) => (
                            <span
                              key={g}
                              className="inline-block px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px]"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={`/books/${book.id}`}
                        className="absolute inset-0"
                      >
                        <span className="sr-only">View Book Details</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
