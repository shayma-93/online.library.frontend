import React, { useState } from "react";
import { ChevronUp, ChevronDown, BookOpen } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Genre } from "../data/interfaces";


interface GenreSectionProps {
    genres: { genres: Genre[] };
    selectedGenres: string[]; 
    toggleGenre: (genreId: string) => void; 
  }

const GenreFilter: React.FC<GenreSectionProps> = ({ genres, selectedGenres, toggleGenre }) => {

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({ genres: true });
  const [showAllGenres, setShowAllGenres] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
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
        <div className="pl-6 pt-4 pb-2 rounded-xl bg-purple-50/50 pr-2">
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {(showAllGenres
              ? genres.genres
              : genres.genres.slice(0, 8)
            ).map((genre) => (
              <div key={genre.id} className="flex items-center space-x-2 group">
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

          {genres.genres.length > 8 && (
            <div className="flex justify-center pt-3">
              <div
                onClick={() => setShowAllGenres((prev) => !prev)}
                className="h-8 w-8 rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer flex items-center justify-center transition-colors"
              >
                {showAllGenres ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
