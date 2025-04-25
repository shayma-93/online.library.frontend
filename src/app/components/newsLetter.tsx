import { Input } from './ui/input'; // Adjust the path to your Input component

interface NewsletterSectionProps {
  // You can define any props you need here (e.g., to handle form submission)
}

const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-100 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-300/10 to-blue-300/10 blur-3xl"
          style={{
            width: `${Math.random() * 30 + 20}%`,
            height: `${Math.random() * 30 + 20}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="neumorphic p-8 max-w-4xl mx-auto rounded-3xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="section-title">Stay Enchanted</h2>
            <p className="text-purple-700 md:text-lg">
              Subscribe to our magical newsletter to receive updates on new books, reading lists, and special spells.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Input type="email" placeholder="Enter your email" className="magical-input flex-1 h-12 text-lg" />
            <button className="bubble-button bg-gradient-to-r from-purple-300 to-blue-300 text-purple-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default NewsletterSection;
