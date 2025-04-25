"use client"
import Header from "../components/header"
import Hero from "../components/hero"
import SearchSection from "../components/search"
import FeaturesSection from "../components/features"
import PopularMagicalBooks from "../components/popularBooks"
import { useState, useEffect } from "react"
import "../../styles/globals.css"
import { Book } from "../types"
import NewsletterSection from "../components/newsLetter"
import Footer from "../components/footer"


export default function Home() {
  const [sparkleElements, setSparkleElements] = useState<React.ReactNode[]>([]);
  const [books, setBooks] = useState<Book[]>([]); // Define the books state

  useEffect(() => {
    const fetchedBooks: Book[] = [
      { id: 1, title: "The Great Adventures", author: "John Smith", genre: "Fantasy", year: 2022, rating: 4.7, imageSrc: "/path/to/image1.jpg" },
      { id: 2, title: "Magical Realms", author: "Jane Doe", genre: "Fantasy", year: 2021, rating: 4.5, imageSrc: "/path/to/image2.jpg" },
      { id: 3, title: "Whispers of the Forest", author: "Emma Clark", genre: "Mystery", year: 2023, rating: 4.3, imageSrc: "/path/to/image3.jpg" },
      { id: 4, title: "The Hidden Chronicles", author: "David Turner", genre: "Adventure", year: 2020, rating: 4.8, imageSrc: "/path/to/image4.jpg" },
      { id: 5, title: "Sorcery Unleashed", author: "Lily Evans", genre: "Fantasy", year: 2019, rating: 4.6, imageSrc: "/path/to/image5.jpg" },
      { id: 6, title: "The Timekeeper's Quest", author: "Oliver Grant", genre: "Sci-Fi", year: 2022, rating: 4.2, imageSrc: "/path/to/image6.jpg" },
      { id: 7, title: "Enchanted Spells", author: "Sophia Woods", genre: "Fantasy", year: 2020, rating: 4.9, imageSrc: "/path/to/image7.jpg" },
      { id: 8, title: "The Curse of the Moon", author: "Lucas Black", genre: "Horror", year: 2021, rating: 4.4, imageSrc: "/path/to/image8.jpg" },
      { id: 9, title: "The Forgotten Kingdom", author: "Isabella Brown", genre: "Fantasy", year: 2023, rating: 4.5, imageSrc: "/path/to/image9.jpg" },
      { id: 10, title: "A Journey Beyond Stars", author: "Henry White", genre: "Sci-Fi", year: 2022, rating: 4.7, imageSrc: "/path/to/image10.jpg" }
    ];
    setBooks(fetchedBooks);
  }, []);
  
 
  // Create random sparkles for the background
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 10 + 5
      const top = Math.random() * 100
      const left = Math.random() * 100
      const delay = Math.random() * 5

      return (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#818cf8" : "#38bdf8"}
              opacity="0.3"
              className="animate-pulse"
            />
          </svg>
        </div>
      )
    })

    setSparkleElements(newSparkles)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-purple-900 font-sans relative overflow-hidden">
      {/* Background sparkles */}
      {sparkleElements}

      <Header/>
      
      <main className="flex-1 flex flex-col justify-center items-center">
        <Hero/>
        <SearchSection/>
        <FeaturesSection/>
        <PopularMagicalBooks books={books} />
        <NewsletterSection/>
      </main>
      
      <Footer />
    </div>
  )
}
