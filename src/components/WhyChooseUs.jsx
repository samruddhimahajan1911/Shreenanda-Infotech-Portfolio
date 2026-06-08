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
      description: 'Cutting-edge technology and creative approaches.',
      color: 'text-orange-500',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Expert developers and designers with proven expertise.',
      color: 'text-blue-500',
    },
    {
      icon: Trophy,
      title: 'Modern Technologies',
      description: 'Latest tools and frameworks for optimal results.',
      color: 'text-orange-500',
    },
    {
      icon: Star,
      title: 'Client-Centered',
      description: 'Your success and satisfaction is our top priority.',
      color: 'text-blue-500',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality.',
      color: 'text-orange-500',
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Always available to assist with your needs.',
      color: 'text-blue-500',
    },
  ];

  return (
    <section className="relative -mt-16 overflow-hidden border-t border-slate-100 bg-white pt-8 pb-16 md:-mt-20 md:pt-10 md:pb-20 lg:-mt-24 lg:pt-12 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Us
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Why Choose Shrinanda Infotech
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            We combine thoughtful strategy, reliable delivery, and modern
            technology to build digital solutions ready to grow.
          </p>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mb-8 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { key: 'projects', label: 'Projects Completed', suffix: '+' },
            { key: 'clients', label: 'Happy Clients', suffix: '+' },
            { key: 'technologies', label: 'Technologies', suffix: '+' },
            { key: 'experience', label: 'Years Experience', suffix: '+' },
          ].map((stat) => (
            <motion.div
              key={stat.key}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-full min-h-[160px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/60 transition-colors group-hover:border-orange-400/40">
                <div className="mb-3 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {counters[stat.key]}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>

                <p className="text-base font-medium leading-snug text-slate-600">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mb-8 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div className="relative flex h-full min-h-[200px] flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-50/40">
                  <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-white transition-all group-hover:from-orange-50 group-hover:to-white">
                    <Icon size={26} className={feature.color} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-tight text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white px-8 py-9 text-center shadow-xl shadow-slate-200/70 md:px-12 md:py-10"
        >
          <h3 className="mb-4 text-2xl font-bold text-slate-950 md:text-3xl">
            Ready to Partner with Us?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Join 25+ companies that have transformed their businesses with our
            innovative IT solutions and dedicated support.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 px-8 py-4 font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}