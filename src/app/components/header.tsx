"use client"

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input"; // Assuming you have an Input component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo and Search Bar Section */}
        <div className="flex items-center gap-4 w-full max-w-3xl">
          {" "}
          {/* Set a max width for the logo and search section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-dancing-script font-bold logo-gradient tracking-wide">
              EnchantedReads
            </span>
          </Link>
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for magical books..."
                className="w-90 pl-10 h-10 border-1 border-purple-400 bg-white/80 focus-visible:ring-purple-500 rounded-lg placeholder-purple-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Navigation Bar (Centered with more space) */}
        <nav className="md:flex hidden flex-grow justify-start gap-12">
          <Link href="/" className="nav-3d font-display text-purple-900">
            Home
          </Link>
          <Link href="/books" className="nav-3d font-display text-purple-700">
            Books
          </Link>
          <Link
            href="/bookshelves"
            className="nav-3d font-display text-purple-700"
          >
            Bookshelves
          </Link>
        </nav>

        {/* Auth Buttons & Mobile Toggle (Aligned Right) */}
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-100 hover:text-purple-800 rounded-md"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-md">
              Sign Up
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-purple-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
