"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { Button } from "../components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/atoms/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/atoms/tabs";
import {
  BookOpen,
  BookMarked,
  History,
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "../components/ui/organisms/header";
import { Footer } from "react-day-picker";
import { useLibraryCards } from "../../hooks/useLibraryCard";

// Sample borrowed books data
const borrowedBooks = [
  {
    id: "3",
    title: "Crystal Spellbook",
    author: "Orion Starweaver",
    coverColor: "bg-gradient-to-r from-purple-600 to-indigo-600",
    borrowDate: "2023-04-15",
    returnDate: "2023-04-29",
    shelfId: "1",
    shelfName: "Most Visited Bookshelf",
    shelfOwner: "Enchanted Library",
  },
  {
    id: "9",
    title: "Arcane Secrets",
    author: "Orion Starweaver",
    coverColor: "bg-gradient-to-r from-blue-600 to-indigo-700",
    borrowDate: "2023-04-18",
    returnDate: "2023-05-02",
    shelfId: "2",
    shelfName: "Fantasy Favorites",
    shelfOwner: "Aurora Dreamweaver",
  },
  {
    id: "14",
    title: "Teacup Tales",
    author: "Ember Rosewood",
    coverColor: "bg-gradient-to-r from-amber-500 to-orange-600",
    borrowDate: "2023-04-10",
    returnDate: "2023-04-24",
    shelfId: "3",
    shelfName: "Cozy Reads",
    shelfOwner: "Willow Fernsby",
  },
];

// Sample borrowing history
const borrowingHistory = [
  {
    id: "101",
    title: "Enchanted Grimoire",
    author: "Elara Moonshadow",
    coverColor: "bg-gradient-to-r from-purple-800 to-indigo-800",
    borrowDate: "2023-03-01",
    returnDate: "2023-03-15",
    actualReturnDate: "2023-03-14",
    shelfId: "1",
    shelfName: "Most Visited Bookshelf",
    shelfOwner: "Enchanted Library",
  },
  {
    id: "102",
    title: "Starlight Melodies",
    author: "Lyra Nightsong",
    coverColor: "bg-gradient-to-r from-blue-700 to-purple-700",
    borrowDate: "2023-02-15",
    returnDate: "2023-03-01",
    actualReturnDate: "2023-03-02",
    shelfId: "4",
    shelfName: "Mystical Journeys",
    shelfOwner: "Orion Eclipse",
  },
  {
    id: "103",
    title: "Whispers of Ancient Magic",
    author: "Thorne Willowbrook",
    coverColor: "bg-gradient-to-r from-emerald-600 to-teal-700",
    borrowDate: "2023-01-20",
    returnDate: "2023-02-03",
    actualReturnDate: "2023-02-01",
    shelfId: "2",
    shelfName: "Fantasy Favorites",
    shelfOwner: "Aurora Dreamweaver",
  },
];

export default function LibraryCardPage() {
    const { data: LibraryCards, isLoading, error } = useLibraryCards();
    const [activeBooks, setActiveBooks] = useState(borrowedBooks);
    const { toast } = useToast();
    
    useEffect(() => {
      if (LibraryCards) {
        console.log("Fetched LibraryCards:", LibraryCards);
      }
    }, [LibraryCards]);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading LibraryCards</p>;
  
    if (!LibraryCards || LibraryCards.length === 0) return <p>No LibraryCards found.</p>;
  

  const handleReturnBook = (bookId: string) => {
    setActiveBooks(activeBooks.filter((book) => book.id !== bookId));

    toast({
      title: "Book Returned!",
      description: "The book has been successfully returned to its shelf.",
      duration: 3000,
    });
  };

  // Calculate days remaining or overdue
  const getDaysRemaining = (returnDate: string) => {
    const today = new Date();
    const due = new Date(returnDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-lavender-50 to-blue-100  pb-16">
      <Header />
      <section className="w-full py-8 md:py-12">
        <div className="w-full px-4 md:px-6 mx-auto">
        <div className="w-full flex">

          <Link
            href="/bookshelves"
            className="w-full flex justify-start inline-flex items-start text-purple-900 font-akaya-kanadaka text-xl hover:text-purple-600 mb-6 mx-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bookshelves
          </Link>
          <Card className="w-full h-50 md:w-[600px] flex flex-col justify-end bg-purple-200 backdrop-blur-sm rounded-xl border-4 border-white shadow-sm border-purple-100 ml-auto">
          <CardContent className="w-full h-full flex flex-col items-center justify-center p-4">
  <div className="w-full flex items-center justify-center gap-3">
    <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xl font-akaya-kanadaka font-bold  text-purple-900">
                        Currently Borrowed
                      </p>
                      <p className="text-2xl font-akaya-kanadaka text-center font-bold text-purple-900">
                        {activeBooks.length}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <History className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                    <p className="text-xl font-akaya-kanadaka font-bold  text-purple-900">
                    Total Borrowed
                      </p>
                      <p className="text-2xl font-akaya-kanadaka text-center font-bold text-purple-900">
                        {borrowingHistory.length + activeBooks.length}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          <div className="w-full flex flex-col justify-center items-center space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="decorative-flourish">✦</span>
              <span className="decorative-dot"></span>
              <span className="decorative-flourish">✦</span>
            </div>
              <h1 className="font-dancing-script magical-gradient text-5xl pb-4 md:text-5xl font-bold text-purple-700 mb-4">
                Your Magical Library Card
              </h1>
              <div className="decorative-line mx-auto " />
              <p className="text-purple-900 font-akaya-kanadaka text-xl md:text-lg mb-6">
                Track your borrowed books and reading journey
              </p>
            </div>


          </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-8 ">
        <div className="relative max-w-4xl mx-auto">
          {/* Physical card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-300 to-indigo-200 rounded-xl  border-4 border-white shadow-sm border-purple-100 transform rotate-5"></div>

          {/* Card holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/10 via-white/30 to-indigo-300/10 rounded-xl border-4 border-white shadow-sm opacity-50 transform rotate--20"></div>

          {/* Card texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCA1TDUgMFpNNiA0TDQgNlpNLTEgMUwxIC0xWiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>

          {/* Card content */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-purple-100 transform -rotate-1">
            <div className="absolute top-4 right-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-purple-800 font-dancing-script">
                Enchanted Reads
              </h2>
              <p className="text-purple-600 text-sm">Member since 2023</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-purple-600">Card Holder</p>
                <p className="text-lg font-medium text-purple-900">
                  Magical Reader
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Member ID</p>
                <p className="text-lg font-medium text-purple-900">
                  ER-2023-0042
                </p>
              </div>
            </div>


            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
                <TabsTrigger
                  value="current"
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900"
                >
                  <BookMarked className="h-4 w-4 mr-2" />
                  Currently Borrowed
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900"
                >
                  <History className="h-4 w-4 mr-2" />
                  Borrowing History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="mt-0">
                {activeBooks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeBooks.map((book) => {
                      const daysRemaining = getDaysRemaining(book.returnDate);

                      return (
                        <Card
                          key={book.id}
                          className="overflow-hidden border-purple-100 bg-white/90 backdrop-blur-sm transform transition-transform hover:scale-105 hover:shadow-lg"
                        >
                          <div
                            className="h-3 w-full"
                            style={{ background: book.coverColor }}
                          ></div>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-purple-800">
                              {book.title}
                            </CardTitle>
                            <CardDescription>{book.author}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-3">
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-purple-700">
                                  From Shelf:
                                </span>
                                <span className="font-medium text-purple-900">
                                  {book.shelfName}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-purple-700">Owner:</span>
                                <span className="font-medium text-purple-900">
                                  {book.shelfOwner}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-purple-700">
                                  Borrowed On:
                                </span>
                                <span className="font-medium text-purple-900">
                                  {new Date(
                                    book.borrowDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-purple-700">
                                  Due Date:
                                </span>
                                <span className="font-medium text-purple-900">
                                  {new Date(
                                    book.returnDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>

                              <div className="mt-2 pt-2 border-t border-purple-100">
                                {daysRemaining > 3 ? (
                                  <div className="flex items-center text-green-600">
                                    <CheckCircle2 className="h-4 w-4 mr-1" />
                                    <span>{daysRemaining} days remaining</span>
                                  </div>
                                ) : daysRemaining > 0 ? (
                                  <div className="flex items-center text-amber-600">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>Due soon ({daysRemaining} days)</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center text-red-600">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    <span>
                                      Overdue by {Math.abs(daysRemaining)} days
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              onClick={() => handleReturnBook(book.id)}
                              className="w-full bg-purple-400 hover:bg-purple-300 text-purple-900 font-bold rounded-lg relative overflow-hidden group px-6 py-2 transition-all duration-300"
                            >
                              {/* Main Button Text */}
                              <span className="relative z-10">Return Book</span>

                              {/* Hover Gradient Overlay */}
                              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                              {/* Sparkles on Hover */}
                              <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-medium text-purple-800 mb-2">
                      No Books Currently Borrowed
                    </h3>
                    <p className="text-purple-700 mb-6">
                      Your magical reading journey awaits! Explore our enchanted
                      bookshelves to find your next adventure.
                    </p>
                    <Link href="/bookshelves">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Browse Bookshelves
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="history" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {borrowingHistory.map((book) => {
                    const isReturnedOnTime =
                      new Date(book.actualReturnDate) <=
                      new Date(book.returnDate);

                    return (
                      <Card
                        key={book.id}
                        className="overflow-hidden border-purple-100 bg-white/90 backdrop-blur-sm transform transition-transform hover:scale-105 hover:shadow-lg"
                      >
                        <div
                          className="h-3 w-full"
                          style={{ background: book.coverColor }}
                        ></div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-purple-800">
                            {book.title}
                          </CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-purple-700">
                                From Shelf:
                              </span>
                              <span className="font-medium text-purple-900">
                                {book.shelfName}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-700">Owner:</span>
                              <span className="font-medium text-purple-900">
                                {book.shelfOwner}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-700">
                                Borrowed On:
                              </span>
                              <span className="font-medium text-purple-900">
                                {new Date(book.borrowDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-700">Due Date:</span>
                              <span className="font-medium text-purple-900">
                                {new Date(book.returnDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-700">
                                Returned On:
                              </span>
                              <span className="font-medium text-purple-900">
                                {new Date(
                                  book.actualReturnDate
                                ).toLocaleDateString()}
                              </span>
                            </div>

                            <div className="mt-2 pt-2 border-t border-purple-100">
                              {isReturnedOnTime ? (
                                <div className="flex items-center text-green-600">
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  <span>Returned on time</span>
                                </div>
                              ) : (
                                <div className="flex items-center text-amber-600">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>Returned late</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
