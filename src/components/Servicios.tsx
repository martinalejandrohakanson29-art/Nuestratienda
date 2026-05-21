"use client";
import { motion } from "framer-motion";
import { Bot, Globe, BarChart2, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatización de Procesos",
    description: "Eliminamos tareas repetitivas y conectamos tus sistemas para que trabajen solos. Desde sincronización de datos hasta flujos complejos con IA.",
    features: ["Flujos con n8n / Make", "Integración de APIs", "Bots inteligentes", "Reportes automáticos"],
    iconBg: "bg-electric-blue/10 border-electric-blue/20",
    iconColor: "text-electric-blue",
    checkColor: "text-electric-blue",
    linkColor: "text-electric-blue",
    glow: "0 0 40px rgba(0,209,255,0.08)",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones web modernas, rápidas y escalables. Desde landing pages hasta plataformas SaaS completas.",
    features: ["Next.js / React", "Diseño UI/UX", "Full-stack", "SEO optimizado"],
    iconBg: "bg-neon-purple/10 border-neon-purple/20",
    iconColor: "text-neon-purple",
    checkColor: "text-neon-purple",
    linkColor: "text-neon-purple",
    glow: "0 0 40px rgba(139,92,246,0.08)",
  },
  {
    icon: BarChart2,
    title: "ERP & Sistemas de Gestión",
    description: "Sistemas a medida para gestionar tu operación: inventario, ventas, facturación, logística y dashboards en tiempo real.",
    features: ["Módulos personalizados", "Dashboards BI", "Integración contable", "Acceso multi-usuario"],
    iconBg: "bg-tertiary/10 border-tertiary/20",
    iconColor: "text-tertiary",
    checkColor: "text-tertiary",
    linkColor: "text-tertiary",
    glow: "0 0 40px rgba(150,233,255,0.08)",
  },
];

export default function Servicios() {
  return (
    <section id="soluciones" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10">
            Servicios
          </span>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold mb-4">
            Lo que hacemos
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
            Soluciones tecnológicas a medida para que tu negocio opere más rápido, con menos errores y más datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-panel rounded-2xl p-8 border border-white/10 flex flex-col gap-6 group"
                style={{ boxShadow: service.glow }}
              >
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center ${service.iconBg}`}>
                  <Icon size={26} className={service.iconColor} />
                </div>

                <div>
                  <h3 className="font-sora font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <Check size={14} className={`${service.checkColor} shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all ${service.linkColor}`}
                >
                  Consultar <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
