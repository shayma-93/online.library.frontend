import Link from 'next/link';

const LegalLinks = () => {
  return (
    <div className="flex gap-4 pb-8 text-xs justify-center md:justify-start">
      <Link href="/terms" className="text-purple-700 hover:text-purple-900 transition-colors">
        Terms of Service
      </Link>
      <Link href="/privacy" className="text-purple-700 hover:text-purple-900 transition-colors">
        Privacy Policy
      </Link>
      <Link href="/cookies" className="text-purple-700 hover:text-purple-900 transition-colors">
        Cookie Policy
      </Link>
    </div>
  );
};

export default LegalLinks;
