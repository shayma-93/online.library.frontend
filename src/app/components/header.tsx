import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
          <span className="text-2xl font-script font-bold logo-gradient tracking-wide">
            EnchantedReads
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-20 md:top-0 left-0 right-0 md:right-auto md:left-auto flex-col md:flex-row items-center gap-6 md:gap-8 bg-white/90 md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-purple-200 z-50 rounded-b-3xl md:rounded-none text-center`}
        >
          <Link href="/" className="nav-3d text-purple-900">
            Home
          </Link>
          <Link href="/about" className="nav-3d text-purple-700">
            About
          </Link>
          <Link href="/books" className="nav-3d text-purple-700">
            Books
          </Link>
          <Link href="/bookshelves" className="nav-3d text-purple-700">
            Bookshelves
          </Link>
        </nav>

        {/* Auth Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
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
