import { motion } from 'framer-motion';
import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, bgColor, iconColor }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="neumorphic rounded-3xl p-8 text-center"
    >
      <div className={`p-3 rounded-full ${bgColor} w-16 h-16 flex items-center justify-center mb-4 shadow-inner mx-auto`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-serif italic font-bold text-purple-700 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
