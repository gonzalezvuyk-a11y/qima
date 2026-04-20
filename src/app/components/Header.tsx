import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Sobre QIMA", href: "#about" },
  { label: "Cómo trabajamos", href: "#process" },
  { label: "Equipo", href: "#team" },
  { label: "Oportunidades", href: "#opportunities" },
  { label: "Ecosistema", href: "#ecosystem" },
  { label: "Contacto", href: "#contact" },
];

function QimaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 775.38 310.41"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        fill="currentColor"
        d="M137.77,233.72v7.3l157.36,49.46-70.38,19.92-153.38-81C30.54,207.82,0,170.64,0,121.17,0,53.12,57.77,3.32,119.85,3.32s119.52,49.8,119.52,117.85c0,60.09-47.14,105.24-101.59,112.54ZM119.85,223.43c37.18,0,73.7-42.16,73.7-102.25S157.03,19.25,119.85,19.25,46.15,61.08,46.15,121.17s36.52,102.25,73.7,102.25Z"
      />
      <path
        fill="currentColor"
        d="M276.18,122.83l-25.9-20.25,65.07-24.24v142.42h20.25v14.94h-80.01v-14.94h20.58v-97.94ZM269.54,23.9c0-13.28,10.62-23.9,24.23-23.9s23.9,10.62,23.9,23.9-10.62,23.9-23.9,23.9-24.23-10.96-24.23-23.9Z"
      />
      <path
        fill="currentColor"
        d="M338.89,102.58l65.07-24.24v28.88h5.98c11.95-11.95,26.89-25.56,49.8-25.56,20.25,0,33.2,11.62,39.51,26.56h4.98c12.28-11.95,29.55-26.56,52.45-26.56,26.89,0,41.17,20.25,41.17,48.8v90.3h20.58v14.94h-80.01v-14.94h20.25v-79.68c0-21.25-10.62-33.2-30.88-33.2-10.29,0-19.92,5.98-26.89,11.62v101.25h19.92v14.94h-79.34v-14.94h20.25v-79.68c0-21.25-10.96-33.2-30.88-33.2-10.29,0-19.92,5.98-26.89,11.62v101.25h19.92v14.94h-79.68v-14.94h20.58v-97.94l-25.9-20.25Z"
      />
      <path
        fill="currentColor"
        d="M667.48,103.25v34.19h-41.17c11.29-30.88,48.14-55.77,80.67-55.77,21.91,0,38.18,15.6,38.18,42.16v70.71c0,11.62,5.98,17.26,14.61,17.26,5.64,0,11.29-2.32,15.6-7.64,0,20.25-16.6,34.19-35.85,34.19-16.6,0-27.22-9.96-31.87-22.57h-4.98c-8.3,9.63-22.24,22.24-41.5,22.24-17.26,0-33.2-12.28-33.2-31.54,0-22.24,19.92-34.19,42.83-43.16l36.52-14.61v-16.6c0-19.59-8.96-35.19-39.84-28.88ZM692.71,166.99c-17.59,7.64-27.55,14.28-27.55,28.88,0,11.62,8.96,17.93,19.92,17.93,8.63,0,15.94-3.32,22.24-8.96v-44.15l-14.61,6.31Z"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isSubpage = pathname !== "/" && pathname !== "";
  const baseHref = isSubpage ? "/" : "";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("resize", closeOnResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", closeOnResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-12">
        <a
          href="/"
          aria-label="Ir al inicio de QIMA"
          className="group relative flex items-center gap-2 px-2 py-1 rounded-md"
          onClick={closeMenu}
        >
          <QimaLogo
            className="relative h-7 w-auto text-white transition-all duration-300 group-hover:-translate-y-[1px] group-hover:text-[#c8e645] sm:h-8"
          />
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${baseHref}${item.href}`}
              className="text-white/60 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.02em" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${baseHref}#contact`}
            className="qima-button-primary ml-2 xl:ml-4"
          >
            Agendar reunión
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-[#c8e645]/40 hover:text-[#c8e645] lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/8 bg-[#0a0a0a]/98 px-5 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col gap-2 py-4 sm:px-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${baseHref}${item.href}`}
              onClick={closeMenu}
              className="rounded-2xl border border-transparent px-4 py-3 text-sm text-white/72 transition-colors hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400, letterSpacing: "0.02em" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${baseHref}#contact`}
            onClick={closeMenu}
            className="qima-button-primary mt-2 w-full"
          >
            Agendar reunión
          </a>
        </nav>
      </div>
    </header>
  );
}
