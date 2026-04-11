import { Orbit } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#f3efe8] py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-28 w-[36rem] h-[36rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,230,69,0.14) 0%, rgba(200,230,69,0) 68%)",
            animation: "aboutFloatA 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-36 right-[-7rem] w-[42rem] h-[42rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(123,184,168,0.1) 0%, rgba(123,184,168,0) 70%)",
            animation: "aboutFloatB 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.06) 1px, transparent 1px)",
            backgroundSize: "86px 86px",
            maskImage:
              "radial-gradient(circle at center, black 18%, transparent 82%)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-12 gap-16 items-start">
          {/* Left — big editorial heading */}
          <div className="col-span-6 relative">
            <div className="absolute -right-2 top-2 hidden lg:block">
              <div className="rounded-2xl border border-[#0a0a0a]/10 bg-white/55 backdrop-blur-sm px-4 py-3 shadow-[0_10px_36px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c8e645]/40 to-[#7bb8a8]/40 flex items-center justify-center">
                    <Orbit className="w-5 h-5 text-[#0a0a0a]/70" />
                  </div>
                  <div>
                    <div
                      className="text-[#0a0a0a]/60 uppercase"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.14em" }}
                    >
                      Nexo QIMA
                    </div>
                    <div
                      className="text-[#0a0a0a]/70"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.3 }}
                    >
                      Capital + Estrategia
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#0a0a0a]/10 bg-white/35"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(10,10,10,0.5)" }}
            >
              Posicionamiento
            </div>
            <h2
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(3rem, 5.1vw, 4.95rem)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
              }}
            >
              Una plataforma de{" "}
              <em className="text-[#0a0a0a]/72" style={{ fontStyle: "italic" }}>articulación</em>{" "}
              de negocios.
            </h2>
            <div className="mt-8 h-[2px] w-40 bg-gradient-to-r from-[#c8e645] to-[#7bb8a8]" />
          </div>

          {/* Right — body + quote */}
          <div className="col-span-5 col-start-8 pt-8">
            <p
              className="text-[#0a0a0a]/60 mb-8"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.14rem", fontWeight: 300, lineHeight: 1.9 }}
            >
              QIMA identifica oportunidades, conecta actores clave y estructura negocios a
              través de una visión estratégica. Su fortaleza está en articular capital,
              aliados, socios y proyectos para transformar posibilidades en plataformas
              reales de crecimiento.
            </p>

            <div className="border-l-2 border-[#c8e645] pl-7 py-1 bg-white/20 rounded-r-xl">
              <p
                className="text-[#0a0a0a]/50 italic"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.6 }}
              >
                Donde la visión estratégica se convierte en estructura de negocio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutFloatA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -24px, 0) scale(1.05); }
        }
        @keyframes aboutFloatB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-26px, 18px, 0) scale(1.08); }
        }
      `}</style>
    </section>
  );
}
