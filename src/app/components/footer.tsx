import LogoSection from './logoSection';
import SocialLinks from './socialLinks';
import QuickLinks from './quickLinks';
import SupportLinks from './supportLinks';
import ContactInfo from './contactInfo';
import LegalLinks from './legalLinks';

const Footer = () => {
  return (
    <footer className="w-full border-t border-purple-200 pt-12 md:pt-16 bg-gradient-to-b from-lavender-50 to-purple-100 backdrop-blur-sm">
      <div className="w-full px-4 md:px-6 mx-auto">
        {/* Stacked layout for small screens, and grid for larger screens */}
        <div className="flex flex-col items-center gap-12 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:max-w-7xl sm:mx-auto">
          <LogoSection />
          <QuickLinks />
          <SupportLinks />
          <ContactInfo />
          <div className="w-full mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm text-purple-700 text-center md:text-left">
            © {new Date().getFullYear()} EnchantedReads. All rights reserved.
          </p>
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
