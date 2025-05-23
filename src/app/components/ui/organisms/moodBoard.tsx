import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Feather } from "lucide-react";

const HeroMoodBoard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="collage-mood-board relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/books-shelf-pastel-illustration-row-copy-space-293484679.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[5%] left-[5%] sm:left-[10%] z-30"
        >
          <div className="font-dancing-script text-4xl sm:text-5xl md:text-6xl transform rotate-[-25deg] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-40 drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.5)]">
            enchanted
          </div>
        </motion.div>

        {/* Photo 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[0%] right-[0%] sm:w-[35%] md:w-[40%] w-[50%] h-auto z-20 rounded-full border-4 border-white shadow-lg overflow-hidden transform rotate-10"
        >
          <Image
            src="/assets/images/tst,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="books are magical"
            width={300}
            height={450}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Photo 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-[2%] right-[5%] sm:w-[25%] md:w-[30%] w-[40%] h-auto rounded-xl border-4 border-white shadow-lg z-25 overflow-hidden transform rotate-[-10deg]"
        >
          <Image
            src="/assets/images/there-is-no-such-thing-as-too-many-books-book-love-sticker.jpg"
            alt="too many books"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Photo 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[5%] left-[10%] sm:w-[30%] md:w-[35%] w-[40%] h-auto aspect-square z-15 overflow-hidden rounded-full border-4 border-white shadow-lg"
        >
          <Image
            src="/assets/images/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="unicorn"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Photo 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[25%] left-[35%] sm:w-[30%] md:w-[35%] w-[40%] h-auto aspect-square z-20 overflow-hidden rounded-full border-4 border-white shadow-lg"
        >
          <Image
            src="/assets/images/312a957c771766c3611f2cf76f18b62afec91b10e0ce709eab82abf1b26d59d8.jpg"
            alt="purple sticker"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Photo 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-[15%] left-[5%] sm:w-[25%] md:w-[30%] w-[35%] h-auto z-30 shadow-lg rounded-xl border-4 border-white overflow-hidden transform -rotate-6"
        >
          <Image
            src="/assets/images/photo-output-3_79d07235-98c7-4211-8a75-6ff157e8678b.jpg"
            alt="jam"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-[5%] left-[5%] sm:left-[10%] w-[50%] sm:w-[40%] h-auto text-center z-40 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-xl border-4 border-white shadow-lg transform rotate-10"
        >
          <p className="font-permanent-marker text-purple-900 text-xl sm:text-lg">
            &ldquo;A reader lives a thousand lives...&rdquo;
          </p>
          <p className="font-permanent-marker text-blue-900 text-lg sm:text-base mt-1">
            - George R.R. Martin
          </p>
        </motion.div>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-[0%] right-[0%] sm:w-[60px] md:w-[60px] w-[60px] sm:h-[60px] md:h-[60px] h-[60px] z-50 bg-purple-100 rounded-full flex items-center justify-center shadow-md"
        >
          <BookOpen className="h-8 sm:h-10 md:h-10 w-10 sm:w-10 md:w-10 text-purple-600" />
        </motion.div>

        <motion.div
  initial={{ opacity: 0, rotate: 15 }}
  animate={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8, delay: 1.1 }}
  className="absolute top-[45%] left-[0%] sm:w-[60px] md:w-[60px] w-[60px] sm:h-[60px] md:h-[60px] h-[60px] z-50 bg-blue-100 rounded-full flex items-center justify-center shadow-md"
>
  <Feather className="h-8 sm:h-8 md:h-10 w-8 sm:w-8 md:w-10 text-blue-600" />
</motion.div>

      </div>
    </motion.div>
  );
};

export default HeroMoodBoard;
