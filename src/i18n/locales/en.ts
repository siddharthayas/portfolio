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
    title: 'Engineering & Technology Enthusiast | +2 Science Graduate',
    description: 'I\'m passionate learner with a strong interest in vehicles, computers (both hardware and software), robotics, electronics, physics, and mechanical work.',
    cta: 'Download CV',
  },
  about: {
    title: 'About Me',
    description: 'I am from Nepal and currently living in Pokhara. I completed my SEE and +2 from Amar Singh Secondary School, Pokhara. I have a strong passion for sports and enjoy playing football, cricket, basketball, table tennis, and cycling in my free time. Alongside sports, I am deeply interested in computers and technology, particularly web development, robotics, and automation. I enjoy working on projects that solve real-world problems. Currently, I am learning German as I plan to pursue an Ausbildung in Germany.',
    education: {
      title: 'Education',
      timeline: [
        {
          title: 'SEE (Secondary School Education)',
          period: '2021-2022',
          status: 'Completed',
          description: 'Completed my SEE with optional mathematics and computer science, laying a strong foundation in analytical and technical skills.',
        },
        {
          title: 'Basic Web Development',
          period: '2022 - Present',
          status: 'In Progress',
          description: 'Learning HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive web applications.',
        },
        {
          title: '+2 Science (Physical Stream)',
          period: '2018 - 2020',
          status: 'Completed',
          description: 'Focused on Physics, Chemistry, Mathematics and Computer, building a strong foundation in scientific principles.',
        }, 
        {
          title: 'German Language',
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
        title: 'Arduino-Based Automatic School Bell System',
        description: 'A fully automated school bell system using Arduino and the DS3231 RTC module to schedule and ring bells accurately without manual intervention.',
        tech: ['Arduino', 'C++', 'RTC Module', 'Automation'],
        github: 'https://github.com/siddharthayas/Automatic-School-Bell-System-Using-Arduino',
        demo: 'https://doi.org/10.52403/ijrr.20241127',
        image: './project1.webp',
      },
      {
        title: 'Personal Portfolio',
        description: 'A responsive portfolio website built with React and Framer Motion, showcasing my projects and skills.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/siddharthayas/portfolio',
        demo: '#',
        image: './project2.webp',
      },
      {
        title: 'Computer institute website',
        description: 'This project represents a fully responsive website designed for a computer training institute.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/siddharthayas/it-institute-website',
        demo: 'https://siddharthayas.github.io/it-institute-website/',
        image: './project3.webp',
      },
    ],
  },
  achievements: {
    title: 'Achievements & Certifications',
    items: [
      {
        title: 'Arduino Review Paper',
        description: 'Published a comprehensive review of Arduino applications in automation.',
        image: './achievement1.webp',
        date: '2024',
      },
      {
        title: 'Relay Race (Boys) - Second Position',
        description: 'I secured second place in the boys relay race during the co-curricular activities at Amar Singh Secondary School.',
        image: './achievement2.webp',
        date: '2024',
      },
      {
        title: 'Basketball (Boys) - First Position',
        description: 'Winning first place in the boys basketball competition at Amar Singh Secondary School was a proud moment for me.',
        image: './achievement3.webp',
        date: '2024',
      },
      {
        title: 'Cricket (Boys) - Second Position',
        description: 'We finished in second place in the boys cricket competition, showcasing teamwork and sportsmanship.',
        image: './achievement4.webp',
        date: '2024',
      },
      
      {
        title: 'Cross Country - First Position',
        description: 'Secured first place in the Cross Country race, demonstrating exceptional endurance, speed, and determination in a highly competitive event.',
        image: './achievement6.webp',
        date: '2019',
      },
      {
        title: 'Football (Boys) - First Position',
        description: 'I led my team to victory in the boys football competition, securing first place through dedication and teamwork.',
        image: './achievement7.webp',
        date: '2019',
      },
      {
        title: 'Handball (Boys) - First Position',
        description: 'Awarded for securing first place in the Handball (Boys) competition, demonstrating outstanding teamwork, strategy, and athleticism.',
        image: './achievement8.webp',
        date: '2019',
      },
      {
        title: 'Poster Competition - Second Position',
        description: 'In a poster competition organized by Kantipur Academy of Science & Technology, I secured second place for my creative design.',
        image: './achievement5.webp',
        date: '2018',
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
    copyright: '© 2025 Siddhartha Subedi. All rights reserved.',
    designed: 'Let’s turn ideas into reality',
  },
};