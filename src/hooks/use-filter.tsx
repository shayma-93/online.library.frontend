// hooks/useFilteredBooks.ts
"use client";

import { useMemo } from "react";
import books from "../app/data/Books.json"; 
import { Book } from "../app/data/interfaces";

export const useFilteredBooks = ({
  selectedGenres,
  yearRange,
  ratingRange,
  pagesRange,
  availability,
}: {
  selectedGenres: string[];
  yearRange: [number, number];
  ratingRange: [number, number];
  pagesRange: [number, number];
  availability: string[];
}) => {
    const filteredBooks = useMemo(() => {
        return books.BooksData.filter((book: Book) => {
      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.includes(book.genre || "");

      const matchesYear =
        book.year >= yearRange[0] && book.year <= yearRange[1];

      const matchesRating =
        book.rating >= ratingRange[0] && book.rating <= ratingRange[1];

      const matchesPages =
        book.pages >= pagesRange[0] && book.pages <= pagesRange[1];

      const matchesAvailability =
        availability.length === 0 ||
        availability.includes(book.available ? "available" : "unavailable");

      return (
        matchesGenre &&
        matchesYear &&
        matchesRating &&
        matchesPages &&
        matchesAvailability
      );
    });
  }, [selectedGenres, yearRange, ratingRange, pagesRange, availability]);

  return filteredBooks;
};
