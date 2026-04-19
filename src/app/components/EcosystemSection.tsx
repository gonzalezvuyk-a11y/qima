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
      className="relative overflow-hidden bg-[#061224] py-32"
      onMouseLeave={onCardLeave}
    >
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
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="max-w-[980px] mb-16">
          <div className="inline-flex items-center gap-4 mb-7">
            <span className="h-px w-9 bg-[#c8e645]/80" />
            <span
              className="text-[#c8e645]/78 uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
              }}
            >
              Ecosistema
            </span>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 460,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Empresas que forman parte del
            <br />
            ecosistema QIMA
          </h2>
          <p
            className="text-white/56 max-w-[860px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 320,
              lineHeight: 1.8,
            }}
          >
            La capacidad de QIMA se expresa en empresas, proyectos y alianzas activas
            que amplían su alcance y convierten su visión en estructuras reales de negocio.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-7">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              className={`col-span-12 md:col-span-4 relative overflow-hidden rounded-[2px] border border-white/[0.1] bg-[linear-gradient(165deg,rgba(16,38,74,0.68)_0%,rgba(8,24,47,0.9)_60%,rgba(6,18,36,0.96)_100%)] p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.2] hover:bg-[linear-gradient(165deg,rgba(18,44,86,0.74)_0%,rgba(9,28,56,0.92)_60%,rgba(7,20,39,0.98)_100%)] group ${canHoverCursor ? "cursor-none" : ""}`}
              onMouseEnter={() => onCardEnter("Saber más")}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 82% 12%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 54%)",
                }}
              />

              <div className="relative z-10 mb-9 flex items-center gap-3">
                <span
                  className="h-8 w-[3px] rounded-full"
                  style={{ backgroundColor: company.accent }}
                />
                <h3
                  className="text-white tracking-[0.06em]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "2.7rem",
                    fontWeight: 320,
                    lineHeight: 1,
                  }}
                >
                  {company.name}
                </h3>
              </div>

              <p
                className="relative z-10 text-white/62 mb-16"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.12rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {company.description}
              </p>

              <span
                className="relative z-10 inline-flex items-center gap-2 text-white/82 uppercase"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.84rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                }}
              >
                Conocer empresa
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
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
