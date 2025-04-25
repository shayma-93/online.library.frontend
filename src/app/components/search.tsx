import { Search } from 'lucide-react';
import { Input } from './ui/input'; // Assuming you have an Input component

const SearchSection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative flex items-center justify-center">
      <div className="w-full max-w-3xl px-4 md:px-6 text-center space-y-6">
        {/* Decorative icons */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="decorative-flourish">✦</span>
          <span className="decorative-dot"></span>
          <span className="decorative-flourish">✦</span>
        </div>

        {/* Title */}
        <h2 className="section-title">Find Your Next Magical Read</h2>

        {/* Line */}
        <div className="decorative-line mx-auto" />

        {/* Subtitle */}
        <p className="text-purple-700 md:text-xl">
          Search through our enchanted collection of books by title, author, genre, or spell.
        </p>

        {/* Search bar */}
        <div className="flex w-full max-w-lg mx-auto items-center space-x-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search for magical books..."
              className="magical-input h-12 text-lg"
            />
          </div>
          <button className="bubble-button bg-gradient-to-r from-purple-300 to-blue-300 text-purple-800 flex items-center gap-2 h-12 px-4 rounded-md">
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
