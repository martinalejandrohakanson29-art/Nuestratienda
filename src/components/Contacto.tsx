"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Automatización de Procesos",
  "Desarrollo Web",
  "ERP & Sistemas de Gestión",
  "Consultoría general",
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10">
            Contacto
          </span>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">
            Contanos qué necesitás y te respondemos con una propuesta concreta en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Info lateral */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-electric-blue" />
                <span className="font-bold text-sm">Email</span>
              </div>
              <p className="text-on-surface-variant text-sm">hola@boutiquia.com</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare size={18} className="text-neon-purple" />
                <span className="font-bold text-sm">WhatsApp</span>
              </div>
              <p className="text-on-surface-variant text-sm">+54 9 11 XXXX XXXX</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex-1">
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Respondemos en menos de{" "}
                <span className="text-electric-blue font-bold">24 horas</span>.
                Disponibles de lunes a viernes, 9 a 18 hs (GMT-3).
              </p>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            {sent ? (
              <div className="glass-panel rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 text-center p-12 h-full">
                <CheckCircle size={48} className="text-electric-blue" />
                <h3 className="font-sora font-bold text-xl">¡Mensaje enviado!</h3>
                <p className="text-on-surface-variant">Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 border border-white/10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nombre</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-electric-blue/50 transition-all placeholder:text-white/25"
                      placeholder="Juan García"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-electric-blue/50 transition-all placeholder:text-white/25"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Empresa <span className="text-white/30 normal-case font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-electric-blue/50 transition-all placeholder:text-white/25"
                    placeholder="Mi Empresa S.A."
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">¿Qué necesitás?</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-electric-blue/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0f131e]">Seleccioná un servicio</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#0f131e]">{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-electric-blue/50 transition-all resize-none placeholder:text-white/25"
                    placeholder="Contanos tu proyecto o la problemática que querés resolver..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-electric-blue text-deep-slate font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-60 active:scale-95"
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send size={15} /> Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
