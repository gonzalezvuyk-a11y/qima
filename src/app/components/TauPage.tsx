import {
  ArrowUpRight,
  ChevronRight,
  Gauge,
  Leaf,
  Radar,
  ShieldCheck,
  Waves,
  Workflow,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const heroImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80";
const introImage = "/media/robot.gif";
const contactImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80";
const tauLogo = "/brand/logo-tau.svg";

const tauAccent = "#3aaf54";
const tauAccentSoft = "#8ed89d";
const tauTextDark = "#172b3f";
const tauTextMuted = "rgba(23,43,63,0.72)";

const buttonBase =
  "inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-7 py-3 text-[0.84rem] transition-all duration-300";
const tauButtonPrimary = `${buttonBase} bg-[#3aaf54] text-[#172b3f] hover:bg-[#172b3f] hover:text-[#3aaf54]`;
const tauButtonDark = `${buttonBase} bg-[#172b3f] text-white hover:bg-[#3aaf54] hover:text-[#172b3f]`;
const tauButtonGhost = `${buttonBase} border border-white/30 text-white hover:border-[#8ed89d] hover:bg-white/10`;
const sectionTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "44px",
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};

const services = [
  {
    title: "Diagnóstico e inspección",
    text: "Cámaras robotizadas, relevamiento técnico y reportes trazables para detectar obstrucciones, fisuras y patologías.",
    tags: ["CCTV", "PACP", "Trazabilidad"],
  },
  {
    title: "Limpieza y desobstrucción",
    text: "Hidrolavado, succión y corte de raíces para recuperar capacidad operativa con intervención controlada.",
    tags: ["Hidrolavado", "Succión", "Raíces"],
  },
  {
    title: "Rehabilitación sin zanja",
    text: "Soluciones para restaurar tuberías sin excavación, extendiendo la vida útil y reduciendo impacto en superficie.",
    tags: ["CIPP", "Reparación", "Sin zanja"],
  },
  {
    title: "Operación y mantenimiento",
    text: "Bypass, pozos de bombeo, rejas y redes meteorológicas para sostener continuidad del servicio.",
    tags: ["Bypass", "Mantenimiento", "Terreno"],
  },
];

const capabilities = [
  "Innovación constante",
  "Equipo especializado",
  "Eficiencia operativa",
  "Calidad técnica",
  "Sostenibilidad aplicada",
];

