export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f3efe8] py-24 md:py-28 xl:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.08) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.92), transparent 92%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="border-t border-[#0a0a0a]/10 pt-10 md:pt-12">
          <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
            <div className="max-w-[660px]">
              <div className="mb-8 inline-flex items-center gap-4">
                <span className="h-[12px] w-[12px] rounded-[4px] bg-[#c8e645]" />
                <span
                  className="text-[#0a0a0a]/70"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  Sobre QIMA
                </span>
              </div>

              <h2
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                }}
              >
                Una plataforma de articulación de negocios
              </h2>
            </div>

            <div className="max-w-[560px] lg:pt-3">
              <p
                className="text-[#0a0a0a]/62"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                QIMA identifica oportunidades, conecta actores clave y
                estructura negocios a través de una visión estratégica. Su
                fortaleza está en articular capital, aliados, socios y
                proyectos para transformar posibilidades en plataformas reales
                de crecimiento.
              </p>

              <p
                className="mt-6 text-[#0a0a0a]/42"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Desde Paraguay hacia la región, con criterio, relaciones y
                estructura.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#ecosystem" className="qima-button-dark">
                  Conocer ecosistema
                </a>
                <span
                  className="text-[#0a0a0a]/38"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                  }}
                >
                  Capital + estrategia + ejecución
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
