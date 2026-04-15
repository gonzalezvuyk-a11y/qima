import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "CIPP",
    description:
      "Soluciones especializadas para rehabilitación de tuberías y desarrollo técnico de alto valor.",
    accent: "#7bb8a8",
    href: "/cipp",
  },
  {
    name: "TAU",
    description:
      "Capacidad operativa y técnica aplicada a soluciones de ingeniería y estructura de proyectos.",
    accent: "#c8e645",
    href: "/tau",
  },
  {
    name: "ARTIA",
    description:
      "Visión orientada a la inversión, estructuración inteligente y desarrollo de oportunidades.",
    accent: "#8b9cc0",
    href: "/artia",
  },
];

export function EcosystemSection() {
  const featured = companies[1];
  const secondary = [companies[0], companies[2]];
  const [canHoverCursor, setCanHoverCursor] = useState(false);
  const [hoverCursor, setHoverCursor] = useState({
    active: false,
    x: 0,
    y: 0,
    label: "Saber más",
  });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHoverCursor(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onCardEnter = (label = "Saber más") => {
    if (!canHoverCursor) return;
    setHoverCursor((prev) => ({ ...prev, active: true, label }));
  };

  const onCardMove = (e: React.MouseEvent) => {
    if (!canHoverCursor) return;
    setHoverCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const onCardLeave = () => {
    if (!canHoverCursor) return;
    setHoverCursor((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="ecosystem"
      className="relative bg-[#0a0a0a] py-36 overflow-hidden"
      onMouseLeave={onCardLeave}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-[8%] h-72 w-72 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,230,69,0.12) 0%, rgba(200,230,69,0) 68%)",
            animation: "ecoGlowA 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-7rem] right-[6%] h-[22rem] w-[22rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(123,184,168,0.11) 0%, rgba(123,184,168,0) 72%)",
            animation: "ecoGlowB 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
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

        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(130px,auto)]">
          <a
            href={featured.href}
            className={`col-span-12 md:col-span-6 md:row-span-2 relative p-10 border border-white/[0.08] bg-white/[0.03] rounded-3xl hover:border-[#c8e645]/35 transition-all duration-500 group overflow-hidden ${canHoverCursor ? "cursor-none" : ""}`}
            onMouseEnter={() => onCardEnter("Saber más")}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle at 75% 20%, rgba(200,230,69,0.16) 0%, rgba(200,230,69,0) 58%)",
              }}
            />
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
              style={{ backgroundColor: featured.accent }}
            />
            <div
              className="mb-7 tracking-[0.15em] relative z-10"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "2.1rem",
                fontWeight: 600,
                color: featured.accent,
              }}
            >
              {featured.name}
            </div>
            <h3
              className="text-white mb-5 max-w-[520px] relative z-10"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "2.2rem",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Plataforma operativa y técnica para escalar oportunidades.
            </h3>
            <p
              className="text-white/45 mb-9 max-w-[520px] relative z-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.75 }}
            >
              {featured.description}
            </p>
            <span
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group/link relative z-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
            >
              Conocer empresa
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {secondary.map((company) => {
            const isLinked = company.href !== "#";

            if (isLinked) {
              return (
                <a
                  key={company.name}
                  href={company.href}
                  className={`col-span-12 md:col-span-6 relative p-9 border border-white/[0.06] bg-white/[0.02] rounded-3xl hover:border-white/[0.14] hover:bg-white/[0.045] transition-all duration-500 group ${canHoverCursor ? "cursor-none" : ""}`}
                  onMouseEnter={() => onCardEnter("Saber más")}
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                >
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
                    className="text-white/40 mb-8"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {company.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group/link"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 400 }}
                  >
                    Conocer empresa
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              );
            }

            return (
              <div
                key={company.name}
                className={`col-span-12 md:col-span-6 relative p-9 border border-white/[0.06] bg-white/[0.02] rounded-3xl hover:border-white/[0.14] hover:bg-white/[0.045] transition-all duration-500 group ${canHoverCursor ? "cursor-none" : ""}`}
                onMouseEnter={() => onCardEnter("Saber más")}
                onMouseMove={onCardMove}
                onMouseLeave={onCardLeave}
              >
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
                  className="text-white/40 mb-8"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.7 }}
                >
                  {company.description}
                </p>

                <a
                  href={company.href}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group/link"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 400 }}
                >
                  Conocer empresa
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            );
          })}

          <div className="col-span-12 md:col-span-4 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
            <div
              className="text-[#c8e645] mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.17em", textTransform: "uppercase" }}
            >
              Estructura
            </div>
            <p
              className="text-white/70"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.55 }}
            >
              Capital, ejecución y alianzas conectadas en una arquitectura de negocio.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
            <div
              className="text-[#7bb8a8] mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.17em", textTransform: "uppercase" }}
            >
              Capacidad
            </div>
            <p
              className="text-white/70"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.55 }}
            >
              Equipos con know how técnico para convertir estrategia en operaciones reales.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
            <div
              className="text-[#8b9cc0] mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.17em", textTransform: "uppercase" }}
            >
              Alcance
            </div>
            <p
              className="text-white/70"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.55 }}
            >
              Un ecosistema diseñado para sostener expansión y crecimiento de largo plazo.
            </p>
          </div>
        </div>
      </div>

      {canHoverCursor && (
        <div
          className="fixed z-[120] pointer-events-none transition-opacity duration-200"
          style={{
            left: hoverCursor.x + 18,
            top: hoverCursor.y + 18,
            opacity: hoverCursor.active ? 1 : 0,
            transform: `translate3d(0, 0, 0) scale(${hoverCursor.active ? 1 : 0.92})`,
          }}
        >
          <div
            className="px-4 py-2 rounded-full border border-[#c8e645]/45 bg-[#0a0a0a]/92 text-[#c8e645] shadow-[0_10px_26px_rgba(0,0,0,0.45)]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              backdropFilter: "blur(10px)",
            }}
          >
            {hoverCursor.label}
          </div>
        </div>
      )}

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
