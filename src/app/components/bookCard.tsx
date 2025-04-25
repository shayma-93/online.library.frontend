// components/bookCard.tsx

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string[];
  rating: number;
  reviews: number;
  coverImage: string;
}

const BookCard = ({ book }: { book: Book }) => (
  <motion.div
    key={book.id}
    whileHover={{
      scale: 1.03,
      rotate: Math.random() > 0.5 ? "1deg" : "-1deg",
    }}
    transition={{ type: "spring", stiffness: 300 }}
    className="photo-pin"
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
      <h3 className="font-serif italic font-bold truncate text-purple-700 text-sm">{book.title}</h3>
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
        <span className="text-xs text-purple-600 ml-1">({book.reviews})</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {book.genre.map((g) => (
          <span key={g} className="inline-block px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px]">
            {g}
          </span>
        ))}
      </div>
    </div>
    <Link href={`/books/${book.id}`} className="absolute inset-0">
      <span className="sr-only">View Book Details</span>
    </Link>
  </motion.div>
);

export default BookCard;
