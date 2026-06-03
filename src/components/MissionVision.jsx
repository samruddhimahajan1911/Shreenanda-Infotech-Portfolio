import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye } from 'lucide-react';

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-40 md:py-52 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Mission & Vision
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Mission and Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl md:grid-cols-2 gap-8 lg:translate-x-24 lg:gap-10 xl:translate-x-32 items-stretch"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative min-w-0"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-slate-800/50 to-slate-700/30 px-8 pb-8 pt-16 shadow-xl shadow-slate-950/20 backdrop-blur-md md:px-10 md:pb-10 md:pt-20">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-transparent" />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10 pt-10 md:pt-12">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-16 h-16 md:w-18 md:h-18 rounded-lg bg-gradient-to-br from-orange-500/30 to-amber-500/20 border border-orange-500/50 flex items-center justify-center mb-7"
                >
                  <Rocket size={34} className="text-orange-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Our Mission</h3>
                <p className="text-gray-300 leading-8 text-base md:text-lg">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital success. We're committed to delivering excellence in every project and partnership.
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/5 to-transparent rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative min-w-0"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-800/50 to-slate-700/30 px-8 pb-8 pt-40
             shadow-xl shadow-slate-950/20 backdrop-blur-md md:px-10 md:pb-10 md:pt-20">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent" />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10 pt-10 md:pt-12">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-16 h-16 md:w-18 md:h-18 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 border border-purple-500/50 flex items-center justify-center mb-7"
                >
                  <Eye size={34} className="text-purple-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Our Vision</h3>
                <p className="text-gray-300 leading-8 text-base md:text-lg">
                  To become a globally trusted technology partner known for creativity, innovation, and future-ready IT services. We envision a world where technology bridges possibilities and drives transformation.
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-64 max-w-5xl md:mt-72 lg:translate-x-24 xl:translate-x-32 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl border border-slate-600/30 px-8 pb-8 pt-16 sm:px-10 sm:pb-10 sm:pt-18 md:px-12 md:pb-12 md:pt-20 backdrop-blur-sm"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries' },
              { title: 'Integrity', desc: 'Honest and transparent dealings' },
              { title: 'Excellence', desc: 'Quality in everything we do' },
              { title: 'Collaboration', desc: 'Working together for success' },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/30 transition-colors"
              >
                <h4 className="text-xl font-bold text-amber-400 mb-3">{value.title}</h4>
                <p className="text-gray-400 text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
