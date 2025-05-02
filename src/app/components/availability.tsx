'use client';

import { FC } from 'react';
import { ChevronDown, ChevronUp, Feather } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface AvailabilityFilterProps {
    availability: string[];
    expanded: boolean;
    toggleSection: (section: 'genres' | 'years' | 'rating' | 'pages' | 'availability') => void;
    toggleAvailability: (value: string) => void;
  }
  

const AvailabilityFilter: FC<AvailabilityFilterProps> = ({
  availability,
  expanded,
  toggleSection,
  toggleAvailability,
}) => {
  return (
    <div className="space-y-4 relative">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => toggleSection('availability')}
      >
        <h4 className="font-dancing-script text-xl text-purple-900 font-bold flex items-center">
          <Feather className="h-4 w-4 mr-2 text-purple-700" />
          Availability
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
        <div className="pl-6 space-y-3 pt-4 pb-4 rounded-xl bg-purple-50/50 pr-2">
          {[
            { id: 'available', label: 'Available Now' },
            { id: 'rare', label: 'Rare Editions' },
            { id: 'limited', label: 'Limited Edition' },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center space-x-2 group">
              <Checkbox
                id={`availability-${id}`}
                checked={availability.includes(id)}
                onCheckedChange={() => toggleAvailability(id)}
                className="border-purple-500 data-[state=checked]:bg-purple-200 data-[state=checked]:text-purple-600 rounded-sm"
              />
              <Label
                htmlFor={`availability-${id}`}
                className="text-xl text-purple-900  font-akaya-kanadaka cursor-pointer group-hover:text-purple-600 transition-colors"
                >
                {label}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailabilityFilter;
