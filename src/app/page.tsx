"use client"
import Header from "./components/header"
import Hero from "./components/hero"
import PopularMagicalBooks from "./components/popularBooks"
import { useState, useEffect } from "react"
import "../styles/globals.css"
import { Book } from "./types"
import NewsletterSection from "./components/newsLetter"
import Footer from "./components/footer"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]); // Define the books state

  useEffect(() => {
    const fetchedBooks: Book[] = [
      {
        id: 1,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        rating: 4.8,
        imageSrc: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
      },
      {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        rating: 4.7,
        imageSrc: "https://covers.openlibrary.org/b/id/8106662-L.jpg"
      },
      {
        id: 3,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy",
        year: 1996,
        rating: 4.6,
        imageSrc: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
      },
      {
        id: 4,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy",
        year: 2007,
        rating: 4.7,
        imageSrc: "https://covers.openlibrary.org/b/id/8225631-L.jpg"
      },
      {
        id: 5,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        year: 2006,
        rating: 4.5,
        imageSrc: "https://covers.openlibrary.org/b/id/6984512-L.jpg"
      },
      {
        id: 6,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        genre: "Fantasy",
        year: 2011,
        rating: 4.3,
        imageSrc: "https://covers.openlibrary.org/b/id/7272061-L.jpg"
      },
      {
        id: 7,
        title: "Coraline",
        author: "Neil Gaiman",
        genre: "Fantasy",
        year: 2002,
        rating: 4.4,
        imageSrc: "https://covers.openlibrary.org/b/id/240727-L.jpg"
      },
      {
        id: 8,
        title: "The Golden Compass",
        author: "Philip Pullman",
        genre: "Fantasy",
        year: 1995,
        rating: 4.5,
        imageSrc: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
      },
      {
        id: 9,
        title: "Eragon",
        author: "Christopher Paolini",
        genre: "Fantasy",
        year: 2002,
        rating: 4.3,
        imageSrc: "https://covers.openlibrary.org/b/id/7278315-L.jpg"
      },
      {
        id: 10,
        title: "The Magicians",
        author: "Lev Grossman",
        genre: "Fantasy",
        year: 2009,
        rating: 4.2,
        imageSrc: "https://covers.openlibrary.org/b/id/6492436-L.jpg"
      }
    ];
    setBooks(fetchedBooks);
  }, []);

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
