import { useEffect, useState } from "react";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introReady, setIntroReady] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

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

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);
    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const heroExit = Math.min(scrollProgress / 0.56, 1);
  const bgTranslate = -scrollProgress * (isMobile ? 96 : 180);
  const bgScale = 1 + scrollProgress * (isMobile ? 0.035 : 0.1);
  const bgRotate = isMobile ? 0 : scrollProgress * 1.2;
  const introScale = introReady ? 1 : isMobile ? 1.06 : 1.22;
  const introBlur = introReady ? "blur(0px)" : isMobile ? "blur(8px)" : "blur(12px)";
  const introOpacity = introReady ? 1 : isMobile ? 0.9 : 0.78;
  const contentTranslate = -heroExit * 232;
  const contentOpacity = Math.max(1 - heroExit * 1.25, 0);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0a]">
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
            src="/media/qima-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`w-full h-full will-change-transform ${
              isMobile ? "object-contain object-bottom" : "object-cover"
            }`}
            style={{
              transform: `translate3d(0, ${-scrollProgress * (isMobile ? 16 : 38)}px, 0)`,
            }}
          />
        </div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom gradient for content area */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div
          className="absolute -top-12 right-[4%] h-40 w-40 rounded-full bg-[#c8e645]/12 blur-3xl sm:-top-16 sm:right-[8%] sm:h-56 sm:w-56"
          style={{ transform: `translate3d(0, ${scrollProgress * 54}px, 0)` }}
        />
      </div>

      {/* Content pinned to bottom */}
      <div
        className="relative z-10 flex h-full flex-col will-change-transform"
        style={{
          transform: `translate3d(0, ${contentTranslate}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        <div className="flex flex-1 items-center justify-center px-5 pt-36 sm:px-6 md:px-12 md:pt-44 lg:px-12 lg:pt-56 xl:pt-60">
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
            <h1
              data-word-skip="true"
              className="max-w-[900px] text-white"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              <span
                className="block will-change-transform"
                style={{
                  opacity: introReady ? 1 : 0,
                  filter: introReady ? "blur(0px)" : "blur(10px)",
                  transform: introReady
                    ? "translate3d(0, 0, 0)"
                    : "translate3d(0, 42px, 0)",
                  transition:
                    "opacity 820ms cubic-bezier(0.16, 1, 0.3, 1) 180ms, " +
                    "transform 920ms cubic-bezier(0.16, 1, 0.3, 1) 160ms, " +
                    "filter 700ms ease-out 160ms",
                }}
              >
                Articulamos
              </span>
              <span
                className="block will-change-transform text-[#c8e645]"
                style={{
                  opacity: introReady ? 1 : 0,
                  filter: introReady ? "blur(0px)" : "blur(10px)",
                  transform: introReady
                    ? "translate3d(0, 0, 0)"
                    : "translate3d(0, 42px, 0)",
                  transition:
                    "opacity 820ms cubic-bezier(0.16, 1, 0.3, 1) 320ms, " +
                    "transform 920ms cubic-bezier(0.16, 1, 0.3, 1) 300ms, " +
                    "filter 700ms ease-out 300ms",
                  fontStyle: "italic",
                }}
              >
                oportunidades.
              </span>
            </h1>

            <p
              className="mt-6 max-w-[760px] text-white/68 sm:mt-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                fontWeight: 300,
                lineHeight: 1.75,
              }}
            >
              QIMA conecta estrategia, capital, know how y relaciones para
              desarrollar plataformas de negocio con visión de largo plazo en
              Paraguay.
            </p>

            <a href="#about" className="qima-button-primary mt-8 sm:mt-10">
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
    </section>
  );
}
