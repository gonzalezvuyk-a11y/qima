const steps = [
  {
    number: "01",
    title: "Detectamos oportunidades",
    text: "Analizamos contexto, potencial y viabilidad para identificar escenarios con valor real.",
  },
  {
    number: "02",
    title: "Conectamos las piezas correctas",
    text: "Articulamos capital, relaciones, expertise y aliados estratégicos.",
  },
  {
    number: "03",
    title: "Estructuramos la plataforma",
    text: "Damos forma al negocio con una lógica clara, escalable y sostenible.",
  },
  {
    number: "04",
    title: "Impulsamos el crecimiento",
    text: "Acompañamos la activación y consolidación de oportunidades con visión de largo plazo.",
  },
];

function Icon1() {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" fill="none">
      <circle
        cx="36"
        cy="36"
        r="30"
        stroke="rgba(10,10,10,0.22)"
        strokeWidth="1.2"
        strokeDasharray="5 6"
        className="animate-[spin_28s_linear_infinite]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <circle cx="36" cy="36" r="20" stroke="rgba(10,10,10,0.30)" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="10" stroke="rgba(10,10,10,0.38)" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="3.5" fill="rgba(10,10,10,0.55)" />
      <line
        x1="36"
        y1="36"
        x2="36"
        y2="6"
        stroke="rgba(10,10,10,0.45)"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="animate-[spin_5s_linear_infinite]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <circle cx="55" cy="22" r="3" fill="rgba(138,173,26,0.80)" />
      <circle cx="20" cy="52" r="2" fill="rgba(138,173,26,0.55)" />
    </svg>
  );
}

function Icon2() {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" fill="none">
      <ellipse
        cx="36"
        cy="36"
        rx="30"
        ry="14"
        stroke="rgba(10,10,10,0.22)"
        strokeWidth="1.2"
        strokeDasharray="4 5"
        className="animate-[spin_18s_linear_infinite]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <ellipse
        cx="36"
        cy="36"
        rx="30"
        ry="14"
        stroke="rgba(10,10,10,0.18)"
        strokeWidth="1.2"
        className="animate-[spin_22s_linear_infinite_reverse]"
        style={{ transform: "rotate(60deg)", transformOrigin: "36px 36px" }}
      />
      <ellipse
        cx="36"
        cy="36"
        rx="30"
        ry="14"
        stroke="rgba(10,10,10,0.14)"
        strokeWidth="1.2"
        className="animate-[spin_26s_linear_infinite]"
        style={{ transform: "rotate(120deg)", transformOrigin: "36px 36px" }}
      />
      <line x1="36" y1="36" x2="14" y2="22" stroke="rgba(10,10,10,0.35)" strokeWidth="1" />
      <line x1="36" y1="36" x2="58" y2="24" stroke="rgba(10,10,10,0.35)" strokeWidth="1" />
      <line x1="36" y1="36" x2="20" y2="56" stroke="rgba(10,10,10,0.35)" strokeWidth="1" />
      <line x1="36" y1="36" x2="54" y2="54" stroke="rgba(10,10,10,0.35)" strokeWidth="1" />
      <circle cx="36" cy="36" r="4.5" fill="rgba(10,10,10,0.55)" />
      <circle cx="14" cy="22" r="3.5" fill="rgba(138,173,26,0.80)" />
      <circle cx="58" cy="24" r="3" fill="rgba(123,184,168,0.80)" />
      <circle cx="20" cy="56" r="2.5" fill="rgba(139,156,192,0.80)" />
      <circle cx="54" cy="54" r="2.5" fill="rgba(138,173,26,0.60)" />
    </svg>
  );
}

