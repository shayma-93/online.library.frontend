'use client';

import { useState } from "react";
import useFilteredBooks from "../../../../hooks/use-filter";
import BooksList from "./books-list";
import FilterSidebar from "./sideBarFilter";
import { FilterType } from "../../../data/interfaces";
import { useBooks } from "../../../../hooks/useBooks";

const defaultFilters: FilterType = {
  genres: [],
  yearRange: [1950, 2025],
  ratingRange: [0, 5],
  pagesRange: [0, 990],
  availability: [],
};

export default function BooksClient() {
  const { data: books, isLoading, error } = useBooks();
  const [filters, setFilters] = useState<FilterType>(defaultFilters);



  const filteredBooks = useFilteredBooks(!isLoading && books ? books : [], filters);

 
  return (
    <section className="w-full md:px-6 py-8">
      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* Sidebar passes setFilters */}
        <div className="w-full md:w-64 lg:w-100 md:sticky md:top-20 md:self-start md:mr-6">
          <FilterSidebar setFilters={setFilters} />
        </div>

        {/* Pass filtered books to the list */}
        <div className="w-full flex flex-col justify-start items-center flex-1 md:ml-6">
          <BooksList book={filteredBooks} />
        </div>
      </div>
    </section>
  );
}
