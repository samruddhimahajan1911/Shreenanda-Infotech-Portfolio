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
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm shadow-slate-200/50 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex h-24 items-center justify-between gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer items-center"
              onClick={() => scrollToSection('home')}
            >
              <img src={logoMain} alt="Shrinanda Infotech" className="h-14 w-auto" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden items-center justify-center gap-2 md:flex">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="group relative px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-300 hover:text-orange-600 lg:px-5"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 md:block"
            >
              Contact Us
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-950 transition-colors hover:bg-slate-100 md:hidden"
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
              className="space-y-3 border-t border-slate-200 bg-white py-6 md:hidden"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full rounded px-4 py-3 text-center text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  {item}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('contact')}
                className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-4 py-3 font-semibold text-white"
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
