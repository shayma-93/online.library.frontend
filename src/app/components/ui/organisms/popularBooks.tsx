'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../atoms/button";
import { ChevronRight, Sparkles } from 'lucide-react';

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
          <div className='w-full flex flex-col justify-center items-center '>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="decorative-flourish">✦</span>
              <span className="decorative-dot"></span>
              <span className="decorative-flourish">✦</span>
            </div>
            <h2 className="font-dancing-script magical-gradient text-5xl pb-4">
Popular Magical Books</h2>
            <div className="decorative-line mx-auto " />
            <p className="text-purple-900 font-akaya-kanadaka text-xl md:text-lg">
              Discover what other wizards and witches are reading
            </p>
          </div>
          <Link href="/books" className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="text-purple-600 font-akaya-kanadaka text-lg hover:text-purple-800  rounded-lg group"
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
  onClick={() => setShowMore(!showMore)}
  className="bg-blue-300 hover:bg-blue-200 rounded-lg relative overflow-hidden group  px-8"
>
  <span className="relative z-10 text-purple-900 font-akaya-kanadaka text-xl tracking-wider">
    {showMore ? 'View Less' : 'View More'}
  </span>
  <span className="absolute inset-0  bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
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
      className="photo-pin relative rounded-xl shadow-lg w-[180px] md:w-[220px] lg:w-[240px]"
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
        <h3 className="italic font-bold truncate text-purple-900 font-akaya-kanadaka text-xl md:text-lg md:text-lg">{book.title}</h3>
        <p className="text-lg  font-akaya-kanadaka  text-purple-800">{book.author}</p>
        <div className="flex justify-center items-center mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
            <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            fill={star <= book.rating ? "url(#starGradient)" : "#D8B4FE"}
            viewBox="0 0 24 24"
            stroke="none"
            className="h-6 w-6"
          >
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7" />  
                <stop offset="100%" stopColor="#60A5FA" /> 
              </linearGradient>
            </defs>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          
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
