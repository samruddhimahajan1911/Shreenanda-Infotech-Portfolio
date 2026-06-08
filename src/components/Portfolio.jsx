import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce site with payment integration',
      image: '/portfolio/ecommerce-platform.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application',
      image: '/portfolio/mobile-banking-app.jpg',
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      category: 'web',
      description: 'Comprehensive analytics dashboard',
      image: '/portfolio/admin-dashboard.jpg',
      tags: ['Vue.js', 'Charts.js'],
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete branding and visual identity package',
      image: '/portfolio/brand-identity-design.jpg',
      tags: ['UI/UX', 'Branding'],
    },
    {
      id: 5,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Enterprise cloud infrastructure setup',
      image: '/portfolio/cloud-migration-project.jpg',
      tags: ['AWS', 'Docker'],
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Real-time food delivery tracking application',
      image: '/portfolio/food-delivery-app.jpg',
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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="portfolio"
      className="relative -mt-20 overflow-hidden bg-white pt-6 pb-16 md:-mt-24 md:pt-8 md:pb-20 lg:-mt-28 lg:pt-10 lg:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white">
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
        >
          <div className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Work
          </div>

          <h2 className="mb-4 text-center text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
            Explore our latest projects and see how we help businesses achieve
            their digital goals.
          </p>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {['all', 'web', 'mobile', 'design', 'cloud'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold capitalize transition-all duration-300 md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layoutId={String(item.id)}
              className="group relative h-full w-full max-w-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-lg shadow-slate-200/70 transition-all duration-300 hover:border-orange-400/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-sm font-semibold capitalize text-slate-900 backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center p-7 md:p-8">
                  <div className="mb-5 flex flex-wrap justify-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-500/30 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-950 transition-colors group-hover:text-orange-600">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-orange-500"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </motion.button>
                </div>

                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500/0 via-orange-500 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}