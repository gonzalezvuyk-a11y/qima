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

/* ─── Abstract orbital icons drawn with SVG + CSS animations ─── */

function Icon1() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <circle cx="60" cy="60" r="48" stroke="rgba(10,10,10,0.12)" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="60" cy="60" r="32" stroke="rgba(10,10,10,0.18)" strokeWidth="1" />
      <circle cx="60" cy="60" r="14" stroke="rgba(10,10,10,0.25)" strokeWidth="1" />
      <path d="M60 60 L60 12" stroke="rgba(10,10,10,0.3)" strokeWidth="1" className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <path d="M60 60 Q75 30 60 12" fill="rgba(10,10,10,0.04)" stroke="none" className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="82" cy="38" r="3.5" fill="rgba(10,10,10,0.5)" className="animate-[pulse_3s_ease-in-out_infinite]" />
      <circle cx="40" cy="75" r="2.5" fill="rgba(10,10,10,0.3)" className="animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
      <circle cx="60" cy="60" r="3" fill="rgba(10,10,10,0.45)" />
    </svg>
  );
}

function Icon2() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <ellipse cx="60" cy="60" rx="46" ry="22" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="3 5" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <ellipse cx="60" cy="60" rx="46" ry="22" stroke="rgba(10,10,10,0.12)" strokeWidth="1" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: "60px 60px", transform: "rotate(60deg)" }} />
      <ellipse cx="60" cy="60" rx="46" ry="22" stroke="rgba(10,10,10,0.09)" strokeWidth="1" className="animate-[spin_22s_linear_infinite]" style={{ transformOrigin: "60px 60px", transform: "rotate(120deg)" }} />
      <line x1="60" y1="60" x2="30" y2="35" stroke="rgba(10,10,10,0.18)" strokeWidth="0.8" />
      <line x1="60" y1="60" x2="90" y2="40" stroke="rgba(10,10,10,0.18)" strokeWidth="0.8" />
      <line x1="60" y1="60" x2="45" y2="90" stroke="rgba(10,10,10,0.18)" strokeWidth="0.8" />
      <line x1="60" y1="60" x2="85" y2="80" stroke="rgba(10,10,10,0.18)" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="5.5" fill="rgba(10,10,10,0.45)" className="animate-[pulse_3s_ease-in-out_infinite]" />
      <circle cx="30" cy="35" r="3.5" fill="rgba(10,10,10,0.4)" className="animate-[pulse_3.5s_ease-in-out_infinite_0.3s]" />
      <circle cx="90" cy="40" r="4" fill="rgba(10,10,10,0.5)" className="animate-[pulse_4s_ease-in-out_infinite_0.6s]" />
      <circle cx="45" cy="90" r="3" fill="rgba(10,10,10,0.3)" className="animate-[pulse_3s_ease-in-out_infinite_1s]" />
      <circle cx="85" cy="80" r="2.5" fill="rgba(10,10,10,0.28)" className="animate-[pulse_4.5s_ease-in-out_infinite_0.2s]" />
    </svg>
  );
}

function Icon3() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <circle cx="60" cy="60" r="48" stroke="rgba(10,10,10,0.1)" strokeWidth="1" strokeDasharray="2 8" className="animate-[spin_35s_linear_infinite_reverse]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="60" cy="60" r="38" stroke="rgba(10,10,10,0.16)" strokeWidth="1" />
      <circle cx="60" cy="60" r="26" stroke="rgba(10,10,10,0.22)" strokeWidth="1" />
      <circle cx="60" cy="60" r="14" stroke="rgba(10,10,10,0.3)" strokeWidth="1" />
      <line x1="60" y1="12" x2="60" y2="108" stroke="rgba(10,10,10,0.07)" strokeWidth="0.6" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="rgba(10,10,10,0.07)" strokeWidth="0.6" />
      <circle cx="86" cy="60" r="3.5" fill="rgba(10,10,10,0.5)" className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="60" cy="60" r="4" fill="rgba(10,10,10,0.45)" className="animate-[pulse_3s_ease-in-out_infinite]" />
      <circle cx="60" cy="22" r="2.5" fill="rgba(10,10,10,0.3)" className="animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
    </svg>
  );
}

