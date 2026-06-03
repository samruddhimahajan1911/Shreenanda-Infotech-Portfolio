import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoMain from '../assets/logomain.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar Background Glow */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none z-10" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/30 border-b border-slate-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <img src={logoMain} alt="Shrinanda Infotech" className="h-14 w-auto" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-5 py-2 text-gray-200 hover:text-amber-400 transition-colors duration-300 relative group text-base font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 text-base"
            >
              Contact Us
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 space-y-2 border-t border-slate-700/30"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-slate-800/50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg"
              >
                Contact Us
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
