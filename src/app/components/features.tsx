import { Search, BookMarked, Clock } from 'lucide-react';
import FeatureCard from './featureCard';
import BackgroundBlobs from './backgroundBlobs';
import FeaturesHeader from './feturesHeader';

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-blue-100 relative overflow-hidden flex items-center justify-center">
      <BackgroundBlobs />
      <div className="container px-4 md:px-6 relative z-10">
        <FeaturesHeader />
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={Search}
            title="Enchanted Search"
            description="Find exactly what you're looking for with our magical search functionality. Filter by genre, author, magical properties, and more."
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <FeatureCard
            icon={BookMarked}
            title="Mystical Recommendations"
            description="Discover new books tailored to your reading preferences. Our magical algorithm learns from your reading history to suggest books you'll love."
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <FeatureCard
            icon={Clock}
            title="Enchanted Progress Tracking"
            description="Keep track of your reading journey with magical precision. Set goals, mark your progress, and celebrate your reading achievements."
            bgColor="bg-pink-100"
            iconColor="text-pink-600"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
