import { ImageWithFallback } from "./figma/ImageWithFallback";

const ctaImage =
  "https://images.unsplash.com/photo-1649275579015-5092d2ffcf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJhZ3VheSUyMEFzdW5jaW9uJTIwY2l0eXNjYXBlJTIwc2t5bGluZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NTkzMDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function CTASection() {
  return (
    <section id="contact" className="relative bg-[#f3efe8] py-12 px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
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
    </section>
  );
}
