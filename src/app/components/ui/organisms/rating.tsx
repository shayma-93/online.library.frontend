"use client";

import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Slider } from "../molecules/slider";
import React from "react";

type RatingFilterProps = {
  ratingRange: [number, number];
  setRatingRange: (range: [number, number]) => void;
  expanded: boolean;
  toggleSection: (section: "rating") => void;
};

const RatingFilter: React.FC<RatingFilterProps> = ({
  ratingRange,
  setRatingRange,
  expanded,
  toggleSection,
}) => {
  return (
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
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-purple-300" />
          ) : (
            <ChevronDown className="h-4 w-4 text-purple-300" />
          )}
        </div>
      </div>

      {expanded && (
        <div className="pl-6 space-y-4 mt-2">
          <div className="bg-purple-50/50 p-3 rounded-md border border-purple-100">
            <Slider
              value={ratingRange}
              min={0}
              max={5}
              step={0.5}
              onValueChange={(val) => setRatingRange(val as [number, number])}
              className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"
            />
            <div className="font-permanent-marker flex justify-between text-sm text-purple-900 mt-2">
              {/* Display the start (min), selected, and end (max) of the range */}
            
              <div className="flex items-center">
                <span>{ratingRange[0]}</span>
                <Star className="h-4 w-4 ml-1 text-purple-700" />
                <span> - </span>
                <span>{ratingRange[1]}</span>
                <Star className="h-4 w-4 ml-1 text-purple-700" />
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
