"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Automatización",
    color: "text-electric-blue border-electric-blue/25 bg-electric-blue/8",
    dot: "bg-electric-blue",
    tools: ["n8n", "Make", "Zapier", "Python", "Webhooks"],
  },
  {
    label: "Inteligencia Artificial",
    color: "text-neon-purple border-neon-purple/25 bg-neon-purple/8",
    dot: "bg-neon-purple",
    tools: ["OpenAI", "Anthropic", "LangChain", "Whisper", "Embeddings"],
  },
  {
    label: "Desarrollo Web",
    color: "text-tertiary border-tertiary/25 bg-tertiary/8",
    dot: "bg-tertiary",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    label: "Bases de datos",
    color: "text-electric-blue border-electric-blue/25 bg-electric-blue/8",
    dot: "bg-electric-blue",
    tools: ["PostgreSQL", "Supabase", "MongoDB", "Redis"],
  },
  {
    label: "Infraestructura",
    color: "text-neon-purple border-neon-purple/25 bg-neon-purple/8",
    dot: "bg-neon-purple",
    tools: ["Vercel", "Railway", "Docker", "GitHub Actions"],
  },
];

export default function Stack() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10">
            Tecnologías
          </span>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold mb-4">
            Con qué trabajamos
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
            Herramientas modernas y probadas, elegidas para cada proyecto según el problema a resolver.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Label de categoría */}
              <div className="flex items-center gap-2 w-44 shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.dot}`} />
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant/70 whitespace-nowrap">
                  {cat.label}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, j) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + j * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-all ${cat.color}`}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
