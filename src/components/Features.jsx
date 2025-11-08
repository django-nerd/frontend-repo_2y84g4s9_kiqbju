import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Network } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Smart Contract Audits',
    desc: 'Deep, formal reviews of Solidity, Vyper, and Move with actionable remediation.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Access',
    desc: 'Passwordless auth, policy engines, and zk-powered verifications for Web3.',
    color: 'from-yellow-400 to-purple-500',
  },
  {
    icon: Cpu,
    title: 'Threat Intelligence',
    desc: 'Real-time anomaly detection across wallets, bridges, and DeFi protocols.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Network,
    title: 'Chain Security Ops',
    desc: 'Incident response and monitoring tailored to L1/L2 networks and rollups.',
    color: 'from-purple-500 to-yellow-400',
  },
];

const FeatureCard = ({ Icon, title, desc, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
  >
    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg shadow-black/20`}>
      <Icon size={22} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 ring-2 ring-purple-500/40 transition group-hover:opacity-100" />
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          What We Secure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          Enterprise-grade protection designed for decentralized systems and digital assets.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <FeatureCard key={idx} Icon={it.icon} title={it.title} desc={it.desc} color={it.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
