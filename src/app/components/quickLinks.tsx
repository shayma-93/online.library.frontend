import Link from 'next/link';

const QuickLinks = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-purple-900 font-akaya-kanadaka text-xl italic font-bold mb-4 text-purple-700">Quick Links</h3>
      <ul className="space-y-2 text-sm text-center md:text-left">
        <li>
          <Link href="/" className="text-purple-700  font-akaya-kanadaka text-xl hover:text-purple-900 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/books" className="text-purple-700  font-akaya-kanadaka text-xl hover:text-purple-900 transition-colors">
            Books
          </Link>
        </li>
        <li>
          <Link href="/bookshelves" className="text-purple-700 font-akaya-kanadaka text-xl hover:text-purple-900 transition-colors">
            Bookshelves
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
