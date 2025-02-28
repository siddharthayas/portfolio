import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };
  
  return (
    <motion.div 
      className="language-switcher"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex items-center gap-2">
        
        <motion.div 
          className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage('en')}
        >
          🇬🇧
        </motion.div>
        <motion.div 
          className={`language-option ${i18n.language === 'de' ? 'active' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage('de')}
        >
          🇩🇪
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LanguageSwitcher;