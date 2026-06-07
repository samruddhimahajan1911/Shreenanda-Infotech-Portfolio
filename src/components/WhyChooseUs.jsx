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
      color: 'text-orange-500',
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
      color: 'text-orange-500',
    },
    {
      icon: Star,
      title: 'Client-Centered',
      description: 'Your success and satisfaction is our top priority',
      color: 'text-blue-500',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
      color: 'text-orange-500',
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Always available to assist with your needs',
      color: 'text-blue-500',
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
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-32 md:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
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
              Why Choose Shrinanda Infotech
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
            We combine thoughtful strategy, reliable delivery, and modern technology
            to build digital solutions that feel clear, useful, and ready to grow.
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 md:mb-28 lg:grid-cols-4"
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card */}
              <div className="relative flex h-full min-h-52 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-lg shadow-slate-200/70 transition-colors group-hover:border-orange-400/40">
                {/* Counter */}
                <div className="mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  {counters[stat.key]}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-lg font-medium leading-snug text-slate-600">{stat.label}</p>

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
          className="mb-20 grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 md:mb-28 lg:grid-cols-3"
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
                <div className="relative flex h-full min-h-64 flex-col items-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-50/40 md:p-12">
                  {/* Icon container */}
                  <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-white transition-all group-hover:from-orange-50 group-hover:to-white">
                    <Icon size={27} className={feature.color} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-xl font-bold leading-tight text-slate-950">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-sm text-base leading-relaxed text-slate-600">
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
          className="w-full max-w-6xl rounded-2xl border border-slate-200 bg-white px-10 py-20 text-center shadow-xl shadow-slate-200/70 md:px-16 md:py-24"
        >
          <h3 className="mb-8 text-3xl font-bold text-slate-950">
            Ready to Partner with Us?
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-9 text-slate-600">
            Join 25+ companies that have transformed their businesses with our innovative IT solutions and dedicated support.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-10 py-4 font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
