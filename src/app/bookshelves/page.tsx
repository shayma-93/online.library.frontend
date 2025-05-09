"use client"

import { useEffect } from "react";
import Link from "next/link"
import { Sparkles, Plus, ArrowRight, BookOpen } from "lucide-react"
import BookshelfDisplay from "../components/ui/organisms/bookshelf-display"
import Header from "../components/ui/organisms/header"
import Footer from "../components/ui/organisms/footer"
import {BookshelfProps} from "../components/ui/molecules/enhanced-bookshelf-display"
import { Button } from "../components/ui/atoms/button"
import BookshelvesData from "../data/bookshelves.json"
import { useBookshelves } from "../../hooks/useBookshelves";


const bookshelves: BookshelfProps[] = BookshelvesData.BookshelvesData

{bookshelves.map((bookshelf) => (
  <BookshelfDisplay key={bookshelf.id} bookshelf={bookshelf} />
))}


export default function BookshelvesPage() {
    const { data: Bookshelves, isLoading, error } = useBookshelves();
  
    useEffect(() => {
      if (Bookshelves) {
        console.log("Fetched Bookshelves:", Bookshelves);
      }
    }, [Bookshelves]);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading Bookshelves</p>;
  
    if (!Bookshelves || Bookshelves.length === 0) return <p>No Bookshelves found.</p>;
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-lavender-50 to-purple-100 pb-16">
  <section className="w-full py-12 md:py-16 relative overflow-hidden">
    {/* Background floating dots */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-10 left-[10%] w-8 h-8 bg-purple-200 rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-20 right-[15%] w-6 h-6 bg-purple-300 rounded-full opacity-30 animate-float-delayed"></div>
      <div className="absolute bottom-10 left-[20%] w-10 h-10 bg-purple-100 rounded-full opacity-50 animate-float-slow"></div>
    </div>

    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
      <div className="flex items-center justify-center mb-4">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="decorative-flourish">✦</span>
              <span className="decorative-dot"></span>
              <span className="decorative-flourish">✦</span>
            </div>
      </div>
      <h1 className=" font-dancing-script magical-gradient text-5xl pb-4">
        Magical Bookshelves
      </h1>
      <div className="decorative-line mx-auto " />

      <p className="text-purple-900 font-akaya-kanadaka text-xl md:text-lg">
        Explore our enchanted collection of curated bookshelves, each filled with magical stories waiting to be discovered
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link href="/create-bookshelf">
      <Button className="bg-blue-300 hover:bg-blue-200 text-purple-900 font-akaya-kanadaka text-lg rounded-lg relative overflow-hidden group w-full px-8">
  <span className="relative z-10 flex items-center">
    <Plus className="h-4 w-4 mr-2" />
    Create Your Own Bookshelf
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>

        </Link>
        <Link href="/library-card">
        <Button className="bg-purple-400 hover:bg-purple-300 text-blue-900 text-lg  font-akaya-kanadaka rounded-lg relative overflow-hidden group w-full px-8">
  <span className="relative z-10 flex items-center">
    <BookOpen className="h-4 w-4 mr-2" />
    My Library Card
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>

        </Link>
      </div>
    </div>
  </section>

  {/* Bookshelves Section */}
  <section className="container mx-auto px-4 md:px-6 space-y-16">
    {bookshelves.map((bookshelf) => (
      <div key={bookshelf.id} className="space-y-6 text-center">
        <div className="space-y-2">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 font-dancing-script">{bookshelf.name}</h2>
            <ArrowRight className="h-5 w-5 ml-2 text-purple-600" />
          </div>
          <p className="text-purple-700">{bookshelf.description}</p>
        </div>

        <BookshelfDisplay bookshelf={bookshelf} />

        <div className="flex justify-center">
          <Link href={`/bookshelves/${bookshelf.id}`}>
            <Button
              variant="outline"
              className="rounded-sm border-purple-200 text-purple-700 hover:bg-purple-100"
            >
              View All Books in this Shelf
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    ))}
  </section>
</div>

    <Footer/>
    </div>
  )
}
