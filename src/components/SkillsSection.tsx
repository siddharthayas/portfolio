import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Code, Wrench, Users, Brain, Clock, Zap } from 'lucide-react';

const SkillsSection: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  const getSkillIcon = (name: string, size = 18) => {
    if (name.toLowerCase().includes('web')) return <Code size={size} className="text-accent" />;
    if (name.toLowerCase().includes('arduino')) return <Cpu size={size} className="text-accent" />;
    if (name.toLowerCase().includes('computer') || name.toLowerCase().includes('it')) return <Wrench size={size} className="text-accent" />;
    if (name.toLowerCase().includes('team')) return <Users size={size} className="text-accent" />;
    if (name.toLowerCase().includes('problem')) return <Brain size={size} className="text-accent" />;
    if (name.toLowerCase().includes('time')) return <Clock size={size} className="text-accent" />;
    if (name.toLowerCase().includes('learn')) return <Zap size={size} className="text-accent" />;
    return <Code size={size} className="text-accent" />;
  };
  
  const SkillCard: React.FC<{
    name: string;
    description: string;
    level: number;
    index: number;
  }> = ({ name, description, level, index }) => {
    return (
      <motion.div
        className="skill-card"
        variants={itemVariants}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        custom={index}
      >
        <div className="flex items-center gap-2 mb-2">
          {getSkillIcon(name)}
          <h4 className="text-lg font-medium text-text">{name}</h4>
        </div>
        <p className="text-sm text-textLight mb-4">{description}</p>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };
  
  return (
    <section id="skills" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading flex items-center gap-2">
            <Wrench size={24} className="text-accent" />
            {t('skills.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text mb-6 flex items-center gap-2">
                <Code size={20} className="text-accent" />
                {t('skills.technical.title')}
              </h3>
              <div className="space-y-6">
                {t('skills.technical.items', { returnObjects: true }).map((skill: any, index: number) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    description={skill.description}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text mb-6 flex items-center gap-2">
                <Users size={20} className="text-accent" />
                {t('skills.soft.title')}
              </h3>
              <div className="space-y-6">
                {t('skills.soft.items', { returnObjects: true }).map((skill: any, index: number) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    description={skill.description}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;