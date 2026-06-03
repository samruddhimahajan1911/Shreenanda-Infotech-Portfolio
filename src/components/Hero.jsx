import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import logoShort from '../assets/logoshort.png';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Floating shapes animation
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-32 overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900">
        {/* Large gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,.1)_25%,rgba(255,165,0,.1)_50%,transparent_50%,transparent_75%,rgba(255,165,0,.1)_75%,rgba(255,165,0,.1))] bg-[length:40px_40px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 5, delay: 1 }}
        className="absolute bottom-40 left-10 w-64 h-64 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-16 w-full"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/50 backdrop-blur-sm flex items-center space-x-3 w-fit mx-auto">
                <Sparkles size={18} className="text-amber-400" />
                <span className="text-base font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Welcome to the Future
                </span>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="px-14 py-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 backdrop-blur-md shadow-2xl shadow-orange-500/20">
                <img
                  src={logoShort}
                  alt="Shrinanda Infotech Logo"
                  className="h-24 object-contain mx-auto"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center"
            >
              <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent block mb-4">
                Innovating the Future
              </span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent block">
                with Technology
              </span>
            </motion.h1>
            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mx-auto w-full max-w-3xl px-4 py-6 text-center text-lg font-light leading-relaxed text-gray-300 md:text-xl lg:translate-x-28 lg:text-2xl"
            >
              Shrinanda Infotech delivers{' '}
              <span className="text-amber-200 font-semibold">
                cutting-edge digital solutions
              </span>
              ,{' '}
              <span className="text-amber-200 font-semibold">
                modern software systems
              </span>
              , and{' '}
              <span className="text-amber-200 font-semibold">
                creative technology services
              </span>{' '}
              for businesses worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="!mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 text-base whitespace-nowrap"
              >
                Explore Services
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-slate-800/50 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-slate-700/50 transition-all duration-300 text-base whitespace-nowrap"
              >
                Contact Us
              </motion.button>
            </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-amber-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
