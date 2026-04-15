import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { DiagramSection } from "./components/DiagramSection";
import { ProcessSection } from "./components/ProcessSection";
import { TeamSection } from "./components/TeamSection";
import { OpportunitiesSection } from "./components/OpportunitiesSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { TauPage } from "./components/TauPage";
import { CippPage } from "./components/CippPage";
import { ArtiaPage } from "./components/ArtiaPage";

function layerStyle(layer: number, delayMs: number) {
  return {
    zIndex: layer,
    "--reveal-delay": `${delayMs}ms`,
  } as React.CSSProperties;
}

function splitTextIntoWords(element: HTMLElement) {
  if (element.dataset.wordsReady === "true") return;

  let wordIndex = 0;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (!node.textContent?.trim()) continue;
    if (!node.parentElement) continue;
    textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    const text = textNode.textContent ?? "";
    const fragment = document.createDocumentFragment();
    const parts = text.split(/(\s+)/);

    parts.forEach((part) => {
      if (!part) return;

      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const word = document.createElement("span");
      word.className = "qima-word";
      word.style.setProperty("--word-index", String(wordIndex));
      word.textContent = part;
      fragment.appendChild(word);
      wordIndex += 1;
    });

    textNode.parentNode?.replaceChild(fragment, textNode);
  });

  element.dataset.wordsReady = "true";
}

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isTauPage = pathname === "/tau" || pathname === "/tau/";
  const isCippPage = pathname === "/cipp" || pathname === "/cipp/";
  const isArtiaPage = pathname === "/artia" || pathname === "/artia/";

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".qima-reveal")
    );

    sections.forEach((section) => {
      const titleNodes = Array.from(
        section.querySelectorAll<HTMLElement>(
          "h1, h2, h3, h4"
        )
      );

      titleNodes.forEach((node, index) => {
        if (node.dataset.wordSkip === "true") return;
        node.classList.add("qima-reveal-text-word");
        node.style.setProperty("--text-index", String(index));
        splitTextIntoWords(node);
      });

      const paragraphNodes = Array.from(
        section.querySelectorAll<HTMLElement>("p, blockquote")
      );

      paragraphNodes.forEach((node, index) => {
        node.classList.add("qima-reveal-paragraph");
        node.style.setProperty("--paragraph-index", String(index));
      });

      const blockNodes = Array.from(
        section.querySelectorAll<HTMLElement>("a, li, figcaption")
      );

      blockNodes.forEach((node, index) => {
        node.classList.add("qima-reveal-block");
        node.style.setProperty("--block-index", String(index));
      });

      const boxCandidates = Array.from(
        section.querySelectorAll<HTMLElement>(".rounded-2xl, .rounded-3xl")
      );

      let boxIndex = 0;
      boxCandidates.forEach((box) => {
        const area = box.offsetWidth * box.offsetHeight;
        if (area < 12000) return;

        box.classList.add("qima-box-reveal");
        box.style.setProperty("--box-index", String(boxIndex));
        boxIndex += 1;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -12% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (isTauPage) {
    return <TauPage />;
  }

  if (isCippPage) {
    return <CippPage />;
  }

  if (isArtiaPage) {
    return <ArtiaPage />;
  }

  return (
    <div
      id="top"
      className="qima-page min-h-screen bg-[#0a0a0a]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Header />

      <main className="qima-stack">
        <div className="qima-hero-layer" style={{ zIndex: 1 }}>
          <Hero />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(6, 0)}>
          <AboutSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(7, 70)}>
          <DiagramSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(8, 110)}>
          <ProcessSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(9, 150)}>
          <TeamSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(10, 200)}>
          <OpportunitiesSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(11, 250)}>
          <EcosystemSection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(12, 300)}>
          <CTASection />
        </div>

        <div className="qima-layer qima-overlap qima-reveal" style={layerStyle(13, 320)}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
