"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import { Sparkles, BookOpen, Wand2, Bookmark, Star, Filter, ChevronDown, ChevronUp, Moon } from "lucide-react"

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
]

const years = [
  { id: "2022", label: "2022" },
  { id: "2021", label: "2021" },
  { id: "2020", label: "2020" },
  { id: "2019", label: "2019" },
  { id: "2018", label: "2018" },
]

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState({
    genres: true,
    years: true,
    rating: true,
    pages: true,
  })

  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [ratingRange, setRatingRange] = useState([0, 5])
  const [pagesRange, setPagesRange] = useState([100, 500])

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleGenre = (genreId: string) => {
    setSelectedGenres((prev) => (prev.includes(genreId) ? prev.filter((id) => id !== genreId) : [...prev, genreId]))
  }

  const toggleYear = (yearId: string) => {
    setSelectedYears((prev) => (prev.includes(yearId) ? prev.filter((id) => id !== yearId) : [...prev, yearId]))
  }

  const resetFilters = () => {
    setSelectedGenres([])
    setSelectedYears([])
    setRatingRange([0, 5])
    setPagesRange([100, 500])
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-md shadow-md border border-purple-100 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAyMGExMCAxMCAwIDEwMTAgMTAgMTAgMTAgMCAwMC0xMC0xMHptMCAxNWE1IDUgMCAxMTUtNSA1IDUgMCAwMS01IDV6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')]"></div>

      {/* Spellbook header */}
      <div className="bg-gradient-to-r from-purple-200 to-purple-300 p-6 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAyMGExMCAxMCAwIDEwMTAgMTAgMTAgMTAgMCAwMC0xMC0xMHptMCAxNWE1IDUgMCAxMTUtNSA1IDUgMCAwMS01IDV6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')]"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200"></div>
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-100 rounded-full opacity-30"></div>

        <div className="relative">
          <h3 className="font-dancing-script text-2xl font-bold text-purple-700 flex items-center">
            <Wand2 className="h-5 w-5 mr-2 text-purple-500" />
            Magical Filters
          </h3>
          <p className="text-purple-500 text-sm mt-1 italic">Cast your filtering spells</p>

          {/* Decorative stars */}
          <div className="absolute top-1 right-1 opacity-70">
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>
          <div className="absolute bottom-0 left-4 opacity-50">
            <Moon className="h-3 w-3 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Filter content */}
      <div className="p-6 space-y-8 relative">
        {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MUgwem0wIDE5aDIwdjFIMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]"></div>

        {/* Genres section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("genres")}
          >
            <h4 className="font-dancing-script text-xl text-purple-500 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-purple-300" />
              Magical Genres
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.genres ? (
                <ChevronUp className="h-4 w-4 text-purple-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-400" />
              )}
            </div>
          </div>

          {expandedSections.genres && (
            <div className="pl-6 space-y-3 mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
              {genres.map((genre) => (
                <div key={genre.id} className="flex items-center space-x-2 group">
                  <Checkbox
                    id={`genre-${genre.id}`}
                    checked={selectedGenres.includes(genre.id)}
                    onCheckedChange={() => toggleGenre(genre.id)}
                    className="border-purple-200 data-[state=checked]:bg-purple-300 rounded-sm"
                  />
                  <Label
                    htmlFor={`genre-${genre.id}`}
                    className="text-sm text-purple-500 cursor-pointer group-hover:text-purple-600 transition-colors"
                  >
                    {genre.label}
                  </Label>
                </div>
              ))}
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>

        {/* Years section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("years")}
          >
            <h4 className="font-dancing-script text-xl text-purple-500 flex items-center">
              <Bookmark className="h-4 w-4 mr-2 text-purple-300" />
              Publication Year
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.years ? (
                <ChevronUp className="h-4 w-4 text-purple-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-400" />
              )}
            </div>
          </div>

          {expandedSections.years && (
            <div className="pl-6 space-y-3 mt-2">
              {years.map((year) => (
                <div key={year.id} className="flex items-center space-x-2 group">
                  <Checkbox
                    id={`year-${year.id}`}
                    checked={selectedYears.includes(year.id)}
                    onCheckedChange={() => toggleYear(year.id)}
                    className="border-purple-200 data-[state=checked]:bg-purple-300 rounded-sm"
                  />
                  <Label
                    htmlFor={`year-${year.id}`}
                    className="text-sm text-purple-500 cursor-pointer group-hover:text-purple-600 transition-colors"
                  >
                    {year.label}
                  </Label>
                </div>
              ))}
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>

        {/* Rating section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("rating")}
          >
            <h4 className="font-dancing-script text-xl text-purple-500 flex items-center">
              <Star className="h-4 w-4 mr-2 text-purple-300" />
              Magical Rating
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.rating ? (
                <ChevronUp className="h-4 w-4 text-purple-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-400" />
              )}
            </div>
          </div>

          {expandedSections.rating && (
            <div className="pl-6 space-y-4 mt-2">
              <Slider
                defaultValue={ratingRange}
                min={0}
                max={5}
                step={0.5}
                onValueChange={setRatingRange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-purple-500">
                <span>{ratingRange[0]} stars</span>
                <span>{ratingRange[1]} stars</span>
              </div>
            </div>
          )}

          {/* Decorative divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>

        {/* Pages section */}
        <div className="space-y-4 relative">
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => toggleSection("pages")}
          >
            <h4 className="font-dancing-script text-xl text-purple-500 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-purple-300" />
              Page Count
            </h4>
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              {expandedSections.pages ? (
                <ChevronUp className="h-4 w-4 text-purple-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-purple-400" />
              )}
            </div>
          </div>

          {expandedSections.pages && (
            <div className="pl-6 space-y-4 mt-2">
              <Slider
                defaultValue={pagesRange}
                min={100}
                max={500}
                step={10}
                onValueChange={setPagesRange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-purple-500">
                <span>{pagesRange[0]} pages</span>
                <span>{pagesRange[1]} pages</span>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="pt-6 border-t border-purple-100 space-y-3">
          <Button className="w-full bg-purple-300 hover:bg-purple-400 text-white rounded-sm relative overflow-hidden group">
            <span className="relative z-10">Apply Magical Filters</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <Filter className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            variant="outline"
            className="w-full border-purple-200 text-purple-400 hover:bg-purple-50 rounded-sm"
            onClick={resetFilters}
          >
            Clear All Spells
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 opacity-20">
        <Sparkles className="h-6 w-6 text-purple-500" />
      </div>
      <div className="absolute top-1/3 left-4 opacity-10">
        <Moon className="h-8 w-8 text-purple-500" />
      </div>
    </div>
  )
}
