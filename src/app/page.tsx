"use client"
import Header from "./components/header"
import Hero from "./components/hero"
import PopularMagicalBooks from "./components/popularBooks"
import { useState, useEffect } from "react"
import "../styles/globals.css"
import { Book } from "./data/interfaces"
import NewsletterSection from "./components/newsLetter"
import Footer from "./components/footer"
import Books from "./data/Books.json"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    setBooks(Books.BooksData) 
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-purple-900 font-sans">
      <Header/>
      
      <main className="flex-1 flex flex-col justify-center items-center">
        <Hero/>
        <div className="w-full bg-gradient-to-b from-purple-200 to-purple-50 overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[200px]" 
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f3e8ff" }}
            ></path>
          </svg>
        </div>

        <PopularMagicalBooks books={books} />
        <NewsletterSection/>
      </main>
      
      <Footer />
    </div>
  )
}
