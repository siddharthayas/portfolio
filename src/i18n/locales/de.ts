export default {
  header: {
    home: 'Startseite',
    about: 'Über mich',
    skills: 'Fähigkeiten',
    languages: 'Sprachen',
    projects: 'Projekte',
    achievements: 'Erfolge',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Siddhartha Subedi',
    title: 'Technik- und Ingenieurbegeisterter | +2-Absolvent der Naturwissenschaften',
    description: 'Ich bin ein leidenschaftlicher Lernender mit großem Interesse an Fahrzeugen, Computern (sowohl Hardware als auch Software), Robotik, Elektronik, Physik und mechanischer Arbeit.',
    cta: 'Lebenslauf herunterladen',
  },
  about: {
    title: 'Über Mich',
    description: 'Ich bin ein leidenschaftlicher Lerner mit Interessen in Mechatronik und Webentwicklung. Mein Ziel ist es, eine Ausbildung in Deutschland im Bereich Mechatronik oder Automobilingenieurwesen zu absolvieren. Ich arbeite gerne an Projekten, die Hardware und Software kombinieren, um reale Probleme zu lösen.',
    education: {
      title: 'Bildung',
      timeline: [
        {
          title: '+2 Naturwissenschaften (Physikalische Richtung)',
          period: '2018 - 2020',
          status: 'Abgeschlossen',
          description: 'Fokus auf Physik, Chemie und Mathematik, Aufbau einer soliden Grundlage in wissenschaftlichen Prinzipien.',
        },
        {
          title: 'Grundlegende Webentwicklung',
          period: '2022 - Heute',
          status: 'In Bearbeitung',
          description: 'Erlernen von HTML, CSS, JavaScript und modernen Frameworks zum Erstellen responsiver und interaktiver Webanwendungen.',
        },
        {
          title: 'Deutsch B1',
          period: '2023 - Heute',
          status: 'In Bearbeitung',
          description: 'Entwicklung mittlerer Deutschkenntnisse zur Vorbereitung auf Bildungs- und Karrieremöglichkeiten in Deutschland.',
        },
        {
          title: 'Zukunftsziel: Ausbildung in Deutschland',
          period: '2024 - Zukunft',
          status: 'Geplant',
          description: 'Planung einer Berufsausbildung in Mechatronik oder Automobilingenieurwesen in Deutschland.',
        },
      ],
    },
  },
  skills: {
    title: 'Fähigkeiten',
    technical: {
      title: 'Technische Fähigkeiten',
      items: [
        {
          name: 'Webentwicklung',
          description: 'HTML, CSS, JavaScript, React',
          level: 75,
        },
        {
          name: 'Arduino & Automatisierung',
          description: 'Schaltungsdesign, Sensoren, Aktoren',
          level: 80,
        },
        {
          name: 'IT & Computerkenntnisse',
          description: 'Fehlerbehebung, Systemwartung',
          level: 85,
        },
      ],
    },
    soft: {
      title: 'Soft Skills',
      items: [
        {
          name: 'Teamarbeit & Zusammenarbeit',
          description: 'Effektive Arbeit in vielfältigen Teams',
          level: 90,
        },
        {
          name: 'Problemlösung',
          description: 'Analytisches Denken und kreative Lösungen',
          level: 85,
        },
        {
          name: 'Zeitmanagement',
          description: 'Einhalten von Fristen und Priorisieren von Aufgaben',
          level: 80,
        },
        {
          name: 'Lernfähigkeit',
          description: 'Schnelle Anpassung an neue Technologien',
          level: 95,
        },
      ],
    },
  },
  languages: {
    title: 'Sprachkenntnisse',
    items: [
      {
        name: 'Nepalesisch',
        flag: '🇳🇵',
        level: 100,
        description: 'Muttersprache',
      },
      {
        name: 'Hindi',
        flag: '🇮🇳',
        level: 90,
        description: 'Fließend',
      },
      {
        name: 'Englisch',
        flag: '🇬🇧',
        level: 85,
        description: 'Fortgeschritten',
      },
      {
        name: 'Deutsch',
        flag: '🇩🇪',
        level: 60,
        description: 'B1 (Mittelstufe)',
      },
    ],
  },
  projects: {
    title: 'Projekte',
    items: [
      {
        title: 'Arduino Smart Home',
        description: 'Ein Prototyp eines Smart-Home-Systems mit Arduino, mit Temperaturregelung, Beleuchtungsautomatisierung und Sicherheitsüberwachung.',
        tech: ['Arduino', 'C++', 'IoT', 'Sensoren'],
        github: 'https://github.com/siddharthasubedi',
        demo: 'https://doi.org/10.52403/ijrr.20241127',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Persönliches Portfolio',
        description: 'Eine responsive Portfolio-Website, erstellt mit React und Framer Motion, die meine Projekte und Fähigkeiten präsentiert.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/siddharthasubedi',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Automatisches Pflanzenbewässerungssystem',
        description: 'Ein IoT-basiertes System, das die Bodenfeuchtigkeit überwacht und Pflanzen bei Bedarf automatisch bewässert.',
        tech: ['Arduino', 'Sensoren', 'Automatisierung'],
        github: 'https://github.com/siddharthasubedi',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  achievements: {
    title: 'Erfolge & Zertifizierungen',
    items: [
      {
        title: 'Arduino-Überprüfungspapier',
        description: 'Veröffentlichung einer umfassenden Überprüfung von Arduino-Anwendungen in der Automatisierung.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2022',
      },
      {
        title: 'Schulsporthgewinner',
        description: 'Erster Platz im jährlichen Schulsportwettbewerb.',
        image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2019',
      },
      {
        title: 'Webentwicklung Grundlagen',
        description: 'Abgeschlossene Online-Zertifizierung in HTML, CSS und JavaScript-Grundlagen.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: '2022',
      },
      {
        title: 'Demnächst',
        description: 'Zukünftige Zertifizierungen und Erfolge werden hier angezeigt.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'Zukunft',
        isPlaceholder: true,
      },
    ],
  },
  contact: {
    title: 'Kontakt Aufnehmen',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht Senden',
    success: 'Ihre Nachricht wurde erfolgreich gesendet!',
    error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    social: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'E-Mail',
    },
  },
  footer: {
    copyright: '© 2024 Siddhartha Subedi. Alle Rechte vorbehalten.',
    designed: 'Entworfen & Entwickelt mit ❤️',
  },
};