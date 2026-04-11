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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />
      <Hero />
      <AboutSection />
      <DiagramSection />
      <ProcessSection />
      <TeamSection />
      <OpportunitiesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}