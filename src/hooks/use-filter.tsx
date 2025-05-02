import { useMemo } from "react";
import { Book } from "../app/data/interfaces";
import { FilterType } from "../app/data/interfaces";


export default function useFilteredBooks(books: Book[], filters: FilterType) {
  return useMemo(() => {
    return books.filter(book => {
      const genreMatch =
        filters.genres.length === 0 || filters.genres.includes(book.genre);

      const yearMatch =
        (!filters.yearRange || filters.yearRange.length !== 2) ||
        (book.year >= filters.yearRange[0] && book.year <= filters.yearRange[1]);

      const ratingMatch =
        (!filters.ratingRange || filters.ratingRange.length !== 2) ||
        (book.rating >= filters.ratingRange[0] && book.rating <= filters.ratingRange[1]);

      const pagesMatch =
        (!filters.pagesRange || filters.pagesRange.length !== 2) ||
        (book.pages >= filters.pagesRange[0] && book.pages <= filters.pagesRange[1]);

      const availabilityMatch =
        filters.availability.length === 0 || 
        (book.available !== undefined && filters.availability.includes(book.available));

      return genreMatch && yearMatch && ratingMatch && pagesMatch && availabilityMatch;
    });
  }, [books, filters]);
}
