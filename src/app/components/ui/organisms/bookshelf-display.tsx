"use client";

import type React from "react";

import { useState, useRef} from "react";
import {
  Star,
  User,
  Plus,
  Trash2,
  Share2,
} from "lucide-react";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../molecules/dialog";
import { cn } from "../../../../lib/utils";
import { useToast } from "../../../../hooks/use-toast";
import BookDetailModal from "../molecules/book-detail-modal";

type Book = {
  id: string;
  title: string;
  author: string;
  description?: string
  rating: number;
  status?: "available" | "borrowed";
  borrowedBy?: string;
  borrowDate?: string;
  returnDate?: string;
};

type BookshelfProps = {
  id: string;
  name: string;
  description: string;
  theme: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  books: Book[];
  editable?: boolean;
};

export default function BookshelfDisplay({
  bookshelf,
  editable = false,
}: {
  bookshelf: BookshelfProps;
  editable?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>(
    bookshelf.books.map((book) => ({
      ...book,
      status: book.status || "available",
      description: book.description || getRandomDescription(book.title), // Add random descriptions for demo
    })),
  )
  const { toast } = useToast();
  const shelfRef = useRef<HTMLDivElement>(null);

  // State for dialogs
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [isLendBookOpen, setIsLendBookOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [lendToName, setLendToName] = useState("");
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    rating: 3,
    file: null as File | null,
  });
  const handleFileChange = (file: File | undefined) => {
    if (file) {
      setNewBook((prev) => ({ ...prev, file }));
    }
  };

  // Function to handle borrowing a book
  const handleBorrowBook = (bookId: string) => {
    void bookId; 
    toast({
      title: "Borrow Request Submitted!",
      description:
        "Your request has been submitted. The book will be available for pickup soon.",
      duration: 3000,
    });

    // Close the modal after submitting the request
    setIsModalOpen(false);
  };

  // Function to handle adding a new book
  const handleNewBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value: string) => {
    setNewBook((prev) => ({ ...prev, rating: Number.parseInt(value) }));
  };

  const addBook = async () => {
    const formData = new FormData();
    formData.append("title", newBook.title);
    formData.append("author", newBook.author);
    formData.append("rating", newBook.rating.toString());
    if (newBook.file) {
      formData.append("file", newBook.file);
    }

    try {
      const res = await fetch("/api/creat-bookshelf", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("Book uploaded successfully");
        // Optionally reset form
      } else {
        console.error("Failed to upload book");
      }
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };

  // Function to handle removing a book
  const removeBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));

    toast({
      title: "Book Removed",
      description: "The book has been removed from your bookshelf.",
      duration: 3000,
    });
  };

  // Function to handle lending a book
  const openLendDialog = (id: string) => {
    setSelectedBookId(id);
    setIsLendBookOpen(true);
  };

  const lendBook = () => {
    if (selectedBookId && lendToName) {
      setBooks((prev) =>
        prev.map((book) =>
          book.id === selectedBookId
            ? { ...book, status: "borrowed", borrowedBy: lendToName }
            : book
        )
      );
      setIsLendBookOpen(false);
      setLendToName("");

      toast({
        title: "Book Lent",
        description: `The book has been lent to ${lendToName}.`,
        duration: 3000,
      });
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-yellow-400" />
            <Star className="absolute top-0 left-0 h-4 w-4 fill-yellow-400 text-yellow-400 overflow-hidden w-[50%]" />
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-yellow-400" />);
      }
    }
    return stars;
  };

  // Get plant decorations based on theme
  const getPlantDecoration = (
    theme: string,
    position: "left" | "right" | "center"
  ) => {
    if (theme === "magical" && position === "left") {
      return (
        <div className="absolute -left-4 bottom-2 w-16 h-16 transform -rotate-3 animate-pulse-slow">
          <div className="relative w-full h-full">
            {/* Magical plant with glowing effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-b from-purple-300 to-purple-400 rounded-b-lg rounded-t-sm"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="absolute bottom-0 left-0 w-2 h-8 bg-gradient-to-t from-purple-700 to-purple-500 rounded-full"></div>
                <div className="absolute bottom-4 left-1 w-8 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80"></div>
                <div className="absolute bottom-6 left-3 w-6 h-5 bg-gradient-to-tr from-purple-400 to-purple-600 rounded-full opacity-80"></div>
                <div className="absolute bottom-8 left-2 w-5 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-80"></div>
                {/* Magical sparkle effect */}
                <div className="absolute bottom-7 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-5 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (theme === "fantasy" && position === "right") {
      return (
        <div className="absolute -right-4 bottom-2 w-16 h-16 transform rotate-3 animate-pulse-slow">
          <div className="relative w-full h-full">
            {/* Fantasy crystal plant */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-b from-blue-200 to-indigo-300 rounded-b-lg rounded-t-sm"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="absolute bottom-0 left-0 w-2 h-10 bg-gradient-to-t from-indigo-800 to-indigo-600 rounded-full"></div>
                <div className="absolute bottom-6 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-80"></div>
                <div className="absolute bottom-8 left-0 w-5 h-5 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full opacity-80"></div>
                <div className="absolute bottom-10 left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-80"></div>
                {/* Crystal glow effect */}
                <div className="absolute bottom-7 left-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-9 left-3 w-1 h-1 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (theme === "cozy" && position === "center") {
      return (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 w-16 h-16">
          <div className="relative w-full h-full">
            {/* Cozy flower pot */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-7 bg-gradient-to-b from-amber-200 to-amber-300 rounded-b-lg rounded-t-sm"></div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="absolute bottom-0 left-3 w-2 h-6 bg-gradient-to-t from-green-700 to-green-600 rounded-full"></div>
                <div className="absolute bottom-4 left-0 w-10 h-3 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full"></div>
                <div className="absolute bottom-6 left-1 w-8 h-3 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full"></div>
                <div className="absolute bottom-8 left-2 w-6 h-3 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full"></div>
                {/* Gentle flower animation */}
                <div className="absolute bottom-7 left-4 w-2 h-2 bg-pink-100 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Get shelf style based on theme
  const getShelfStyle = (theme: string) => {
    switch (theme) {
      case "magical":
        return {
          main: "bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800",
          edge: "bg-gradient-to-r from-purple-900 to-purple-950",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-500/10 after:via-purple-300/20 after:to-purple-500/10 after:animate-pulse-slow",
        };
      case "fantasy":
        return {
          main: "bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-800",
          edge: "bg-gradient-to-r from-indigo-900 to-indigo-950",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPgo8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNkw2IDBaTTYgNkwwIDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ij48L3BhdGg+Cjwvc3ZnPg==')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500/10 after:via-blue-300/20 after:to-blue-500/10 after:animate-pulse-slow",
        };
      case "cozy":
        return {
          main: "bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800",
          edge: "bg-gradient-to-r from-amber-900 to-amber-950",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEg0VjRIMFY0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PC9wYXRoPgo8L3N2Zz4=')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-amber-500/10 after:via-amber-300/20 after:to-amber-500/10 after:animate-pulse-slow",
        };
      case "vintage":
        return {
          main: "bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700",
          edge: "bg-gradient-to-r from-stone-800 to-stone-900",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-stone-500/10 after:via-stone-300/20 after:to-stone-500/10 after:animate-pulse-slow",
        };
      case "modern":
        return {
          main: "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
          edge: "bg-gradient-to-r from-gray-900 to-gray-950",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEg0VjRIMFY0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PC9wYXRoPgo8L3N2Zz4=')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-gray-500/10 after:via-gray-300/20 after:to-gray-500/10 after:animate-pulse-slow",
        };
      default:
        return {
          main: "bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800",
          edge: "bg-gradient-to-r from-purple-900 to-purple-950",
          texture:
            "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')]",
          glow: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-500/10 after:via-purple-300/20 after:to-purple-500/10 after:animate-pulse-slow",
        };
    }
  };

  // Get background style based on theme
  const getBackgroundStyle = (theme: string) => {
    switch (theme) {
      case "magical":
        return "bg-gradient-to-b from-purple-50 to-purple-100/50";
      case "fantasy":
        return "bg-gradient-to-b from-blue-50 to-indigo-100/50";
      case "cozy":
        return "bg-gradient-to-b from-amber-50 to-orange-100/50";
      case "vintage":
        return "bg-gradient-to-b from-stone-50 to-stone-100/50";
      case "modern":
        return "bg-gradient-to-b from-gray-50 to-gray-100/50";
      default:
        return "bg-gradient-to-b from-purple-50 to-purple-100/50";
    }
  };

  // Function to get artistic book style based on the book title and index
  function getArtisticBookStyle(title: string, index: number) {
    // Create a deterministic but varied set of book styles
    const charSum = title
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const seed = charSum + index;

    // Book color palettes - more sophisticated and artistic
    const bookPalettes = [
      // Vintage/aged books
      {
        background: "linear-gradient(to right, #8B4513, #A0522D)",
        textColor: "#F5F5DC",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')",
        hasRibbon: false,
        hasGoldLettering: true,
        ribbonColor: "",
      },
      {
        background: "linear-gradient(to right, #8D6E63, #A1887F)",
        textColor: "#EFEBE9",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')",
        hasRibbon: true,
        hasGoldLettering: false,
        ribbonColor: "#D7CCC8",
      },

      // Rich, elegant books
      {
        background: "linear-gradient(to right, #1A237E, #283593)",
        textColor: "#E8EAF6",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')",
        hasRibbon: true,
        hasGoldLettering: true,
        ribbonColor: "#C5CAE9",
      },
      {
        background: "linear-gradient(to right, #4A148C, #6A1B9A)",
        textColor: "#F3E5F5",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')",
        hasRibbon: false,
        hasGoldLettering: true,
        ribbonColor: "",
      },

      // Pastel, artistic books
      {
        background: "linear-gradient(to right, #80DEEA, #4DD0E1)",
        textColor: "#006064",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')",
        hasRibbon: false,
        hasGoldLettering: false,
        ribbonColor: "",
      },
      {
        background: "linear-gradient(to right, #FFCCBC, #FFAB91)",
        textColor: "#BF360C",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')",
        hasRibbon: true,
        hasGoldLettering: false,
        ribbonColor: "#FF8A65",
      },

      // Earthy, natural books
      {
        background: "linear-gradient(to right, #558B2F, #689F38)",
        textColor: "#F1F8E9",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: false,
        hasGoldLettering: true,
        ribbonColor: "",
      },
      {
        background: "linear-gradient(to right, #795548, #8D6E63)",
        textColor: "#EFEBE9",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: true,
        hasGoldLettering: false,
        ribbonColor: "#BCAAA4",
      },

      // Vibrant, colorful books
      {
        background: "linear-gradient(to right, #AD1457, #C2185B)",
        textColor: "#FCE4EC",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: true,
        hasGoldLettering: true,
        ribbonColor: "#F8BBD0",
      },
      {
        background: "linear-gradient(to right, #00796B, #00897B)",
        textColor: "#E0F2F1",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: false,
        hasGoldLettering: true,
        ribbonColor: "",
      },

      // Magical themed books
      {
        background: "linear-gradient(to right, #7B1FA2, #9C27B0)",
        textColor: "#F3E5F5",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: true,
        hasGoldLettering: true,
        ribbonColor: "#CE93D8",
      },
      {
        background: "linear-gradient(to right, #512DA8, #673AB7)",
        textColor: "#EDE7F6",
        texture:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
        hasRibbon: false,
        hasGoldLettering: true,
        ribbonColor: "",
      },
    ];

    // Select a palette based on the seed
    const selectedPalette = bookPalettes[seed % bookPalettes.length];

    return selectedPalette;
  }

  // Function to generate random book descriptions for demo purposes
  function getRandomDescription(title: string) {
    const descriptions = [
      "A captivating journey through magical realms where ancient spells come to life.",
      "Discover the secrets of enchanted creatures and their mystical powers.",
      "An essential guide for aspiring wizards and witches seeking to master the arcane arts.",
      "Explore the hidden history of magical societies and their influence on our world.",
      "A collection of powerful spells and potions for practitioners of all levels.",
      "Journey through time and space with this magical adventure that will captivate your imagination.",
      "Uncover the mysteries of ancient runes and their applications in modern magic.",
      "A comprehensive study of magical herbs and their properties in spellcasting.",
      "Tales of legendary wizards and their extraordinary feats of magical prowess.",
      "Delve into the fascinating world of magical artifacts and their creation.",
    ];

    // Use the title to deterministically select a description
    const charSum = title
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return descriptions[charSum % descriptions.length];
  }

  // Handle book click to open modal
  const handleBookClick = (book: Book) => {
    setSelectedBookId(book.id);
    setIsModalOpen(true);
  };

  const shelfStyle = getShelfStyle(bookshelf.theme);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full">
        {/* Bookshelf */}
        <div
          ref={shelfRef}
          className={cn(
            "relative w-full h-[320px] rounded-lg shadow-lg p-4 overflow-hidden perspective",
            getBackgroundStyle(bookshelf.theme)
          )}
          style={{ perspective: "1000px" }}
        >
          {/* Owner information */}
          <div className="absolute top-2 right-3 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm z-10">
            <User className="h-4 w-4 text-purple-600" />
            <span className="text-xs font-medium text-purple-800">
              {bookshelf.owner.name}
            </span>
          </div>

          {/* Books container */}
          <div className="relative h-[220px] flex items-end">
            {books.map((book, index) => {
              // Calculate book properties
              const bookWidth = 50 + Math.random() * 30;
              const bookHeight = 150 + Math.random() * 50;
              const tiltAngle =
                Math.random() > 0.7 ? (Math.random() > 0.5 ? 3 : -3) : 0;
              const bookStyle = getArtisticBookStyle(book.title, index);

              return (
                <div
                  key={book.id}
                  className="relative mx-[2px] transition-all duration-300 group cursor-pointer"
                  style={{ width: `${bookWidth}px` }}
                  onClick={() => handleBookClick(book)}
                >
                  {/* Book */}
                  <div
                    className={cn(
                      "absolute bottom-0 w-full rounded-sm shadow-md",
                      book.status === "borrowed" ? "opacity-70" : "",
                    )}
                    style={{
                      height: `${bookHeight}px`,
                      transform: `rotate(${tiltAngle}deg)`,
                      transformOrigin: "bottom center",
                      background: bookStyle.background,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Book cover */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Book spine details */}
                      <div className="absolute inset-0 flex flex-col justify-between p-1">
                        <div className="w-full h-[1px] bg-white/20"></div>
                        <div className="w-full h-[1px] bg-white/20"></div>
                      </div>

                      {/* Book spine texture overlay */}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: bookStyle.texture }}></div>

                      {/* Book spine decoration */}
                      {bookStyle.hasRibbon && (
                        <div
                          className="absolute top-4 w-full h-1"
                          style={{ backgroundColor: bookStyle.ribbonColor }}
                        ></div>
                      )}
                      {bookStyle.hasGoldLettering && (
                        <div
                          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3/4 h-1"
                          style={{ backgroundColor: "rgba(212, 175, 55, 0.7)" }}
                        ></div>
                      )}

                      {/* Book title (vertical text) */}
                      <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                      >
                        <span
                          className="text-xs font-medium px-2 truncate rotate-180 text-shadow"
                          style={{ color: bookStyle.textColor }}
                        >
                          {book.title}
                        </span>
                      </div>

                      {/* 3D book edges */}
                      <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-l from-white/40 to-transparent"></div>
                      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-black/20"></div>
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-b from-white/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></div>

                      {/* Status indicator */}
                      {book.status === "borrowed" && (
                        <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
                          <div className="w-full h-6 bg-red-400/70 flex items-center justify-center transform -rotate-90">
                            <span className="text-white text-xs font-bold">Borrowed</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Edit buttons for editable mode */}
                    {editable && (
                      <div className="absolute -right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            removeBook(book.id)
                          }}
                          className="bg-red-200 text-red-600 p-1 rounded-sm shadow-md"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                        {book.status === "available" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              openLendDialog(book.id)
                            }}
                            className="bg-blue-100 text-blue-500 p-1 rounded-sm shadow-md"
                          >
                            <Share2 className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Add book button for editable mode */}
            {editable && (
              <div
                className="relative mx-1 cursor-pointer"
                style={{ width: "60px" }}
                onClick={() => setIsAddBookOpen(true)}
              >
                <div className="absolute bottom-0 w-full h-[180px] rounded-sm bg-purple-100 border-2 border-dashed border-purple-200 flex flex-col items-center justify-center text-purple-400">
                  <Plus className="h-6 w-6 mb-2" />
                  <span className="text-xs font-medium text-center px-1">Add Book</span>
                </div>
              </div>
            )}

            {/* Plant decorations */}
            {getPlantDecoration(bookshelf.theme, "left")}
            {getPlantDecoration(bookshelf.theme, "right")}
            {bookshelf.theme === "cozy" && getPlantDecoration(bookshelf.theme, "center")}
          </div>

          {/* Shelf */}
          <div className="absolute bottom-0 left-0 right-0 h-12">
            {/* Main shelf */}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 h-8 relative overflow-hidden",
                shelfStyle.main,
                shelfStyle.glow,
              )}
            >
              {/* Wood texture overlay */}
              <div className={cn("absolute inset-0", shelfStyle.texture)}></div>

              {/* Shelf edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"></div>

              {/* Shelf edge shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/20"></div>

              {/* Magical runes or symbols based on theme */}
              {bookshelf.theme === "magical" && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8">
                  <div className="w-4 h-4 bg-purple-300/30 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-purple-300/30 rounded-full animate-pulse delay-300"></div>
                  <div className="w-4 h-4 bg-purple-300/30 rounded-full animate-pulse delay-700"></div>
                </div>
              )}

              {bookshelf.theme === "fantasy" && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8">
                  <div className="w-4 h-4 border border-blue-300/50 rotate-45 animate-spin-slow"></div>
                  <div className="w-4 h-4 border border-blue-300/50 rotate-45 animate-spin-slow delay-300"></div>
                  <div className="w-4 h-4 border border-blue-300/50 rotate-45 animate-spin-slow delay-700"></div>
                </div>
              )}
            </div>

            {/* Shelf bottom edge */}
            <div
              className={cn(
                "absolute -bottom-1 left-0 right-0 h-2",
                shelfStyle.edge
              )}
            ></div>

            {/* Shelf supports */}
            <div
              className={cn(
                "absolute -bottom-3 left-[10%] w-4 h-6",
                shelfStyle.edge
              )}
            ></div>
            <div
              className={cn(
                "absolute -bottom-3 right-[10%] w-4 h-6",
                shelfStyle.edge
              )}
            ></div>
          </div>
        </div>

        {/* Bookshelf Information */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{bookshelf.name}</h2>
          <p className="text-gray-600">{bookshelf.description}</p>
        </div>
      </div>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={books.find((b) => b.id === selectedBookId) || null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBorrow={handleBorrowBook}
      />

      {/* Add Book Dialog */}
      <Dialog open={isAddBookOpen} onOpenChange={setIsAddBookOpen}>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Add a New Book</DialogTitle>
    </DialogHeader>

    <div className="grid gap-4 py-4">
      {/* Title */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleNewBookChange}
          className="col-span-3"
          placeholder="Enter book title"
        />
      </div>

      {/* Author */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="author" className="text-right">
          Author
        </Label>
        <Input
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleNewBookChange}
          className="col-span-3"
          placeholder="Enter author name"
        />
      </div>

      {/* Rating */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="rating" className="text-right">
          Rating
        </Label>
        <div className="col-span-3">
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={newBook.rating}
              onChange={(e) => handleRatingChange(e.target.value)}
              className="w-full"
            />
            <span className="text-sm font-medium">{newBook.rating}</span>
          </div>
          <div className="flex mt-1">{renderStars(newBook.rating)}</div>
        </div>
      </div>

      {/* File Upload */}
      <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="file" className="text-right">
    Book File
  </Label>
  <input
    id="file"
    name="file"
    type="file"
    accept=".pdf,.epub"
    onChange={(e) => handleFileChange(e.target.files?.[0])}
    className="col-span-3 rounded-lg border px-2 py-1 text-center file:mr-4 file:rounded-md file:border-0  file:px-4 file:py-2  file:font-semibold hover:file:bg-violet-100"
  />
</div>

    </div>

    {/* Buttons */}
    <DialogFooter className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setIsAddBookOpen(false)}>
        Cancel
      </Button>
      <Button variant="outline" onClick={addBook}>Add Book</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

      {/* Lend Book Dialog */}
      <Dialog open={isLendBookOpen} onOpenChange={setIsLendBookOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Lend Book</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lendTo" className="text-right">
                Lend to
              </Label>
              <Input
                id="lendTo"
                value={lendToName}
                onChange={(e) => setLendToName(e.target.value)}
                className="col-span-3"
                placeholder="Enter borrower's name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLendBookOpen(false)}>
              Cancel
            </Button>
            <Button onClick={lendBook}>Lend Book</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
