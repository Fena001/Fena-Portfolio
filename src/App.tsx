import React, { useState, useEffect } from 'react';
import StickyHeader from './components/Layout/StickyHeader';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import FeaturedProjects from './components/Projects/FeaturedProjects';
import Contact from './components/Contact/Contact';
import MouseSpotlight from './Layout/MouseSpotlight';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Added 'relative' to ensure z-index works correctly
    <div className="min-h-screen bg-neutral-950 text-neutral-400 font-sans selection:bg-purple-500/30 relative">
      
      {/* 👇 NEW: The Dynamic Background */}
      <MouseSpotlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
        
        {/* Layout: 40% Left / 60% Right */}
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:gap-12">
          
          {/* Left Column */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
            <StickyHeader activeSection={activeSection} />
          </header>

          {/* Right Column */}
          <main id="content" className="pt-24 lg:py-24">
            <About />
            <Skills />
            <FeaturedProjects />
            <Contact />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;