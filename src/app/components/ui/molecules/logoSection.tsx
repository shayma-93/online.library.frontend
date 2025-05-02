import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const LogoSection = () => {
  return (
    <div className="col-span-2 flex flex-col items-center md:items-start">
      <Link href="/" className="flex items-center gap-2 mb-4">
        <BookOpen className="h-6 w-6 text-purple-600" />
        <span className="text-3xl font-dancing-script font-bold logo-gradient tracking-wide">EnchantedReads</span>
      </Link>
      <p className="text-sm text-purple-900 font-akaya-kanadaka text-lg mb-4 text-center md:text-left">
        Your magical digital library platform. Discover, read, and track your books in an enchanted realm.
      </p>
    </div>
  );
};

export default LogoSection;
