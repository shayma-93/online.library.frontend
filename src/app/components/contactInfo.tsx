import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-serif italic font-bold mb-4 text-purple-700">Contact</h3>
      <ul className="space-y-2 text-sm text-center md:text-left">
        <li className="flex items-start gap-2">
          <Mail className="h-4 w-4 mt-0.5 text-purple-600" />
          <span className="text-purple-700">contact@enchantedreads.com</span>
        </li>
        <li className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-0.5 text-purple-600" />
          <span className="text-purple-700">+1 (555) 123-4567</span>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-0.5 text-purple-600" />
          <span className="text-purple-700">123 Enchanted Street, Magictown, MT 12345</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
