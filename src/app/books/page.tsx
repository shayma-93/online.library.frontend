import Link from "next/link"
import { ChevronRight } from "lucide-react"
import BooksList from "../components/books-list"
import FilterSidebar from "../components/filter-sidebar"
import Header from "../components/header"
import Footer from "../components/footer"

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 pb-16">
<Header/>
<section className="w-full flex flex-col justify-center items-start  md:pt-12 md:pb-0 ">
        <div className="w-full flex flex-col justify-center items-center  px-4 md:px-6">
          <div className="w-full flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          
            <h1 className="font-dancing-script text-4xl md:text-5xl font-bold text-purple-700 mb-4">
              Explore Our Enchanted Library
            </h1>
            <p className="text-purple-500 font-satisfy md:text-lg mb-6">
              Discover magical worlds, ancient spells, and extraordinary adventures in our carefully curated collection
            </p>
         
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full  md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 lg:w-72">
            <FilterSidebar />
          </div>

          {/* Books Grid */}
          <div className="w-full flex flex-col justify-start items-center flex-1">
            <BooksList />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
