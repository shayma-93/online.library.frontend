'use client';

import { FC } from 'react';
import { BookMarked, ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from './slider';

interface PagesFilterProps {
  pagesRange: [number, number];
  setPagesRange: (range: [number, number]) => void;
  expanded: boolean;
  toggleSection: (section: 'pages') => void;
}

const PagesFilter: FC<PagesFilterProps> = ({
  pagesRange,
  setPagesRange,
  expanded,
  toggleSection,
}) => {
  return (
    <div className="space-y-4 relative">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => toggleSection('pages')}
      >
        <h4 className="font-dancing-script text-xl font-bold text-purple-900 flex items-center">
          <BookMarked className="h-4 w-4 mr-2 text-purple-700" />
          Page Count
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
              value={pagesRange}
              min={0}
              max={900}
              step={10}
              onValueChange={(val) => setPagesRange(val as [number, number])}
              className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"
            />
            <div className="font-permanent-marker flex justify-between text-sm text-purple-900 mt-2">
           
              <div className="flex items-center">
                <span>{pagesRange[0]}</span> {/* Start of Range */}
                <span className="ml-1">pages</span>
                <span> - </span>
                <span>{pagesRange[1]}</span> {/* End of Range */}
                <span className="ml-1">pages</span>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesFilter;
