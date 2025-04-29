"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Calendar,
  BookMarked,
  Feather,
  Sparkles,
  BookOpen,
  Wand2,
  Star,
  Filter,
  ChevronDown,
  ChevronUp,
  Moon,
} from "lucide-react";

// Sample filter data
const genres = [
  { id: "fantasy", label: "Fantasy" },
  { id: "magic", label: "Magic" },
  { id: "adventure", label: "Adventure" },
  { id: "mystery", label: "Mystery" },
  { id: "spells", label: "Spells" },
  { id: "creatures", label: "Creatures" },
  { id: "history", label: "History" },
  { id: "nature", label: "Nature" },
  { id: "divination", label: "Divination" },
  { id: "potions", label: "Potions" },
  { id: "enchantments", label: "Enchantments" },
  { id: "mythology", label: "Mythology" },
];

// Expanded years range
const yearRange = {
  min: 1950,
  max: 2025,
};

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState({
    genres: true,
    years: true,
    rating: true,
    pages: true,
    availability: true,
  });

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [yearValue, setYearValue] = useState([2018, 2025]);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [pagesRange, setPagesRange] = useState([100, 500]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState(0);

  // Calculate active filters count
  useEffect(() => {
    let count = 0;
    if (selectedGenres.length > 0) count++;
    if (yearValue[0] !== yearRange.min || yearValue[1] !== yearRange.max)
      count++;
    if (ratingRange[0] !== 0 || ratingRange[1] !== 5) count++;
    if (pagesRange[0] !== 100 || pagesRange[1] !== 500) count++;
    if (availability.length > 0) count++;
    setActiveFilters(count);
  }, [selectedGenres, yearValue, ratingRange, pagesRange, availability]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleGenre = (genreId: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const toggleAvailability = (value: string) => {
    setAvailability((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedGenres([]);
    setYearValue([yearRange.min, yearRange.max]);
    setRatingRange([0, 5]);
    setPagesRange([100, 500]);
    setAvailability([]);
  };

  // Format year values for display
  const formatYearValue = (value: number) => {
    return value.toString();
  };

  return (
    <div className=" bg-cover bg-center bg-no-repeat  bg-[url('/assets/images/53f0e71f528d032ca2e64b9e76037282.gif')] h-full backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
      {/* Decorative background */}

      {/* Spellbook header */}
      <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 p-6 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAyMGExMCAxMCAwIDEwMTAgMTAgMTAgMTAgMCAwMC0xMC0xMHptMCAxNWE1IDUgMCAxMTUtNSA1IDUgMCAwMS01IDV6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')]"></div>

        {/* Decorative elements */}
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

          {/* Active filters badge */}
          {activeFilters > 0 && (
            <div className="absolute top-0 right-0 bg-purple-200 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
              {activeFilters} active
            </div>
          )}

          {/* Decorative stars */}
          <div className="absolute top-1 right-1 opacity-70">
            <Sparkles className="h-4 w-4 text-purple-300" />
          </div>
          <div className="absolute bottom-0 left-4 opacity-50">
            <Moon className="h-3 w-3 text-purple-300" />
          </div>
        </div>
      </div>

      {/* Filter content */}
      <div className="p-6 space-y-6 relative overflow-visible">
      {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MUgwem0wIDE5aDIwdjFIMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]"></div>

        {/* Genres section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("genres")}
          >
            <h4 className="font-dancing-script text-xl font-bold text-purple-900 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-purple-700" />
              Magical Genres
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.genres ? (
                <ChevronUp className="h-4 w-4 text-purple-300" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-300" />
              )}
            </div>
          </div>

          {expandedSections.genres && (
            <div className="pl-6 space-y-3 pt-4 pb-4 rounded-xl bg-purple-50/50   pr-2">
              <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                {genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="flex items-center space-x-2 group"
                  >
                    <Checkbox
                      id={`genre-${genre.id}`}
                      checked={selectedGenres.includes(genre.id)}
                      onCheckedChange={() => toggleGenre(genre.id)}
                      className="border-purple-700 data-[state=checked]:bg-purple-200 data-[state=checked]:text-purple-600 rounded-sm"
                    />
                    <Label
                      htmlFor={`genre-${genre.id}`}
                      className="text-lg text-purple-700 cursor-pointer group-hover:text-purple-600 transition-colors"
                    >
                      {genre.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        {/* Years section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("years")}
          >
            <h4 className="font-dancing-script font-bold text-xl text-purple-900 flex items-center">
              <Calendar className="h-4 w-4 mr-2  text-purple-700" />
              Publication Year
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.years ? (
                <ChevronUp className="h-4 w-4 text-purple-300" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-300" />
              )}
            </div>
          </div>

          {expandedSections.years && (
            <div className="pl-6 space-y-4 mt-2">
              <div className="bg-purple-50/50 p-3 rounded-md border border-purple-100">
                <Slider
                  value={yearValue}
                  min={yearRange.min}
                  max={yearRange.max}
                  step={1}
                  onValueChange={setYearValue}
                  className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"
                />
                <div className="flex justify-between font-permanent-marker text-s text-purple-900 mt-2">
                  <span>{formatYearValue(yearValue[0])}</span>
                  <span>{formatYearValue(yearValue[1])}</span>
                </div>
           
              </div>
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        {/* Rating section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("rating")}
          >
            <h4 className="font-dancing-script text-xl font-bold text-purple-900 flex items-center">
              <Star className="h-4 w-4 mr-2 text-purple-700" />
              Magical Rating
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.rating ? (
                <ChevronUp className="h-4 w-4 text-purple-300" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-300" />
              )}
            </div>
          </div>

          {expandedSections.rating && (
            <div className="pl-6 space-y-4 mt-2">
              <div className="bg-purple-50/50 p-3 rounded-md border border-purple-100">
                <Slider
                  defaultValue={ratingRange}
                  min={0}
                  max={5}
                  step={0.5}
                  onValueChange={setRatingRange}
                  className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl  "
                />
                <div className="font-permanent-marker flex justify-between text-s text-purple-900 mt-2">
                  <div className="flex items-center">
                    <span>{ratingRange[0]}</span>
                    <Star className="h-4 w-4 ml-1 text-purple-700" />
                  </div>
                  <div className="flex items-center">
                    <span>{ratingRange[1]}</span>
                    <Star className="h-4 w-4 ml-1 text-purple-700" />
                  </div>
                </div>
           
              </div>
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        {/* Pages section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("pages")}
          >
            <h4 className="font-dancing-script text-xl font-bold text-purple-900 flex items-center">
              <BookMarked className="h-4 w-4 mr-2 text-purple-700" />
              Page Count
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.pages ? (
                <ChevronUp className="h-4 w-4 text-purple-300" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-300" />
              )}
            </div>
          </div>

          {expandedSections.pages && (
            <div className="pl-6 space-y-4 mt-2">
              <div className="bg-purple-50/50 p-3 rounded-md border border-purple-100">
                <Slider
                  defaultValue={pagesRange}
                  min={50}
                  max={1000}
                  step={10}
                  onValueChange={setPagesRange}
                  className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"
                />
                <div className="font-permanent-marker flex justify-between text-s text-purple-900 mt-2">
                  <span>{pagesRange[0]} pages</span>
                  <span>{pagesRange[1]} pages</span>
                </div>
           
              </div>
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        {/* Availability section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("availability")}
          >
            <h4 className="font-dancing-script text-xl text-purple-900 font-bold flex items-center">
              <Feather className="h-4 w-4 mr-2 text-purple-700" />
              Availability
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.availability ? (
                <ChevronUp className="h-4 w-4 text-purple-300" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-300" />
              )}
            </div>
          </div>

          {expandedSections.availability && (
            <div className="pl-6 space-y-3 pt-4 pb-4 rounded-xl bg-purple-50/50   pr-2">
              <div className="flex items-center space-x-2 group">
                <Checkbox
                  id="availability-available"
                  checked={availability.includes("available")}
                  onCheckedChange={() => toggleAvailability("available")}
                  className="border-purple-500 data-[state=checked]:bg-purple-200 data-[state=checked]:text-purple-600 rounded-sm"
                />
                <Label
                  htmlFor="availability-available"
                  className="text-lg text-purple-700 cursor-pointer group-hover:text-purple-600 transition-colors"
                >
                  Available Now
                </Label>
              </div>
              <div className="flex items-center space-x-2 group">
                <Checkbox
                  id="availability-rare"
                  checked={availability.includes("rare")}
                  onCheckedChange={() => toggleAvailability("rare")}
                  className="border-purple-500 data-[state=checked]:bg-purple-200 data-[state=checked]:text-purple-600 rounded-sm"
                />
                <Label
                  htmlFor="availability-rare"
                  className="text-lg text-purple-700 cursor-pointer group-hover:text-purple-600 transition-colors"
                >
                  Rare Editions
                </Label>
              </div>
              <div className="flex items-center space-x-2 group">
                <Checkbox
                  id="availability-limited"
                  checked={availability.includes("limited")}
                  onCheckedChange={() => toggleAvailability("limited")}
                  className="border-purple-500 data-[state=checked]:bg-purple-200 data-[state=checked]:text-purple-600 rounded-sm"
                />
                <Label
                  htmlFor="availability-limited"
                  className="text-lg text-purple-700 cursor-pointer group-hover:text-purple-600 transition-colors"
                >
                  Limited Edition
                </Label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-6  space-y-3 ">
      <Button className="w-full bg-purple-400 hover:bg-purple-300 text-blue-900 rounded-lg relative overflow-hidden group">
  <span className="relative z-10  text-blue-900   font-akaya-kanadaka text-xl tracking-wide">Apply Magical Filters</span>
 {/* Sparkles Icon */}
 <Sparkles className="absolute left-10 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20" />

  {/* Gradient Background on Hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>

 
  {/* Filter Icon */}
  <Filter className="absolute right-2 h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
</Button>


<Button
  className="w-full bg-blue-300 hover:bg-blue-200 text-purple-900  rounded-lg  relative overflow-hidden group"
  onClick={resetFilters}
>
  <span className="relative z-10  text-blue-900   font-akaya-kanadaka text-xl tracking-wide">Clear All Spells</span>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20" />
</Button>

      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 opacity-20">
        <Sparkles className="h-6 w-6 text-purple-400" />
      </div>
      <div className="absolute top-1/3 left-4 opacity-10">
        <Moon className="h-8 w-8 text-purple-400" />
      </div>
    </div>
  );
}
