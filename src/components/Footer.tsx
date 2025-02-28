import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary py-8 border-t border-textLight/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-textLight text-sm mb-4 md:mb-0 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code size={14} className="text-accent" />
            {t('footer.copyright')}
          </motion.p>
          
          <motion.p 
            className="text-textLight text-sm flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('footer.designed').replace('❤️', '')}
            <Heart size={14} className="text-accent fill-accent" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;