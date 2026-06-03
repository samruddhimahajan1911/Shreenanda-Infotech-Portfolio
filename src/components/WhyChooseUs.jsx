import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Zap, Users, Clock, Trophy } from 'lucide-react';

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    technologies: 0,
    experience: 0,
  });

  const finalCounts = {
    projects: 50,
    clients: 25,
    technologies: 10,
    experience: 5,
  };

  useEffect(() => {
    const intervals = {};

    Object.entries(finalCounts).forEach(([key, finalValue]) => {
      intervals[key] = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [key]: Math.min(prev[key] + Math.ceil(finalValue / 50), finalValue),
        }));
      }, 30);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches',
      color: 'text-amber-400',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Expert developers and designers with proven expertise',
      color: 'text-blue-400',
    },
    {
      icon: Trophy,
      title: 'Modern Technologies',
      description: 'Latest tools and frameworks for optimal results',
      color: 'text-purple-400',
    },
    {
      icon: Star,
      title: 'Client-Centered',
      description: 'Your success and satisfaction is our top priority',
      color: 'text-pink-400',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
      color: 'text-green-400',
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Always available to assist with your needs',
      color: 'text-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative overflow-hidden py-32 md:py-44">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
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
          <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Shrinanda Infotech
            </span>
          </h2>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            We combine thoughtful strategy, reliable delivery, and modern technology
            to build digital solutions that feel clear, useful, and ready to grow.
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-28 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:mb-32 lg:grid-cols-4 lg:gap-8"
        >
          {[
            { key: 'projects', label: 'Projects Completed', suffix: '+' },
            { key: 'clients', label: 'Happy Clients', suffix: '+' },
            { key: 'technologies', label: 'Technologies', suffix: '+' },
            { key: 'experience', label: 'Years Experience', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card */}
              <div className="relative flex h-full min-h-44 flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 text-center backdrop-blur-sm transition-colors group-hover:border-orange-400/40">
                {/* Counter */}
                <div className="mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  {counters[stat.key]}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-lg font-medium leading-snug text-gray-400">{stat.label}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-28 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                {/* Card */}
                <div className="relative flex h-full min-h-52 flex-col rounded-xl border border-slate-600/30 bg-gradient-to-br from-slate-800/35 to-slate-700/20 p-7 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-800/45 md:p-8">
                  {/* Icon container */}
                  <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700/60 to-slate-600/30 transition-all group-hover:from-slate-700 group-hover:to-slate-600">
                    <Icon size={27} className={feature.color} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-sm text-lg leading-relaxed text-gray-400">
                    {feature.description}
                  </p>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison or Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl rounded-2xl border border-slate-600/30 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10 px-8 py-14 text-center md:px-14 md:py-16"
        >
          <h3 className="mb-5 text-3xl font-bold text-white">
            Ready to Partner with Us?
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
            Join 25+ companies that have transformed their businesses with our innovative IT solutions and dedicated support.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
