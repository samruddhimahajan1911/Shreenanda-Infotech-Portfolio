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
      description: 'Modern, responsive websites built with latest technologies.',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces for better engagement.',
      color: 'from-blue-500/20 to-orange-500/15',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Star,
      title: 'Digital Branding',
      description: 'Branding strategies that make your business stand out.',
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated technical support for your peace of mind.',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions for business requirements.',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Security solutions to protect digital assets and data.',
      color: 'from-blue-500/20 to-orange-500/15',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
    },
  ];

  return (
    <section
      id="services"
      className="relative -mt-14 overflow-hidden bg-white pt-8 pb-14 md:-mt-16 md:pt-10 md:pb-16 lg:-mt-20 lg:pt-12 lg:pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            What We Offer
          </div>

          <h2 className="mb-4 text-center text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-2xl text-center text-base leading-8 text-slate-600 md:text-lg">
            We offer IT solutions designed to transform your business and drive
            digital success.
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
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="group relative h-full"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div
                  className={`relative flex h-full min-h-[230px] flex-col items-center rounded-2xl border ${service.borderColor} bg-white p-6 text-center shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl border ${service.borderColor} bg-gradient-to-br ${service.color}`}
                  >
                    <Icon size={26} className={service.iconColor} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-950 transition-colors group-hover:text-orange-600">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
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
          className="mt-10 text-center md:mt-12"
        >
          <p className="mb-5 text-lg text-slate-700">
            Ready to transform your business with our services?
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}