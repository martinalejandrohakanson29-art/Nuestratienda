"use client";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
      {/* Background Image con Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo.jpg"
          alt="IA Background"
          fill
          priority
          className="object-cover opacity-50 transition-transform duration-700 hover:scale-105"
        />
        {/* Capas de degradado para profundidad y legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 z-10" />
      </div>

      {/* Luces decorativas (Efecto Bloom) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Sistemas Inteligentes</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sora text-4xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Automatización de <br />
          <span className="text-gradient">Siguiente Nivel</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Potenciamos tu negocio transformando datos en acción. Diseñamos ecosistemas con n8n e Inteligencia Artificial de clase mundial.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#soluciones" className="bg-electric-blue text-deep-slate font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95">
            Explorar Soluciones <Rocket size={18} />
          </a>
          <a href="#proyectos" className="glass-panel text-on-surface font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
            Ver Demos <Play size={18} fill="currentColor" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
