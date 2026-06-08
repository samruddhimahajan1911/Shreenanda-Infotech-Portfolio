import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target, CheckCircle2 } from 'lucide-react';
import companyImage from '../assets/company-team.jpg';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Expert Development',
      desc: 'Modern websites and software built with clean code.',
      color: 'text-blue-600',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      desc: 'Quick project delivery without compromising quality.',
      color: 'text-orange-600',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      desc: 'Solutions designed around your business goals.',
      color: 'text-blue-600',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-12 lg:pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            About Shrinanda Infotech
          </div>

          <h2 className="mb-3 text-3xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="mb-5 text-base leading-8 text-slate-700 md:text-lg">
              Shrinanda Infotech helps businesses grow through modern web
              development, software solutions, UI/UX design, and digital
              transformation services. We combine innovation, technology, and
              creativity to deliver reliable digital experiences.
            </p>

            <div className="grid gap-3">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:border-orange-300/70"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-blue-500/10 to-orange-500/10">
                      <Icon size={22} className={item.color} />
                    </div>

                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-slate-600 md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-blue-100">
              <img
                src={companyImage}
                alt="Shrinanda Infotech Team"
                className="h-[450px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                  <CheckCircle2 size={24} />
                </div>

                <h3 className="mb-2 text-2xl font-bold">
                  Trusted Technology Partner
                </h3>

                <p className="text-sm leading-6 text-white/90">
                  Delivering smart, creative, and reliable digital solutions for
                  modern businesses.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}