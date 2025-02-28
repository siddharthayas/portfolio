export default {
  header: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    languages: 'Languages',
    projects: 'Projects',
    achievements: 'Achievements',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Siddhartha Subedi',
    title: 'Aspiring Mechatronics Engineer & Web Developer',
    description: 'I\'m passionate about combining mechanical engineering with electronics and software to create innovative solutions.',
    cta: 'Download CV',
  },
  about: {
    title: 'About Me',
    description: 'I am a passionate learner with interests in Mechatronics and Web Development. My goal is to pursue an Ausbildung in Germany in the field of Mechatronics or Automobile Engineering. I enjoy working on projects that combine hardware and software to solve real-world problems.',
    education: {
      title: 'Education',
      timeline: [
        {
          title: '+2 Science (Physical Stream)',
          period: '2018 - 2020',
          status: 'Completed',
          description: 'Focused on Physics, Chemistry, and Mathematics, building a strong foundation in scientific principles.',
        },
        {
          title: 'Basic Web Development',
          period: '2022 - Present',
          status: 'In Progress',
          description: 'Learning HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive web applications.',
        },
        {
          title: 'German B1',
          period: '2023 - Present',
          status: 'In Progress',
          description: 'Developing intermediate German language skills to prepare for education and career opportunities in Germany.',
        },
        {
          title: 'Future Goal: Ausbildung in Germany',
          period: '2024 - Future',
          status: 'Planned',
          description: 'Planning to pursue vocational training in Mechatronics or Automobile Engineering in Germany.',
        },
      ],
    },
  },
  skills: {
    title: 'Skills',
    technical: {
      title: 'Technical Skills',
      items: [
        {
          name: 'Web Development',
          description: 'HTML, CSS, JavaScript, React',
          level: 75,
        },
        {
          name: 'Arduino & Automation',
          description: 'Circuit design, Sensors, Actuators',
          level: 80,
        },
        {
          name: 'IT & Computer Skills',
          description: 'Troubleshooting, System maintenance',
          level: 85,
        },
      ],
    },
    soft: {
      title: 'Soft Skills',
      items: [
        {
          name: 'Teamwork & Collaboration',
          description: 'Working effectively in diverse teams',
          level: 90,
        },
        {
          name: 'Problem-Solving',
          description: 'Analytical thinking and creative solutions',
          level: 85,
        },
        {
          name: 'Time Management',
          description: 'Meeting deadlines and prioritizing tasks',
          level: 80,
        },
        {
          name: 'Learning Ability',
          description: 'Quick adaptation to new technologies',
          level: 95,
        },
      ],
    },
  },
  languages: {
    title: 'Language Proficiency',
    items: [
      {
        name: 'Nepali',
        flag: '🇳🇵',
        level: 100,
        description: 'Native',
      },
      {
        name: 'Hindi',
        flag: '🇮🇳',
        level: 90,
        description: 'Fluent',
      },
      {
        name: 'English',
        flag: '🇬🇧',
        level: 85,
        description: 'Advanced',
      },
      {
        name: 'German',
        flag: '🇩🇪',
        level: 60,
        description: 'B1 (Intermediate)',
      },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'Arduino Smart Home',
        description: 'A prototype smart home system using Arduino, featuring temperature control, lighting automation, and security monitoring.',
        tech: ['Arduino', 'C++', 'IoT', 'Sensors'],
        github: 'https://github.com/siddharthasubedi',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Personal Portfolio',
        description: 'A responsive portfolio website built with React and Framer Motion, showcasing my projects and skills.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/siddharthasubedi',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Automated Plant Watering System',
        description: 'An IoT-based system that monitors soil moisture and automatically waters plants when needed.',
        tech: ['Arduino', 'Sensors', 'Automation'],
        github: 'https://github.com/siddharthasubedi',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  achievements: {
    title: 'Achievements & Certifications',
    items: [
      {
        title: 'Arduino Review Paper',
        description: 'Published a comprehensive review of Arduino applications in automation.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2022',
      },
      {
        title: 'School Sports Winner',
        description: 'First place in the annual school sports competition.',
        image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2019',
      },
      {
        title: 'Web Development Basics',
        description: 'Completed online certification in HTML, CSS, and JavaScript fundamentals.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2022',
      },
      {
        title: 'Coming Soon',
        description: 'Future certifications and achievements will be displayed here.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'Future',
        isPlaceholder: true,
      },
    ],
  },
  contact: {
    title: 'Get In Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    success: 'Your message has been sent successfully!',
    error: 'There was an error sending your message. Please try again.',
    social: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
    },
  },
  footer: {
    copyright: '© 2024 Siddhartha Subedi. All rights reserved.',
    designed: 'Designed & Built with ❤️',
  },
};