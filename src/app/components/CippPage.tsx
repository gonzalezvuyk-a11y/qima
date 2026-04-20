import {
  ArrowUpRight,
  ChevronRight,
  CircleGauge,
  Droplets,
  HardHat,
  Radar,
  ScanLine,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const heroVideo = "/media/cipp-hero.mp4";
const introImage = "/media/cipp-intro.jpg";
const contactImage = introImage;
const cippLogo = "/brand/logo-cipp.svg";
const cippAccent = "#ffcd00";
const cippDark = "#0d3857";
const buttonBase =
  "inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-7 py-3 text-[0.8125rem] transition-all duration-300";
const cippButtonPrimary =
  `${buttonBase} border border-transparent bg-[#ffcd00] text-[#0d3857] hover:-translate-y-0.5 hover:border-[#ffcd00] hover:bg-[#0d3857] hover:text-[#ffcd00]`;
const cippButtonDark =
  `${buttonBase} border border-transparent bg-[#0d3857] text-white hover:-translate-y-0.5 hover:border-[#ffcd00] hover:bg-[#ffcd00] hover:text-[#0d3857]`;
const cippButtonGhost =
  `${buttonBase} border border-white/25 bg-transparent text-white hover:-translate-y-0.5 hover:border-[#ffcd00] hover:text-[#ffcd00]`;
const sectionTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "44px",
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};

const services = [
  {
    title: "Rehabilitación de tuberías (Sistema CIPP)",
    text: "Inserción de manga impregnada con resina para crear una nueva tubería dentro de la existente, extendiendo su vida útil por 50 años o más con mínima intervención en superficie.",
  },
  {
    title: "Teleinspección y diagnóstico PACP",
    text: "Inspección robotizada con reportes bajo estándar PACP de NASSCO para identificar daños estructurales, severidad y probabilidad de falla en redes críticas.",
  },
  {
    title: "Limpieza y mantenimiento de redes",
    text: "Operación con camiones combinados y herramientas especializadas para remover obstrucciones por grasas, raíces, sedimentos y residuos de construcción.",
  },
  {
    title: "Bypass y desvío temporal de caudales",
    text: "Soluciones de bombeo y derivación para ejecutar obras o reparaciones en operación, incluyendo manejo de caudales complejos y entornos de alta exigencia.",
  },
];

const applicationAreas = [
  {
    title: "Sanitaria",
    text: "Prevención de roturas y rehabilitación de redes de alcantarillado bajo norma nacional NCh3409.",
    icon: Droplets,
  },
  {
    title: "Industrial",
    text: "Intervención en efluentes químicos, RILES y líneas de proceso con resinas adaptadas al fluido transportado.",
    icon: Wrench,
  },
  {
    title: "Minería",
    text: "Diagnóstico y rehabilitación de conducciones presurizadas y líneas con agentes químicos de alta criticidad.",
    icon: HardHat,
  },
];

const technologyModules = [
  {
    title: "ZIPCAM 360°",
    text: "Videoinspección HD 360° propulsada por tobera de camión Jet para levantamiento técnico con mayor cobertura y precisión.",
    icon: ScanLine,
  },
  {
    title: "GeoKrete®",
    text: "Mortero geopolímero ecológico para restauración estructural y protección frente a corrosión por sulfuro de hidrógeno.",
    icon: ShieldCheck,
  },
  {
    title: "I&I Guard PRF®",
    text: "Lechada de poliuretano de curado ultra rápido para control de infiltraciones de alto flujo en estructuras subterráneas.",
    icon: Waves,
  },
  {
    title: "Camiones combinados",
    text: "Equipamiento de alta presión y succión para limpieza, mantenimiento y respuesta técnica en redes urbanas e industriales.",
    icon: CircleGauge,
  },
  {
    title: "Trazabilidad normativa",
    text: "Metodologías alineadas con NCh3409, ASTM F1216 y certificación PACP NASSCO para estandarizar calidad y diagnóstico.",
    icon: Radar,
  },
];

