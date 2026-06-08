import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Briefcase,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from 'lucide-react';
import logoShort from '../assets/logoshort.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Quick: ['Home', 'About', 'Services', 'Portfolio'],
    Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design'],
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'Facebook', href: '#' },
    { icon: Share2, label: 'Twitter', href: '#' },
    { icon: Briefcase, label: 'LinkedIn', href: '#' },
    { icon: Camera, label: 'Instagram', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative -mt-10 overflow-hidden border-t border-slate-200 bg-white py-20 md:-mt-12 md:py-24 lg:-mt-16 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tl from-blue-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid justify-items-center gap-y-12 text-center lg:grid-cols-[1.3fr_2fr_1.2fr] lg:gap-x-14 xl:gap-x-16"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto flex max-w-sm flex-col items-center text-center"
          >
            <img
              src={logoShort}
              alt="Shrinanda Infotech"
              className="mb-6 h-14 w-auto"
            />

            <p className="mb-6 text-base leading-8 text-slate-600">
              Empowering businesses with innovative technology solutions for
              digital transformation.
            </p>

            <div className="flex justify-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-600"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid justify-items-center gap-y-10 text-center sm:grid-cols-3 sm:gap-x-12"
          >
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-5 text-lg font-bold text-slate-950">
                  {section}
                </h4>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href="#"
                        className="inline-block text-base text-slate-600 transition-colors hover:text-orange-600"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto text-center">
            <h4 className="mb-5 text-lg font-bold text-slate-950">
              Contact Info
            </h4>

            <ul className="space-y-4">
              <li className="flex flex-col items-center gap-2">
                <Mail size={20} className="shrink-0 text-blue-600" />
                <span className="text-base text-slate-600">
                  shrinandainfotech@gmail.com
                </span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <Phone size={20} className="shrink-0 text-orange-600" />
                <span className="text-base text-slate-600">
                  +91 70389 11897
                </span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <MapPin size={20} className="shrink-0 text-blue-600" />
                <span className="text-base text-slate-600">Nashik, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-5 text-center md:flex-row"
        >
          <p className="text-base text-slate-600">
            Copyright {currentYear} Shrinanda Infotech. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-base">
            <motion.a
              whileHover={{ x: 2 }}
              href="#"
              className="text-slate-600 transition-colors hover:text-orange-600"
            >
              Privacy Policy
            </motion.a>

            <motion.a
              whileHover={{ x: 2 }}
              href="#"
              className="text-slate-600 transition-colors hover:text-orange-600"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-600 text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 md:bottom-8 md:right-8"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  );
}