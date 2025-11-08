import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0f0f1a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Ready to ship securely at Web3 speed?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/70"
        >
          Get a tailored security plan, audit roadmap, and continuous monitoring setup.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:border-purple-400"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/30 transition hover:scale-[1.02]"
          >
            Request a Call
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
