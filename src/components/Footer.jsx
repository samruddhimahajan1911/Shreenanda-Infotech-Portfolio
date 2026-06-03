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
    <footer className="relative overflow-hidden border-t border-slate-700/50 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pt-20 pb-10 md:pt-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-purple-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-[1.5fr_2fr_1.2fr] lg:gap-16"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="max-w-sm"
          >
            <img src={logoShort} alt="Shrinanda Infotech" className="mb-6 h-16 w-auto" />
            <p className="mb-7 text-base leading-relaxed text-gray-400">
              Empowering businesses with innovative technology solutions for
              digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600/40 bg-slate-800/40 text-gray-400 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-amber-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            variants={itemVariants}
            className="grid gap-10 sm:grid-cols-3"
          >
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-5 text-lg font-bold text-white">{section}</h4>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href="#"
                        className="inline-block text-base text-gray-400 transition-colors hover:text-amber-400"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:justify-self-end"
          >
            <h4 className="mb-5 text-lg font-bold text-white">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0 text-amber-400" />
                <span className="text-base text-gray-400">shrinandainfotech@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0 text-amber-400" />
                <span className="text-base text-gray-400">+91 70389 11897</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-amber-400" />
                <span className="text-base text-gray-400">Mumbai, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent md:my-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <p className="text-base text-gray-400">
            Copyright {currentYear} Shrinanda Infotech. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-base">
            <motion.a
              whileHover={{ x: 2 }}
              href="#"
              className="text-gray-400 transition-colors hover:text-amber-400"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ x: 2 }}
              href="#"
              className="text-gray-400 transition-colors hover:text-amber-400"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/50 transition-all duration-300 hover:shadow-orange-500/70 md:right-8 md:bottom-8"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  );
}
