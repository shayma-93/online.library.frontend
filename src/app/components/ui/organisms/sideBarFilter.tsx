"use client"

import { useState, useEffect } from "react";
import { Button } from "../atoms/button";
import { Sparkles, Wand2, Filter, Moon} from "lucide-react";
import genres from "../../../data/genres.json";
import AvailabilityFilter from "./availability";
import PagesFilter from "../molecules/pages";
import RatingFilter from "./rating";
import PublicationYearFilter from "./years";
import GenreFilter from "./genres";
import { FilterType } from "../../../data/interfaces";

type FilterSidebarProps = {
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
};

export default function FilterSidebar({
  setFilters,
}: FilterSidebarProps) {
  const yearRange = { min: 1950, max: 2025 };
  const [expandedSections, setExpandedSections] = useState({
    genres: true,
    years: true,
    rating: true,
    pages: true,
    availability: true,
  });

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [yearValue, setYearValue] = useState<[number, number]>([1950, 2025]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 5]);
  const [pagesRange, setPagesRange] = useState<[number, number]>([0, 990]);
  const [activeFilters, setActiveFilters] = useState(0);
  const [availability, setAvailability] = useState<string[]>([]);

  const [appliedFilters, setAppliedFilters] = useState<FilterType>({
    genres: [],
    yearRange: [1950, 2025],
    ratingRange: [0, 5],
    pagesRange: [0, 990],
    availability: [],
  });

  // Calculate active filters count
  useEffect(() => {
    let count = 0;
    if (selectedGenres.length > 0) count++;
    if (yearValue[0] !== yearRange.min || yearValue[1] !== yearRange.max) count++;
    if (ratingRange[0] !== 0 || ratingRange[1] !== 5) count++;
    if (pagesRange[0] !== 0 || pagesRange[1] !== 990) count++;
    if (availability.length > 0) count++;
    setActiveFilters(count);
  }, [selectedGenres, yearValue, ratingRange, pagesRange, availability, yearRange.min, yearRange.max]);
  

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleGenre = (genreId: string) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genreId)
        ? prevSelectedGenres.filter((id) => id !== genreId)
        : [...prevSelectedGenres, genreId]
    );
  };

  const toggleAvailability = (value: string) => {
    setAvailability((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const resetFilters = () => {
    // Reset local filter state
    setSelectedGenres([]);
    setYearValue([yearRange.min, yearRange.max]);
    setRatingRange([0, 5]);
    setPagesRange([0, 990]);
    setAvailability([]);
  
    // Clear the applied filters passed from the parent
    setFilters({
      genres: [],
      yearRange: [1950, 2025],
      ratingRange: [0, 5],
      pagesRange: [0, 990],
      availability: [],
    });
  };

  const applyFilters = () => {
    // Apply the filters
    setAppliedFilters({
      genres: selectedGenres,
      yearRange: yearValue,
      ratingRange,
      pagesRange,
      availability,
    });
  };


  // Format year values for display
  const formatYearValue = (value: number) => {
    return value.toString();
  };

  useEffect(() => {
    setFilters(appliedFilters);
  }, [appliedFilters, setFilters]);

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/assets/images/53f0e71f528d032ca2e64b9e76037282.gif')] h-full backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
      <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 p-6 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAyMGExMCAxMCAwIDEwMTAgMTAgMTAgMTAgMCAwMC0xMC0xMHptMCAxNWE1IDUgMCAxMTUtNSA1IDUgMCAwMS01IDV6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')]"></div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200"></div>
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-100 rounded-full opacity-30"></div>

        <div className="relative">
          <h3 className="font-dancing-script text-2xl font-bold text-purple-900 flex items-center">
            <Wand2 className="h-5 w-5 mr-2 text-purple-700" />
            Magical Filters
          </h3>
          <p className="text-purple-700 text-sm mt-1 italic">
            Cast your filtering spells
          </p>

          {activeFilters > 0 && (
            <div className="absolute top-0 right-0 bg-purple-200 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
              {activeFilters} active
            </div>
          )}

          <div className="absolute top-1 right-1 opacity-70">
            <Sparkles className="h-4 w-4 text-purple-300" />
          </div>
          <div className="absolute bottom-0 left-4 opacity-50">
            <Moon className="h-3 w-3 text-purple-300" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 relative overflow-visible">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MUgwem0wIDE5aDIwdjFIMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]"></div>

        <div className="space-y-6">
          <GenreFilter
            genres={genres.genres} 
            selectedGenres={selectedGenres}
            toggleGenre={toggleGenre}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <PublicationYearFilter
            expandedSections={expandedSections}
            yearValue={yearValue}
            yearRange={yearRange}
            formatYearValue={formatYearValue}
            toggleSection={toggleSection}
            setYearValue={setYearValue}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <RatingFilter
            ratingRange={ratingRange}
            setRatingRange={setRatingRange}
            expanded={expandedSections.rating}
            toggleSection={toggleSection}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <PagesFilter
            pagesRange={pagesRange}
            setPagesRange={setPagesRange}
            expanded={expandedSections.pages}
            toggleSection={toggleSection}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <AvailabilityFilter
            availability={availability}
            expanded={expandedSections.availability}
            toggleSection={toggleSection}
            toggleAvailability={toggleAvailability}
          />
        </div>

        <div className="p-6 space-y-3">
          <Button
            className="w-full bg-purple-400 hover:bg-purple-300 text-blue-900 rounded-lg relative overflow-hidden group"
            onClick={applyFilters} // Apply filters on button click
          >
            <span className="relative z-10 text-blue-900 font-akaya-kanadaka text-xl tracking-wide">
              Apply Magical Filters
            </span>
            <Sparkles className="absolute left-10 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <Filter className="absolute right-2 h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          </Button>

          <Button
            className="w-full bg-blue-300 hover:bg-blue-200 text-purple-900 rounded-lg relative overflow-hidden group"
            onClick={resetFilters}
          >
            <span className="relative z-10 text-blue-900 font-akaya-kanadaka text-xl tracking-wide">
              Clear All Spells
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20" />
          </Button>
        </div>

        <div className="absolute bottom-4 right-4 opacity-20">
          <Sparkles className="h-6 w-6 text-purple-400" />
        </div>
        <div className="absolute top-1/3 left-4 opacity-10">
          <Moon className="h-8 w-8 text-purple-400" />
        </div>
      </div>
    </div>
  );
}
