import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const navColumns = [
  {
    title: "Compañía",
    links: [
      { label: "Sobre QIMA", href: "#about" },
      { label: "Cómo trabajamos", href: "#process" },
      { label: "Nuestro equipo", href: "#team" },
      { label: "Ecosistema", href: "#ecosystem" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Inversión corporativa", href: "#" },
      { label: "Desarrollo de negocios", href: "#" },
      { label: "Articulación estratégica", href: "#" },
      { label: "Expansión regional", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Oportunidades en Paraguay", href: "#opportunities" },
      { label: "Blog & Insights", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
      { label: "Contacto", href: "#contact" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export function Footer() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isSubpage = pathname !== "/" && pathname !== "";
  const baseHref = isSubpage ? "/" : "";

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.05]">
      {/* Top big section */}
      <div className="max-w-[1440px] mx-auto px-12 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-12">
          {/* Left brand block */}
          <div className="col-span-4">
            <span
              className="tracking-[0.35em] text-white"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 600 }}
            >
              QIMA
            </span>
            <p
              className="text-white/35 mt-5 max-w-[300px]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8 }}
            >
              Articulamos las condiciones para que los negocios sucedan. Inversión corporativa con visión estratégica desde Paraguay.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a href="mailto:hola@qima.com.py" className="flex items-center gap-3 text-white/30 hover:text-[#c8e645] transition-colors duration-300 group">
                <Mail className="w-4 h-4" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 400 }}>
                  hola@qima.com.py
                </span>
              </a>
              <a href="tel:+595211234567" className="flex items-center gap-3 text-white/30 hover:text-[#c8e645] transition-colors duration-300 group">
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 400 }}>
                  +595 21 123 4567
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/30">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 400 }}>
                  Asunción, Paraguay
                </span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="col-span-2">
              <div
                className="text-white/50 mb-5 tracking-[0.15em] uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
              >
                {col.title}
              </div>
              <div className="space-y-3.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href.startsWith("#") ? `${baseHref}${link.href}` : link.href}
                    className="block text-white/30 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* CTA / Newsletter column */}
          <div className="col-span-2">
            <div
              className="text-white/50 mb-5 tracking-[0.15em] uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
            >
              Conectá
            </div>
            <p
              className="text-white/30 mb-5"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 300, lineHeight: 1.7 }}
            >
              Recibí oportunidades y novedades del ecosistema QIMA.
            </p>
            <a
              href={`${baseHref}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c8e645] text-[#0a0a0a] hover:bg-[#d4ee5a] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 500 }}
            >
              Hablemos
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 text-white/30 hover:border-[#c8e645]/40 hover:text-[#c8e645] transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 400 }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <span
            className="text-white/15"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 300 }}
          >
            © 2026 QIMA. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/50 transition-colors duration-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>
              Política de privacidad
            </a>
            <a href="#" className="text-white/20 hover:text-white/50 transition-colors duration-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
