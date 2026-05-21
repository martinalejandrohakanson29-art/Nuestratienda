"use client";
import { motion } from "framer-motion";
import { Store, Truck, RefreshCw } from "lucide-react";

export default function Integrations() {
  return (
    <section id="demos" className="py-32 px-6 bg-background/40 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-3xl md:text-4xl font-bold text-on-surface mb-4"
          >
            Conectividad Total
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-on-surface-variant max-w-xl mx-auto"
          >
            Sincroniza tus plataformas de comercio y logística en tiempo real mediante flujos robustos y escalables.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
          {/* MercadoLibre Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-panel p-8 rounded-2xl w-full md:w-80 border border-white/5 relative group"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-6 border border-electric-blue/20">
              <Store className="text-electric-blue" size={32} />
            </div>
            <h3 className="font-sora text-xl font-bold text-on-surface mb-3">MercadoLibre API</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Gestión automatizada de publicaciones, stock y mensajería post-venta.
            </p>
          </motion.div>

          {/* Central Sync Hub */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-surface-container-highest border-2 border-neon-purple flex items-center justify-center z-10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <RefreshCw className="text-neon-purple animate-spin-slow" size={32} />
            </div>
            <div className="absolute inset-0 rounded-full bg-neon-purple/20 animate-ping" />
          </div>

          {/* Andreani Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-panel p-8 rounded-2xl w-full md:w-80 border border-white/5 relative group"
          >
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
              <Truck className="text-tertiary" size={32} />
            </div>
            <h3 className="font-sora text-xl font-bold text-on-surface mb-3">Logística Andreani</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Generación de etiquetas, tracking automático y notificaciones al cliente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
