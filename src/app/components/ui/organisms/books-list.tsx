"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../atoms/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../../../lib/utils"
import { Book } from "../../../data/interfaces";
import { useBooks } from "../../../../hooks/useBooks";

type BooksListProps = {
  book: Book[] 
}

export default function BooksList({ book }: BooksListProps) {
    const { data: books = [], isLoading, error } = useBooks(); // Set fallback value to empty array

    const [currentPage, setCurrentPage] = useState(1);

    const booksPerPage = 15;
  
    // Pagination
    const totalPages = books.length ? Math.ceil(books.length / booksPerPage) : 0;
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    useEffect(() => {
        if (books) {
            console.log("Fetched books:", books);
        }
    }, [books]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading books</p>;
    if (books.length === 0) return <p>No books found.</p>;

    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<Star key={i} className="h-4 w-4 fill-purple-200 text-purple-200" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <div key={i} className="relative">
                        <Star className="h-4 w-4 text-purple-200" />
                        <Star className="absolute top-0 left-0 h-4 w-4 fill-purple-200 text-purple-200 overflow-hidden w-[50%]" />
                    </div>
                );
            } else {
                stars.push(<Star key={i} className="h-4 w-4 text-purple-100" />);
            }
        }
        return stars;
    }

    // Function to generate a random rotation for the photo effect
    const getRandomRotation = (id: number) => {
        const charSum = id.toString().split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return (charSum % 10) - 4; // Range from -3 to +3 degrees
    }

    return (
        <div>
            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {currentBooks.map((book) => (
                    <Link href={`/books/${book.id}`} key={book.id} className="group relative flex flex-col">
                        <div
                            className="relative bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                            style={{
                                transform: `rotate(${getRandomRotation(book.id)}deg)`,
                                transformOrigin: "center top",
                            }}
                        >
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-200 rounded-full border border-yellow-200 shadow-sm z-10"></div>

                            <div className="relative h-[220px] rounded-xl shadow-lg overflow-hidden mb-2">
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-300"></div>
                                <Image src={book.cover_url || "/placeholder.svg"} alt={book.title} fill className="object-cover shadow-lg" />
                            </div>

                            <div className="p-2 flex-1 flex flex-col">
                                <h3 className="italic font-bold text-purple-900 font-akaya-kanadaka text-xl group-hover:text-purple-500 transition-colors">
                                    {book.title}
                                </h3>
                                <p className="text-lg  font-akaya-kanadaka  text-purple-800">{book.author}</p>
                                <div className="flex mt-2 mb-2">{renderStars(book.rating)}</div>
                                <div className="flex justify-between mt-auto pt-2 border-t border-purple-50">
                                    <span className="text-xs text-purple-400 bg-purple-50 px-2 py-0.5 rounded-sm">{book.genre}</span>
                                    <span className="text-xs text-purple-500">{book.pages} pages</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="border-purple-200 text-purple-400 hover:bg-purple-50 rounded-sm"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center space-x-1">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <Button
                                    key={index}
                                    variant={currentPage === index + 1 ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={cn(
                                        "rounded-sm",
                                        currentPage === index + 1
                                          ? "bg-purple-400 text-white"
                                          : "border-purple-200 text-purple-400 hover:bg-purple-50",
                                    )}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="border-purple-200 text-purple-400 hover:bg-purple-50 rounded-sm"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
