"use client"

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input"; // Assuming you have an Input component
import { Sparkles } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-purple-100 backdrop-blur-sm sticky top-0 z-50">
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
                className="w-90 pl-10 h-10 border-1 border-purple-400 bg-white/80 focus-visible:ring-purple-500 rounded-lg  font-akaya-kanadaka text-xl tracking-wider placeholder-purple-800"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-900" />
            </div>
          </div>
        </div>

        {/* Navigation Bar (Centered with more space) */}
        <nav className="md:flex hidden flex-grow justify-start gap-12">
      {[
        { href: "/", label: "Home" },
        { href: "/books", label: "Books" },
        { href: "/bookshelves", label: "Bookshelves" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative group`}
        >
<span className="relative z-10 nav-gradient font-bold font-satisfy text-2xl">{link.label}</span>
{/* Sparkles */}
          <Sparkles className="absolute right-[-1rem] top-1 transform -translate-y-1/2 h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </nav>

        {/* Auth Buttons & Mobile Toggle (Aligned Right) */}
        <div className="flex items-center gap-2">
  
  <Link href="/sign-in">
    <Button
      className="bg-purple-400 hover:bg-purple-300 rounded-lg relative overflow-hidden group w-full px-8"
    >
      <span className="relative z-10 text-blue-900   font-akaya-kanadaka text-xl tracking-wider">Sign In</span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  </Link>

  <Link href="/sign-up">
  <Button
    className="bg-blue-300 hover:bg-blue-200 rounded-lg relative overflow-hidden group w-full px-8"
  >
    <span className="relative z-10 text-purple-900 font-akaya-kanadaka text-xl tracking-wider">
      Sign Up
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
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
