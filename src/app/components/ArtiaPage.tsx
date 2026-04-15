import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Factory,
  Handshake,
  Landmark,
  MapPinned,
  Warehouse,
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

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-white/18 px-4 py-1.5 text-[0.66rem] tracking-[0.26em] uppercase text-[#b9c4d8]"
      style={{ fontWeight: 500 }}
    >
      {children}
    </div>
  );
}

export function ArtiaPage() {
  return (
    <div className="artia-page min-h-screen bg-[#0f172a] text-[#e4e7ef]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32">
          <div className="tau-tech-grid absolute inset-0 opacity-55" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_17%_18%,rgba(234,179,8,0.2),transparent_44%),radial-gradient(circle_at_78%_22%,rgba(100,116,139,0.28),transparent_48%),linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,0.9))]" />

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12 pb-20 pt-14">
            <div className="col-span-6 qima-reveal">
              <SectionTag>Real Estate Investments · Ecosistema QIMA</SectionTag>
              <h1
                className="mt-7 max-w-[760px] text-white"
                style={{
                  fontSize: "clamp(2.9rem, 5.2vw, 4.9rem)",
                  lineHeight: 0.98,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                Articulando capital, ingeniería y oportunidad
              </h1>
              <p className="mt-7 max-w-[690px] text-[1.13rem] leading-[1.85] text-[#b9c3d7]" style={{ fontWeight: 300 }}>
                ARTIA estructura negocios inmobiliarios donde convergen inversión, técnica y ejecución. Convierte capital y tierra ociosa en activos productivos con foco en rentabilidad, trazabilidad y escala.
              </p>
              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#artia-services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#eab308] px-7 py-3 text-[0.84rem] text-[#111827] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  Conocer servicios
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#artia-contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all duration-300 hover:border-[#f6d466] hover:text-[#fff6da]"
                  style={{ fontWeight: 500, letterSpacing: "0.04em" }}
                >
                  Analizar mi inversión
                  <ChartNoAxesCombined className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  ["20 años", "de experiencia en ingeniería civil"],
                  ["360°", "de mitigación de riesgos técnico-financieros"],
                  ["1 modelo", "integrado para estructurar y ejecutar"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
                    <div className="text-[1.4rem] text-[#f7ce56]" style={{ fontWeight: 600 }}>
                      {value}
                    </div>
                    <p className="mt-1 text-[0.78rem] leading-[1.55] text-[#b3bdd0]" style={{ fontWeight: 400 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-6 qima-reveal">
              <div className="tau-frame relative h-[690px] overflow-hidden rounded-[30px] border border-white/15 bg-[#182137]">
                <img src={heroImage} alt="Skyline corporativo para inversiones inmobiliarias" className="h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(15,23,42,0.78)_0%,rgba(30,41,59,0.58)_45%,rgba(15,23,42,0.2)_100%)]" />
                <div className="absolute inset-0 tau-data-overlay" />
                <div className="absolute left-7 top-7 rounded-2xl border border-[#f2cd66]/45 bg-[#171f33]/78 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.64rem] tracking-[0.2em] text-[#f0cb65] uppercase">Estructuración</div>
                  <div className="mt-2 text-[1rem] text-white" style={{ fontWeight: 600 }}>
                    Decisiones basadas en negocio real
                  </div>
                </div>
                <div className="absolute bottom-7 right-7 max-w-[300px] rounded-2xl border border-white/20 bg-[#131c31]/86 px-5 py-4 backdrop-blur-md">
                  <div className="text-[0.7rem] tracking-[0.15em] text-[#d7bf7a] uppercase">ARTIA + RAHI</div>
                  <p className="mt-2 text-[0.86rem] leading-[1.7] text-[#d2d9e8]">
                    Estructuración financiera y control técnico separados para proteger la inversión y asegurar ejecución.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artia-philosophy" className="border-b border-white/10 bg-[#111b30] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12">
            <div className="col-span-7">
              <SectionTag>Nuestra filosofía</SectionTag>
              <h2
                className="mt-6 max-w-[760px] text-white"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                El eslabón perdido entre el capital y la obra
              </h2>
              <p className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.9] text-[#b2bdd0]">
                El mercado suele separar a quienes entienden de finanzas de quienes dominan la ejecución técnica. ARTIA integra ambas capacidades para diseñar estructuras de inversión sólidas, viables y orientadas a resultados.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-5">
                <article className="rounded-[24px] border border-white/12 bg-[#19233a] p-7">
                  <h3 className="text-[1.3rem] text-white" style={{ fontWeight: 600 }}>
                    Ingeniería inversa
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-[1.78] text-[#aebacf]">
                    Primero se entiende el modelo de negocio del cliente, luego se diseña la infraestructura legal, financiera y técnica que realmente necesita.
                  </p>
                </article>
                <article className="rounded-[24px] border border-white/12 bg-[#19233a] p-7">
                  <h3 className="text-[1.3rem] text-white" style={{ fontWeight: 600 }}>
                    Mitigación de riesgos 360°
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-[1.78] text-[#aebacf]">
                    Evaluación simultánea de prefactibilidad técnica y viabilidad financiera para evitar fricciones entre tierra, inversión y ejecución.
                  </p>
                </article>
              </div>
            </div>
            <div className="col-span-5">
              <div className="sticky top-28 rounded-[30px] border border-[#eab308]/35 bg-[#1c253a]/88 p-8 backdrop-blur-md">
                <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[#f0cc6b]">Ecuación ARTIA</div>
                <div className="mt-6 rounded-2xl border border-white/12 bg-[#10182b] px-6 py-8 text-center">
                  <div className="text-[1.24rem] text-white" style={{ fontWeight: 600 }}>
                    ARTIA =
                  </div>
                  <div className="mt-4 text-[1rem] leading-[1.9] text-[#c6cfde]">
                    (Ingeniería Civil)
                    <br />+
                    <br />(Finanzas Corporativas)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artia-services" className="border-b border-white/10 bg-[#0f172a] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12" style={{ "--service-accent": "#eab308" } as CSSProperties}>
            <SectionTag>Qué hacemos</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Boutique de estructuración de negocios inmobiliarios
            </h2>
            <p className="mt-6 max-w-[920px] text-[1.02rem] leading-[1.85] text-[#aebacf]">
              Soluciones de inversión a la carta enfocadas en gestión del negocio, eficiencia del activo y rentabilidad sostenible.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-bento-card p-8 ${index === 0 || index === services.length - 1 ? "col-span-2 grid grid-cols-2 gap-8" : ""}`}
                >
                  <div className="relative z-[1]">
                    <div className="service-bento-badge mb-5">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3
                      className={`service-bento-title ${index === 0 || index === services.length - 1 ? "text-[2rem] leading-[1.08]" : "text-[1.34rem] leading-[1.2]"}`}
                    >
                      {service.title}
                    </h3>
                    <div className="mt-3 text-[0.74rem] tracking-[0.16em] uppercase text-[#f0cb66]">{service.subtitle}</div>
                  </div>

                  <div className="relative z-[1]">
                    <p className={`${index === 0 || index === services.length - 1 ? "text-[1rem]" : "mt-4 text-[0.95rem]"} leading-[1.82] service-bento-text`}>
                      {service.text}
                    </p>
                    <ul className="mt-5 space-y-1.5 text-[0.85rem] text-[#c7d0de]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="artia-properties" className="border-b border-white/10 bg-[#111b30] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <SectionTag>Portfolio de propiedades</SectionTag>
            <h2 className="mt-6 max-w-[780px] text-white" style={{ fontSize: "clamp(2rem, 3.1vw, 3.1rem)", lineHeight: 1.08, fontWeight: 600 }}>
              Activos estratégicos para generar flujo y apreciación
            </h2>

            <div className="mt-10 rounded-[30px] border border-white/12 bg-[#182137] p-8">
              <img src={portfolioImage} alt="Portafolio de activos inmobiliarios y logísticos" className="h-[280px] w-full rounded-2xl object-cover opacity-82" />
              <div className="mt-8 grid grid-cols-3 gap-5">
                {propertyLines.map((line) => {
                  const Icon = line.icon;
                  return (
                    <article key={line.title} className="rounded-[20px] border border-white/12 bg-[#121c31] p-6">
                      <div className="mb-4 inline-flex rounded-xl border border-[#eab308]/35 bg-[#251f12] p-2.5">
                        <Icon className="h-5 w-5 text-[#f0cc6a]" />
                      </div>
                      <h3 className="text-[1.14rem] text-white" style={{ fontWeight: 600 }}>
                        {line.title}
                      </h3>
                      <p className="mt-3 text-[0.9rem] leading-[1.72] text-[#aebacf]">{line.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="artia-sinergy" className="border-b border-white/10 bg-[#0f172a] py-24 qima-reveal">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-12">
            <div className="col-span-7">
              <SectionTag>Garantía de ejecución</SectionTag>
              <h2 className="mt-6 max-w-[720px] text-white" style={{ fontSize: "clamp(2rem, 3.1vw, 3.1rem)", lineHeight: 1.08, fontWeight: 600 }}>
                Sinergia estratégica para proteger la inversión
              </h2>
              <p className="mt-6 max-w-[700px] text-[1rem] leading-[1.9] text-[#adb9cd]">
                ARTIA estructura el negocio y administra el activo financiero. La ejecución técnica se articula con un brazo operativo especializado, separando funciones para maximizar control y transparencia.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <article className="rounded-[24px] border border-[#eab308]/32 bg-[#201f22] p-7">
                  <h3 className="text-[1.18rem] text-white" style={{ fontWeight: 600 }}>
                    ARTIA · El cerebro
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.78] text-[#c4cedd]">
                    Developer estratégico: estructura, financia y gestiona el ciclo del activo.
                  </p>
                </article>
                <article className="rounded-[24px] border border-white/12 bg-[#19233a] p-7">
                  <h3 className="text-[1.18rem] text-white" style={{ fontWeight: 600 }}>
                    RAHI · Brazo técnico
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.78] text-[#c4cedd]">
                    Project management y control de obra para asegurar costo, plazo y calidad técnica.
                  </p>
                </article>
              </div>
            </div>

            <div className="col-span-5">
              <div className="h-full rounded-[30px] border border-white/12 bg-[#1a2338] p-9">
                <blockquote className="text-[1.6rem] leading-[1.45] text-[#e3e8f0]" style={{ fontStyle: "italic", fontWeight: 300 }}>
                  “No somos juez y parte; somos guardianes de la inversión técnica y financiera.”
                </blockquote>
                <div className="mt-8 flex items-center gap-3 text-[0.83rem] text-[#f0cc69]">
                  <Handshake className="h-4 w-4" />
                  Modelo de gobierno para ejecución confiable
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artia-contact" className="bg-[#111b30] py-24 qima-reveal">
          <div className="mx-auto max-w-[1440px] px-12">
            <div className="relative overflow-hidden rounded-[34px] border border-white/14">
              <img src={contactImage} alt="Mesa de trabajo para planificación de inversión inmobiliaria" className="absolute inset-0 h-full w-full object-cover opacity-28" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.95),rgba(15,23,42,0.84)_48%,rgba(15,23,42,0.72))]" />
              <div className="relative grid grid-cols-12 gap-8 px-12 py-14">
                <div className="col-span-8">
                  <SectionTag>Cierre / Contacto</SectionTag>
                  <h2 className="mt-6 max-w-[740px] text-white" style={{ fontSize: "clamp(2rem,3.2vw,3.2rem)", lineHeight: 1.08, fontWeight: 600 }}>
                    Hablemos de tu próximo negocio inmobiliario
                  </h2>
                  <p className="mt-6 max-w-[760px] text-[1.02rem] leading-[1.9] text-[#b7c2d5]">
                    Si tenés una empresa en expansión, un terreno para desarrollar o capital buscando rentabilidad con soporte técnico, ARTIA puede estructurar una solución a medida.
                  </p>
                  <div className="mt-9 flex items-center gap-4">
                    <a
                      href="mailto:direccion@artia.com"
                      className="inline-flex items-center gap-2 rounded-full bg-[#eab308] px-7 py-3 text-[0.84rem] text-[#111827]"
                      style={{ fontWeight: 600 }}
                    >
                      Solicitar pre-factibilidad
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/#ecosystem"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[0.84rem] text-white transition-all hover:border-[#f4d37a] hover:text-[#fff1cc]"
                      style={{ fontWeight: 500 }}
                    >
                      Ver ecosistema QIMA
                      <MapPinned className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="col-span-4 rounded-[24px] border border-white/14 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[#f0cc6c]">Contacto corporativo</div>
                  <div className="mt-6 space-y-4 text-[0.92rem] text-[#d3e2f1]">
                    <p>Unidad ARTIA · Ecosistema QIMA</p>
                    <p>Torre Marfil, Asunción, Paraguay</p>
                    <p>direccion@artia.com</p>
                    <p>Contacto estratégico por agenda</p>
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 text-[0.8rem] text-[#f5d57e]">
                    <Warehouse className="h-4 w-4" />
                    Estructuración inmobiliaria de alto valor
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
