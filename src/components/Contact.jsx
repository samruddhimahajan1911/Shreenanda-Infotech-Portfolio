import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Camera,
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
} from 'lucide-react';

const CONTACT_EMAIL = 'shrinandainfotech@gmail.com';
const CONTACT_PHONE = '+91 70389 11897';
const CONTACT_WHATSAPP = '91 70389 11897';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const messageText = `New project enquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Message: formData.message,
            _subject: `New project enquiry from ${formData.name}`,
            _replyto: formData.email,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setWhatsappUrl(`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(messageText)}`);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    } catch {
      setError('Message could not be sent. Please email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_EMAIL,
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_PHONE,
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: MessageCircle },
    { name: 'Twitter', icon: Share2 },
    { name: 'LinkedIn', icon: Briefcase },
    { name: 'Instagram', icon: Camera },
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
    <section id="contact" className="relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            Have a project in mind? Let&apos;s discuss how we can help your
            business grow. Reach out to us today!
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-28 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative h-full w-full max-w-sm"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${info.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Card */}
                <div
                  className={`relative flex h-full flex-col items-center rounded-xl border ${info.borderColor} bg-gradient-to-br from-slate-800/30 to-slate-700/20 p-8 text-center backdrop-blur-sm transition-all duration-300`}
                >
                  <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${info.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-lg border ${info.borderColor} bg-gradient-to-br ${info.color}`}
                  >
                    <Icon size={36} className={info.iconColor} />
                  </motion.div>
                  <h3 className="mb-5 text-2xl font-bold text-white transition-colors group-hover:text-amber-300">
                    {info.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 text-left lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-full rounded-xl border border-orange-500/30 bg-gradient-to-br from-slate-800/30 to-slate-700/20 p-8 backdrop-blur-sm md:p-10">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className="mb-3 block text-base font-semibold text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 px-4 py-4 text-base text-white placeholder-gray-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-base font-semibold text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 px-4 py-4 text-base text-white placeholder-gray-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-base font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full resize-none rounded-lg border border-slate-600/50 bg-slate-700/50 px-4 py-4 text-base text-white placeholder-gray-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/50 transition-all duration-300 hover:shadow-orange-500/70"
                >
                  <Send size={20} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg border border-green-500/50 bg-green-500/20 p-4 text-green-300"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      <span>Message sent to email. Send it on WhatsApp too.</span>
                    </div>
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex font-semibold text-white underline decoration-green-300/60 underline-offset-4"
                      >
                        Send to {CONTACT_PHONE}
                      </a>
                    )}
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-red-500/50 bg-red-500/20 p-4 text-red-300"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Social and Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
            <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-800/30 to-slate-700/20 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      aria-label={social.name}
                      className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-600/50 bg-gradient-to-br from-slate-700/50 to-slate-600/30 text-gray-300 transition-all duration-300 hover:border-orange-500/50 hover:text-amber-300"
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/30 to-slate-700/20 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">Business Hours</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex justify-between gap-4">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-amber-400">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-semibold text-amber-400">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-500">Closed</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
