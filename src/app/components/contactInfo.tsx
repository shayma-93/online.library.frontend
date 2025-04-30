import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-start text-center md:text-left px-4">
      <h3 className="text-purple-900 font-akaya-kanadaka text-xl italic font-bold mb-4">
        Contact
      </h3>
      <ul className="space-y-4">
        <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
          <Mail className="h-6 w-6 text-purple-600" />
          <span className="text-purple-700 font-akaya-kanadaka text-xl">
            contact@enchantedreads.com
          </span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
          <Phone className="h-6 w-6 text-purple-600" />
          <span className="text-purple-700 font-akaya-kanadaka text-xl">
            +1 (555) 123-4567
          </span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
          <MapPin className="h-6 w-6 text-purple-600" />
          <span className="text-purple-700 font-akaya-kanadaka text-xl">
            123 Enchanted Street, Magictown, MT 12345
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
