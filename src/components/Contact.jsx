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
const CONTACT_WHATSAPP = '917038911897';

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

      setWhatsappUrl(
        `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(
          messageText
        )}`
      );

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
      iconColor: 'text-blue-500',
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
      iconColor: 'text-orange-500',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: MessageCircle },
    { name: 'Twitter', icon: Share2 },
    { name: 'LinkedIn', icon: Briefcase },
    { name: 'Instagram', icon: Camera },
  ];

  return (
    <section
      id="contact"
      className="relative -mt-28 overflow-hidden bg-white pt-20 pb-16 md:-mt-32 md:pt-20 md:pb-20 lg:-mt-36 lg:pt-20 lg:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </div>

          <h2 className="mb-4 text-center text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
            Have a project in mind? Let&apos;s discuss how we can help your
            business grow. Reach out to us today!
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
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mx-auto mb-10 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={info.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group relative h-full w-full max-w-sm"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div
                  className={`relative flex h-full min-h-[210px] flex-col items-center rounded-2xl border ${info.borderColor} bg-white p-7 text-center shadow-lg shadow-slate-200/70 transition-all duration-300 md:p-8`}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl border ${info.borderColor} bg-gradient-to-br ${info.color}`}
                  >
                    <Icon size={26} className={info.iconColor} />
                  </motion.div>

                  <h3 className="mb-3 text-xl font-bold text-slate-950 transition-colors group-hover:text-orange-600">
                    {info.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-600">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-1 justify-items-center gap-y-8 text-center lg:grid-cols-[1.2fr_0.8fr] lg:gap-x-10 xl:gap-x-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative h-full w-full"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-full w-full rounded-2xl border border-orange-500/30 bg-white p-7 text-center shadow-xl shadow-slate-200/70 md:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-3 block text-center text-base font-semibold text-slate-950">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-center text-base font-semibold text-slate-950">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-center text-base font-semibold text-slate-950">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-950 placeholder-slate-400 transition-all duration-300 focus:border-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={20} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-green-500/40 bg-green-50 p-5 text-center text-green-700"
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
                    className="rounded-xl border border-red-500/40 bg-red-50 p-5 text-center text-red-700"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid w-full gap-y-8"
          >
            <div className="rounded-2xl border border-blue-500/30 bg-white p-7 text-center shadow-lg shadow-slate-200/70 md:p-8">
              <h3 className="mb-6 text-2xl font-bold text-slate-950">
                Connect With Us
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      aria-label={social.name}
                      className="flex h-13 w-13 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-4 text-slate-600 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-700"
                    >
                      <Icon size={23} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-white p-7 text-center shadow-lg shadow-slate-200/70 md:p-8">
              <h3 className="mb-6 text-2xl font-bold text-slate-950">
                Business Hours
              </h3>

              <div className="space-y-5 text-center text-slate-600">
                <p className="flex flex-col items-center justify-center gap-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-orange-600">
                    9:00 AM - 6:00 PM
                  </span>
                </p>

                <p className="flex flex-col items-center justify-center gap-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-orange-600">
                    10:00 AM - 4:00 PM
                  </span>
                </p>

                <p className="flex flex-col items-center justify-center gap-2">
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