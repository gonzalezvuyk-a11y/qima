import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const bgImage =
  "https://images.unsplash.com/photo-1763000112243-fec0af31405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFtZXJpY2ElMjB1cmJhbiUyMGRldmVsb3BtZW50JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzc1OTMwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const bullets = [
  "Lectura de oportunidad y potencial de negocio",
  "Conexión con actores clave del ecosistema",
  "Estructuración del aterrizaje empresarial",
  "Desarrollo de plataforma de crecimiento",
];

interface Metric {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  tag: string;
  tagColor: string;
  position: string;
  delay: number;
}

const metrics: Metric[] = [
  {
    value: 40,
    prefix: "+",
    suffix: "%",
    label: "Crecimiento en inversión extranjera directa",
    tag: "IED",
    tagColor: "#c8e645",
    position: "bottom-[-24px] left-[-24px]",
    delay: 0,
  },
  {
    value: 5,
    prefix: "",
    suffix: "%",
    label: "Tasa de crecimiento del PIB proyectada",
    tag: "PIB",
    tagColor: "#e6a145",
    position: "top-[-20px] right-[-20px]",
    delay: 200,
  },
  {
    value: 10,
    prefix: "",
    suffix: "%",
    label: "Impuesto corporativo más bajo de la región",
    tag: "Fiscal",
    tagColor: "#d45fa0",
    position: "bottom-[28%] right-[-34px]",
    delay: 400,
  },
  {
    value: 7,
    prefix: "Top ",
    suffix: "",
    label: "País más competitivo en costos de LATAM",
    tag: "Ranking",
    tagColor: "#5fa0d4",
    position: "top-[18%] left-[-30px]",
    delay: 600,
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function MetricCard({ metric, inView }: { metric: Metric; inView: boolean }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), metric.delay);
    return () => clearTimeout(t);
  }, [inView, metric.delay]);

  const count = useCountUp(metric.value, 1800, started);

  return (
    <div
      className={`absolute ${metric.position} z-10 flex flex-col items-center transition-all duration-700`}
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        animation: started ? `metric-float-${metric.delay} 6s ease-in-out infinite ${metric.delay}ms` : "none",
      }}
    >
      {/* Colored pill tag */}
      <div
        className="rounded-full px-3 py-1 mb-[-8px] z-10 shadow-sm"
        style={{
          background: metric.tagColor,
          fontFamily: "Inter, sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 600,
          color: "white",
          letterSpacing: "0.03em",
        }}
      >
        {metric.tag}
      </div>
      {/* Card */}
      <div
        className="bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/80"
        style={{ maxWidth: 220 }}
      >
        <div className="flex items-baseline gap-1 mb-1">
          <span
            className="text-[#0a0a0a]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
          >
            {metric.prefix}{count}{metric.suffix}
          </span>
        </div>
        <div
          className="text-[#0a0a0a]/50"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.45 }}
        >
          {metric.label}
        </div>
      </div>
    </div>
  );
}

export function OpportunitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="opportunities" className="relative bg-[#f3efe8] py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left text */}
          <div className="col-span-5">
            <h2
              className="text-[#0a0a0a] mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "2.75rem",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Desarrollá tu negocio en{" "}
              <em style={{ fontStyle: "italic" }}>Paraguay</em>.
            </h2>
            <p
              className="text-[#0a0a0a]/50 mb-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.8 }}
            >
              Paraguay ofrece condiciones atractivas para la inversión, la expansión y el
              desarrollo de nuevos negocios. QIMA acompaña ese proceso conectando
              oportunidad, conocimiento local y estructura empresarial.
            </p>

            <div className="space-y-4 mb-10">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c8e645]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8aad20]" />
                  </div>
                  <span
                    className="text-[#0a0a0a]/60"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 400 }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#c8e645] text-[#0a0a0a] hover:bg-[#d4ee5a] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
            >
              Explorar oportunidades
            </a>
          </div>

          {/* Right image with floating metric cards */}
          <div ref={sectionRef} className="col-span-6 col-start-7 relative">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback src={bgImage} alt="Paraguay development" className="w-full aspect-[4/3] object-cover" />
            </div>

            {metrics.map((m, i) => (
              <MetricCard key={i} metric={m} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes metric-float-0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes metric-float-200 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes metric-float-400 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes metric-float-600 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </section>
  );
}
