import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImage =
  "https://images.unsplash.com/photo-1638862084961-a473ee68d47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB0b3dlciUyMG5pZ2h0JTIwbW9vZHl8ZW58MXx8fHwxNzc1OTM0MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Full-viewport background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="Paraguay cityscape"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom gradient for content area */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-[1440px] w-full mx-auto px-12 pb-16">
          {/* Bottom row: title left, description + CTA right */}
          <div className="flex items-end justify-between gap-16">
            {/* Left — large editorial title */}
            <h1
              className="text-white max-w-[680px] shrink-0"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              Articulamos{" "}
              <em className="text-[#c8e645]" style={{ fontStyle: "italic" }}>
                oportunidades
              </em>
              .
            </h1>

            {/* Right — description + CTA */}
            <div className="max-w-[380px] pb-2">
              <p
                className="text-white/70 mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                QIMA conecta estrategia, capital, know how y relaciones para desarrollar
                plataformas de negocio con visión de largo plazo en Paraguay.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#c8e645] text-[#0a0a0a] hover:bg-[#d4ee5a] transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                }}
              >
                Conocer QIMA
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M1 7h11M8.5 3.5 12 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1440px] w-full mx-auto px-12 pb-6 flex items-center justify-between">
          <span
            className="text-white/30"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.05em" }}
          >
            QIMA ©2026
          </span>
          <a
            href="#about"
            className="text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 400, letterSpacing: "0.05em" }}
          >
            EXPLORAR
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 5h7M5.5 2.5 8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}