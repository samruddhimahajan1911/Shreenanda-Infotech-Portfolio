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
    <section id="about" className="relative overflow-hidden border-t border-slate-100 bg-white py-32 md:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center md:mb-28"
        >
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-center justify-items-center gap-y-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-xl space-y-12 text-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-center text-lg leading-9 text-slate-700"
            >
              Shrinanda Infotech is a modern IT solutions company focused on innovation, digital transformation, and smart technology services. We help businesses grow through creative software development, modern UI/UX design, branding solutions, cloud integration, and enterprise technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-10"
            >
              <motion.div
                whileHover={{ x: 8 }}
                className="flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/70 transition-all duration-300 hover:border-orange-300/60"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-500/15 to-orange-500/15"
                >
                  <Code2 size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-slate-950">Expert Development</h3>
                  <p className="text-slate-600 text-base">
                    Cutting-edge coding practices and modern frameworks for robust applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/70 transition-all duration-300 hover:border-orange-300/60"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="flex h-16 w-16 min-w-16 flex-shrink-0 items-center justify-center rounded-lg border border-orange-500/40 bg-gradient-to-br from-orange-500/15 to-blue-500/15"
                >
                  <Zap size={24} className="text-orange-600" />
                </motion.div>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-slate-950">Fast Delivery</h3>
                  <p className="text-slate-600 text-base">
                    Agile methodology ensures quick turnaround without compromising quality.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex flex-col items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/70 transition-all duration-300 hover:border-orange-300/60"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="flex h-16 w-16 min-w-16 flex-shrink-0 items-center justify-center rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-500/15 to-orange-500/15"
                >
                  <Target size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-slate-950">Client-Focused</h3>
                  <p className="text-slate-600 text-base">
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 via-blue-500/25 to-orange-500/25 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-200/80 sm:h-96 md:p-12 lg:h-[28rem]">
                <img
                  src={aboutImage}
                  alt="About Shrinanda Infotech"
                  className="w-full h-full object-contain rounded-xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
