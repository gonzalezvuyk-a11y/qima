import { useState, useEffect } from "react";

const navItems = [
  { label: "Sobre QIMA", href: "#about" },
  { label: "Cómo trabajamos", href: "#process" },
  { label: "Equipo", href: "#team" },
  { label: "Oportunidades", href: "#opportunities" },
  { label: "Ecosistema", href: "#ecosystem" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-12 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <span
            className="tracking-[0.35em] text-white"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.25rem", fontWeight: 600 }}
          >
            QIMA
          </span>
        </a>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.02em" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-[#c8e645] text-[#0a0a0a] hover:bg-[#d4ee5a] transition-all duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.02em" }}
          >
            Agendar reunión
          </a>
        </nav>
      </div>
    </header>
  );
}
