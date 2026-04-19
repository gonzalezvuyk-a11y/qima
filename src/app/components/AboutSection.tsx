export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#f3efe8] py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 left-[-8rem] w-[34rem] h-[34rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,230,69,0.1) 0%, rgba(200,230,69,0) 68%)",
            animation: "aboutFloatA 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 right-[-9rem] w-[40rem] h-[40rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(123,184,168,0.08) 0%, rgba(123,184,168,0) 70%)",
            animation: "aboutFloatB 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.06) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(circle at center, black 24%, transparent 84%)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="border-t border-[#0a0a0a]/10 pt-12">
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 items-start">
            <div className="col-span-12 lg:col-span-3 xl:col-span-2">
              <div
                className="text-[#0a0a0a]/38 uppercase pt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                }}
              >
                Sobre QIMA
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9 xl:col-span-10 max-w-[980px]">
              <h2
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(2.3rem, 5.3vw, 4.35rem)",
                  fontWeight: 520,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                No hay dos oportunidades iguales, ni debería haber una sola
                forma de estructurarlas.
              </h2>

              <p
                className="text-[#0a0a0a]/58 mt-8 max-w-[920px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 320,
                  lineHeight: 1.85,
                }}
              >
                QIMA identifica oportunidades, conecta actores clave y articula
                capital, aliados y proyectos con una visión estratégica de largo
                plazo, transformando posibilidades en plataformas reales de
                crecimiento para Paraguay.
              </p>

              <div className="mt-9 flex items-center gap-5">
                <a
                  href="#ecosystem"
                  className="inline-flex items-center rounded-full border border-[#0a0a0a]/16 bg-white/60 px-6 py-3 text-[#0a0a0a] transition-all duration-300 hover:border-[#0a0a0a]/28 hover:bg-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.86rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  Más sobre nosotros
                </a>
                <span
                  className="text-[#0a0a0a]/42"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.92rem",
                    fontWeight: 400,
                  }}
                >
                  Capital + estrategia + ejecución
                </span>
              </div>
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
