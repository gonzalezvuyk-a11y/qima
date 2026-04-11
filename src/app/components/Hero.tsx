import { useEffect, useState } from "react";
import heroVideo from "../../imports/shutterstock_3916630263.mov";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introReady, setIntroReady] = useState(false);

  const headlineWords = [
    { text: "Articulamos", accent: false },
    { text: "oportunidades.", accent: true },
  ];

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const viewport = Math.max(window.innerHeight, 1);
      const progress = Math.min(window.scrollY / viewport, 1.2);
      setScrollProgress(progress);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroReady(true), 90);
    return () => window.clearTimeout(timer);
  }, []);

  const heroExit = Math.min(scrollProgress / 0.56, 1);
  const bgTranslate = -scrollProgress * 180;
  const bgScale = 1 + scrollProgress * 0.1;
  const bgRotate = scrollProgress * 1.2;
  const introScale = introReady ? 1 : 1.22;
  const introBlur = introReady ? "blur(0px)" : "blur(12px)";
  const introOpacity = introReady ? 1 : 0.78;
  const contentTranslate = -heroExit * 232;
  const contentOpacity = Math.max(1 - heroExit * 1.25, 0);
  const lowerBarTranslate = -heroExit * 148;
  const lowerBarOpacity = Math.max(1 - heroExit * 1.5, 0);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Full-viewport background image */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${bgTranslate}px, 0) scale(${bgScale}) rotate(${bgRotate}deg)`,
          transformOrigin: "center center",
        }}
      >
        <div
          className="absolute inset-0 will-change-[transform,filter,opacity]"
          style={{
            transform: `scale(${introScale})`,
            filter: introBlur,
            opacity: introOpacity,
            transition:
              "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), filter 1.2s ease-out, opacity 1s ease-out",
          }}
        >
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover will-change-transform"
            style={{
              transform: `translate3d(0, ${-scrollProgress * 38}px, 0)`,
            }}
          />
        </div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom gradient for content area */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div
          className="absolute -top-16 right-[8%] h-56 w-56 rounded-full bg-[#c8e645]/12 blur-3xl"
          style={{ transform: `translate3d(0, ${scrollProgress * 54}px, 0)` }}
        />
      </div>

      {/* Content pinned to bottom */}
      <div
        className="relative z-10 h-full flex flex-col justify-end will-change-transform"
        style={{
          transform: `translate3d(0, ${contentTranslate}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        <div className="max-w-[1440px] w-full mx-auto px-12 pb-16">
          {/* Bottom row: title left, description + CTA right */}
          <div className="flex items-end justify-between gap-16">
            {/* Left — large editorial title */}
            <h1
              data-word-skip="true"
              className="text-white max-w-[680px] shrink-0"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              {headlineWords.map((word, index) => (
                <span
                  key={word.text}
                  className="inline-block will-change-transform"
                  style={{
                    opacity: introReady ? 1 : 0,
                    filter: introReady ? "blur(0px)" : "blur(10px)",
                    transform: introReady
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(0, 42px, 0)",
                    transition:
                      `opacity 820ms cubic-bezier(0.16, 1, 0.3, 1) ${180 + index * 140}ms, ` +
                      `transform 920ms cubic-bezier(0.16, 1, 0.3, 1) ${160 + index * 140}ms, ` +
                      `filter 700ms ease-out ${160 + index * 140}ms`,
                    color: word.accent ? "#c8e645" : "inherit",
                    fontStyle: word.accent ? "italic" : "normal",
                  }}
                >
                  {word.text}
                  {index === 0 ? "\u00A0" : ""}
                </span>
              ))}
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
        <div
          className="max-w-[1440px] w-full mx-auto px-12 pb-6 flex items-center justify-between"
          style={{
            transform: `translate3d(0, ${lowerBarTranslate}px, 0)`,
            opacity: lowerBarOpacity,
          }}
        >
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
