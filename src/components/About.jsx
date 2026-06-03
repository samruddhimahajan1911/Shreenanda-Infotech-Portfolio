import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';
import aboutImage from '../assets/hero.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative pt-36 pb-48 md:pt-44 md:pb-56 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:pl-4 lg:pl-8"
          >
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-center text-lg leading-relaxed text-gray-300 md:text-left"
            >
              Shrinanda Infotech is a modern IT solutions company focused on innovation, digital transformation, and smart technology services. We help businesses grow through creative software development, modern UI/UX design, branding solutions, cloud integration, and enterprise technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-4 space-y-6 pl-4 sm:pl-6"
            >
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <Code2 size={24} className="text-amber-400" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">Expert Development</h3>
                  <p className="text-gray-400 text-base">
                    Cutting-edge coding practices and modern frameworks for robust applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-1 min-w-14"
                >
                  <Zap size={24} className="text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">Fast Delivery</h3>
                  <p className="text-gray-400 text-base">
                    Agile methodology ensures quick turnaround without compromising quality.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/50 flex items-center justify-center flex-shrink-0 mt-1 min-w-14"
                >
                  <Target size={24} className="text-pink-400" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">Client-Focused</h3>
                  <p className="text-gray-400 text-base">
                    Your success is our priority. We deliver solutions tailored to your needs.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-orange-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/70 to-slate-900/50 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-sm sm:h-96 lg:h-[27rem]">
                <img
                  src={aboutImage}
                  alt="About Shrinanda Infotech"
                  className="w-full h-full object-contain rounded-xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
