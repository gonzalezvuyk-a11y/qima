import { useState, useEffect, useRef, useCallback } from "react";
import { Landmark, Handshake, Users, Rocket } from "lucide-react";

interface NodeConfig {
  label: string;
  sub: string;
  baseAngle: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

const NODE_CONFIGS: NodeConfig[] = [
  {
    label: "Inversores",
    sub: "Capital",
    baseAngle: -60,
    color: "#c8e645",
    icon: <Landmark className="w-6 h-6" />,
    description: "Conectamos con fuentes de capital estratégico para impulsar proyectos de alto valor.",
  },
  {
    label: "Aliados",
    sub: "Know how",
    baseAngle: 30,
    color: "#7bb8a8",
    icon: <Handshake className="w-6 h-6" />,
    description: "Articulamos expertise y conocimiento especializado para cada oportunidad.",
  },
  {
    label: "Proyectos",
    sub: "Negocios",
    baseAngle: 150,
    color: "#c8e645",
    icon: <Rocket className="w-6 h-6" />,
    description: "Estructuramos negocios escalables con visión de largo plazo.",
  },
  {
    label: "Socios",
    sub: "Clientes",
    baseAngle: 240,
    color: "#7bb8a8",
    icon: <Users className="w-6 h-6" />,
    description: "Facilitamos vínculos con socios y clientes que potencian cada negocio.",
  },
];

const RADIUS = 188;
const CENTER = 250;
const SIZE = 500;

function angleToPos(angle: number, r = RADIUS) {
  const rad = (angle * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

interface Particle {
  progress: number;
  speed: number;
  reverse: boolean;
  nodeIdx: number;
}

export function DiagramSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);

  const positionsRef = useRef(
    NODE_CONFIGS.map((n) => {
      const p = angleToPos(n.baseAngle);
      return { x: p.x, y: p.y };
    })
  );
  const [positions, setPositions] = useState(
    positionsRef.current.map((p) => ({ x: p.x, y: p.y }))
  );

  const centerRef = useRef({ x: CENTER, y: CENTER });
  const [centerPos, setCenterPos] = useState({ x: CENTER, y: CENTER });

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, inside: false });
  const dragOffsetRef = useRef({ dx: 0, dy: 0 });
  const rafRef = useRef<number>(0);

  const particlesRef = useRef<Particle[]>(
    NODE_CONFIGS.flatMap((_, i) => [
      { progress: Math.random(), speed: 0.003 + Math.random() * 0.002, reverse: false, nodeIdx: i },
      { progress: Math.random(), speed: 0.002 + Math.random() * 0.002, reverse: true, nodeIdx: i },
      { progress: Math.random(), speed: 0.004 + Math.random() * 0.001, reverse: false, nodeIdx: i },
    ])
  );
  const [particlePositions, setParticlePositions] = useState<{ x: number; y: number; opacity: number; color: string }[]>([]);

  useEffect(() => {
    let running = true;

    const tick = () => {
      if (!running) return;

      const nodes = positionsRef.current;
      const c = centerRef.current;

      const pPositions = particlesRef.current.map((p) => {
        p.progress += p.speed * (p.reverse ? -1 : 1);
        if (p.progress > 1) { p.progress = 0; }
        if (p.progress < 0) { p.progress = 1; }

        const node = nodes[p.nodeIdx];
        const t = p.progress;
        const x = c.x + (node.x - c.x) * t;
        const y = c.y + (node.y - c.y) * t;

        const edgeFade = Math.min(t, 1 - t) * 4;
        const opacity = Math.min(edgeFade, 0.7);

        return { x, y, opacity, color: NODE_CONFIGS[p.nodeIdx].color };
      });

      setParticlePositions(pPositions);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scaleX = SIZE / rect.width;
      const scaleY = SIZE / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      mouseRef.current = { x: mx, y: my, inside: true };

      if (draggingIdx !== null) {
        const nx = mx + dragOffsetRef.current.dx;
        const ny = my + dragOffsetRef.current.dy;

        if (draggingIdx === -1) {
          centerRef.current = { x: nx, y: ny };
          setCenterPos({ x: nx, y: ny });
        } else {
          positionsRef.current[draggingIdx] = { x: nx, y: ny };
          setPositions(positionsRef.current.map((p) => ({ x: p.x, y: p.y })));
        }
      }
    },
    [draggingIdx]
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.inside = false;
    if (draggingIdx !== null) setDraggingIdx(null);
  }, [draggingIdx]);

  const handleNodeMouseDown = useCallback(
    (i: number, e: React.MouseEvent) => {
      e.preventDefault();
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scaleX = SIZE / rect.width;
      const scaleY = SIZE / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      if (i === -1) {
        dragOffsetRef.current = { dx: centerRef.current.x - mx, dy: centerRef.current.y - my };
      } else {
        const node = positionsRef.current[i];
        dragOffsetRef.current = { dx: node.x - mx, dy: node.y - my };
      }
      setDraggingIdx(i);
    },
    []
  );

  const handleMouseUp = useCallback(() => {
    setDraggingIdx(null);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] py-36 overflow-visible">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.015]" />

      <div className="max-w-[1440px] mx-auto px-12">
        <div className="flex items-center gap-16">
          {/* Left: Text content */}
          <div className="flex-shrink-0 w-[440px]">
            <div
              className="text-[#c8e645]/70 mb-5 tracking-[0.2em] uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", fontWeight: 500 }}
            >
              Lógica QIMA
            </div>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.75rem", fontWeight: 400, lineHeight: 1.15 }}
            >
              Donde convergen las{" "}
              <em className="text-[#c8e645]" style={{ fontStyle: "italic" }}>condiciones</em>{" "}
              para que un negocio ocurra
            </h2>
            <p
              className="text-white/40 mb-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
            >
              QIMA articula los elementos clave para transformar una oportunidad en una
              estructura de valor: relaciones, conocimiento, capital y visión estratégica.
            </p>
            <p
              className="text-white/15"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.05em" }}
            >
              Arrastrá los nodos para explorar las conexiones
            </p>
          </div>

          {/* Right: Interactive Diagram */}
          <div className="flex-1 flex justify-end">
            <div
              ref={containerRef}
              className="relative select-none"
              style={{ width: SIZE, height: SIZE, cursor: draggingIdx !== null ? "grabbing" : "default" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
            >
              <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="absolute inset-0 w-full h-full"
                style={{ overflow: "visible" }}
              >
                <circle cx={centerPos.x} cy={centerPos.y} r={310} fill="none" stroke="white" strokeOpacity={0.06} strokeWidth={0.7} />
                <circle cx={centerPos.x} cy={centerPos.y} r={RADIUS} fill="none" stroke="white" strokeOpacity={0.11} strokeWidth={0.8} />
                <circle cx={centerPos.x} cy={centerPos.y} r={158} fill="none" stroke="#c8e645" strokeOpacity={0.12} strokeWidth={0.8} />

                {positions.map((pos, i) => {
                  const isActive = hoveredIdx === i || draggingIdx === i;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={centerPos.x}
                      y1={centerPos.y}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? NODE_CONFIGS[i].color : "white"}
                      strokeOpacity={isActive ? 0.45 : 0.11}
                      strokeWidth={isActive ? 1.4 : 0.8}
                      style={{ transition: "stroke 0.3s, stroke-opacity 0.3s" }}
                    />
                  );
                })}

                {particlePositions.map((p, i) => (
                  <circle
                    key={`particle-${i}`}
                    cx={p.x}
                    cy={p.y}
                    r={2.1}
                    fill={p.color}
                    opacity={p.opacity * 0.95}
                  />
                ))}
              </svg>

              {/* Center QIMA node */}
              <div
                className="absolute z-20"
                style={{
                  left: centerPos.x,
                  top: centerPos.y,
                  transform: "translate(-50%, -50%)",
                  cursor: draggingIdx === -1 ? "grabbing" : "grab",
                }}
                onMouseDown={(e) => handleNodeMouseDown(-1, e)}
              >
                <div
                  className="w-[10.5rem] h-[10.5rem] rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c8e645]/15 flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0 0 92px rgba(200,230,69,0.14), inset 0 0 40px rgba(200,230,69,0.06)",
                    animation: "qimaCorePulse 5.5s ease-in-out infinite",
                  }}
                >
                  <span
                    className="text-white tracking-[0.3em]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    QIMA
                  </span>
                </div>
                <div
                  className="absolute inset-0 rounded-full border border-[#c8e645]/8"
                  style={{ animation: "pulse-ring 4s ease-out infinite" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#7bb8a8]/10"
                  style={{ animation: "pulse-ring-slow 6.8s ease-out infinite" }}
                />
              </div>

              {/* Outer nodes */}
              {positions.map((pos, i) => {
                const node = NODE_CONFIGS[i];
                const isHovered = hoveredIdx === i;
                const isDragging = draggingIdx === i;
                const isActive = isHovered || isDragging;

                return (
                  <div
                    key={i}
                    className="absolute z-20"
                    style={{
                      left: pos.x,
                      top: pos.y,
                      transform: "translate(-50%, -50%)",
                      cursor: isDragging ? "grabbing" : "grab",
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onMouseDown={(e) => handleNodeMouseDown(i, e)}
                  >
                    <div
                      className="relative flex flex-col items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        width: isActive ? 186 : 160,
                        height: isActive ? 186 : 160,
                        border: `1px solid ${isActive ? node.color + "75" : node.color + "35"}`,
                        background: isActive
                          ? `radial-gradient(circle, ${node.color}22, transparent)`
                          : `${node.color}08`,
                        boxShadow: isActive
                          ? `0 0 70px ${node.color}26, 0 8px 34px ${node.color}18`
                          : `0 0 24px ${node.color}0d`,
                        animation: `nodeFloat ${7 + i * 0.8}s ease-in-out infinite ${i * 0.25}s`,
                      }}
                    >
                      <div
                        className="mb-2 transition-transform duration-300"
                        style={{
                          color: isActive ? node.color : node.color + "a6",
                          transform: isActive ? "scale(1.22)" : "scale(1)",
                        }}
                      >
                        {node.icon}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          color: isActive ? "white" : "rgba(255,255,255,0.82)",
                        }}
                      >
                        {node.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 300,
                          color: isActive ? node.color : "rgba(255,255,255,0.52)",
                        }}
                      >
                        {node.sub}
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-400"
                      style={{
                        bottom: "calc(100% + 16px)",
                        opacity: isHovered && !isDragging ? 1 : 0,
                        transform: `translateX(-50%) translateY(${isHovered && !isDragging ? 0 : 10}px)`,
                      }}
                    >
                      <div
                        className="relative px-5 py-4 rounded-2xl max-w-[260px] text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(33,33,33,0.98), rgba(14,14,14,0.98))",
                          border: `1px solid ${node.color}40`,
                          boxShadow: `0 14px 46px rgba(0,0,0,0.6), 0 0 24px ${node.color}20`,
                          backdropFilter: "blur(20px)",
                        }}
                      >
                        <div
                          className="mb-1.5"
                          style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "0.8125rem",
                            fontWeight: 400,
                            color: node.color,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {node.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 300,
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.82)",
                          }}
                        >
                          {node.description}
                        </div>
                        {/* Arrow */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-3 h-3 rotate-45"
                          style={{
                            background: "rgba(18,18,18,0.97)",
                            borderRight: `1px solid ${node.color}25`,
                            borderBottom: `1px solid ${node.color}25`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.75; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes pulse-ring-slow {
          0% { transform: scale(1); opacity: 0.42; }
          100% { transform: scale(2.85); opacity: 0; }
        }
        @keyframes qimaCorePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
