import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Search } from 'lucide-react';
import { Input } from './ui/input'; // Assuming you have an Input component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="w-full flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo and Search Bar Section */}
        <div className="flex items-center gap-4 w-full max-w-3xl"> {/* Set a max width for the logo and search section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-script font-bold logo-gradient tracking-wide">
              EnchantedReads
            </span>
          </Link>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-md"> {/* Adjusted width for the search bar */}
            <Input
              type="text"
              placeholder="Search for magical books..."
              className="magical-input h-12 text-lg pr-12 w-full rounded-[15%]" 
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-purple-700 hover:text-purple-900"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Bar (Centered with more space) */}
        <nav className="md:flex hidden flex-grow justify-start gap-12">
          <Link href="/" className="nav-3d text-purple-900">
            Home
          </Link>
          <Link href="/books" className="nav-3d text-purple-700">
            Books
          </Link>
          <Link href="/bookshelves" className="nav-3d text-purple-700">
            Bookshelves
          </Link>
        </nav>

        {/* Auth Buttons & Mobile Toggle (Aligned Right) */}
        <div className="flex items-center gap-3 ml-auto">
          <button className="hidden md:block bubble-button text-purple-700">Sign In</button>
          <button className="hidden md:block bubble-button text-purple-700 bg-gradient-to-r from-purple-100 to-blue-100">
            Sign Up
          </button>
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
