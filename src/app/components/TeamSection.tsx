import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const teamMembers = [
  {
    name: "Carlos Méndez",
    role: "CEO & Fundador",
    image:
      "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTkzNDIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Más de 20 años liderando proyectos de inversión en Latinoamérica. Visión estratégica y relaciones de alto nivel en el sector corporativo paraguayo.",
    expertise: ["Estrategia corporativa", "M&A", "Relaciones institucionales"],
  },
  {
    name: "María Villalba",
    role: "Directora de Operaciones",
    image:
      "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b21hbiUyMGxlYWRlciUyMHBvcnRyYWl0JTIwY29uZmlkZW50fGVufDF8fHx8MTc3NTkzNDIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Especialista en estructuración operativa y gestión de portafolios. Experiencia en consultoría de alto nivel para grupos económicos regionales.",
    expertise: ["Gestión operativa", "Due diligence", "Estructuración financiera"],
  },
  {
    name: "Andrés Méndez",
    role: "Director de Desarrollo",
    image:
      "https://images.unsplash.com/photo-1762522926262-d96de462ad54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJ1c2luZXNzbWFuJTIwc3VpdCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc1OTM0MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Lidera la identificación y desarrollo de nuevas plataformas de negocio. Combina visión de mercado con capacidad de ejecución en sectores emergentes.",
    expertise: ["Desarrollo de negocios", "Innovación", "Análisis de mercado"],
  },
  {
    name: "Sofía Méndez",
    role: "Directora de Alianzas",
    image:
      "https://images.unsplash.com/photo-1762522926984-e721bff0d6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU5MzQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Gestiona el ecosistema de aliados estratégicos y socios internacionales. Experta en construcción de redes de valor y partnerships de largo plazo.",
    expertise: ["Alianzas estratégicas", "Networking", "Relaciones internacionales"],
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
        <div className="grid grid-cols-4 gap-6 mb-16">
          {teamMembers.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActive(i)}
              className={`group relative text-left rounded-2xl overflow-hidden transition-all duration-500 ${
                active === i
                  ? "ring-1 ring-[#c8e645]/40"
                  : "ring-1 ring-white/[0.06] hover:ring-white/10"
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={m.image}
                  alt={m.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    active === i ? "scale-105" : "group-hover:scale-105 grayscale group-hover:grayscale-0"
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
            <div className="flex flex-wrap gap-2 pt-1">
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
          </div>
        </div>
      </div>
    </section>
  );
}
