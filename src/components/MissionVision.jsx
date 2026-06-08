import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Eye,
  Lightbulb,
  ShieldCheck,
  Award,
  Users,
} from 'lucide-react';

export default function MissionVision() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Smart ideas for digital growth',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      desc: 'Honest and transparent work',
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Quality in every solution',
    },
    {
      icon: Users,
      title: 'Collaboration',
      desc: 'Growing together with clients',
    },
  ];

  return (
    <section
      id="mission"
      className="relative -mt-16 overflow-hidden bg-white pt-4 pb-12 md:-mt-20 md:pt-6 md:pb-14 lg:-mt-24 lg:pt-8 lg:pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Purpose
          </div>

          <h2 className="mb-3 text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              Mission & Vision
            </span>
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-orange-200 bg-white p-6 shadow-xl shadow-orange-100/60"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/15 to-blue-500/10">
              <Rocket size={28} className="text-orange-600" />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-slate-950">
              Our Mission
            </h3>

            <p className="text-base leading-7 text-slate-600">
              To empower businesses with innovative technology solutions that
              improve growth, efficiency, and digital success through reliable
              software, creative design, and strong technical execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-blue-200 bg-white p-6 shadow-xl shadow-blue-100/70"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-orange-500/10">
              <Eye size={28} className="text-blue-600" />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-slate-950">
              Our Vision
            </h3>

            <p className="text-base leading-7 text-slate-600">
              To become a trusted technology partner known for creativity,
              innovation, and future-ready IT services that help businesses
              transform ideas into meaningful digital experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-7"
        >
          <h3 className="mb-5 text-center text-2xl font-bold text-slate-950 md:text-3xl">
            Our Core Values
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:border-orange-300"
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10">
                    <Icon size={21} className="text-blue-600" />
                  </div>

                  <h4 className="mb-2 text-lg font-bold text-slate-950">
                    {value.title}
                  </h4>

                  <p className="text-sm leading-6 text-slate-600">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}