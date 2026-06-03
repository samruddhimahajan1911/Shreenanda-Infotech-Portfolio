import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  CreditCard,
  ExternalLink,
  LayoutDashboard,
  PenTool,
  ShoppingCart,
  UtensilsCrossed,
} from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce site with payment integration',
      icon: ShoppingCart,
      color: 'from-blue-500/30 via-cyan-500/20 to-slate-900',
      iconColor: 'text-blue-300',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application',
      icon: CreditCard,
      color: 'from-purple-500/30 via-pink-500/20 to-slate-900',
      iconColor: 'text-purple-300',
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      category: 'web',
      description: 'Comprehensive analytics dashboard',
      icon: LayoutDashboard,
      color: 'from-cyan-500/30 via-teal-500/20 to-slate-900',
      iconColor: 'text-cyan-300',
      tags: ['Vue.js', 'Charts.js'],
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete branding and visual identity package',
      icon: PenTool,
      color: 'from-amber-500/30 via-orange-500/20 to-slate-900',
      iconColor: 'text-amber-300',
      tags: ['UI/UX', 'Branding'],
    },
    {
      id: 5,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Enterprise cloud infrastructure setup',
      icon: Cloud,
      color: 'from-green-500/30 via-emerald-500/20 to-slate-900',
      iconColor: 'text-green-300',
      tags: ['AWS', 'Docker'],
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Real-time food delivery tracking application',
      icon: UtensilsCrossed,
      color: 'from-rose-500/30 via-orange-500/20 to-slate-900',
      iconColor: 'text-rose-300',
      tags: ['Flutter', 'Firebase', 'Maps'],
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
    <section id="portfolio" className="relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl" />
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
              Our Portfolio
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            Explore our latest projects and see how we've helped businesses achieve their goals.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-wrap justify-center gap-4 md:mb-24 md:gap-5"
        >
          {['all', 'web', 'mobile', 'design', 'cloud'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-7 py-3 text-base font-semibold capitalize whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/50'
                  : 'border border-slate-600/30 bg-slate-800/50 text-gray-300 hover:border-slate-500/50 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layoutId={item.id}
                className="group relative h-full w-full max-w-sm"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-xl border border-slate-600/30 bg-gradient-to-br from-slate-800/30 to-slate-700/20 text-center backdrop-blur-sm transition-all duration-300 hover:border-orange-400/40">
                  {/* Preview Panel */}
                  <div className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${item.color}`}>
                    <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute bottom-6 right-8 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl" />
                    <div className="absolute inset-x-8 bottom-8 h-px bg-white/15" />
                    <div className="absolute left-8 right-8 top-8 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.35 }}
                      className="relative flex h-24 w-24 items-center justify-center rounded-xl border border-white/15 bg-slate-900/45 shadow-2xl shadow-slate-950/40 backdrop-blur-sm"
                    >
                      <Icon size={42} className={item.iconColor} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col items-center p-8">
                    <div className="mb-5 flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-amber-300">
                      {item.title}
                    </h3>
                    <p className="mb-8 text-base leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-auto inline-flex items-center gap-2 font-semibold text-amber-400 transition-colors hover:text-orange-400"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-amber-500/0 via-orange-500 to-amber-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-12 py-5 text-lg font-bold text-white shadow-lg shadow-orange-500/50 transition-all duration-300 hover:shadow-orange-500/70"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
