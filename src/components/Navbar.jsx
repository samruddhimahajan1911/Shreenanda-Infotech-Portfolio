import React from 'react';
import { motion } from 'framer-motion';
import logoMain from '../assets/logomain.png';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-2"
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center justify-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img
              src={logoMain}
              alt="Shrinanda Infotech"
              className="h-6 w-auto md:h-8 lg:h-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}