function SectionTag({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  const textColor = tone === "light" ? cippDark : "#f3efe8";
  return (
    <div className="mb-6 inline-flex items-center gap-3" style={{ color: textColor }}>
      <span className="h-3.5 w-3.5 rounded-sm bg-[#ffcd00]" />
      <span
        className="text-[0.95rem]"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function CippPage() {
  return (
    <div className="cipp-page min-h-screen bg-[#f3efe8] text-[#1a1510]">
      <Header />

      <main>
        <section className="relative min-h-screen overflow-hidden border-b border-white/10 bg-[#0d3857] pt-32">
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="tau-tech-grid absolute inset-0 opacity-35" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,205,0,0.2),transparent_38%),radial-gradient(circle_at_78%_22%,rgba(255,205,0,0.14),transparent_42%),linear-gradient(90deg,rgba(13,56,87,0.92)_0%,rgba(13,56,87,0.72)_38%,rgba(13,56,87,0.38)_68%,rgba(13,56,87,0.6)_100%),linear-gradient(180deg,rgba(13,56,87,0.2)_0%,rgba(13,56,87,0.48)_58%,rgba(13,56,87,0.9)_100%)]" />
          <div className="pointer-events-none absolute bottom-10 right-5 z-10 opacity-[0.12] sm:right-6 md:bottom-12 lg:right-12">
            <img
              src={cippLogo}
              alt=""
              aria-hidden="true"
              className="h-8 w-auto sm:h-10 lg:h-12"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center px-5 pb-16 pt-14 sm:px-6 md:pb-20 lg:px-12">
            <div className="qima-reveal max-w-[860px]">
              <SectionTag tone="dark">Unidad especializada del ecosistema QIMA</SectionTag>
              <h1
                className="mt-7 max-w-[740px] text-white"
                style={{
                  fontSize: "clamp(2.7rem, 5vw, 4.6rem)",
                  lineHeight: 0.98,
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                }}
              >
                Rehabilitación y diagnóstico técnico de tuberías sin zanja
              </h1>
              <p className="mt-7 max-w-[660px] text-[1.12rem] leading-[1.84] text-[#e8e1d0]" style={{ fontWeight: 300 }}>
                CIPP aporta soluciones especializadas para inspección, limpieza, diagnóstico y rehabilitación de redes sanitarias e industriales, combinando tecnología aplicada, control técnico y enfoque sostenible.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#cipp-services" className={cippButtonPrimary} style={{ fontWeight: 500 }}>
                  Conocer servicios
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#cipp-contact" className={cippButtonGhost} style={{ fontWeight: 500 }}>
                  Contactar a CIPP
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["+130 km", "rehabilitados en Chile"],
                  ["150–1500 mm", "rango de diámetros intervenidos"],
                  ["50+ años", "vida útil proyectada en rehabilitación CIPP"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
                    <div className="text-[1.35rem] text-[#ffcd00]" style={{ fontWeight: 600 }}>
                      {value}
                    </div>
                    <p className="mt-1 text-[0.78rem] leading-[1.55] text-[#c6c0af]" style={{ fontWeight: 400 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-intro" className="border-b border-white/10 bg-[#f3efe8] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
            <div className="lg:col-span-7">
              <SectionTag tone="light">Qué hace CIPP</SectionTag>
              <h2 className="mt-6 max-w-[760px] text-[#0d3857]" style={{ ...sectionTitleStyle, color: "#0d3857" }}>
                Soluciones integrales para rehabilitación, inspección y mantenimiento de redes
              </h2>
              <p className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.9] text-[#4d483f]">
                CIPP se enfoca en rehabilitar infraestructura subterránea con metodologías sin zanja, inspección robotizada y mantenimiento técnico. Su operación está orientada a disminuir impacto ambiental, extender vida útil de activos y optimizar continuidad del servicio.
              </p>
              <div className="tau-shine mt-10 overflow-hidden rounded-[26px] border border-[#0d3857]/10 bg-gradient-to-br from-[#f7f4ee] to-[#efe8dc]">
                <img src={introImage} alt="Operación técnica de inspección y rehabilitación de tuberías" className="h-[320px] w-full object-cover opacity-92" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[2rem] border border-[#0d3857]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(247,242,232,0.96))] p-8 shadow-[0_18px_48px_rgba(13,56,87,0.1)]">
                <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[#ffcd00]">
                  Pilares operativos
                </div>
                <p className="mt-3 max-w-[23rem] text-[0.94rem] leading-[1.75]" style={{ color: cippDark }}>
                  Una lectura rápida de las capacidades que sostienen la
                  rehabilitación, inspección y mantenimiento de redes.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Diagnóstico trazable y estandarizado",
                    "Rehabilitación sin zanja de alta eficiencia",
                    "Cumplimiento técnico normativo",
                    "Reducción de impacto ambiental",
                    "Capacidad de ejecución en terreno",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-[#0d3857]/10 bg-white/82 px-4 py-3.5"
                    >
                      <span className="text-[0.93rem] text-[#0d3857]/88">{item}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffcd00]/24 bg-[#ffcd00]/10">
                        <ShieldCheck className="h-4 w-4 text-[#c89600]" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.25rem] border border-[#0d3857]/10 bg-[#0d3857]/[0.04] px-4 py-3 text-[0.84rem] leading-[1.6] text-[#486581]">
                  Diseño pensado para alinear diagnóstico, rehabilitación y
                  ejecución en una sola capa visual.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-services" className="border-b border-white/10 bg-[#0d3857] py-24 qima-reveal">
          <div
            className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12"
          >
            <SectionTag tone="dark">Servicios CIPP</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
              Servicios técnicos para rehabilitación y continuidad operativa de redes
            </h2>

            <div className="mt-12 border-t border-white/12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="cipp-service-row grid grid-cols-1 gap-4 border-b border-white/12 py-7 md:grid-cols-[104px_1fr] md:gap-8 md:py-8"
                >
                  <div className="flex items-start gap-3 text-[#ffcd00] md:pt-1">
                    <span className="text-[0.72rem] font-semibold tracking-[0.16em]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#ffcd00]" />
                  </div>
                  <div className="max-w-[42rem]">
                    <h3
                      className="text-[1.2rem] leading-[1.18] text-white sm:text-[1.3rem]"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#d7e2ef]">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cipp-technology" className="border-b border-[#0d3857]/10 bg-[#f3efe8] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <SectionTag tone="light">Tecnología y estándares</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-[#0d3857]" style={{ ...sectionTitleStyle, color: "#0d3857" }}>
              Capacidades respaldadas por equipamiento especializado y normas técnicas
            </h2>
            <p className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85] text-[#4d483f]">
              CIPP integra equipamiento de inspección, rehabilitación y mantenimiento junto a prácticas técnicas estructuradas bajo NCh3409, ASTM F1216 y reportabilidad PACP NASSCO.
            </p>

            <div className="mt-12 border-t border-[#0d3857]/10">
              {technologyModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div
                    key={module.title}
                    className="grid grid-cols-1 gap-4 border-b border-[#0d3857]/10 py-7 md:grid-cols-[84px_1.05fr_1.35fr] md:gap-8 md:py-8"
                  >
                    <div className="flex items-center gap-3 text-[#c89600] md:items-start md:pt-1">
                      <span className="text-[0.72rem] font-semibold tracking-[0.16em]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <Icon className="h-4 w-4 shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-[1.12rem] text-[#0d3857]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        {module.title}
                      </h3>
                    </div>
                    <div className="min-w-0">
                      <p className="max-w-[720px] text-[0.94rem] leading-[1.8] text-[#4d483f]">
                        {module.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0d3857] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <SectionTag tone="dark">Áreas de aplicación</SectionTag>
            <h2 className="mt-6 max-w-[760px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
              Especialización transversal para redes sanitarias, industriales y mineras
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {applicationAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="rounded-[24px] border border-white/12 bg-white/[0.04] p-7">
                    <div className="mb-5 inline-flex rounded-xl border border-[#ffcd00]/35 bg-[#ffcd00]/12 p-3">
                      <Icon className="h-5 w-5 text-[#ffcd00]" />
                    </div>
                    <h3 className="text-[1.2rem] text-white" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.78] text-[#cfc8b9]">{area.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cipp-ecosystem" className="border-b border-[#0d3857]/10 bg-[#f3efe8] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-6">
              <SectionTag tone="light">Ecosistema QIMA</SectionTag>
              <h2 className="mt-6 max-w-[660px] text-[#0d3857]" style={{ ...sectionTitleStyle, color: "#0d3857" }}>
                CIPP como capacidad especializada dentro del ecosistema QIMA
              </h2>
              <p className="mt-6 max-w-[640px] text-[1rem] leading-[1.9] text-[#4d483f]">
                CIPP fortalece al ecosistema QIMA con expertise técnico en rehabilitación y diagnóstico de infraestructura subterránea. Su aporte combina ejecución en terreno, trazabilidad técnica y criterios de sostenibilidad aplicados a operaciones reales.
              </p>
              <a href="/" className={`${cippButtonDark} mt-8`}>
                Ver página principal de QIMA
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[340px] overflow-hidden sm:h-[420px]">
                <div className="tau-orbit tau-orbit-lg" style={{ borderColor: "rgba(13, 56, 87, 0.10)" }} />
                <div className="tau-orbit tau-orbit-md" style={{ borderColor: "rgba(13, 56, 87, 0.08)" }} />
                <div className="tau-orbit tau-orbit-sm" style={{ borderColor: "rgba(255, 205, 0, 0.22)" }} />

                <div className="absolute left-1/2 top-1/2 flex h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ffcd00]/35 bg-transparent text-[1.45rem] tracking-[0.18em] text-[#0d3857] sm:h-[168px] sm:w-[168px] sm:text-[2rem]">
                  QIMA
                </div>
                <div className="absolute left-[10%] top-[16%] rounded-full border border-[#ffcd00]/38 bg-transparent px-4 py-3 text-[0.8rem] text-[#b98f00] sm:left-[16%] sm:top-[20%] sm:px-6 sm:py-4 sm:text-base">
                  CIPP
                </div>
                <div className="absolute right-[2%] top-[18%] rounded-full border border-[#0d3857]/14 bg-transparent px-3 py-2 text-[0.68rem] text-[#40617d] sm:right-[12%] sm:top-[26%] sm:px-5 sm:py-3 sm:text-[0.8rem]">
                  Rehabilitación sin zanja
                </div>
                <div className="absolute bottom-[14%] left-[4%] rounded-full border border-[#0d3857]/14 bg-transparent px-3 py-2 text-[0.68rem] text-[#40617d] sm:bottom-[18%] sm:left-[12%] sm:px-5 sm:py-3 sm:text-[0.8rem]">
                  Diagnóstico certificado
                </div>
                <div className="absolute bottom-[16%] right-[2%] rounded-full border border-[#0d3857]/14 bg-transparent px-3 py-2 text-[0.68rem] text-[#40617d] sm:bottom-[24%] sm:right-[11%] sm:px-5 sm:py-3 sm:text-[0.8rem]">
                  Ejecución en campo
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-contact" className="bg-[#0d3857] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-[34px] border border-white/14">
              <img src={contactImage} alt="Equipo técnico especializado trabajando en infraestructura" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(13,56,87,0.96),rgba(13,56,87,0.84)_48%,rgba(13,56,87,0.72))]" />
              <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                <div className="max-w-[840px]">
                  <SectionTag tone="dark">Cierre / Contacto</SectionTag>
                  <h2 className="mt-6 max-w-[740px] text-white" style={{ ...sectionTitleStyle, color: "#ffffff" }}>
                    Hablemos de tu próximo proyecto de rehabilitación y diagnóstico
                  </h2>
                  <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-[#d0c8b6]">
                    Si necesitás soluciones técnicas para inspección, mantenimiento o rehabilitación de redes, CIPP puede aportar tecnología, experiencia y ejecución especializada.
                  </p>
                  <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                    <a href="https://cipp.cl/contacto/" target="_blank" rel="noreferrer" className={cippButtonPrimary} style={{ fontWeight: 500 }}>
                      Contactar a CIPP
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="/#ecosystem" className={cippButtonGhost} style={{ fontWeight: 500 }}>
                      Ver ecosistema QIMA
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
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
