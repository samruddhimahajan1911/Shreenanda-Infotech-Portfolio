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
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
      color: 'from-blue-500/20 to-orange-500/15',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern enterprises.',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
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
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements.',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Advanced security solutions to protect your digital assets and data.',
      color: 'from-blue-500/20 to-orange-500/15',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
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
    <section id="services" className="relative overflow-hidden border-t border-slate-100 bg-white py-32 md:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl" />
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
          <h2 className="mb-8 text-center text-5xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-9 text-slate-600 md:text-xl">
            We offer comprehensive IT solutions designed to transform your business
            and drive success.
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                  className={`relative flex h-full min-h-80 flex-col items-center rounded-xl border ${service.borderColor} bg-white p-10 text-center shadow-lg shadow-slate-200/70 transition-all duration-300 group-hover:border-opacity-100 group-hover:shadow-xl md:p-12`}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100`} />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`mb-10 flex h-16 w-16 items-center justify-center rounded-lg border ${service.borderColor} bg-gradient-to-br ${service.color} group-hover:shadow-lg`}
                  >
                    <Icon size={30} className={service.iconColor} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-5 text-xl font-bold text-slate-950 transition-colors group-hover:text-orange-600">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-8 text-slate-600">
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
          className="mt-20 text-center md:mt-28"
        >
          <p className="mb-8 text-xl text-slate-700">
            Ready to transform your business with our services?
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
