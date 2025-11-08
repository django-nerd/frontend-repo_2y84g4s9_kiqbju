import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute top-1/4 -right-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl" />
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur"
        >
          Cybersecurity • Web3 • Zero-Trust
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance bg-gradient-to-br from-white via-white to-purple-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.1]"
        >
          Fortify the Future of the Open Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          We secure blockchains, dApps, and digital identities with battle-tested security,
          real-time threat intelligence, and seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className="rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:scale-[1.02] hover:shadow-purple-500/40"
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Talk to an Expert
          </a>
        </motion.div>
      </div>

      {/* subtle bottom fade to improve text legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b12]" />
    </section>
  );
};

export default Hero;
