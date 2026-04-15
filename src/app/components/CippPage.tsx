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

const heroImage =
  "https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&w=1800&q=80";
const introImage =
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=80";
const contactImage =
  "https://images.unsplash.com/photo-1581092160607-ee22731f96eb?auto=format&fit=crop&w=1400&q=80";

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

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-[0.66rem] tracking-[0.26em] uppercase text-[#9db4cf]"
      style={{ fontWeight: 500 }}
    >
      {children}
    </div>
  );
}

export function CippPage() {
  return (
    <div className="cipp-page min-h-screen bg-[#08131f] text-[#d9e5f3]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32">
          <div className="tau-tech-grid absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(123,184,168,0.18),transparent_45%),radial-gradient(circle_at_78%_24%,rgba(104,176,198,0.22),transparent_48%),linear-gradient(180deg,rgba(8,19,32,0),rgba(8,19,32,0.92))]" />

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12 pb-20 pt-14">
            <div className="col-span-6 qima-reveal">
              <SectionTag>Unidad especializada del ecosistema QIMA</SectionTag>
              <h1
                className="mt-7 max-w-[740px] text-white"
                style={{
                  fontSize: "clamp(2.7rem, 5vw, 4.6rem)",
                  lineHeight: 0.98,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                Rehabilitación y diagnóstico técnico de tuberías sin zanja
              </h1>
              <p className="mt-7 max-w-[660px] text-[1.12rem] leading-[1.84] text-[#acc0d7]" style={{ fontWeight: 300 }}>
                CIPP aporta soluciones especializadas para inspección, limpieza, diagnóstico y rehabilitación de redes sanitarias e industriales, combinando tecnología aplicada, control técnico y enfoque sostenible.
              </p>
              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#cipp-services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7bb8a8] px-7 py-3 text-[0.84rem] text-[#03131d] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  Conocer servicios
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#cipp-contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all duration-300 hover:border-[#8bcfc0] hover:text-[#cbf5ec]"
                  style={{ fontWeight: 500, letterSpacing: "0.04em" }}
                >
                  Contactar a CIPP
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  ["+130 km", "rehabilitados en Chile"],
                  ["150–1500 mm", "rango de diámetros intervenidos"],
                  ["50+ años", "vida útil proyectada en rehabilitación CIPP"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
                    <div className="text-[1.35rem] text-[#8cd2c2]" style={{ fontWeight: 600 }}>
                      {value}
                    </div>
                    <p className="mt-1 text-[0.78rem] leading-[1.55] text-[#9eb4ca]" style={{ fontWeight: 400 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-6 qima-reveal">
              <div className="tau-frame relative h-[690px] overflow-hidden rounded-[30px] border border-white/15 bg-[#0f2134]">
                <img src={heroImage} alt="Rehabilitación técnica de redes de tuberías" className="h-full w-full object-cover opacity-72" />
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(3,14,24,0.72)_0%,rgba(6,22,40,0.58)_45%,rgba(4,23,34,0.22)_100%)]" />
                <div className="absolute inset-0 tau-data-overlay" />
                <div className="absolute left-7 top-7 rounded-2xl border border-[#86d8c7]/45 bg-[#041520]/75 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.64rem] tracking-[0.2em] text-[#8edecf] uppercase">CIPP sin zanja</div>
                  <div className="mt-2 text-[1rem] text-white" style={{ fontWeight: 600 }}>
                    Rehabilitación con mínima disrupción urbana
                  </div>
                </div>
                <div className="absolute bottom-7 right-7 max-w-[320px] rounded-2xl border border-white/20 bg-[#071826]/86 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.7rem] tracking-[0.15em] text-[#9fd6df] uppercase">Diagnóstico técnico</div>
                  <p className="mt-2 text-[0.86rem] leading-[1.7] text-[#c7d8ea]">
                    Teleinspección robotizada y reportabilidad PACP para priorizar intervenciones con evidencia técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-intro" className="border-b border-white/10 bg-[#0a1827] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12">
            <div className="col-span-7">
              <SectionTag>Qué hace CIPP</SectionTag>
              <h2
                className="mt-6 max-w-[760px] text-white"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Soluciones integrales para rehabilitación, inspección y mantenimiento de redes
              </h2>
              <p className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.9] text-[#a5bad2]">
                CIPP se enfoca en rehabilitar infraestructura subterránea con metodologías sin zanja, inspección robotizada y mantenimiento técnico. Su operación está orientada a disminuir impacto ambiental, extender vida útil de activos y optimizar continuidad del servicio.
              </p>
              <div className="tau-shine mt-10 overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-[#0b1e2f] to-[#0a1726]">
                <img src={introImage} alt="Operación técnica de inspección y rehabilitación de tuberías" className="h-[320px] w-full object-cover opacity-78" />
              </div>
            </div>
            <div className="col-span-5">
              <div className="sticky top-28 rounded-[30px] border border-[#7bb8a8]/32 bg-[#0b1f2e]/86 p-8 backdrop-blur-md">
                <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[#97dbcd]">Pilares operativos</div>
                <div className="mt-6 space-y-3">
                  {[
                    "Diagnóstico trazable y estandarizado",
                    "Rehabilitación sin zanja de alta eficiencia",
                    "Cumplimiento técnico normativo",
                    "Reducción de impacto ambiental",
                    "Capacidad de ejecución en terreno",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                      <span className="text-[0.93rem] text-[#d6e5f3]">{item}</span>
                      <ShieldCheck className="h-4 w-4 text-[#84d6c5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-services" className="border-b border-white/10 bg-[#08131f] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12" style={{ "--service-accent": "#7bb8a8" } as CSSProperties}>
            <SectionTag>Servicios CIPP</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Servicios técnicos para rehabilitación y continuidad operativa de redes
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-bento-card p-8 ${index === 0 ? "col-span-2 grid grid-cols-2 gap-8" : ""}`}
                >
                  <div className="relative z-[1]">
                    <div className="service-bento-badge mb-5">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3
                      className={`service-bento-title ${index === 0 ? "text-[2rem] leading-[1.08]" : "text-[1.34rem] leading-[1.2]"}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={`service-bento-text relative z-[1] ${index === 0 ? "max-w-[560px] self-end text-[1.02rem]" : "mt-5 text-[0.95rem]"} leading-[1.82]`}
                  >
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cipp-technology" className="border-b border-white/10 bg-[#0a1827] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <SectionTag>Tecnología y estándares</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Capacidades respaldadas por equipamiento especializado y normas técnicas
            </h2>
            <p className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85] text-[#9fb3cb]">
              CIPP integra equipamiento de inspección, rehabilitación y mantenimiento junto a prácticas técnicas estructuradas bajo NCh3409, ASTM F1216 y reportabilidad PACP NASSCO.
            </p>

            <div className="mt-12 grid grid-cols-12 gap-5">
              {technologyModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.title}
                    className={`rounded-[22px] border border-white/12 bg-[#0a1929]/88 p-7 ${index < 2 ? "col-span-6" : "col-span-4"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[1.12rem] text-white" style={{ fontWeight: 600 }}>
                          {module.title}
                        </h3>
                        <p className="mt-3 text-[0.92rem] leading-[1.78] text-[#9fb6ce]">{module.text}</p>
                      </div>
                      <div className="rounded-xl border border-[#7bb8a8]/40 bg-[#0f2a3a] p-2.5">
                        <Icon className="h-5 w-5 text-[#9de1d2]" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#08131f] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <SectionTag>Áreas de aplicación</SectionTag>
            <h2 className="mt-6 max-w-[760px] text-white" style={{ fontSize: "clamp(2rem, 3.1vw, 3.1rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Especialización transversal para redes sanitarias, industriales y mineras
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-5">
              {applicationAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="rounded-[24px] border border-white/12 bg-[#0a1929]/85 p-7">
                    <div className="mb-5 inline-flex rounded-xl border border-[#7bb8a8]/40 bg-[#0e2839] p-3">
                      <Icon className="h-5 w-5 text-[#9be0d0]" />
                    </div>
                    <h3 className="text-[1.2rem] text-white" style={{ fontWeight: 600 }}>
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.78] text-[#9fb6ce]">{area.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cipp-ecosystem" className="border-b border-white/10 bg-[#0a1827] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-12">
            <div className="col-span-6">
              <SectionTag>Ecosistema QIMA</SectionTag>
              <h2 className="mt-6 max-w-[660px] text-white" style={{ fontSize: "clamp(2rem, 3.1vw, 3.1rem)", lineHeight: 1.08, fontWeight: 600 }}>
                CIPP como capacidad especializada dentro del ecosistema QIMA
              </h2>
              <p className="mt-6 max-w-[640px] text-[1rem] leading-[1.9] text-[#a2b8cf]">
                CIPP fortalece al ecosistema QIMA con expertise técnico en rehabilitación y diagnóstico de infraestructura subterránea. Su aporte combina ejecución en terreno, trazabilidad técnica y criterios de sostenibilidad aplicados a operaciones reales.
              </p>
              <a href="/" className="mt-8 inline-flex items-center gap-2 text-[0.84rem] text-[#9be3d4] transition-colors hover:text-[#c2fff3]">
                Ver página principal de QIMA
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="col-span-6 rounded-[30px] border border-white/12 bg-[#07111d] p-7">
              <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(56,136,129,0.2),rgba(8,17,28,0.9)_68%)]">
                <div className="tau-orbit tau-orbit-lg" />
                <div className="tau-orbit tau-orbit-md" />
                <div className="tau-orbit tau-orbit-sm" />

                <div className="absolute left-1/2 top-1/2 flex h-[168px] w-[168px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#7bb8a8]/48 bg-[#0a2132]/88 text-[2rem] tracking-[0.2em] text-white">
                  QIMA
                </div>
                <div className="absolute left-[16%] top-[20%] rounded-full border border-[#7bb8a8]/50 bg-[#0d2536]/85 px-6 py-4 text-[#c9fff2]">
                  CIPP
                </div>
                <div className="absolute right-[12%] top-[26%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Rehabilitación sin zanja
                </div>
                <div className="absolute bottom-[18%] left-[12%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Diagnóstico certificado
                </div>
                <div className="absolute bottom-[24%] right-[11%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Ejecución en campo
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cipp-contact" className="bg-[#08131f] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <div className="relative overflow-hidden rounded-[34px] border border-white/14">
              <img src={contactImage} alt="Equipo técnico especializado trabajando en infraestructura" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,18,28,0.95),rgba(8,18,28,0.83)_48%,rgba(8,18,28,0.72))]" />
              <div className="relative grid grid-cols-12 gap-8 px-12 py-14">
                <div className="col-span-8">
                  <SectionTag>Cierre / Contacto</SectionTag>
                  <h2 className="mt-6 max-w-[740px] text-white" style={{ fontSize: "clamp(2rem,3.2vw,3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
                    Hablemos de tu próximo proyecto de rehabilitación y diagnóstico
                  </h2>
                  <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-[#aac0d7]">
                    Si necesitás soluciones técnicas para inspección, mantenimiento o rehabilitación de redes, CIPP puede aportar tecnología, experiencia y ejecución especializada.
                  </p>
                  <div className="mt-9 flex items-center gap-4">
                    <a
                      href="https://cipp.cl/contacto/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#7bb8a8] px-7 py-3 text-[0.84rem] text-[#031421]"
                      style={{ fontWeight: 600 }}
                    >
                      Contactar a CIPP
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/#ecosystem"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all hover:border-[#a5e6d8] hover:text-[#d8fff7]"
                      style={{ fontWeight: 500 }}
                    >
                      Ver ecosistema QIMA
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="col-span-4 rounded-[24px] border border-white/14 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[#9de0d2]">Contacto corporativo</div>
                  <div className="mt-6 space-y-4 text-[0.92rem] text-[#d3e2f1]">
                    <p>Unidad CIPP · Ecosistema QIMA</p>
                    <p>Complejo Los Libertadores, Colina, Chile</p>
                    <p>+56 9 8259 5270</p>
                    <p>+56 9 3455 8079</p>
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
