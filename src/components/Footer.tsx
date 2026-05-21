export default function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-md py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-white">B</div>
          <span className="font-sora font-bold text-lg text-white opacity-80">Boutique IA</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-on-surface-variant">
          {["LinkedIn", "GitHub", "Documentación", "Privacidad"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-electric-blue transition-colors">{link}</a>
            </li>
          ))}
        </ul>

        <div className="text-xs text-on-surface-variant/60 font-mono">
          © 2026 Boutique IA. Innovación en Automatización.
        </div>
      </div>
    </footer>
  );
}