function Icon4() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <path d="M60 60 Q60 45 72 38" stroke="rgba(10,10,10,0.28)" strokeWidth="1" />
      <path d="M72 38 Q90 28 95 48" stroke="rgba(10,10,10,0.22)" strokeWidth="1" />
      <path d="M95 48 Q102 72 80 85" stroke="rgba(10,10,10,0.18)" strokeWidth="1" />
      <path d="M80 85 Q55 100 35 82" stroke="rgba(10,10,10,0.14)" strokeWidth="1" />
      <path d="M35 82 Q15 60 35 38" stroke="rgba(10,10,10,0.12)" strokeWidth="1" />
      <path d="M35 38 Q50 18 75 20" stroke="rgba(10,10,10,0.1)" strokeWidth="1" />
      <path d="M72 24 L75 20 L71 18" stroke="rgba(10,10,10,0.3)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="60" cy="60" r="50" stroke="rgba(10,10,10,0.08)" strokeWidth="0.8" strokeDasharray="2 10" className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="60" cy="60" r="20" stroke="rgba(10,10,10,0.15)" strokeWidth="0.8" className="animate-[ping_4s_ease-out_infinite]" style={{ transformOrigin: "60px 60px" }} />
      <circle cx="60" cy="60" r="4.5" fill="rgba(10,10,10,0.45)" className="animate-[pulse_3s_ease-in-out_infinite]" />
      <circle r="3" fill="rgba(10,10,10,0.5)">
        <animateMotion dur="6s" repeatCount="indefinite" path="M60,60 Q60,45 72,38 Q90,28 95,48 Q102,72 80,85 Q55,100 35,82 Q15,60 35,38 Q50,18 75,20" />
      </circle>
    </svg>
  );
}

const icons = [Icon1, Icon2, Icon3, Icon4];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#f3efe8] py-36 overflow-visible">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4 md:sticky md:top-28 self-start">
            <div
              className="text-[#0a0a0a]/40 mb-4 tracking-[0.2em] uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
            >
              Cómo trabajamos
            </div>
            <h2
              className="text-[#0a0a0a] max-w-[430px]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.4rem, 4.2vw, 3.7rem)",
                fontWeight: 400,
                lineHeight: 1.06,
              }}
            >
              Nuestro proceso de{" "}
              <em style={{ fontStyle: "italic" }}>articulación</em>.
            </h2>
            <p
              className="text-[#0a0a0a]/55 mt-6 max-w-[360px]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.75 }}
            >
              Una secuencia de cuatro momentos que conecta análisis, relaciones,
              estructura y crecimiento sostenible.
            </p>
          </div>

          <div className="md:col-span-8">
          {steps.map((step, i) => {
            const IconComponent = icons[i];
            return (
              <div
                key={step.number}
                className={`relative ${i === 0 ? "" : "md:-mt-56"} md:min-h-[72vh]`}
                style={{ zIndex: i + 1 }}
              >
                <div className="md:sticky md:top-28">
                  <div className="relative px-8 py-10 md:px-10 md:py-12 group rounded-2xl border border-[#0a0a0a]/[0.08] bg-[#f7f4ee]/95 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] hover:border-[#c8e645]/40">
                    {/* Abstract orbital icon */}
                    <div className="w-[160px] h-[160px] mx-auto mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                      <IconComponent />
                    </div>

                    <div
                      className="text-[#8aad1a] group-hover:text-[#6d8a15] transition-colors duration-500 mb-4"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "2rem", fontWeight: 300 }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="text-[#0a0a0a] transition-colors duration-500 mb-4"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "1.38rem", fontWeight: 500, lineHeight: 1.3 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#0a0a0a]/60 group-hover:text-[#0a0a0a]/78 transition-colors duration-500 max-w-[620px]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
                    >
                      {step.text}
                    </p>

                    {/* Top line accent */}
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#c8e645]/30 group-hover:bg-[#c8e645]/70 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
