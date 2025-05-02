"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu, Search, Sparkles } from "lucide-react";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import useSearch from "../../../../hooks/use-search";
import Books from "../../../data/Books.json";
import { Book } from "../../../data/interfaces";

const Header = () => {
  const books: Book[] = Books.BooksData as Book[];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { query, suggestions, handleInputChange } = useSearch(books); 

  return (
    <header className="w-full border-b bg-purple-100 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full flex h-20 items-center justify-between px-4 xl:px-8">
        {/* Logo and Search Bar Section */}
        <div className="flex items-center gap-4 w-full max-w-3xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-dancing-script font-bold logo-gradient tracking-wide hidden sm:inline">
              EnchantedReads
            </span>
          </Link>

          {/* Mobile & Tablet Search Bar */}
          <div className="relative flex xl:hidden items-center w-full">
            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for magical books..."
                className="w-full pl-10 h-10 border-1 border-purple-400 bg-white/80 focus-visible:ring-purple-500 rounded-lg font-akaya-kanadaka text-xl tracking-wider placeholder-purple-800"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-900" />
            </form>
            {suggestions.length > 0 && (
              <div className="absolute top-16 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                <ul>
                  {suggestions.map((item) => (
                    <li key={item.id} className="p-2 hover:bg-purple-100">
                      <Link
                        href={`/book/${item.id}`}
                        className="block text-purple-800"
                      >
                        <div className="flex items-center">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              className="w-8 h-12 mr-2"
                              width={32} 
                              height={48} 
                            />
                          ) : (
                            <div className="w-8 h-12 mr-2 bg-gray-300" /> 
                          )}
                          <span>
                            {item.title} - {item.author}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Search Bar */}
          <div className="relative hidden xl:flex items-center">
            <div className="relative">
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search for magical books..."
                  className="w-90 pl-10 h-10 border-1 border-purple-400 bg-white/80 focus-visible:ring-purple-500 rounded-lg font-akaya-kanadaka text-xl tracking-wider placeholder-purple-800"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-900" />
              </form>
              {suggestions.length > 0 && (
                <div className="absolute top-16 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                  <ul>
                    {suggestions.map((item) => (
                      <li key={item.id} className="p-2 hover:bg-purple-100">
                        <Link
                          href={`/book/${item.id}`}
                          className="block text-purple-800"
                        >
                          <div className="flex items-center">
                            {item.imageSrc ? (
                              <Image
                                src={item.imageSrc} 
                                alt={item.title}
                                className="w-8 h-12 mr-2"
                                width={32} 
                                height={48} 
                              />
                            ) : (
                              <div className="w-8 h-12 mr-2 bg-gray-300" /> 
                            )}
                            <span>
                              {item.title} - {item.author}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="xl:flex hidden flex-grow justify-start gap-12">
          {[
            { href: "/", label: "Home" },
            { href: "/books", label: "Books" },
            { href: "/bookshelves", label: "Bookshelves" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              <span className="relative z-10 nav-gradient font-bold font-satisfy text-2xl">
                {link.label}
              </span>
              <Sparkles className="absolute right-[-1rem] top-1 transform -translate-y-1/2 h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        {/* Auth Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop Auth Buttons */}
          <div className="hidden xl:flex gap-2">
            <Link href="/sign-in">
              <Button className="bg-purple-400 hover:bg-purple-300 rounded-lg relative overflow-hidden group w-full px-8 xl:px-6">
                <span className="relative z-10 text-blue-900 font-akaya-kanadaka text-xl tracking-wider">
                  Sign In
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="bg-blue-300 hover:bg-blue-200 rounded-lg relative overflow-hidden group w-full px-8 xl:px-6">
                <span className="relative z-10 text-purple-900 font-akaya-kanadaka text-xl tracking-wider">
                  Sign Up
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-purple-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown with Auth Buttons */}
      {isMenuOpen && (
        <div className="xl:hidden bg-purple-100 px-4 py-4 shadow-md">
          <nav className="flex flex-col gap-4 mb-4">
            {[
              { href: "/", label: "Home" },
              { href: "/books", label: "Books" },
              { href: "/bookshelves", label: "Bookshelves" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-center text-purple-900 font-satisfy text-xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="w-full flex flex-col items-center gap-2">
            <Link href="/sign-in" onClick={closeMenu}>
              <Button className="bg-purple-400 hover:bg-purple-300 rounded-lg w-[13rem] py-2 px-4">
                <span className="text-blue-900 font-akaya-kanadaka text-sm">
                  Sign In
                </span>
              </Button>
            </Link>
            <Link href="/sign-up" onClick={closeMenu}>
              <Button className="bg-blue-300 hover:bg-blue-200 rounded-lg w-[13rem] py-2 px-4">
                <span className="text-purple-900 font-akaya-kanadaka text-sm">
                  Sign Up
                </span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
