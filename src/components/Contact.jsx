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
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
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
    <section id="contact" className="relative overflow-hidden border-t border-slate-100 bg-white py-32 md:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-9 text-slate-600 md:text-xl">
            Have a project in mind? Let&apos;s discuss how we can help your
            business grow. Reach out to us today!
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-10 md:mb-28 md:grid-cols-3"
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
                  className={`relative flex h-full min-h-64 flex-col items-center rounded-xl border ${info.borderColor} bg-white p-10 text-center shadow-lg shadow-slate-200/70 transition-all duration-300 md:p-12`}
                >
                  <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${info.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg border ${info.borderColor} bg-gradient-to-br ${info.color}`}
                  >
                    <Icon size={30} className={info.iconColor} />
                  </motion.div>
                  <h3 className="mb-5 text-xl font-bold text-slate-950 transition-colors group-hover:text-orange-600">
                    {info.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid w-full max-w-6xl grid-cols-1 justify-items-center gap-y-10 text-center lg:grid-cols-[1.2fr_0.8fr] lg:gap-x-12 xl:gap-x-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-full w-full rounded-xl border border-orange-500/30 bg-white p-10 text-center shadow-xl shadow-slate-200/70 md:p-12 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-9">
                <div>
                  <label className="mb-4 block text-center text-base font-semibold text-slate-950">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-center text-base font-semibold text-slate-950">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-center text-base font-semibold text-slate-950">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
                >
                  <Send size={20} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg border border-green-500/50 bg-green-500/20 p-8 text-center text-green-300"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle size={20} />
                      <span>Message sent to email. Send it on WhatsApp too.</span>
                    </div>
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex font-semibold text-green-700 underline decoration-green-500/60 underline-offset-4"
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
                    className="rounded-lg border border-red-500/50 bg-red-500/20 p-8 text-center text-red-300"
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
            className="grid w-full gap-y-10"
          >
            <div className="rounded-xl border border-blue-500/30 bg-white p-10 text-center shadow-lg shadow-slate-200/70 md:p-12">
              <h3 className="mb-8 text-2xl font-bold text-slate-950">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      aria-label={social.name}
                      className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 text-slate-600 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-700"
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-white p-10 text-center shadow-lg shadow-slate-200/70 md:p-12">
              <h3 className="mb-8 text-2xl font-bold text-slate-950">Business Hours</h3>
              <div className="space-y-7 text-center text-slate-600">
                <p className="flex flex-col items-center justify-center gap-3">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-orange-600">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex flex-col items-center justify-center gap-3">
                  <span>Saturday</span>
                  <span className="font-semibold text-orange-600">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex flex-col items-center justify-center gap-3">
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
