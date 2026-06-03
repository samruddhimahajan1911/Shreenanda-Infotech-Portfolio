import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import logoMain from './assets/logomain.png';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900">
      {/* Fixed Corner Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('home')}
          className="cursor-pointer"
        >
          <img src={logoMain} alt="Shrinanda Infotech" className="h-12 w-auto" />
        </motion.div>
      </motion.div>

      <Hero />
      <About />
      <MissionVision />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
