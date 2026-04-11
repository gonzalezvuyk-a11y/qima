import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "CIPP",
    description:
      "Soluciones especializadas para rehabilitación de tuberías y desarrollo técnico de alto valor.",
    accent: "#7bb8a8",
  },
  {
    name: "TAU",
    description:
      "Capacidad operativa y técnica aplicada a soluciones de ingeniería y estructura de proyectos.",
    accent: "#c8e645",
  },
  {
    name: "ARTIA",
    description:
      "Visión orientada a la inversión, estructuración inteligente y desarrollo de oportunidades.",
    accent: "#8b9cc0",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative bg-[#0a0a0a] py-36">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <div
            className="text-[#c8e645]/60 mb-4 tracking-[0.2em] uppercase"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
          >
            Ecosistema
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.75rem",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Empresas del{" "}
            <em className="text-[#c8e645]" style={{ fontStyle: "italic" }}>ecosistema</em> QIMA
          </h2>
          <p
            className="text-white/45"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            La capacidad de QIMA se expresa en empresas, proyectos y alianzas activas que
            amplían su alcance y convierten su visión en estructuras reales de negocio.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="relative p-10 border border-white/[0.06] bg-white/[0.02] rounded-2xl hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: company.accent }}
              />

              <div
                className="mb-8 tracking-[0.15em]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: company.accent,
                }}
              >
                {company.name}
              </div>

              <p
                className="text-white/40 mb-10"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.7 }}
              >
                {company.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group/link"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 400 }}
              >
                Conocer empresa
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
