import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import lizRamirezImage from "../../imports/liz-ramirez.png";
import enriqueGonzalezImage from "../../imports/enrique-gonzalez.png";
import enriqueGRahiImage from "../../imports/enrique-g-rahi.png";
import lizGonzalezImage from "../../imports/liz-gonzalez.png";
import walterBastosImage from "../../imports/walter-bastos.png";

function LinkedInOfficialIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 11.001-4.126 2.063 2.063 0 01-.001 4.126zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const teamMembers = [
  {
    name: "Liz Ramírez",
    role: "MBA, Arquitecta",
    image: lizRamirezImage,
    bio: "Con más de 20 años de experiencia en el desarrollo empresarial, aporta visión estratégica, liderazgo corporativo y una sólida trayectoria en estructuración de negocios.",
    expertise: ["Desarrollo empresarial", "Arquitectura", "Estrategia corporativa"],
    linkedin: "#",
  },
  {
    name: "Enrique González",
    role: "MSC, Ingeniero Civil",
    image: enriqueGonzalezImage,
    bio: "Especialista en proyectos de ingeniería con amplia trayectoria en planificación, ejecución y supervisión técnica de plataformas de infraestructura y desarrollo.",
    expertise: ["Ingeniería civil", "Gestión de proyectos", "Supervisión técnica"],
    linkedin: "#",
  },
  {
    name: "Enrique G Rahi",
    role: "Ingeniero Civil",
    image: enriqueGRahiImage,
    bio: "Especialista en proyectos de ingeniería y desarrollo estratégico, con foco en generación de conexiones de alto valor para impulsar nuevas oportunidades.",
    expertise: ["Proyectos de ingeniería", "Conexiones estratégicas", "Desarrollo corporativo"],
    linkedin: "#",
  },
  {
    name: "Liz González",
    role: "Ingeniera Civil",
    image: lizGonzalezImage,
    bio: "Ingeniera civil certificada en procesos de innovación, con enfoque en mejora continua, ejecución disciplinada y coordinación técnica para proyectos de alto impacto.",
    expertise: ["Ingeniería civil", "Innovación aplicada", "Mejora continua"],
    linkedin: "#",
  },
  {
    name: "Walter Bastos",
    role: "Director Estratégico",
    image: walterBastosImage,
    bio: "Amplia trayectoria en el acompañamiento a empresas en Paraguay, integrando visión de negocio, liderazgo institucional y estructuración estratégica.",
    expertise: ["Dirección estratégica", "Acompañamiento empresarial", "Desarrollo corporativo"],
    linkedin: "#",
  },
];

export function TeamSection() {
  const [active, setActive] = useState(0);
  const member = teamMembers[active];

  return (
    <section id="team" className="relative bg-[#0a0a0a] py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Header */}
        <div className="mb-20">
          <div
            className="text-[#c8e645]/70 mb-4 tracking-[0.2em] uppercase"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
          >
            Equipo
          </div>
          <h2
            className="text-white max-w-[600px]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.75rem",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            La <em className="text-[#c8e645]" style={{ fontStyle: "italic" }}>visión</em> detrás
            de QIMA
          </h2>
          <p
            className="text-white/50 mt-6 max-w-[520px]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            Un equipo familiar con visión de largo plazo, que combina experiencia empresarial,
            conexiones estratégicas y compromiso con el desarrollo de Paraguay.
          </p>
        </div>

        {/* Team Grid — 4 portrait cards */}
        <div className="grid grid-cols-5 gap-6 mb-16">
          {teamMembers.map((m, i) => (
            <button
              key={m.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group relative text-left rounded-2xl overflow-hidden transition-all duration-500 ${
                active === i
                  ? "ring-1 ring-[#c8e645]/40"
                  : "ring-1 ring-white/[0.06] hover:ring-white/10"
              }`}
            >
              <div className="aspect-[3/4.4] overflow-hidden">
                <div
                  className={`absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                    active === i
                      ? "border-[#c8e645]/40 bg-[#0a0a0a]/45 text-[#c8e645]"
                      : "border-white/20 bg-[#0a0a0a]/45 text-white/70 group-hover:border-white/30 group-hover:text-white"
                  }`}
                  aria-hidden="true"
                >
                  <LinkedInOfficialIcon className="h-[15px] w-[15px]" />
                </div>
                <ImageWithFallback
                  src={m.image}
                  alt={m.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    active === i
                      ? "scale-[1.14] object-[center_24%]"
                      : "scale-[1.09] object-[center_24%] group-hover:scale-[1.14] grayscale group-hover:grayscale-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    active === i
                      ? "bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent"
                      : "bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/10"
                  }`}
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div
                  className={`text-white transition-colors duration-300`}
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.2 }}
                >
                  {m.name}
                </div>
                <div
                  className={`mt-1 transition-colors duration-300 ${
                    active === i ? "text-[#c8e645]" : "text-white/40"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.03em" }}
                >
                  {m.role}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Member Detail */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10">
          <div className="flex items-start gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <h3
                  className="text-white"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem", fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                <span
                  className="text-[#c8e645] px-3 py-1 rounded-full border border-[#c8e645]/20 bg-[#c8e645]/5"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
                >
                  {member.role}
                </span>
              </div>
              <p
                className="text-white/50 max-w-[600px]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8 }}
              >
                {member.bio}
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-1 items-start md:items-end">
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-white/[0.08] text-white/40"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 400 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#c8e645]/45 bg-[#c8e645]/[0.05] text-[#c8e645] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8e645]/75 hover:bg-[#c8e645]/[0.12]"
                aria-label={`LinkedIn de ${member.name}`}
              >
                <LinkedInOfficialIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
