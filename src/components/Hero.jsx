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
      className="relative flex min-h-screen items-center overflow-hidden pb-36 pt-40 md:pb-44 md:pt-48 lg:pb-48 lg:pt-52"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/60 to-white">
        {/* Large gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-3xl" />
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
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-orange-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 5, delay: 1 }}
        className="absolute bottom-40 left-10 w-64 h-64 bg-gradient-to-tr from-blue-500/15 to-orange-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-4xl space-y-10 text-center md:space-y-12"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="mx-auto flex w-fit items-center space-x-4 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/15 to-orange-500/15 px-7 py-3.5 backdrop-blur-sm">
                <Sparkles size={18} className="text-blue-500" />
                <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Welcome to the Future
                </span>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="rounded-2xl border border-orange-200/70 bg-white px-10 py-7 shadow-2xl shadow-orange-200/60 md:px-14 md:py-9">
                <img
                  src={logoShort}
                  alt="Shrinanda Infotech Logo"
                  className="mx-auto h-20 object-contain md:h-24"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-center text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="mb-6 block bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 bg-clip-text text-transparent">
                Innovating the Future
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 bg-clip-text text-transparent block">
                with Technology
              </span>
            </motion.h1>
            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mx-auto w-full max-w-3xl px-2 text-center text-lg font-light leading-9 text-slate-700 md:text-xl lg:text-2xl lg:leading-10"
            >
              Shrinanda Infotech delivers{' '}
              <span className="text-orange-600 font-semibold">
                cutting-edge digital solutions
              </span>
              ,{' '}
              <span className="text-orange-600 font-semibold">
                modern software systems
              </span>
              , and{' '}
              <span className="text-orange-600 font-semibold">
                creative technology services
              </span>{' '}
              for businesses worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="!mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-10 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
              >
                Explore Services
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="whitespace-nowrap rounded-lg border-2 border-blue-500 bg-white px-10 py-4 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-blue-50"
              >
                Contact Us
              </motion.button>
            </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-orange-500 rounded-full mt-2"
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
