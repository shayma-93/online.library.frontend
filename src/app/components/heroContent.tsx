import { motion } from "framer-motion";

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
  Journey through enchanted bookshelves, discover magical stories, and track your reading adventures in our
  whimsical digital realm.
</motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <button className="bubble-button bg-gradient-to-r from-purple-300 to-blue-300 text-purple-800">
          Begin Your Adventure
        </button>
        <button className="bubble-button">Explore Magical Books</button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
