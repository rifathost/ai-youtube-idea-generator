import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBanner from "./components/MarqueeBanner";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SocialProofSection from "./components/SocialProofSection";
import ToolSection from "./components/ToolSection";
import DisclaimerSection from "./components/DisclaimerSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const scrollToTool = () => {
    const el = document.getElementById("tool");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020818",
        color: "#e2e8f0",
        overflowX: "hidden",
      }}
    >
      {/* Fixed Navigation */}
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <HeroSection onCTAClick={scrollToTool} />

        {/* ── Niche Marquee ── */}
        <MarqueeBanner />

        {/* ── Features ── */}
        <FeaturesSection />

        {/* ── Divider ── */}
        <div className="gradient-divider" />

        {/* ── How It Works ── */}
        <HowItWorksSection />

        {/* ── Divider ── */}
        <div className="gradient-divider" />

        {/* ── Social Proof ── */}
        <SocialProofSection />

        {/* ── Divider ── */}
        <div className="gradient-divider" />

        {/* ── AI Tool ── */}
        <div style={{ background: "rgba(0,0,0,0.15)" }}>
          <ToolSection />
        </div>

        {/* ── Disclaimer ── */}
        <DisclaimerSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
};

export default App;
