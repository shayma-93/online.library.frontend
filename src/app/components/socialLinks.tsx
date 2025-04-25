import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 justify-center md:justify-start">
      <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  );
};

export default SocialLinks;
