import { ImageWithFallback } from "./figma/ImageWithFallback";

const ctaImage =
  "https://images.unsplash.com/photo-1649275579015-5092d2ffcf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJhZ3VheSUyMEFzdW5jaW9uJTIwY2l0eXNjYXBlJTIwc2t5bGluZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NTkzMDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ctaParticles = [
  { size: 14, left: "8%", top: "20%", delay: "0s", duration: "16s" },
  { size: 10, left: "18%", top: "70%", delay: "1.8s", duration: "18s" },
  { size: 18, left: "31%", top: "34%", delay: "3.2s", duration: "20s" },
  { size: 9, left: "44%", top: "78%", delay: "2.4s", duration: "15s" },
  { size: 12, left: "63%", top: "26%", delay: "0.8s", duration: "19s" },
  { size: 16, left: "77%", top: "64%", delay: "2.8s", duration: "17s" },
  { size: 11, left: "86%", top: "18%", delay: "1.2s", duration: "21s" },
];

export function CTASection() {
  return (
    <section id="contact" className="relative bg-[#f3efe8] py-12 px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-24 top-[-6rem] w-[34rem] h-[34rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,230,69,0.13) 0%, rgba(200,230,69,0) 70%)",
            animation: "ctaAuroraA 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[-8rem] bottom-[-8rem] w-[38rem] h-[38rem] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(123,184,168,0.12) 0%, rgba(123,184,168,0) 72%)",
            animation: "ctaAuroraB 24s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.05) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            animation: "ctaGridDrift 28s linear infinite",
          }}
        />
        {ctaParticles.map((particle, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-[#0a0a0a]/10 bg-white/30 backdrop-blur-[2px]"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              boxShadow: "0 0 18px rgba(123,184,168,0.16)",
              animation: `ctaParticleFloat ${particle.duration} ease-in-out infinite ${particle.delay}, ctaParticlePulse 7s ease-in-out infinite ${particle.delay}`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(112deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0) 34%, rgba(255,255,255,0.06) 66%, rgba(255,255,255,0) 100%)",
              transform: "translateX(-10%)",
              animation: "ctaSheen 12s ease-in-out infinite",
            }}
          />
          {/* Background split: taupe + dark */}
          <div className="grid grid-cols-2 min-h-[480px]">
            {/* Left: warm neutral bg with text */}
            <div className="bg-[#c5bfb4] relative flex items-center px-16 py-20">
              <div>
                <h2
                  className="text-[#0a0a0a] mb-6"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "2.75rem",
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  Conversemos sobre la{" "}
                  <em style={{ fontStyle: "italic" }}>próxima oportunidad</em>.
                </h2>
                <p
                  className="text-[#0a0a0a]/50 mb-10 max-w-[420px]"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Si estás buscando desarrollar un negocio, explorar una alianza o aterrizar una
                  empresa en Paraguay, QIMA puede ayudarte.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-sm text-[#0a0a0a] hover:bg-white transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
                >
                  Agendar una reunión
                </a>
              </div>
            </div>

            {/* Right: dark with image */}
            <div className="bg-[#0a0a0a] relative">
              <ImageWithFallback
                src={ctaImage}
                alt="Paraguay"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/20" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ctaAuroraA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate3d(30px, -24px, 0) scale(1.08); opacity: 1; }
        }
        @keyframes ctaAuroraB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.85; }
          50% { transform: translate3d(-28px, 18px, 0) scale(1.06); opacity: 1; }
        }
        @keyframes ctaGridDrift {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-44px, -44px, 0); }
        }
        @keyframes ctaSheen {
          0%, 100% { opacity: 0.45; transform: translateX(-12%); }
          50% { opacity: 0.7; transform: translateX(8%); }
        }
        @keyframes ctaParticleFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
        }
        @keyframes ctaParticlePulse {
          0%, 100% { opacity: 0.28; }
          50% { opacity: 0.62; }
        }
      `}</style>
    </section>
  );
}
