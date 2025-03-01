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
    description: 'Ich komme aus Nepal und lebe derzeit in Pokhara. Ich habe mein SEE und +2 an der Amar Singh Secondary School in Pokhara abgeschlossen. Ich habe eine große Leidenschaft für Sport und spiele in meiner Freizeit gerne Fußball, Cricket, Basketball, Tischtennis und fahre Fahrrad. Neben dem Sport interessiere ich mich sehr für Computer und Technologie, insbesondere für Webentwicklung, Robotik und Automatisierung. Ich arbeite gerne an Projekten, die reale Probleme lösen. Zurzeit lerne ich Deutsch, da ich eine Ausbildung in Deutschland machen möchte.',
    education: {
      title: 'Bildung',
      timeline: [
        {
          title: 'SEE (Sekundarschulbildung)',
          period: '2021-2022',
          status: 'Abgeschlossen',
          description: 'Meine SEE mit Wahlfach Mathematik und Informatik abgeschlossen und eine solide Grundlage in analytischen und technischen Fähigkeiten geschaffen.',
        },
        {
          title: 'Grundlegende Webentwicklung',
          period: '2022 - Heute',
          status: 'In Bearbeitung',
          description: 'Erlernen von HTML, CSS, JavaScript und modernen Frameworks zum Erstellen responsiver und interaktiver Webanwendungen.',
        },
        {
          title: '+2 Naturwissenschaften (Physikalische Richtung)',
          period: '2018 - 2020',
          status: 'Abgeschlossen',
          description: 'Fokus auf Physik, Chemie, Mathematik und Computer, Aufbau einer soliden Grundlage in wissenschaftlichen Prinzipien.',
        },      
        {
          title: 'Deutsch Sprache',
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
        title: 'Arduino-basiertes automatisches Schulglockensystem',
        description: 'Ein vollständig automatisiertes Schulglockensystem mit Arduino und dem DS3231-RTC-Modul zur genauen Planung und Steuerung der Glocken ohne manuelle Eingriffe.',
        tech: ['Arduino', 'C++', 'RTC-Modul', 'Automatisierung'],
        github: 'https://github.com/siddharthayas/Automatic-School-Bell-System-Using-Arduino',
        demo: 'https://doi.org/10.52403/ijrr.20241127',
        image: './project1.webp',
      },
      {
        title: 'Persönliches Portfolio',
        description: 'Eine responsive Portfolio-Website, erstellt mit React und Framer Motion, die meine Projekte und Fähigkeiten präsentiert.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/siddharthayas/portfolio',
        demo: '#',
        image: './project2.webp',
      },
      {
        title: 'Website für ein Computerinstitut',
        description: 'Dieses Projekt ist eine vollständig responsive Website, die für ein Computer-Schulungsinstitut entwickelt wurde.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/siddharthayas/it-institute-website',
        demo: 'https://siddharthayas.github.io/it-institute-website/',
        image: './project3.webp',
      },
    ],
  },
  achievements: {
    title: 'Erfolge & Zertifizierungen',
    items: [
      {
        title: 'Arduino-Überprüfungspapier',
        description: 'Veröffentlichung einer umfassenden Überprüfung von Arduino-Anwendungen in der Automatisierung.',
        image: './achievement1.webp',
        date: '2024',
      },
      {
        title: 'Staffellauf (Jungen) - Zweiter Platz',
        description: 'Ich belegte den zweiten Platz im Staffellauf der Jungen während der außerschulischen Aktivitäten an der Amar Singh Secondary School.',
        image: './achievement2.webp',
        date: '2024',
      },
      {
        title: 'Basketball (Jungen) - Erster Platz',
        description: 'Den ersten Platz im Basketballturnier der Jungen an der Amar Singh Secondary School zu gewinnen, war ein stolzer Moment für mich.',
        image: './achievement3.webp',
        date: '2024',
      },
      {
        title: 'Cricket (Jungen) - Zweiter Platz',
        description: 'Wir erreichten den zweiten Platz im Cricketturnier der Jungen und zeigten dabei Teamgeist und Fairplay.',
        image: './achievement4.webp',
        date: '2024',
      },
      {
        title: 'Crosslauf - Erster Platz',
        description: 'Ich belegte den ersten Platz im Crosslauf und bewies außergewöhnliche Ausdauer, Schnelligkeit und Entschlossenheit in einem hochkompetitiven Rennen.',
        image: './achievement6.webp',
        date: '2019',
      },
      {
        title: 'Fußball (Jungen) - Erster Platz',
        description: 'Ich führte mein Team zum Sieg im Fußballturnier der Jungen und sicherte uns durch Engagement und Teamarbeit den ersten Platz.',
        image: './achievement7.webp',
        date: '2019',
      },
      {
        title: 'Handball (Jungen) - Erster Platz',
        description: 'Ich wurde für den ersten Platz im Handballturnier der Jungen ausgezeichnet und zeigte herausragenden Teamgeist, Strategie und sportliches Können.',
        image: './achievement8.webp',
        date: '2019',
      },
      {
        title: 'Plakatwettbewerb - Zweiter Platz',
        description: 'Bei einem Plakatwettbewerb, organisiert von der Kantipur Academy of Science & Technology, belegte ich mit meinem kreativen Design den zweiten Platz.',
        image: './achievement5.webp',
        date: '2018',
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