"use client";
import { motion } from "framer-motion";
import { Search, FileText, Code2, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Reunión inicial para entender tu operación, los sistemas que ya usás y el problema concreto que querés resolver. Sin tecnicismos, sin compromiso.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10 border-electric-blue/20",
    line: "from-electric-blue/30",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    desc: "Documento detallado con alcance, tecnologías elegidas, cronograma y presupuesto fijo. Sabés exactamente qué vas a recibir y cuándo.",
    color: "text-neon-purple",
    bg: "bg-neon-purple/10 border-neon-purple/20",
    line: "from-neon-purple/30",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    desc: "Iteraciones cortas con demos frecuentes. Podés ver el avance, dar feedback y ajustar el rumbo en cada etapa del proyecto.",
    color: "text-tertiary",
    bg: "bg-tertiary/10 border-tertiary/20",
    line: "from-tertiary/30",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Soporte",
    desc: "Entrega con documentación completa, capacitación al equipo y acompañamiento post-lanzamiento para que la solución escale con tu negocio.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10 border-electric-blue/20",
    line: "from-electric-blue/30",
  },
];

export default function Proceso() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10">
            Proceso
          </span>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
            Un proceso claro de principio a fin, sin sorpresas y con comunicación constante.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Línea conectora */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric-blue/20 via-neon-purple/20 to-electric-blue/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-5"
              >
                {/* Ícono con número */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 relative ${step.bg}`}>
                    <Icon size={28} className={step.color} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-white/10 flex items-center justify-center text-[9px] font-bold text-on-surface-variant font-mono">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-sora font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5"
              >
                {/* Línea vertical + ícono */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${step.bg}`}>
                    <Icon size={20} className={step.color} />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent my-2" />
                  )}
                </div>

                {/* Contenido */}
                <div className={`pb-8 ${isLast ? "" : ""}`}>
                  <span className="text-[9px] font-bold font-mono text-on-surface-variant/50 tracking-widest">{step.number}</span>
                  <h3 className="font-sora font-bold text-lg mb-1.5 mt-0.5">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
