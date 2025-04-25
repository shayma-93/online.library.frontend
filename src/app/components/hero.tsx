
import HeroBackground from "./heroBackground";
import HeroContent from "./heroContent";
import HeroMoodBoard from "./moodBoard";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-blue-50 to-purple-100 relative overflow-hidden">
      <HeroBackground />
      <div className="container px-4 md:px-6 relative z-10">
      <div className="flex justify-center">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 items-center text-center lg:text-left mx-auto">
  <div className="col-span-12 lg:col-span-6">
    <HeroContent />
  </div>
  <div className="col-span-12 lg:col-span-6 flex justify-center">
    <HeroMoodBoard />
  </div>
</div>

</div>

      </div>
    </section>
  );
  
};

export default Hero;
