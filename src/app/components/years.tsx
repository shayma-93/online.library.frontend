import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { Slider } from "./ui/slider";

interface PublicationYearFilterProps {
  expandedSections: { [key: string]: boolean };
  yearValue: [number, number];
  yearRange: { min: number; max: number };
  formatYearValue: (value: number) => string;
  toggleSection: (section: "genres" | "years" | "rating" | "pages" | "availability") => void;
  setYearValue: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const PublicationYearFilter: React.FC<PublicationYearFilterProps> = ({
  expandedSections,
  yearValue,
  yearRange,
  formatYearValue,
  toggleSection,
  setYearValue,
}) => {
  return (
    <div className="space-y-4 relative">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => toggleSection("years")}
      >
        <h4 className="font-dancing-script font-bold text-xl text-purple-900 flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-purple-700" />
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
              onValueChange={(val) => setYearValue(val as [number, number])}
              className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"
            />
            <div className="flex justify-between font-permanent-marker text-sm text-purple-900 mt-2">
              {/* Display the start (min) and end (max) of the range */}
              <span>{formatYearValue(yearValue[0])}</span>
              <span>{formatYearValue(yearValue[1])}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationYearFilter;