const techModules = [
  {
    title: "Equipos de limpieza",
    text: "Sistemas de alta presión, succión y mecanizado para limpieza profunda y desobstrucción controlada.",
    icon: Waves,
  },
  {
    title: "Equipos de inspección y diagnóstico",
    text: "Cámaras robotizadas, sensores y plataformas de captura de datos para inspección de precisión.",
    icon: Radar,
  },
  {
    title: "Equipos de relevamiento",
    text: "Herramientas de medición y registro para mapeo técnico de redes y puntos críticos.",
    icon: Gauge,
  },
  {
    title: "Equipos de reparación y rehabilitación",
    text: "Tecnología sin zanja y soluciones de intervención eficiente para extender vida útil de la infraestructura.",
    icon: Workflow,
  },
  {
    title: "Equipos de seguridad y auxiliares",
    text: "Protocolos y equipamiento para operaciones seguras, continuidad operativa y trazabilidad en campo.",
    icon: ShieldCheck,
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
        style={{ backgroundColor: tauAccent }}
      />
      <span
        className="text-[0.95rem]"
        style={{
          color: light ? "rgba(255,255,255,0.88)" : tauTextDark,
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

export function TauPage() {
  return (
    <div className="tau-page min-h-screen bg-[#f3efe8] text-[#172b3f]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden border-b border-black/10 pt-28">
          <img
            src={heroImage}
            alt="Operación técnica de TAU"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(23,43,63,0.92)_0%,rgba(23,43,63,0.74)_46%,rgba(23,43,63,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(58,175,84,0.2),transparent_38%),radial-gradient(circle_at_80%_24%,rgba(142,216,157,0.16),transparent_32%)]" />
          <div className="pointer-events-none absolute bottom-10 right-5 z-10 opacity-[0.12] sm:right-6 md:bottom-12 lg:right-12">
            <img
              src={tauLogo}
              alt=""
              aria-hidden="true"
              className="h-9 w-auto sm:h-11 lg:h-14"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-14 sm:px-6 md:pb-16 lg:px-12">
            <SectionTag light>Unidad especializada del ecosistema QIMA</SectionTag>
            <div className="mt-8 max-w-[760px]">
              <h1
                className="text-white"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  lineHeight: 0.98,
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                }}
              >
                Tecnología aplicada al diagnóstico y mantenimiento de redes
              </h1>
              <p
                className="mt-8 max-w-[720px] text-[1.15rem] leading-[1.82] text-white/78"
                style={{ fontWeight: 300 }}
              >
                TAU se especializa en inspección, diagnóstico y mantenimiento de
                redes de tuberías, integrando tecnología avanzada, experiencia
                operativa y enfoque ambiental para ofrecer soluciones precisas y
                eficientes.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#tau-services" className={tauButtonPrimary} style={{ fontWeight: 600 }}>
                Conocer servicios
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#tau-contact" className={tauButtonGhost} style={{ fontWeight: 500 }}>
                Contactar a TAU
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["+14", "años de experiencia operativa"],
                ["24/7", "capacidad de respuesta técnica"],
                ["100%", "foco en calidad y trazabilidad"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.65rem] border border-white/15 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
                >
                  <div className="text-[1.55rem]" style={{ color: tauAccentSoft, fontWeight: 600 }}>
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

        <section id="tau-intro" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
            <div className="lg:col-span-7">
              <SectionTag>Qué hace TAU</SectionTag>
              <h2 className="mt-6" style={{ ...sectionTitleStyle, color: tauTextDark }}>
                Especialización técnica para redes de saneamiento y gestión del agua
              </h2>
              <p
                className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.9]"
                style={{ color: tauTextMuted }}
              >
                TAU desarrolla soluciones para la inspección, diagnóstico,
                mantenimiento y rehabilitación de redes de tuberías. Su enfoque
                combina tecnología de última generación, conocimiento técnico y
                una mirada eficiente y sostenible sobre la operación de sistemas
                de saneamiento.
              </p>
              <div className="mt-10 overflow-hidden rounded-[1.85rem] border border-[#172b3f]/12 bg-[#f7f2e8]">
                <img
                  src={introImage}
                  alt="Robot de inspección en red de saneamiento"
                  className="h-[240px] w-full object-cover object-center sm:h-[320px]"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[2rem] border border-[#172b3f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,239,232,0.96))] p-8 shadow-[0_18px_48px_rgba(23,43,63,0.1)]">
                <div
                  className="text-[0.78rem] uppercase"
                  style={{ color: tauAccent, letterSpacing: "0.18em" }}
                >
                  Bloque institucional
                </div>
                <p
                  className="mt-3 max-w-[22rem] text-[0.94rem] leading-[1.75]"
                  style={{ color: tauTextMuted }}
                >
                  Capacidades que sostienen la propuesta de TAU y hacen más
                  legible su valor operativo.
                </p>
                <div className="mt-6 space-y-3">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-[#172b3f]/10 bg-white/80 px-4 py-3.5"
                    >
                      <span className="text-[0.95rem] text-[#172b3f]/88">{item}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3aaf54]/20 bg-[#3aaf54]/10">
                        <ShieldCheck className="h-4 w-4" style={{ color: tauAccent }} />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Diagnóstico", "Mantenimiento", "Rehabilitación", "Trazabilidad"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1.5 text-[0.7rem] tracking-[0.04em]"
                      style={{
                        borderColor: "rgba(23,43,63,0.12)",
                        backgroundColor: "rgba(255,255,255,0.75)",
                        color: tauTextMuted,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tau-services" className="border-b border-white/10 bg-[#172b3f] py-24">
          <div
            className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12"
          >
            <SectionTag light>Servicios</SectionTag>
            <h2 className="mt-6 max-w-[820px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
              Capacidades operativas en cuatro frentes claros
            </h2>
            <p className="mt-5 max-w-[780px] text-[1rem] leading-[1.85] text-white/72">
              TAU organiza su propuesta en bloques más simples para leer rápido:
              diagnóstico, limpieza, rehabilitación y operación continua.
            </p>

            <div className="mt-12 border-t border-white/12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="tau-service-row grid grid-cols-1 gap-4 border-b border-white/12 py-7 md:grid-cols-[92px_1fr_auto] md:gap-8 md:py-8"
                >
                  <div className="flex items-start gap-3 text-[#8ed89d] md:flex-col md:items-start md:gap-3 md:pt-1">
                    <span className="text-[0.68rem] font-semibold tracking-[0.18em]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#3aaf54]" />
                  </div>
                  <div className="max-w-[36rem]">
                    <h3 className="text-[1.15rem] leading-[1.18] text-white sm:text-[1.28rem]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-[1.72] text-white/72">
                      {service.text}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:max-w-[240px] md:justify-self-end md:items-start md:pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1.5 text-[0.72rem] tracking-[0.04em]"
                        style={{
                          borderColor: "rgba(255,255,255,0.14)",
                          backgroundColor: "rgba(255,255,255,0.03)",
                          color: "rgba(255,255,255,0.82)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tau-technology" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <SectionTag>Tecnología y equipamiento</SectionTag>
            <h2 className="mt-6 max-w-[780px]" style={{ ...sectionTitleStyle, color: tauTextDark }}>
              Capacidad técnica respaldada por equipamiento especializado
            </h2>
            <p
              className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85]"
              style={{ color: tauTextMuted }}
            >
              TAU apoya su operación en equipamiento técnico específico para
              limpieza, inspección, diagnóstico, relevamiento, reparación,
              rehabilitación y seguridad operacional.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
              {techModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.title}
                    className={`rounded-[1.7rem] border border-[#172b3f]/10 bg-white p-7 shadow-[0_20px_50px_rgba(23,43,63,0.08)] ${
                      index < 2 ? "md:col-span-1 xl:col-span-6" : "md:col-span-1 xl:col-span-4"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-[1.12rem]"
                          style={{ color: tauTextDark, fontWeight: 600 }}
                        >
                          {module.title}
                        </h3>
                        <p
                          className="mt-3 text-[0.92rem] leading-[1.78]"
                          style={{ color: tauTextMuted }}
                        >
                          {module.text}
                        </p>
                      </div>
                      <div
                        className="rounded-[1rem] border p-2.5"
                        style={{
                          borderColor: "rgba(58,175,84,0.28)",
                          backgroundColor: "rgba(58,175,84,0.08)",
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: tauAccent }} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tau-commitment" className="border-b border-white/10 bg-[#172b3f] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 sm:px-6 lg:grid-cols-12 lg:px-12">
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-6 sm:p-8 lg:col-span-8 lg:p-10">
              <SectionTag light>Compromiso</SectionTag>
              <h2 className="mt-6 max-w-[760px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
                Compromiso con la eficiencia y la sostenibilidad
              </h2>
              <p className="mt-6 max-w-[820px] text-[1.02rem] leading-[1.9] text-white/78">
                TAU trabaja con foco en el cuidado ambiental, la calidad del
                servicio y la mejora continua. Su aproximación combina tecnología
                de punta, eficiencia operativa y prácticas orientadas a reducir
                impacto ambiental y anticipar futuros inconvenientes.
              </p>
              <div
                className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-2 text-[0.8rem]"
                style={{
                  borderColor: "rgba(142,216,157,0.28)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: tauAccentSoft,
                }}
              >
                <Leaf className="h-4 w-4" />
                Operación técnica con criterios de sostenibilidad
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              {[
                { value: "Precisión", label: "Diagnóstico de fallas y patologías críticas" },
                { value: "Ejecución", label: "Capacidad real de respuesta operativa" },
                { value: "Trazabilidad", label: "Datos técnicos para toma de decisiones" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-[1.7rem] border border-white/12 bg-white/[0.05] px-6 py-7"
                >
                  <div className="text-[1.36rem]" style={{ color: tauAccentSoft, fontWeight: 600 }}>
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

        <section id="tau-ecosystem" className="border-b border-black/10 bg-[#f3efe8] py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-6">
              <SectionTag>Ecosistema QIMA</SectionTag>
              <h2 className="mt-6 max-w-[700px]" style={{ ...sectionTitleStyle, color: tauTextDark }}>
                Una capacidad especializada dentro del ecosistema QIMA
              </h2>
              <p
                className="mt-6 max-w-[650px] text-[1rem] leading-[1.9]"
                style={{ color: tauTextMuted }}
              >
                Como parte del ecosistema QIMA, TAU aporta capacidad técnica,
                conocimiento operativo y soluciones especializadas para redes,
                saneamiento y gestión del agua. Su rol refuerza la capacidad de
                QIMA para articular negocios, oportunidades y empresas con
                expertise real.
              </p>
              <a href="/" className={tauButtonDark} style={{ marginTop: "2rem", fontWeight: 500 }}>
                Ver página principal de QIMA
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[340px] sm:h-[420px]">
                <div className="tau-orbit tau-orbit-lg" />
                <div className="tau-orbit tau-orbit-md" />
                <div className="tau-orbit tau-orbit-sm" />

                <div
                  className="absolute left-1/2 top-1/2 flex h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[1.45rem] tracking-[0.18em] transition-all duration-300 hover:scale-[1.03] sm:h-[168px] sm:w-[168px] sm:text-[2rem]"
                  style={{
                    borderColor: "rgba(58,175,84,0.38)",
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.99), rgba(243,239,232,0.98) 62%, rgba(226,236,230,0.96) 100%)",
                    color: tauAccent,
                    boxShadow: "0 22px 60px rgba(23,43,63,0.12)",
                  }}
                >
                  QIMA
                </div>
                <div
                  className="absolute left-[10%] top-[16%] rounded-full border px-4 py-3 text-[0.8rem] sm:left-[16%] sm:top-[20%] sm:px-6 sm:py-4 sm:text-base"
                  style={{
                    borderColor: "rgba(58,175,84,0.4)",
                    backgroundColor: "rgba(58,175,84,0.06)",
                    color: tauAccent,
                  }}
                >
                  TAU
                </div>
                <div
                  className="absolute right-[2%] top-[18%] rounded-full border px-3 py-2 text-[0.68rem] sm:right-[12%] sm:top-[26%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(23,43,63,0.12)",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    color: tauTextDark,
                  }}
                >
                  Capital y articulación
                </div>
                <div
                  className="absolute bottom-[14%] left-[4%] rounded-full border px-3 py-2 text-[0.68rem] sm:bottom-[18%] sm:left-[12%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(23,43,63,0.12)",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    color: tauTextDark,
                  }}
                >
                  Soluciones especializadas
                </div>
                <div
                  className="absolute bottom-[16%] right-[2%] rounded-full border px-3 py-2 text-[0.68rem] sm:bottom-[24%] sm:right-[11%] sm:px-5 sm:py-3 sm:text-[0.8rem]"
                  style={{
                    borderColor: "rgba(23,43,63,0.12)",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    color: tauTextDark,
                  }}
                >
                  Operación con impacto
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tau-contact" className="bg-[#172b3f] py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/12">
              <img
                src={contactImage}
                alt="Infraestructura urbana y tecnología aplicada"
                className="absolute inset-0 h-full w-full object-cover opacity-28"
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(23,43,63,0.92),rgba(23,43,63,0.84)_48%,rgba(23,43,63,0.72))]" />
              <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                <SectionTag light>Cierre / Contacto</SectionTag>
                <h2 className="mt-6 max-w-[820px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
                  Hablemos de tu próximo desafío técnico
                </h2>
                <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-white/78">
                  Si necesitás una solución especializada para diagnóstico,
                  mantenimiento o rehabilitación de redes, TAU puede ayudarte
                  con tecnología, experiencia y capacidad operativa.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="mailto:hola@qima.com.py?subject=Consulta%20TAU"
                    className={tauButtonPrimary}
                    style={{ fontWeight: 600 }}
                  >
                    Contactar a TAU
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/#ecosystem"
                    className={tauButtonGhost}
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
