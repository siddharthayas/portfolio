import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, CheckCircle, Clock, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  
  return (
    <section id="about" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading flex items-center gap-2">
            <BookOpen size={24} className="text-accent" />
            {t('about.title')}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-textLight mb-12">
            {t('about.description')}
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-text mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-accent" />
              {t('about.education.title')}
            </h3>
            
            <div className="space-y-2">
              {t('about.education.timeline', { returnObjects: true }).map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.2 },
                    },
                  }}
                >
                  <div className="mb-1">
                    <h4 className="text-lg font-medium text-text">{item.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-textLight flex items-center gap-1">
                        <Calendar size={14} className="text-accent" />
                        {item.period}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                        item.status === 'Completed' || item.status === 'Abgeschlossen' 
                          ? 'bg-green-900/30 text-green-400' 
                          : item.status === 'In Progress' || item.status === 'In Bearbeitung'
                          ? 'bg-blue-900/30 text-blue-400'
                          : 'bg-purple-900/30 text-purple-400'
                      }`}>
                        {item.status === 'Completed' || item.status === 'Abgeschlossen' ? (
                          <CheckCircle size={12} />
                        ) : (
                          <Clock size={12} />
                        )}
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-textLight text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;