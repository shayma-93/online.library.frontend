import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block"
      >
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-50 text-purple-700 border border-purple-200">
          ✨ Magical Reading Experience
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl mb-6 pb-4 font-dancing-script magical-gradient-text drop-shadow-[0_1px_0px_rgba(255,255,255,0.5)]"
      >
        Discover Your Magical Library
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-[600px] text-purple-700 md:text-xl text-center"
      >
        Journey through enchanted bookshelves, discover magical stories, and
        track your reading adventures in our whimsical digital realm.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/books">
            <Button className="bg-blue-300 hover:bg-blue-200 text-purple-900 font-bold rounded-lg relative overflow-hidden group w-full px-8">
              <span className="relative z-10">Explore Magical Books</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-purple-400 hover:bg-purple-300 text-blue-900 font-bold rounded-lg relative overflow-hidden group w-full px-8">
              <span className="relative z-10">Begin Your Adventure</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <Sparkles className="absolute right-2 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