function Icon3() {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" fill="none">
      <circle
        cx="36"
        cy="36"
        r="32"
        stroke="rgba(10,10,10,0.14)"
        strokeWidth="1"
        strokeDasharray="3 8"
        className="animate-[spin_32s_linear_infinite_reverse]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <circle cx="36" cy="36" r="24" stroke="rgba(10,10,10,0.24)" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="16" stroke="rgba(10,10,10,0.32)" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="8" stroke="rgba(10,10,10,0.42)" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="3" fill="rgba(10,10,10,0.58)" />
      <circle
        cx="60"
        cy="36"
        r="3.5"
        fill="rgba(138,173,26,0.85)"
        className="animate-[spin_7s_linear_infinite]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <line x1="36" y1="4" x2="36" y2="68" stroke="rgba(10,10,10,0.08)" strokeWidth="0.8" />
      <line x1="4" y1="36" x2="68" y2="36" stroke="rgba(10,10,10,0.08)" strokeWidth="0.8" />
    </svg>
  );
}

function Icon4() {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" fill="none">
      <circle
        cx="36"
        cy="36"
        r="32"
        stroke="rgba(10,10,10,0.12)"
        strokeWidth="0.8"
        strokeDasharray="2 10"
        className="animate-[spin_38s_linear_infinite]"
        style={{ transformOrigin: "36px 36px" }}
      />
      <circle cx="36" cy="36" r="20" stroke="rgba(10,10,10,0.20)" strokeWidth="1" />
      <path
        d="M36 36 Q42 26 42 14"
        stroke="rgba(10,10,10,0.40)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M42 14 Q50 6 58 14 Q66 24 58 34 Q50 44 36 48 Q22 52 16 42 Q10 30 18 20 Q24 12 32 14"
        stroke="rgba(10,10,10,0.28)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="36" cy="36" r="3.5" fill="rgba(10,10,10,0.55)" />
      <circle r="3.5" fill="rgba(138,173,26,0.90)">
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="M36,36 Q42,26 42,14 Q50,6 58,14 Q66,24 58,34 Q50,44 36,48 Q22,52 16,42 Q10,30 18,20 Q24,12 32,14 Q34,14 36,14"
        />
      </circle>
    </svg>
  );
}

const icons = [Icon1, Icon2, Icon3, Icon4];

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-visible bg-[#f3efe8] py-24 md:py-28 xl:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-[12px] w-[12px] rounded-[4px] bg-[#c8e645]" />
            <span
              className="text-[#0a0a0a]/75"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 400, letterSpacing: "0.01em" }}
            >
              Cómo trabajamos
            </span>
          </div>
          <h2
            className="text-[#0a0a0a]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.06,
            }}
          >
            Nuestro proceso de <em style={{ fontStyle: "italic" }}>articulación</em>.
          </h2>
          <p
            className="mx-auto mt-6 max-w-[560px] text-[#0a0a0a]/55"
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.78 }}
          >
            Una secuencia de cuatro momentos que conecta análisis, relaciones,
            estructura y crecimiento sostenible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => {
            const IconComponent = icons[i];
            return (
              <article
                key={step.number}
                className="group relative min-h-[280px] cursor-default rounded-2xl border border-[#0a0a0a]/[0.08] bg-[#f3f3f5] px-5 pb-7 pt-7 transition-all duration-500 hover:border-[#c8e645]/40 hover:bg-white hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] md:min-h-[300px] md:px-[18px] md:pb-8 md:pt-8"
              >
                <div className="mx-auto mb-[20px] h-[92px] w-[92px] transition-transform duration-700 group-hover:scale-[1.08]">
                  <IconComponent />
                </div>

                <div
                  className="mb-[6px] text-[#8aad1a]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "1.75rem", fontWeight: 400 }}
                >
                  {step.number}
                </div>
                <h3
                  className="mb-2 text-[#0a0a0a]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 500, lineHeight: 1.25 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#0a0a0a]/[0.58] transition-colors duration-500 group-hover:text-[#0a0a0a]/[0.68]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.7 }}
                >
                  {step.text}
                </p>

                <div className="absolute left-5 right-5 top-0 h-[2px] rounded-full bg-[#c8e645]/30 transition-colors duration-500 group-hover:bg-[#c8e645]/70" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
