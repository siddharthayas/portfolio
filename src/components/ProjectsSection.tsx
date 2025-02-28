import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Briefcase, Code, Cpu, Wrench } from 'lucide-react';

const ProjectsSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('arduino') || title.toLowerCase().includes('smart')) 
      return <Cpu size={20} className="text-accent" />;
    if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('web')) 
      return <Code size={20} className="text-accent" />;
    if (title.toLowerCase().includes('plant') || title.toLowerCase().includes('system')) 
      return <Wrench size={20} className="text-accent" />;
    return <Briefcase size={20} className="text-accent" />;
  };
  
  return (
    <section id="projects" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading flex items-center gap-2">
            <Briefcase size={24} className="text-accent" />
            {t('projects.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('projects.items', { returnObjects: true }).map((project: any, index: number) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('arduino') || title.toLowerCase().includes('smart')) 
      return <Cpu size={20} className="text-accent" />;
    if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('web')) 
      return <Code size={20} className="text-accent" />;
    if (title.toLowerCase().includes('plant') || title.toLowerCase().includes('system')) 
      return <Wrench size={20} className="text-accent" />;
    return <Briefcase size={20} className="text-accent" />;
  };
  
  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1 },
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          {getProjectIcon(project.title)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text mb-2 flex items-center gap-2">
          {getProjectIcon(project.title)}
          {project.title}
        </h3>
        <p className="text-textLight text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs bg-primary px-2 py-1 rounded-full text-textLight flex items-center gap-1"
            >
              <Code size={10} className="text-accent" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textLight hover:text-accent transition-colors duration-300 flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
            <span className="text-xs">Code</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textLight hover:text-accent transition-colors duration-300 flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
            <span className="text-xs">Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;