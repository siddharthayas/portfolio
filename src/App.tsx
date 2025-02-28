import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

// Components
import StarBackground from './components/StarBackground';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import LanguagesSection from './components/LanguagesSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  
  return (
    <div className="min-h-screen bg-primary text-text">
      <StarBackground />
      <LanguageSwitcher />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LanguagesSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;