import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Factory,
  Handshake,
  Landmark,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1900&q=80";
const portfolioImage =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80";
const contactImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80";

const artiaAccent = "#c4b0ea";
const artiaAccentSoft = "#efe6ff";
const artiaTextDark = "#0a0a0a";
const artiaTextMuted = "rgba(10,10,10,0.64)";

const buttonBase =
  "inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-7 py-3 text-[0.84rem] transition-all duration-300";
const artiaButtonPrimary = `${buttonBase} bg-[#c4b0ea] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#c4b0ea]`;
const artiaButtonDark = `${buttonBase} bg-[#0a0a0a] text-white hover:bg-[#c4b0ea] hover:text-[#0a0a0a]`;
const artiaButtonGhost = `${buttonBase} border border-white/28 text-white hover:border-[#efe6ff] hover:bg-white/10`;
const artiaSectionTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "44px",
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};

const services = [
  {
    title: "Industrial y Logística",
    subtitle: "El desembarco (Soft-Landing)",
    text: "Especialistas en Build to Suit (BTS) integral: localización de terreno estratégico, estructuración de capital y contrato de largo plazo para operaciones industriales y logísticas.",
    bullets: [
      "Conversión de CAPEX en OPEX",
      "Soporte para empresas extranjeras y maquiladoras",
      "Asesoría en incentivos fiscales y expansión",
    ],
  },
  {
    title: "Desarrollo y Estructuración",
    subtitle: "La alianza estratégica",
    text: "Diseño de estructuras de negocio para dueños de tierra y socios de capital, con análisis de mejor y mayor uso y mecanismos fiduciarios de aportación.",
    bullets: [
      "Integración de tierra, inversor y desarrollador",
      "Modelos de equity asociados al éxito del proyecto",
      "Aplicación a barrios, loteamientos y parques industriales",
    ],
  },
  {
    title: "Reconversión de Activos",
    subtitle: "Value Add",
    text: "Identificación de activos subutilizados y armado de plan técnico-financiero para reconvertirlos en plataformas rentables.",
    bullets: [
      "Reciclaje urbano y cambio de uso inteligente",
      "Estrategias de asset management orientadas a valor",
      "Optimización de flujo y apreciación de capital",
    ],
  },
  {
    title: "Inversión y Capitales",
    subtitle: "Ingeniería financiera",
    text: "Servicios para fortalecer liquidez, transparencia y escalabilidad de portafolios inmobiliarios y empresas en expansión.",
    bullets: [
      "Preparación para deuda o mercado de capitales",
      "Valuación corporativa y modelado de flujos",
      "Due diligence técnico-financiero para adquisiciones",
    ],
  },
];

const propertyLines = [
  {
    title: "Propiedades Urbanas",
    text: "Departamentos y oficinas en ubicaciones estratégicas con foco en flujo estable y demanda sostenida.",
    icon: Building2,
  },
  {
    title: "Propiedades Industriales",
    text: "Naves y complejos logísticos diseñados para eficiencia operativa y expansión corporativa.",
    icon: Factory,
  },
  {
    title: "Propiedades Rurales",
    text: "Activos de tierra productiva con visión patrimonial y potencial de apreciación de largo plazo.",
    icon: Landmark,
  },
];

