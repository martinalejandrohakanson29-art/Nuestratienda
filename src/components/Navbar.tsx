"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Demos", "Soluciones", "Proyectos", "Contacto"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || menuOpen ? "bg-surface-dark/95 backdrop-blur-xl border-white/10 py-4 shadow-xl" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center font-bold text-deep-slate text-xl group-hover:rotate-12 transition-transform">B</div>
          <span className="font-sora font-bold text-xl tracking-tight hidden sm:block">Boutique IA</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-on-surface-variant hover:text-electric-blue transition-colors text-sm font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contacto" className="hidden md:flex items-center gap-2 bg-electric-blue text-deep-slate px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all active:scale-95">
            Empezar <ArrowRight size={16} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-on-surface p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-3 gap-0">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-on-surface-variant hover:text-electric-blue transition-colors text-sm font-medium border-b border-white/5"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-electric-blue text-deep-slate px-6 py-3 rounded font-bold text-xs uppercase tracking-wider w-full hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all"
                >
                  Empezar <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
