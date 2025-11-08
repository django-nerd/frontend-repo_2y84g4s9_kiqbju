import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Ethereum',
  'Polygon',
  'Solana',
  'Arbitrum',
  'Optimism',
  'Near',
];

const Showcase = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0b0b12] to-[#0f0f1a] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-white/50">Trusted across chains</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-white/80 backdrop-blur"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
