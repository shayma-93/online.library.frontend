'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "./ui/button";
import { ChevronRight, Star } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  rating: number;
  reviews?: number;
  imageSrc?: string;
}

const PopularMagicalBooks = ({ books }: { books: Book[] }) => {
  const [showMore, setShowMore] = useState(false);

  // Decide how many books to show based on `showMore`
  const displayedBooks = showMore ? books.slice(0, 20) : books.slice(0, 10);

  return (
    <section className="w-full relative bg-gradient-to-b from-purple-100  to-blue-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="decorative-flourish">✦</span>
              <span className="decorative-dot"></span>
              <span className="decorative-flourish">✦</span>
            </div>
            <h2 className="section-title">Popular Magical Books</h2>
            <div className="decorative-line mx-auto md:ml-0" />
            <p className="text-purple-700 md:text-lg">
              Discover what other wizards and witches are reading
            </p>
          </div>
          <Link href="/books" className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-sm group"
            >
              View All Books
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="p-6 w-full backdrop-blur rounded-3xl overflow-hidden">
          {/* Animated Books Displayed */}
          <AnimatePresence>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {displayedBooks.map((book) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Always Display the "View More / View Less" Button */}
          <div className="flex justify-center mt-10">
            <Button
              variant="ghost"
              onClick={() => setShowMore(!showMore)}
              className="text-purple-500 hover:text-purple-700 hover:bg-purple-100 transition rounded-md"
            >
              {showMore ? 'View Less' : 'View More'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  const rotation = `${book.id % 2 === 0 ? '-' : ''}${(book.id % 5) * 2}deg`;

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: rotation }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="photo-pin relative w-[180px] md:w-[220px] lg:w-[240px]"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg mb-4">
        <Image
          src={book.imageSrc || '/default-image.jpg'}
          alt={book.title}
          width={360}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3 bg-white rounded-md text-center">
        <h3 className="font-serif italic font-bold truncate text-purple-700 text-base md:text-lg">{book.title}</h3>
        <p className="text-sm text-purple-600">{book.author}</p>
        <div className="flex justify-center items-center mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= book.rating ? 'text-purple-500 fill-purple-500' : 'text-purple-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-purple-600 ml-1">({book.reviews || 0})</span>
        </div>
      </div>
      <Link href={`/books/${book.id}`} className="absolute inset-0">
        <span className="sr-only">View Book Details</span>
      </Link>
    </motion.div>
  );
};

export default PopularMagicalBooks;
