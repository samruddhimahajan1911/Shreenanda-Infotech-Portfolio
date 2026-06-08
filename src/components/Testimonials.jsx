import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechVision Solutions',
      role: 'CEO',
      text: 'Shrinanda Infotech transformed our entire digital presence. Their innovative approach and attention to detail exceeded our expectations.',
      initials: 'RK',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      avatarColor: 'from-orange-500 to-blue-600',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Digital Enterprises',
      role: 'Operations Manager',
      text: 'The team is incredibly professional and responsive. They delivered our project on time with exceptional quality and continuous support.',
      initials: 'PS',
      color: 'from-blue-500/20 to-orange-500/15',
      borderColor: 'border-blue-500/30',
      avatarColor: 'from-blue-600 to-orange-500',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      company: 'Global Business Corp',
      role: 'Project Lead',
      text: 'Working with Shrinanda Infotech was a game-changer. Their expertise in cloud solutions helped us scale efficiently and reduce costs.',
      initials: 'AP',
      color: 'from-orange-500/20 to-blue-500/15',
      borderColor: 'border-orange-500/30',
      avatarColor: 'from-orange-500 to-blue-600',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative -mt-24 overflow-hidden bg-white pt-24 pb-16 md:-mt-28 md:pt-24 md:pb-20 lg:-mt-32 lg:pt-24 lg:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
        >
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </div>

          <h2 className="mb-4 text-center text-3xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
            Real feedback from satisfied clients who experienced our reliable
            service and innovative solutions.
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
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mx-auto mb-10 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div
                className={`relative flex h-full min-h-[350px] flex-col items-center overflow-hidden rounded-2xl border ${testimonial.borderColor} bg-white p-7 text-center shadow-lg shadow-slate-200/70 transition-all duration-300 md:p-8`}
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="mb-4 text-5xl leading-none text-blue-500/20">
                  "
                </div>

                <div className="mb-5 flex justify-center gap-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <p className="mb-7 text-sm leading-7 text-slate-600 md:text-base">
                  {testimonial.text}
                </p>

                <div className="mt-auto flex w-full flex-col items-center justify-center gap-3 border-t border-slate-200 pt-6 text-center">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.avatarColor} font-bold text-white shadow-lg`}
                  >
                    {testimonial.initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-950">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {testimonial.role} | {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white px-8 py-9 text-center shadow-xl shadow-slate-200/70 md:px-12 md:py-10"
        >
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            <span className="text-xl font-bold text-slate-950 md:text-2xl">
              Join 25+ companies
            </span>{' '}
            that trust Shrinanda Infotech for their digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}