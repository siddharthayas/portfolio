import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Award, Calendar, FileText } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCertificate, setSelectedCertificate] = useState<any | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  
  const openCertificate = (certificate: any) => {
    if (!certificate.isPlaceholder) {
      setSelectedCertificate(certificate);
    }
  };
  
  const closeCertificate = () => {
    setSelectedCertificate(null);
  };
  
  return (
    <section id="achievements" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading flex items-center gap-2">
            <Award size={24} className="text-accent" />
            {t('achievements.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('achievements.items', { returnObjects: true }).map((certificate: any, index: number) => (
              <motion.div
                key={index}
                className={`certificate-card ${certificate.isPlaceholder ? 'opacity-60' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 },
                  },
                }}
                whileHover={certificate.isPlaceholder ? {} : { scale: 1.05 }}
                onClick={() => openCertificate(certificate)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <span className="text-xs text-white/80 flex items-center gap-1">
                      <Calendar size={12} className="text-accent" />
                      {certificate.date}
                    </span>
                  </div>
                  {!certificate.isPlaceholder && (
                    <div className="absolute top-2 right-2 bg-accent/20 p-1 rounded-full">
                      <FileText size={16} className="text-accent" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-text mb-1 flex items-center gap-2">
                    {certificate.isPlaceholder ? (
                      <Award size={16} className="text-textLight" />
                    ) : (
                      <Award size={16} className="text-accent" />
                    )}
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-textLight">{certificate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-secondary rounded-lg overflow-hidden border border-accent/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 z-10 hover:bg-accent/20 transition-colors duration-300"
                onClick={closeCertificate}
              >
                <X size={20} />
              </button>
              
              <div className="h-96">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2 flex items-center gap-2">
                  <Award size={20} className="text-accent" />
                  {selectedCertificate.title}
                </h3>
                <p className="text-textLight">{selectedCertificate.description}</p>
                <p className="text-sm text-accent mt-2 flex items-center gap-2">
                  <Calendar size={16} />
                  {selectedCertificate.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;