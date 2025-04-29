import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useMobile } from "../../hooks/use-mobile";
import { useState } from "react";
import { StarRating } from "./starRating";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage?: string;
  rating: number;
}

interface BookshelfSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  books: Book[];
  bookshelfClassName: string;
  isMobile: boolean;
  booksPerRowDesktop: number;
}

export default function BookshelfSection({
  icon,
  title,
  description,
  books,
  bookshelfClassName,
  booksPerRowDesktop,
}: BookshelfSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useMobile();

  // Filter books based on search query
  const getFilteredBooks = (books: Book[]) => {
    if (!searchQuery) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  };

  // Group books into rows for display
  const getBooksInRows = (books: Book[], booksPerRow: number) => {
    const rows = [];
    for (let i = 0; i < books.length; i += booksPerRow) {
      rows.push(books.slice(i, i + booksPerRow));
    }
    return rows;
  };

  const rows = getBooksInRows(
    getFilteredBooks(books),
    isMobile ? 3 : booksPerRowDesktop
  );

  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-purple-100 text-purple-600">{icon}</div>
        <h2 className="font-display text-2xl md:text-3xl text-purple-700">{title}</h2>
      </div>

      <p className="text-purple-600 mb-4 text-center max-w-2xl">{description}</p>

      <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className={`real-bookshelf ${bookshelfClassName} rounded-lg overflow-hidden`}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="shelf-row">
            <div className="books-container">
              {row.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ y: -15, transition: { duration: 0.2 } }}
                  className="book-container"
                >
                  <div className="book-spine">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={300}
                      height={450}
                      className="book-cover"
                    />
                  </div>
                  <div className="book-details">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <div className="book-rating">
                      <StarRating rating={book.rating} />
                    </div>
                  </div>
                  <Link href={`/books/${book.id}`} className="absolute inset-0">
                    <span className="sr-only">View {book.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="shelf-support"></div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="border-purple-200 text-purple-600 hover:text-purple-800 hover:border-purple-300"
        >
          View All Books in this Shelf <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </section>
  );
}
