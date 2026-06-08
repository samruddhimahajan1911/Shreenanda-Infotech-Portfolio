import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Code2,
  MonitorSmartphone,
  Palette,
  Layers3,
} from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-x-hidden bg-gradient-to-br from-white via-orange-50/40 to-blue-50 px-4 pt-12 pb-4 sm:px-6 md:px-10"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto grid min-h-[75vh] w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm">
            <Sparkles size={16} className="text-orange-500" />
            Smart IT Solutions
          </div>

          <h1 className="mb-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl lg:mx-0">
            We build modern websites, UI/UX designs, software systems, and
            digital solutions that help businesses grow with confidence.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-7 py-4 font-bold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1"
            >
              Explore Services <ArrowRight size={20} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-xl border border-blue-200 bg-white px-7 py-4 font-bold text-blue-700 shadow-sm transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full justify-center"
        >
          <div className="relative mx-auto w-full max-w-xl rounded-[2rem] bg-white p-3 shadow-2xl shadow-blue-100 sm:p-5 lg:max-w-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 p-4 sm:p-7">
              <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 sm:px-4 sm:text-sm">
                    Website Preview
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950 p-4 text-white sm:p-6">
                  <div className="mb-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <div className="rounded-xl bg-orange-500/20 p-3">
                      <Code2 className="text-orange-400" size={30} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        Modern Digital Experience
                      </h3>
                      <p className="text-sm text-slate-400">
                        Built for performance and growth
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl bg-white/10 p-4">
                    <div className="mb-3 h-3 w-3/4 rounded-full bg-blue-400" />
                    <div className="mb-3 h-3 w-1/2 rounded-full bg-orange-400" />
                    <div className="h-3 w-2/3 rounded-full bg-white/30" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-white/10 p-4 text-center">
                      <MonitorSmartphone
                        className="mx-auto mb-2 text-blue-300"
                        size={24}
                      />
                      <p className="text-sm font-bold">Responsive</p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4 text-center">
                      <Palette
                        className="mx-auto mb-2 text-orange-300"
                        size={24}
                      />
                      <p className="text-sm font-bold">Creative</p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4 text-center">
                      <Layers3
                        className="mx-auto mb-2 text-green-300"
                        size={24}
                      />
                      <p className="text-sm font-bold">Scalable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}