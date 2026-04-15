import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Cpu,
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
const introImage =
  "https://images.unsplash.com/photo-1566207474742-de921626ad0c?auto=format&fit=crop&w=1400&q=80";
const contactImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80";

const services = [
  {
    title: "Inspección y diagnóstico de tuberías",
    text: "Evaluación del estado de las tuberías mediante cámaras robotizadas y equipos especializados para detectar obstrucciones, fisuras y patologías siguiendo estándares internacionales.",
  },
  {
    title: "Desobstrucción y limpieza de tuberías",
    text: "Trabajos de limpieza y desobstrucción mediante agua a presión, succión, equipos mecánicos y robots para corte de raíces.",
  },
  {
    title: "Mantenimiento de pozos de bombeo, rejas y plantas de tratamiento",
    text: "Mantenimiento preventivo, correctivo y predictivo de los distintos componentes del sistema operado.",
  },
  {
    title: "Sistemas de by-pass o trasiego de grandes caudales",
    text: "Soluciones temporales de derivación de caudal para mantenimiento o reparación, con bombas de gran potencia y accesorios específicos.",
  },
  {
    title: "Reparación y rehabilitación de tuberías con métodos sin zanja",
    text: "Tecnologías avanzadas para restaurar tuberías sin excavación, minimizando tiempos, costos e impacto de intervención.",
  },
  {
    title: "Operación y mantenimiento de sistemas de redes meteorológicas",
    text: "Gestión de estaciones de monitoreo de precipitaciones y análisis estadístico de tormentas y recurrencia.",
  },
  {
    title: "Suministro de agua",
    text: "Soluciones de abastecimiento mediante camión cisterna con foco en eficiencia y seguridad.",
  },
  {
    title: "Vaciado y limpieza de pozos negros",
    text: "Extracción y limpieza de residuos acumulados en pozos domiciliarios e industriales con camión barométrico.",
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

export function TauPage() {
  return (
    <div className="tau-page min-h-screen bg-[#07111d] text-[#dce7f4]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32">
          <div className="tau-tech-grid absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(45,191,203,0.17),transparent_44%),radial-gradient(circle_at_79%_30%,rgba(55,110,186,0.2),transparent_46%),linear-gradient(180deg,rgba(8,19,33,0),rgba(8,19,33,0.9))]" />

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12 pb-20 pt-14">
            <div className="col-span-6 qima-reveal">
              <SectionTag>Unidad especializada del ecosistema QIMA</SectionTag>
              <h1
                className="mt-7 max-w-[740px] text-white"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
                  lineHeight: 0.98,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                Tecnología aplicada al diagnóstico y mantenimiento de redes
              </h1>
              <p className="mt-7 max-w-[660px] text-[1.16rem] leading-[1.84] text-[#acc0d7]" style={{ fontWeight: 300 }}>
                TAU se especializa en inspección, diagnóstico y mantenimiento de redes de tuberías, integrando tecnología avanzada, experiencia operativa y enfoque ambiental para ofrecer soluciones precisas y eficientes.
              </p>
              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#tau-services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2ec5cf] px-7 py-3 text-[0.84rem] text-[#02131f] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  Conocer servicios
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#tau-contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all duration-300 hover:border-[#7de2e8] hover:text-[#bbfcff]"
                  style={{ fontWeight: 500, letterSpacing: "0.04em" }}
                >
                  Contactar a TAU
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  ["+14", "años de experiencia operativa"],
                  ["24/7", "capacidad de respuesta técnica"],
                  ["100%", "foco en calidad y trazabilidad"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
                    <div className="text-[1.55rem] text-[#91eef3]" style={{ fontWeight: 600 }}>
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
                <img src={heroImage} alt="Inspección técnica de infraestructura de tuberías" className="h-full w-full object-cover opacity-72" />
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(3,14,24,0.72)_0%,rgba(6,22,40,0.58)_45%,rgba(4,23,34,0.22)_100%)]" />
                <div className="absolute inset-0 tau-data-overlay" />
                <div className="absolute left-7 top-7 rounded-2xl border border-[#74f2fa]/45 bg-[#041520]/75 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.64rem] tracking-[0.2em] text-[#7adbe3] uppercase">Diagnóstico</div>
                  <div className="mt-2 text-[1rem] text-white" style={{ fontWeight: 600 }}>
                    Captura técnica en tiempo real
                  </div>
                </div>
                <div className="absolute bottom-7 right-7 max-w-[285px] rounded-2xl border border-white/20 bg-[#071826]/86 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.7rem] tracking-[0.15em] text-[#9fd6df] uppercase">Operación TAU</div>
                  <p className="mt-2 text-[0.86rem] leading-[1.7] text-[#c7d8ea]">
                    Inspección robotizada, trazabilidad de datos y mantenimiento inteligente para redes críticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tau-intro" className="border-b border-white/10 bg-[#081524] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12">
            <div className="col-span-7">
              <SectionTag>Qué hace TAU</SectionTag>
              <h2
                className="mt-6 max-w-[760px] text-white"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Especialización técnica para redes de saneamiento y gestión del agua
              </h2>
              <p className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.9] text-[#a5bad2]">
                TAU desarrolla soluciones para la inspección, diagnóstico, mantenimiento y rehabilitación de redes de tuberías. Su enfoque combina tecnología de última generación, conocimiento técnico y una mirada eficiente y sostenible sobre la operación de sistemas de saneamiento.
              </p>
              <div className="tau-shine mt-10 overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-[#0b1e2f] to-[#0a1726]">
                <img src={introImage} alt="Tecnología especializada en redes de saneamiento" className="h-[320px] w-full object-cover opacity-78" />
              </div>
            </div>
            <div className="col-span-5">
              <div className="sticky top-28 rounded-[30px] border border-[#3dc6d0]/28 bg-[#0a1d2d]/86 p-8 backdrop-blur-md">
                <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[#8ed7de]">Bloque institucional</div>
                <div className="mt-6 space-y-3">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                      <span className="text-[0.93rem] text-[#d6e5f3]">{item}</span>
                      <ShieldCheck className="h-4 w-4 text-[#66d6dd]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tau-services" className="border-b border-white/10 bg-[#07111d] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12" style={{ "--service-accent": "#4cd4de" } as CSSProperties}>
            <SectionTag>Servicios</SectionTag>
            <h2 className="mt-6 max-w-[760px] text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Capacidades operativas para diagnóstico, mantenimiento y rehabilitación de redes
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

        <section id="tau-technology" className="border-b border-white/10 bg-[#081524] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <SectionTag>Tecnología y equipamiento</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Capacidad técnica respaldada por equipamiento especializado
            </h2>
            <p className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85] text-[#9fb3cb]">
              TAU apoya su operación en equipamiento técnico específico para limpieza, inspección, diagnóstico, relevamiento, reparación, rehabilitación y seguridad operacional.
            </p>

            <div className="mt-12 grid grid-cols-12 gap-5">
              {techModules.map((module, index) => {
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
                      <div className="rounded-xl border border-[#5ed4dd]/35 bg-[#0f2a3a] p-2.5">
                        <Icon className="h-5 w-5 text-[#79e1e9]" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tau-commitment" className="border-b border-white/10 bg-[#07111d] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-12">
            <div className="col-span-8 rounded-[28px] border border-[#5ad2dc]/25 bg-gradient-to-br from-[#0b2033] to-[#091829] p-10">
              <SectionTag>Compromiso</SectionTag>
              <h2 className="mt-6 max-w-[700px] text-white" style={{ fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.08, fontWeight: 600 }}>
                Compromiso con la eficiencia y la sostenibilidad
              </h2>
              <p className="mt-6 max-w-[820px] text-[1.02rem] leading-[1.9] text-[#a3b8cf]">
                TAU trabaja con foco en el cuidado ambiental, la calidad del servicio y la mejora continua. Su aproximación combina tecnología de punta, eficiencia operativa y prácticas orientadas a reducir impacto ambiental y anticipar futuros inconvenientes.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#55ced8]/35 bg-[#0d2938] px-5 py-2 text-[0.78rem] text-[#a4edf2]">
                <Leaf className="h-4 w-4" />
                Operación técnica con criterios de sostenibilidad
              </div>
            </div>
            <div className="col-span-4 space-y-5">
              {[
                { value: "Precisión", label: "Diagnóstico de fallas y patologías críticas" },
                { value: "Ejecución", label: "Capacidad real de respuesta operativa" },
                { value: "Trazabilidad", label: "Datos técnicos para toma de decisiones" },
              ].map((item) => (
                <div key={item.value} className="rounded-[24px] border border-white/12 bg-[#0a1929] px-6 py-7">
                  <div className="text-[1.36rem] text-[#95ecf2]" style={{ fontWeight: 600 }}>
                    {item.value}
                  </div>
                  <p className="mt-2 text-[0.86rem] leading-[1.7] text-[#9fb5cc]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tau-ecosystem" className="border-b border-white/10 bg-[#081524] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-12">
            <div className="col-span-6">
              <SectionTag>Ecosistema QIMA</SectionTag>
              <h2 className="mt-6 max-w-[660px] text-white" style={{ fontSize: "clamp(2rem, 3.1vw, 3.1rem)", lineHeight: 1.08, fontWeight: 600 }}>
                Una capacidad especializada dentro del ecosistema QIMA
              </h2>
              <p className="mt-6 max-w-[640px] text-[1rem] leading-[1.9] text-[#a2b8cf]">
                Como parte del ecosistema QIMA, TAU aporta capacidad técnica, conocimiento operativo y soluciones especializadas para redes, saneamiento y gestión del agua. Su rol refuerza la capacidad de QIMA para articular negocios, oportunidades y empresas con expertise real.
              </p>
              <a href="/" className="mt-8 inline-flex items-center gap-2 text-[0.84rem] text-[#90e8ee] transition-colors hover:text-[#b7fbff]">
                Ver página principal de QIMA
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="col-span-6 rounded-[30px] border border-white/12 bg-[#07111d] p-7">
              <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(38,105,149,0.17),rgba(8,17,28,0.9)_68%)]">
                <div className="tau-orbit tau-orbit-lg" />
                <div className="tau-orbit tau-orbit-md" />
                <div className="tau-orbit tau-orbit-sm" />

                <div className="absolute left-1/2 top-1/2 flex h-[168px] w-[168px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#56ced8]/45 bg-[#0a2132]/88 text-[2rem] tracking-[0.2em] text-white">
                  QIMA
                </div>
                <div className="absolute left-[16%] top-[20%] rounded-full border border-[#63d5df]/40 bg-[#0d2536]/85 px-6 py-4 text-[#b3f9ff]">
                  TAU
                </div>
                <div className="absolute right-[12%] top-[26%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Capital y articulación
                </div>
                <div className="absolute bottom-[18%] left-[12%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Soluciones especializadas
                </div>
                <div className="absolute bottom-[24%] right-[11%] rounded-full border border-white/18 bg-[#0b1c2e]/85 px-5 py-3 text-[0.8rem] text-[#a8bdd4]">
                  Operación con impacto
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tau-contact" className="bg-[#07111d] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <div className="relative overflow-hidden rounded-[34px] border border-white/14">
              <img src={contactImage} alt="Infraestructura urbana y tecnología aplicada" className="absolute inset-0 h-full w-full object-cover opacity-32" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,18,28,0.95),rgba(8,18,28,0.83)_48%,rgba(8,18,28,0.72))]" />
              <div className="relative grid grid-cols-12 gap-8 px-12 py-14">
                <div className="col-span-8">
                  <SectionTag>Cierre / Contacto</SectionTag>
                  <h2 className="mt-6 max-w-[740px] text-white" style={{ fontSize: "clamp(2rem,3.2vw,3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
                    Hablemos de tu próximo desafío técnico
                  </h2>
                  <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-[#aac0d7]">
                    Si necesitás una solución especializada para diagnóstico, mantenimiento o rehabilitación de redes, TAU puede ayudarte con tecnología, experiencia y capacidad operativa.
                  </p>
                  <div className="mt-9 flex items-center gap-4">
                    <a
                      href="mailto:hola@qima.com.py?subject=Consulta%20TAU"
                      className="inline-flex items-center gap-2 rounded-full bg-[#39c8d2] px-7 py-3 text-[0.84rem] text-[#031421]"
                      style={{ fontWeight: 600 }}
                    >
                      Contactar a TAU
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/#ecosystem"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all hover:border-[#8de8ef] hover:text-[#beffff]"
                      style={{ fontWeight: 500 }}
                    >
                      Ver ecosistema QIMA
                      <Building2 className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="col-span-4 rounded-[24px] border border-white/14 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8fd8df]">Contacto corporativo</div>
                  <div className="mt-6 space-y-4 text-[0.92rem] text-[#d3e2f1]">
                    <p>Unidad TAU · Ecosistema QIMA</p>
                    <p>Asunción, Paraguay</p>
                    <p>hola@qima.com.py</p>
                    <p>+595 21 123 4567</p>
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 text-[0.8rem] text-[#9ce7ee]">
                    <Cpu className="h-4 w-4" />
                    Soluciones técnicas de alta especialización
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
