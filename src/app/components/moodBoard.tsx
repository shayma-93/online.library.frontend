import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Feather } from "lucide-react";

const HeroMoodBoard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="collage-mood-board relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
      >
      <div className="absolute inset-0 w-full h-full">
        {/* Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[5%] left-[5%] z-30"
        >
          <div className="font-script text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-40 drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.5)]">
            enchanted
          </div>
        </motion.div>

        {/* Book Covers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[10%] right-[10%] w-[45%] h-auto z-20 shadow-lg rounded-md overflow-hidden transform rotate-3"
        >
          <Image
            src="/placeholder.svg?height=450&width=300&text=Magical+Realms"
            alt="Magical Realms Book Cover"
            width={300}
            height={450}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[35%] left-[0%] w-[30%] h-auto aspect-square z-10 overflow-hidden rounded-full border-4 border-white shadow-lg"
        >
          <Image
            src="/placeholder.svg?height=300&width=300&text=Reading+Nook"
            alt="Reading Nook"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-[45%] right-[5%] w-[35%] h-auto z-30 shadow-lg rounded-md overflow-hidden transform -rotate-6"
        >
          <Image
            src="/placeholder.svg?height=450&width=300&text=Enchanted+Tales"
            alt="Enchanted Tales Book Cover"
            width={300}
            height={450}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-[15%] left-[20%] w-[50%] h-auto z-40 bg-white p-4 rounded-lg shadow-lg transform rotate-2"
        >
          <p className="font-script text-purple-700 text-lg font-bold">
            "A reader lives a thousand lives..."
          </p>
          <p className="text-purple-600 text-sm mt-1">- George R.R. Martin</p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-[20%] left-[35%] z-15"
        >
          <div className="text-purple-300 font-script text-5xl opacity-50">Magical</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-[10%] right-[15%] z-15"
        >
          <div className="text-blue-300 font-script text-4xl opacity-50">Discover</div>
        </motion.div>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-[35%] right-[25%] w-[60px] h-[60px] z-50 bg-purple-100 rounded-full flex items-center justify-center shadow-md"
        >
          <BookOpen className="h-8 w-8 text-purple-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute top-[60%] left-[10%] w-[50px] h-[50px] z-50 bg-blue-100 rounded-full flex items-center justify-center shadow-md"
        >
          <Feather className="h-6 w-6 text-blue-600" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroMoodBoard;
