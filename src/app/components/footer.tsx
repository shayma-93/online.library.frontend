import LogoSection from './logoSection';
import SocialLinks from './socialLinks';
import QuickLinks from './quickLinks';
import SupportLinks from './supportLinks';
import ContactInfo from './contactInfo';
import LegalLinks from './legalLinks';

const Footer = () => {
  return (
    <footer className="w-full border-t border-purple-200 py-12 md:py-16 bg-white/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <LogoSection />
          <QuickLinks />
          <SupportLinks />
          <ContactInfo />
          <SocialLinks/>
        </div>
        <div className="mt-10 pt-6 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-purple-700 text-center md:text-left">© {new Date().getFullYear()} EnchantedReads. All rights reserved.</p>
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
