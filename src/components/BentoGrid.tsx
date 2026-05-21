"use client";
import { motion } from "framer-motion";
import {
  ShoppingCart, Map, BarChart3, ArrowUpRight,
  MessageCircle, Package, Users
} from "lucide-react";

const smallCards = [
  {
    icon: MessageCircle,
    title: "Bot de Atención 24/7",
    desc: "WhatsApp Business + GPT-4 con derivación inteligente a agentes humanos.",
    iconBg: "bg-neon-purple/10 border-neon-purple/20",
    iconColor: "text-neon-purple",
  },
  {
    icon: BarChart3,
    title: "Dashboard Ejecutivo",
    desc: "Visualización en tiempo real de KPIs para toma de decisiones rápida.",
    iconBg: "bg-tertiary/10 border-tertiary/20",
    iconColor: "text-tertiary",
  },
  {
    icon: Package,
    title: "ERP para Retail",
    desc: "Inventario, ventas, facturación y reportes en una sola plataforma.",
    iconBg: "bg-electric-blue/10 border-electric-blue/20",
    iconColor: "text-electric-blue",
  },
  {
    icon: Map,
    title: "Logística Autónoma",
    desc: "Optimización de rutas y flotas con modelos predictivos.",
    iconBg: "bg-tertiary/10 border-tertiary/20",
    iconColor: "text-tertiary",
  },
  {
    icon: Users,
    title: "Portal B2B de Proveedores",
    desc: "Gestión de pedidos, cotizaciones y seguimiento para canales mayoristas.",
    iconBg: "bg-neon-purple/10 border-neon-purple/20",
    iconColor: "text-neon-purple",
  },
];

export default function BentoGrid() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-background/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10">
            Proyectos
          </span>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
            Trabajos destacados
          </h2>
          <div className="w-20 h-1 bg-electric-blue rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[260px]">
          {/* Card 1 — Grande */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl overflow-hidden relative group border border-white/5 min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000')] bg-cover bg-center opacity-25 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-deep-slate/60 to-transparent" />
            <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-4">
                {["n8n", "IA", "MercadoLibre API"].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/20 text-electric-blue">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-electric-blue/20 backdrop-blur-md flex items-center justify-center mb-5 border border-electric-blue/30">
                <ShoppingCart className="text-electric-blue" size={24} />
              </div>
              <h3 className="font-sora text-2xl md:text-3xl font-bold text-white mb-3">
                E-commerce Inteligente
              </h3>
              <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
                Flujos automáticos que sincronizan stock entre MercadoLibre y tienda propia, ajustan precios con IA y gestionan postventa sin intervención manual.
              </p>
            </div>
          </motion.div>

          {/* Cards pequeñas */}
          {smallCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="glass-panel rounded-3xl p-7 border border-white/5 flex flex-col justify-between group cursor-default"
              >
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl border ${card.iconBg}`}>
                    <Icon className={card.iconColor} size={22} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-on-surface-variant/40 group-hover:text-electric-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div>
                  <h3 className="font-sora text-lg font-bold text-white mb-1.5">{card.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
