"use client"
import { useState } from "react"
import BooksData from "../data/Books.json"
import useFilteredBooks from "../../hooks/use-filter"
import BooksList from "../components/books-list"
import FilterSidebar from "../components/sideBarFilter"
import Header from "../components/header"
import Footer from "../components/footer"
import { FilterType } from "../data/interfaces";

const defaultFilters: FilterType = {
  genres: [],
  yearRange: [1950, 2025],
  ratingRange: [0, 5],
  pagesRange: [0, 990],
  availability: [],
};
export default function BooksPage() {
  
  const allBooks = BooksData.BooksData
  const [filters, setFilters] = useState<FilterType>(defaultFilters);
  const filteredBooks = useFilteredBooks(allBooks, filters)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100">
      <Header />
      <section className="...">
        {/* header content */}
      </section>

      {/* Main Content */}
      <section className="w-full md:px-6 py-8">
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Sidebar passes setFilters */}
          <div className="w-full md:w-64 lg:w-100 md:sticky md:top-20 md:self-start">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Pass filtered books to the list */}
          <div className="w-full flex flex-col justify-start items-center flex-1">
            <BooksList books={filteredBooks} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
