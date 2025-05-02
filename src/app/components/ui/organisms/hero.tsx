
import HeroBackground from "../molecules/heroBackground";
import HeroContent from "../molecules/heroContent";
import HeroMoodBoard from "./moodBoard";

const Hero = () => {
  return (
<section className="w-full flex flex-col justify-center items-center py-12 md:py-16 lg:py-8 bg-gradient-to-b from-purple-50 via-blue-50 to-purple-200 relative overflow-hidden">
<HeroBackground />
      <div className=" w-full flex flex-col justify-center items-center px-4 md:px-6 relative z-10">
      <div className="w-full flex justify-center">
      <div className="w-full mx-auto grid gap-6 lg:grid-cols-12 lg:gap-12 items-center text-center lg:text-left ">
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
