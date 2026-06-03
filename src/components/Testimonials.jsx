import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechVision Solutions',
      role: 'CEO',
      text: 'Shrinanda Infotech transformed our entire digital presence. Their innovative approach and attention to detail exceeded our expectations.',
      initials: 'RK',
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30',
      avatarColor: 'from-orange-500 to-amber-500',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Digital Enterprises',
      role: 'Operations Manager',
      text: 'The team is incredibly professional and responsive. They delivered our project on time with exceptional quality and continuous support.',
      initials: 'PS',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      avatarColor: 'from-purple-500 to-pink-500',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      company: 'Global Business Corp',
      role: 'Project Lead',
      text: 'Working with Shrinanda Infotech was a game-changer. Their expertise in cloud solutions helped us scale efficiently and reduce costs.',
      initials: 'AP',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      avatarColor: 'from-cyan-500 to-blue-500',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-l from-pink-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-4 text-center sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center md:mb-24"
        >
          <h2 className="mb-10 text-center text-5xl font-bold leading-tight md:text-7xl">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            Real feedback from satisfied clients who have experienced our
            exceptional service and innovative solutions.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-28 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative h-full w-full max-w-sm"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Card */}
              <div
                className={`relative flex h-full min-h-[28rem] flex-col items-center overflow-hidden rounded-xl border ${testimonial.borderColor} bg-gradient-to-br from-slate-800/30 to-slate-700/20 p-8 text-center backdrop-blur-sm transition-all duration-300`}
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="mb-4 text-7xl leading-none text-amber-500/20">"</div>

                {/* Rating */}
                <div className="mb-7 flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star size={18} className="fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-8 text-base leading-relaxed text-gray-300">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="mt-auto flex w-full items-center justify-center gap-4 border-t border-slate-600/30 pt-6 text-left">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.avatarColor} font-bold text-white shadow-lg`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {testimonial.role} | {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-gradient-to-tl from-slate-600/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl rounded-xl border border-slate-600/30 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10 px-8 py-14 text-center md:px-14 md:py-16"
        >
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            <span className="text-xl font-bold text-white md:text-2xl">Join 25+ companies</span> that trust
            Shrinanda Infotech for their digital transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
