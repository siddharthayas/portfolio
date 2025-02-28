import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown, ChevronDown} from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-accent font-mono mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <Code size={18} className="inline-block" /> */}
            {t('hero.greeting')}
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('hero.name')}
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-textLight mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <Cpu size={24} className="text-accent" /> */}
            {t('hero.title')}
          </motion.h2>
          <motion.p 
            className="text-textLight max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.a 
            href="#" 
            className="btn-primary inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={18} className="mr-2" />
            {t('hero.cta')}
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <img 
              src="public/my.jpg" 
              alt="Siddhartha Subedi" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
             
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-accent"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;