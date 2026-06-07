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
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-32 md:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
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
          <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Our Mission & Vision
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Mission and Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl items-stretch justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-16"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative min-w-0"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-orange-500/30 bg-white p-10 text-center shadow-xl shadow-slate-200/80 md:p-12 lg:p-14">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent" />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10 flex h-full flex-col items-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="mb-10 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/40 bg-gradient-to-br from-orange-500/25 to-blue-500/15"
                >
                  <Rocket size={34} className="text-orange-400" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-6 text-2xl font-bold text-slate-950 md:text-3xl">Our Mission</h3>
                <p className="text-base leading-8 text-slate-600 md:text-lg">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-blue-500/30 bg-white p-10 text-center shadow-xl shadow-slate-200/80 md:p-12 lg:p-14">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-transparent" />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10 flex h-full flex-col items-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="mb-10 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-500/25 to-orange-500/15"
                >
                  <Eye size={34} className="text-blue-600" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-6 text-2xl font-bold text-slate-950 md:text-3xl">Our Vision</h3>
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  To become a globally trusted technology partner known for creativity, innovation, and future-ready IT services. We envision a world where technology bridges possibilities and drives transformation.
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full" />
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
          className="mx-auto mt-24 max-w-6xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/70 md:mt-32 md:p-14"
        >
          <h3 className="mb-14 text-center text-3xl font-bold text-slate-950 md:mb-16 md:text-4xl">Our Core Values</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries' },
              { title: 'Integrity', desc: 'Honest and transparent dealings' },
              { title: 'Excellence', desc: 'Quality in everything we do' },
              { title: 'Collaboration', desc: 'Working together for success' },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center transition-colors hover:border-orange-500/30"
              >
                <h4 className="mb-4 text-xl font-bold text-blue-700">{value.title}</h4>
                <p className="text-slate-600 text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
