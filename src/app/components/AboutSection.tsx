export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#f3efe8] py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left — big editorial heading */}
          <div className="col-span-6">
            <h2
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "3rem",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Una plataforma de{" "}
              <em className="text-[#0a0a0a]/70" style={{ fontStyle: "italic" }}>articulación</em>{" "}
              de negocios.
            </h2>
          </div>

          {/* Right — body + quote */}
          <div className="col-span-5 col-start-8 pt-4">
            <p
              className="text-[#0a0a0a]/60 mb-8"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.8 }}
            >
              QIMA identifica oportunidades, conecta actores clave y estructura negocios a
              través de una visión estratégica. Su fortaleza está en articular capital,
              aliados, socios y proyectos para transformar posibilidades en plataformas
              reales de crecimiento.
            </p>

            <div className="border-l-2 border-[#c8e645] pl-6">
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
    </section>
  );
}
