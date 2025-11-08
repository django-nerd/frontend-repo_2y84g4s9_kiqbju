import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      {/* Simple translucent nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span className="text-sm font-semibold tracking-wide">NebulaGuard</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Showcase />
        <Features />
        <CTA />
      </main>

      <footer className="w-full bg-[#0f0f1a] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} NebulaGuard • Cybersecurity for Web3
      </footer>
    </div>
  );
}

export default App;
