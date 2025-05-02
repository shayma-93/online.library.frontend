import { Button } from "../atoms/button";
import { Sparkles } from "lucide-react";

export default function CreateBookshelfCard() {
  return (
    <div className="magical-card p-8 text-center max-w-3xl mx-auto mb-12">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-purple-600" />
        </div>
      </div>
      <h2 className="font-display text-2xl md:text-3xl text-purple-700 mb-2">Create Your Own Magical Bookshelf</h2>
      <p className="text-purple-700 mb-6 max-w-xl mx-auto">
        Curate your personal collection of enchanted books and share your magical reading journey with fellow
        wizards and witches.
      </p>
      <Button className="magical-button bg-gradient-to-r from-purple-500 to-indigo-500">
        Start Your Bookshelf
      </Button>
    </div>
  );
}
