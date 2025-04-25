// components/MobileFilterToggle.tsx
import { Button } from './ui/button'; // Assuming you have a Button component
import { Filter, ChevronUp, ChevronDown } from 'lucide-react';

interface MobileFilterToggleProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MobileFilterToggle = ({ isSidebarOpen, toggleSidebar }: MobileFilterToggleProps) => (
  <div className="md:hidden mb-4">
    <Button
      onClick={toggleSidebar}
      variant="outline"
      className="w-full flex items-center justify-center gap-2 border-purple-200 text-purple-700"
    >
      <Filter className="h-4 w-4" />
      {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
      {isSidebarOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
    </Button>
  </div>
);

export default MobileFilterToggle;
