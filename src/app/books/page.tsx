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
  const allBooks = BooksData.BooksData;
  const [filters, setFilters] = useState<FilterType>(defaultFilters);
  const filteredBooks = useFilteredBooks(allBooks, filters);

  
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100">
        <Header />
        <section className="w-full flex flex-col justify-center items-start md:pt-12 md:pb-0">
          <div className="w-full flex flex-col justify-center items-center px-4 md:px-6">
            <div className="w-full flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="decorative-flourish">✦</span>
                <span className="decorative-dot"></span>
                <span className="decorative-flourish">✦</span>
              </div>
              <h1 className="font-dancing-script magical-gradient text-5xl pb-4 md:text-5xl font-bold text-purple-700 mb-4">
                Explore Our Enchanted Library
              </h1>
              <div className="decorative-line mx-auto" />
              <p className="text-purple-900 font-akaya-kanadaka text-xl md:text-lg mb-6">
                Discover magical worlds, ancient spells, and extraordinary adventures in our carefully curated collection
              </p>
            </div>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="w-full md:px-6 py-8">
          <div className="w-full flex flex-col md:flex-row gap-4">
            {/* Sidebar passes setFilters */}
            <div className="w-full md:w-64 lg:w-100 md:sticky md:top-20 md:self-start md:mr-6">
              <FilterSidebar setFilters={setFilters} />
            </div>
  
            {/* Pass filtered books to the list */}
            <div className="w-full flex flex-col justify-start items-center flex-1 md:ml-6">
              <BooksList books={filteredBooks} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
