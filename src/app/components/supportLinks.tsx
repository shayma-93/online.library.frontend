import Link from 'next/link';

const SupportLinks = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-serif italic font-bold mb-4 text-purple-700">Support</h3>
      <ul className="space-y-2 text-sm text-center md:text-left">
        <li>
          <Link href="/help" className="text-purple-700 hover:text-purple-900 transition-colors">
            Help Center
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-purple-700 hover:text-purple-900 transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-purple-700 hover:text-purple-900 transition-colors">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SupportLinks;
