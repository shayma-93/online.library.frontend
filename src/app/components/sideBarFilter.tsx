// components/SidebarFilter.tsx
import { Button } from './ui/button'; // Assuming you have a Button component
import { X, Star } from 'lucide-react';
import { Checkbox } from './ui/checkbox'; // Assuming you have a Checkbox component
import { Slider } from './ui/slider'; // Assuming you have a Slider component

interface SidebarFilterProps {
  availableGenres: string[];
  selectedGenres: string[];
  toggleGenre: (genre: string) => void;
  availableAuthors: string[];
  selectedAuthors: string[];
  toggleAuthor: (author: string) => void;
  clearFilters: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  yearRange: number[];
  setYearRange: (range: [number, number]) => void;
  ratingFilter: number;
  setRatingFilter: (rating: number) => void;
  isSidebarOpen: boolean;
}

const SidebarFilter = ({
  availableGenres,
  selectedGenres,
  toggleGenre,
  availableAuthors,
  selectedAuthors,
  toggleAuthor,
  clearFilters,
  searchTerm,
  setSearchTerm,
  yearRange,
  setYearRange,
  ratingFilter,
  setRatingFilter,
  isSidebarOpen,
}: SidebarFilterProps) => {
  return (
 
      <div className="magical-card p-6 sticky top-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl text-purple-700">Filter Books</h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-purple-500 hover:text-purple-700 p-0 h-auto"
            onClick={clearFilters}
          >
            Clear All
          </Button>
        </div>

        {/* Genre Filter */}
        <div className="mb-6">
          <h3 className="font-serif italic font-bold text-purple-700 mb-2">Genre</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {availableGenres.map((genre) => (
              <div key={genre} className="flex items-center">
                <Checkbox
                  id={`genre-${genre}`}
                  checked={selectedGenres.includes(genre)}
                  onCheckedChange={() => toggleGenre(genre)}
                  className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <label
                  htmlFor={`genre-${genre}`}
                  className="ml-2 text-sm font-medium text-purple-700 cursor-pointer"
                >
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Author Filter */}
        <div className="mb-6">
          <h3 className="font-serif italic font-bold text-purple-700 mb-2">Author</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {availableAuthors.map((author) => (
              <div key={author} className="flex items-center">
                <Checkbox
                  id={`author-${author}`}
                  checked={selectedAuthors.includes(author)}
                  onCheckedChange={() => toggleAuthor(author)}
                  className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <label
                  htmlFor={`author-${author}`}
                  className="ml-2 text-sm font-medium text-purple-700 cursor-pointer"
                >
                  {author}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Year Filter */}
        <div className="mb-6">
          <h3 className="font-serif italic font-bold text-purple-700 mb-2">Publication Year</h3>
          <div className="px-2">
            <Slider
              defaultValue={[yearRange[0], yearRange[1]]}
              min={2013}
              max={2023}
              step={1}
              value={[yearRange[0], yearRange[1]]}
              onValueChange={(value: [number, number]) => setYearRange([value[0], value[1]])}
              className="my-6"
            />

            <div className="flex justify-between text-sm text-purple-700">
              <span>{yearRange[0]}</span>
              <span>{yearRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="font-serif italic font-bold text-purple-700 mb-2">Minimum Rating</h3>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setRatingFilter(rating === ratingFilter ? 0 : rating)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 ${
                    rating <= ratingFilter ? 'text-purple-500 fill-purple-500' : 'text-purple-300'
                  }`}
                />
              </button>
            ))}
            {ratingFilter > 0 && (
              <button
                className="ml-2 text-xs text-purple-500 hover:text-purple-700"
                onClick={() => setRatingFilter(0)}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default SidebarFilter;
