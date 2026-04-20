import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "CIPP",
    description:
      "Soluciones especializadas para rehabilitación de tuberías y desarrollo técnico de alto valor.",
    accent: "#ffcd00",
    href: "/cipp",
    logo: "/brand/logo-cipp.svg",
    logoWidth: "154px",
  },
  {
    name: "TAU",
    description:
      "Capacidad operativa y técnica aplicada a soluciones de ingeniería y estructura de proyectos.",
    accent: "#3aaf54",
    href: "/tau",
    logo: "/brand/logo-tau.svg",
    logoWidth: "132px",
  },
  {
    name: "ARTIA",
    description:
      "Visión orientada a la inversión, estructuración inteligente y desarrollo de oportunidades.",
    accent: "#8e9cbd",
    href: "/artia",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-28 xl:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-28 left-[10%] h-72 w-72 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,230,69,0.08) 0%, rgba(200,230,69,0) 70%)",
            animation: "ecoGlowA 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-8rem] right-[8%] h-[24rem] w-[24rem] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(123,184,168,0.09) 0%, rgba(123,184,168,0) 72%)",
            animation: "ecoGlowB 24s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 92%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.9) 38%, rgba(10,10,10,0.98) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 max-w-[980px] md:mb-16">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-[12px] w-[12px] rounded-[4px] bg-[#c8e645]" />
            <span
              className="text-white/85"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Ecosistema
            </span>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "44px",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Empresas que forman parte del
            <br />
            ecosistema QIMA
          </h2>
          <p
            className="text-white/56 max-w-[860px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            La capacidad de QIMA se expresa en empresas, proyectos y alianzas activas
            que amplían su alcance y convierten su visión en estructuras reales de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              className="group relative col-span-1 overflow-hidden rounded-[20px] border border-white/[0.1] bg-[#0f0f0f] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--company-accent)] hover:bg-[var(--company-accent)] sm:p-8 lg:col-span-4 lg:p-10"
              style={{ "--company-accent": company.accent } as React.CSSProperties}
            >
              <div className="relative z-10 mb-9 flex items-center gap-3">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-auto object-contain transition-[filter,opacity] duration-300 group-hover:[filter:brightness(0)_saturate(100%)]"
                    style={{ width: company.logoWidth }}
                  />
                ) : (
                  <h3
                    className="text-white tracking-[0.06em] transition-colors duration-300 group-hover:text-[#0a0a0a]"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "2.7rem",
                      fontWeight: 320,
                      lineHeight: 1,
                    }}
                  >
                    {company.name}
                  </h3>
                )}
              </div>

              <p
                className="relative z-10 mb-10 text-white/62 transition-colors duration-300 group-hover:text-[#0a0a0a]/78 sm:mb-14 lg:mb-16"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {company.description}
              </p>

              <span
                className="relative z-10 inline-flex items-center gap-2 rounded-[16px] border border-white/[0.12] bg-white/[0.08] px-[18px] py-[10px] text-white/75 transition-[background-color,color,border-color] duration-300 group-hover:border-[#0a0a0a]/12 group-hover:bg-[#0a0a0a]/6 group-hover:text-[#0a0a0a]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Conocer empresa
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ecoGlowA {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.85; }
          50% { transform: translate3d(24px, -20px, 0); opacity: 1; }
        }
        @keyframes ecoGlowB {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.8; }
          50% { transform: translate3d(-22px, 18px, 0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