function SectionTag({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className="h-4 w-4 rounded-[0.35rem]"
        style={{ backgroundColor: artiaAccent }}
      />
      <span
        className="text-[0.95rem]"
        style={{
          color: light ? "rgba(255,255,255,0.88)" : artiaTextDark,
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function ArtiaPage() {
  return (
    <div className="artia-page min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 pt-28">
          <img
            src={heroImage}
            alt="Skyline corporativo para inversiones inmobiliarias"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.78)_46%,rgba(10,10,10,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(142,156,189,0.2),transparent_38%),radial-gradient(circle_at_80%_24%,rgba(215,219,238,0.16),transparent_32%)]" />
          <div className="pointer-events-none absolute bottom-10 right-5 z-10 opacity-[0.14] sm:right-6 md:bottom-12 lg:right-12">
            <div
              aria-hidden="true"
              className="select-none text-white/80"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,3.2vw,3.6rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontWeight: 400,
              }}
            >
              ARTIA
            </div>
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-14 sm:px-6 md:pb-16 lg:px-12">
            <SectionTag light>Real Estate Investments · Ecosistema QIMA</SectionTag>
            <div className="mt-8 max-w-[820px]">
              <h1
                className="text-white"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  lineHeight: 0.98,
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                }}
              >
                Articulando capital, tierra y ejecución inmobiliaria
              </h1>
              <p
                className="mt-8 max-w-[720px] text-[1.15rem] leading-[1.82] text-white/78"
                style={{ fontWeight: 300 }}
              >
                ARTIA estructura negocios inmobiliarios donde convergen inversión,
                técnica y gestión. Convierte tierra, capital y oportunidad en
                plataformas rentables con foco en trazabilidad, escalabilidad y
                creación de valor real.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#artia-services" className={artiaButtonPrimary} style={{ fontWeight: 600 }}>
                Conocer servicios
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#artia-contact" className={artiaButtonGhost} style={{ fontWeight: 500 }}>
                Analizar mi inversión
                <ChartNoAxesCombined className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["20 años", "de experiencia en ingeniería civil"],
                ["360°", "de mitigación de riesgos técnico-financieros"],
                ["1 modelo", "integrado para estructurar y ejecutar"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.65rem] border border-white/15 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
                >
                  <div className="text-[1.55rem]" style={{ color: artiaAccentSoft, fontWeight: 600 }}>
                    {value}
                  </div>
                  <p
                    className="mt-1 text-[0.8rem] leading-[1.55] text-white/72"
                    style={{ fontWeight: 400 }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="artia-philosophy" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
            <div className="lg:col-span-7">
              <SectionTag>Nuestra filosofía</SectionTag>
              <h2
                className="mt-6"
                style={{ ...artiaSectionTitleStyle, color: artiaTextDark }}
              >
                El eslabón perdido entre el capital y la obra
              </h2>
              <p
                className="mt-6 max-w-[720px] text-[1.05rem] leading-[1.9]"
                style={{ color: artiaTextMuted }}
              >
                El mercado suele separar a quienes entienden de finanzas de
                quienes dominan la ejecución técnica. ARTIA integra ambas
                capacidades para diseñar estructuras de inversión sólidas,
                viables y orientadas a resultados.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                <article className="rounded-[1.7rem] border border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <h3
                    className="text-[1.2rem]"
                    style={{ color: artiaTextDark, fontWeight: 600 }}
                  >
                    Ingeniería inversa
                  </h3>
                  <p
                    className="mt-3 text-[0.93rem] leading-[1.78]"
                    style={{ color: artiaTextMuted }}
                  >
                    Primero se entiende el modelo de negocio del cliente, luego
                    se diseña la infraestructura legal, financiera y técnica que
                    realmente necesita.
                  </p>
                </article>
                <article className="rounded-[1.7rem] border border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <h3
                    className="text-[1.2rem]"
                    style={{ color: artiaTextDark, fontWeight: 600 }}
                  >
                    Mitigación de riesgos 360°
                  </h3>
                  <p
                    className="mt-3 text-[0.93rem] leading-[1.78]"
                    style={{ color: artiaTextMuted }}
                  >
                    Evaluación simultánea de prefactibilidad técnica y viabilidad
                    financiera para evitar fricciones entre tierra, inversión y
                    ejecución.
                  </p>
                </article>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(239,230,255,0.78))] p-8 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
                <div
                  className="text-[0.78rem] uppercase"
                  style={{ color: artiaAccent, letterSpacing: "0.18em" }}
                >
                  Ecuación ARTIA
                </div>
                <div className="mt-6 rounded-[1.6rem] border border-black/10 bg-white/78 px-6 py-8 text-center">
                  <div className="text-[1.2rem]" style={{ color: artiaTextDark, fontWeight: 600 }}>
                    ARTIA =
                  </div>
                  <div className="mt-4 text-[1rem] leading-[1.9]" style={{ color: artiaTextMuted }}>
                    (Ingeniería Civil)
                    <br />+
                    <br />(Finanzas Corporativas)
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    "Developer estratégico orientado a rentabilidad",
                    "Estructuración técnica y financiera en una sola lógica",
                    "Menos fricción entre tierra, capital y ejecución",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.25rem] border border-black/10 bg-white/72 px-4 py-3"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border text-[0.85rem]"
                        style={{
                          borderColor: "rgba(196,176,234,0.3)",
                          backgroundColor: "rgba(196,176,234,0.14)",
                          color: "#8d73bf",
                        }}
                      >
                        +
                      </span>
                      <span className="text-[0.92rem] leading-[1.6]" style={{ color: artiaTextDark, opacity: 0.78 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-2 text-[0.8rem]" style={{ borderColor: "rgba(10,10,10,0.12)", backgroundColor: "rgba(255,255,255,0.7)", color: artiaTextMuted }}>
                  <Handshake className="h-4 w-4" />
                  Developer estratégico orientado a rentabilidad
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artia-services" className="border-b border-white/10 bg-[#0a0a0a] py-24">
          <div
            className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12"
          >
            <SectionTag light>Qué hacemos</SectionTag>
            <h2
              className="mt-6 max-w-[820px] text-white"
              style={{ ...artiaSectionTitleStyle, color: "#ffffff" }}
            >
              Boutique de estructuración de negocios inmobiliarios
            </h2>
            <p className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85] text-white/74">
              Soluciones de inversión a la carta enfocadas en gestión del
              negocio, eficiencia del activo y rentabilidad sostenible.
            </p>

            <div className="mt-12 border-t border-white/12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="artia-service-row grid grid-cols-1 gap-4 border-b border-white/12 py-7 md:grid-cols-[92px_1.05fr_1.25fr] md:gap-8 md:py-8"
                >
                  <div className="flex items-start gap-3 text-[#c4b0ea] md:pt-1">
                    <span className="text-[0.72rem] font-semibold tracking-[0.16em]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#c4b0ea]" />
                  </div>
                  <div className="max-w-[32rem]">
                    <h3
                      className="text-[1.2rem] leading-[1.18] text-white sm:text-[1.32rem]"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <div className="mt-3 text-[0.86rem] text-[#d8d2e8]">
                      {service.subtitle}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[0.95rem] leading-[1.82] text-[#d8d2e8]"
                    >
                      {service.text}
                    </p>
                    <ul className="mt-5 space-y-1.5 text-[0.85rem] text-[#efe6ff]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="artia-properties" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <SectionTag>Portfolio de propiedades</SectionTag>
            <h2
              className="mt-6 max-w-[780px]"
              style={{ ...artiaSectionTitleStyle, color: artiaTextDark }}
            >
              Activos estratégicos para generar flujo y apreciación
            </h2>

            <div className="mt-10 overflow-hidden rounded-[1.9rem] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                src={portfolioImage}
                alt="Portafolio de activos inmobiliarios y logísticos"
                className="h-[300px] w-full object-cover"
              />
              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
                {propertyLines.map((line) => {
                  const Icon = line.icon;
                  return (
                    <article
                      key={line.title}
                      className="rounded-[1.5rem] border border-black/10 bg-[#f8f4ec] p-6"
                    >
                      <div
                        className="mb-4 inline-flex rounded-[1rem] border p-2.5"
                        style={{
                          borderColor: "rgba(142,156,189,0.28)",
                          backgroundColor: "rgba(142,156,189,0.08)",
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: artiaAccent }} />
                      </div>
                      <h3
                        className="text-[1.14rem]"
                        style={{ color: artiaTextDark, fontWeight: 600 }}
                      >
                        {line.title}
                      </h3>
                      <p
                        className="mt-3 text-[0.9rem] leading-[1.72]"
                        style={{ color: artiaTextMuted }}
                      >
                        {line.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="artia-sinergy" className="border-b border-white/10 bg-[#0a0a0a] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 sm:px-6 lg:grid-cols-12 lg:px-12">
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-6 sm:p-8 lg:col-span-8 lg:p-10">
              <SectionTag light>Garantía de ejecución</SectionTag>
              <h2
                className="mt-6 max-w-[760px] text-white"
                style={{ ...artiaSectionTitleStyle, color: "#ffffff" }}
              >
                Sinergia estratégica para proteger la inversión
              </h2>
              <p className="mt-6 max-w-[820px] text-[1.02rem] leading-[1.9] text-white/78">
                ARTIA estructura el negocio y administra el activo financiero.
                La ejecución técnica se articula con un brazo operativo
                especializado, separando funciones para maximizar control,
                transparencia y rendimiento.
              </p>
              <div
                className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-2 text-[0.8rem]"
                style={{
                  borderColor: "rgba(215,219,238,0.28)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: artiaAccentSoft,
                }}
              >
                <Handshake className="h-4 w-4" />
                Gobierno técnico-financiero para decisiones confiables
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              {[
                {
                  value: "ARTIA",
                  label: "Developer estratégico: estructura, financia y gestiona el ciclo del activo.",
                },
                {
                  value: "RAHI",
                  label: "Project management y control de obra para asegurar costo, plazo y calidad técnica.",
                },
                {
                  value: "Ejecución",
                  label: "Modelo coordinado para alinear tierra, capital, obra y comercialización.",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-[1.7rem] border border-white/12 bg-white/[0.05] px-6 py-7"
                >
                  <div className="text-[1.36rem]" style={{ color: artiaAccentSoft, fontWeight: 600 }}>
                    {item.value}
                  </div>
                  <p className="mt-2 text-[0.88rem] leading-[1.7] text-white/72">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="artia-ecosystem" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-6">
              <SectionTag>Ecosistema QIMA</SectionTag>
              <h2
                className="mt-6 max-w-[700px]"
                style={{ ...artiaSectionTitleStyle, color: artiaTextDark }}
              >
                ARTIA como capacidad especializada dentro del ecosistema QIMA
              </h2>
              <p
                className="mt-6 max-w-[650px] text-[1rem] leading-[1.9]"
                style={{ color: artiaTextMuted }}
              >
                ARTIA fortalece a QIMA con expertise en estructuración
                inmobiliaria, análisis financiero y articulación entre capital,
                tierra y ejecución. Su rol permite convertir oportunidad en
                negocio con una lógica más precisa y escalable.
              </p>
              <a href="/" className={artiaButtonDark} style={{ marginTop: "2rem", fontWeight: 500 }}>
                Ver página principal de QIMA
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[340px] overflow-hidden sm:h-[420px]">
                <div className="tau-orbit tau-orbit-lg" style={{ borderColor: "rgba(142,156,189,0.12)" }} />
                <div className="tau-orbit tau-orbit-md" style={{ borderColor: "rgba(10,10,10,0.08)" }} />
                <div className="tau-orbit tau-orbit-sm" style={{ borderColor: "rgba(142,156,189,0.22)" }} />

                <div
                  className="absolute left-1/2 top-1/2 flex h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[1.45rem] tracking-[0.18em] text-[#0a0a0a] sm:h-[168px] sm:w-[168px] sm:text-[2rem]"
                  style={{
                    borderColor: "rgba(142,156,189,0.36)",
                    background:
                      "radial-gradient(circle at center, rgba(142,156,189,0.16), rgba(243,239,232,0.96) 70%)",
                    boxShadow: "0 22px 60px rgba(0,0,0,0.08)",
                  }}
                >
                  QIMA
                </div>

                <div
                  className="absolute left-[10%] top-[16%] rounded-full border px-4 py-3 text-[0.8rem] sm:left-[16%] sm:top-[20%] sm:px-6 sm:py-4 sm:text-base"
                  style={{
                    borderColor: "rgba(142,156,189,0.45)",
                    backgroundColor: "rgba(142,156,189,0.08)",
                    color: artiaAccent,
                  }}
                >
                  ARTIA
                </div>
                <div
                  className="absolute right-[2%] top-[18%] rounded-full border px-3 py-2 text-[0.68rem] sm:right-[10%] sm:top-[26%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(10,10,10,0.10)",
                    backgroundColor: "rgba(255,255,255,0.72)",
                    color: artiaTextMuted,
                  }}
                >
                  Capital inmobiliario
                </div>
                <div
                  className="absolute bottom-[14%] left-[4%] rounded-full border px-3 py-2 text-[0.68rem] sm:bottom-[18%] sm:left-[12%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(10,10,10,0.10)",
                    backgroundColor: "rgba(255,255,255,0.72)",
                    color: artiaTextMuted,
                  }}
                >
                  Tierra y activos
                </div>
                <div
                  className="absolute bottom-[16%] right-[2%] rounded-full border px-3 py-2 text-[0.68rem] sm:bottom-[24%] sm:right-[8%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(10,10,10,0.10)",
                    backgroundColor: "rgba(255,255,255,0.72)",
                    color: artiaTextMuted,
                  }}
                >
                  Estructuración y ejecución
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artia-contact" className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/12">
              <img
                src={contactImage}
                alt="Mesa de trabajo para planificación de inversión inmobiliaria"
                className="absolute inset-0 h-full w-full object-cover opacity-24"
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,10,10,0.94),rgba(10,10,10,0.86)_48%,rgba(10,10,10,0.72))]" />
              <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                <SectionTag light>Cierre / Contacto</SectionTag>
                <h2
                  className="mt-6 max-w-[840px] text-white"
                  style={{ ...artiaSectionTitleStyle, color: "#ffffff" }}
                >
                  Hablemos de tu próximo negocio inmobiliario
                </h2>
                <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-white/78">
                  Si tenés una empresa en expansión, un terreno para desarrollar
                  o capital buscando rentabilidad con soporte técnico, ARTIA
                  puede estructurar una solución a medida.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="mailto:hola@qima.com.py?subject=Consulta%20ARTIA"
                    className={artiaButtonPrimary}
                    style={{ fontWeight: 600 }}
                  >
                    Solicitar pre-factibilidad
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/#ecosystem"
                    className={artiaButtonGhost}
                    style={{ fontWeight: 500 }}
                  >
                    Ver ecosistema QIMA
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
