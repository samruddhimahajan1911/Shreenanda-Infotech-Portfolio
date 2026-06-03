import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Star,
  Headphones,
  Code,
  Shield,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with latest technologies for optimal performance.',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
      color: 'from-pink-500/20 to-pink-600/20',
      borderColor: 'border-pink-500/30',
      iconColor: 'text-pink-400',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern enterprises.',
      color: 'from-cyan-500/20 to-cyan-600/20',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Star,
      title: 'Digital Branding',
      description: 'Comprehensive branding strategies that make your business stand out.',
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated technical support available round the clock for your peace of mind.',
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements.',
      color: 'from-indigo-500/20 to-indigo-600/20',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Advanced security solutions to protect your digital assets and data.',
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30',
      iconColor: 'text-red-400',
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
    <section id="services" className="relative pt-32 pb-32 md:pt-40 md:pb-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl" />
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
              Our Services
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            We offer comprehensive IT solutions designed to transform your business
            and drive success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-8" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-28 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: 0 }}
                className="group relative h-full w-full max-w-sm"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Container (Centered Content via Flexbox Column Alignment) */}
                <div
                  className={`relative flex flex-col items-center text-center bg-gradient-to-br from-slate-800/30 to-slate-700/20 rounded-xl border ${service.borderColor} backdrop-blur-sm p-8 h-full transition-all duration-300 group-hover:border-opacity-100`}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100`} />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`w-20 h-20 rounded-lg bg-gradient-to-br ${service.color} border ${service.borderColor} flex items-center justify-center mb-8 group-hover:shadow-lg`}
                  >
                    <Icon size={36} className={service.iconColor} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-slate-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 text-center pt-12"
        >
          <p className="text-gray-300 mb-12 text-xl">
            Ready to transform your business with our services?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
