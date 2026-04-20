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
    title: "Recursos",
    links: [
      { label: "Oportunidades en Paraguay", href: "#opportunities" },
      { label: "Contacto", href: "#contact" },
    ],
  },
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

export function Footer() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isSubpage = pathname !== "/" && pathname !== "";
  const baseHref = isSubpage ? "/" : "";

  return (
    <footer className="border-t border-white/[0.05] bg-[#0a0a0a]">
      {/* Top big section */}
      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-6 md:pt-20 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left brand block */}
          <div className="lg:col-span-4 lg:pr-8">
            <a
              href={baseHref || "/"}
              aria-label="Ir al inicio de QIMA"
              className="group inline-flex items-center"
            >
              <QimaLogo className="h-10 w-auto text-white transition-all duration-300 group-hover:-translate-y-[1px] group-hover:text-[#c8e645]" />
            </a>
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
              <a
                href="https://share.google/gQl8k4ng7LJl4UULc"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-white/30 hover:text-[#c8e645] transition-colors duration-300 group"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-[2px]" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 }}>
                  Distrito Perseverancia, Av. Brasilia 1947 casi, Asunción 001203
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-8 lg:ml-auto lg:flex lg:flex-row lg:justify-between lg:gap-16 lg:pl-16">
            {/* Nav columns */}
            {navColumns.map((col) => (
              <div key={col.title} className="min-w-[180px]">
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
            <div className="min-w-[220px]">
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
                Recibí novedades y oportunidades de QIMA.
              </p>
              <a
                href={`${baseHref}#contact`}
                className="qima-button-primary"
              >
                Hablemos
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <span
            className="text-white/15"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 300 }}
          >
            © 2026 QIMA. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
