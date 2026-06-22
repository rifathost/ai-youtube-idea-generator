import React, { useState } from "react";
import { generateIdeas, GeneratedOutput } from "../data/ideaGenerator";
import OutputSection from "./OutputSection";

const videoTypes = ["Long Video", "Shorts", "Tutorial", "Review", "Faceless"];
const languages = ["English", "Hindi", "Hinglish"];

const ToolSection: React.FC = () => {
  const [niche, setNiche] = useState("");
  const [audience, setAudience] = useState("");
  const [videoType, setVideoType] = useState("Long Video");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<GeneratedOutput | null>(null);
  const outputRef = React.useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!niche.trim()) {
      const el = document.getElementById("niche-input");
      if (el) {
        el.focus();
        el.style.borderColor = "rgba(239,68,68,0.6)";
        setTimeout(() => (el.style.borderColor = ""), 2000);
      }
      return;
    }

    setLoading(true);
    setOutput(null);

    setTimeout(() => {
      const result = generateIdeas(niche, audience || "Beginners", videoType, language);
      setOutput(result);
      setLoading(false);
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 1500);
  };

  const handleReset = () => {
    setNiche("");
    setAudience("");
    setVideoType("Long Video");
    setLanguage("English");
    setOutput(null);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#e2e8f0",
    padding: "13px 16px",
    width: "100%",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "rgba(226,232,240,0.7)",
    marginBottom: "8px",
    letterSpacing: "0.02em",
  };

  return (
    <section id="tool" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <span className="section-label">⚡ AI Tool</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#f1f5f9",
              marginBottom: "12px",
            }}
          >
            Generate Viral Ideas{" "}
            <span className="text-gradient">Instantly</span>
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Enter your niche and preferences — our algorithm handles the rest.
          </p>
        </div>

        {/* Tool Card */}
        <div
          className="glass-card"
          style={{
            borderRadius: "24px",
            padding: "clamp(24px, 5vw, 48px)",
            border: "1px solid rgba(168,85,247,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow inside card */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
            className="tool-grid"
          >
            {/* Niche Input */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="niche-input" style={labelStyle}>
                🎯 YouTube Niche <span style={{ color: "#ec4899" }}>*</span>
              </label>
              <input
                id="niche-input"
                type="text"
                placeholder="e.g., Tech, Finance, Fitness, Gaming, Cooking..."
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168,85,247,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Target Audience */}
            <div>
              <label style={labelStyle}>👥 Target Audience</label>
              <input
                type="text"
                placeholder="e.g., Students, Professionals, Teens..."
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168,85,247,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Video Type */}
            <div>
              <label style={labelStyle}>🎬 Video Type</label>
              <select
                value={videoType}
                onChange={(e) => setVideoType(e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168,85,247,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {videoTypes.map((vt) => (
                  <option key={vt} value={vt} style={{ background: "#0d1123" }}>
                    {vt === "Long Video" && "📹 "}
                    {vt === "Shorts" && "📱 "}
                    {vt === "Tutorial" && "🎓 "}
                    {vt === "Review" && "⭐ "}
                    {vt === "Faceless" && "🎭 "}
                    {vt}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <label style={labelStyle}>🌐 Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168,85,247,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} style={{ background: "#0d1123" }}>
                    {lang === "English" && "🇺🇸 "}
                    {lang === "Hindi" && "🇮🇳 "}
                    {lang === "Hinglish" && "🤝 "}
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                gap: "16px",
                marginTop: "8px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="btn-generate"
                style={{
                  padding: "15px 36px",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1",
                  justifyContent: "center",
                  minWidth: "180px",
                  opacity: loading ? 0.8 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? (
                  <>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <div className="loading-dot" />
                      <div className="loading-dot" />
                      <div className="loading-dot" />
                    </div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: "1.2rem" }}>🚀</span>
                    <span>Generate Viral Ideas</span>
                  </>
                )}
              </button>

              {output && (
                <button
                  onClick={handleReset}
                  className="btn-outline-animated"
                  style={{
                    padding: "15px 28px",
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>↺</span>
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Output */}
        <div ref={outputRef}>
          {loading && (
            <div
              style={{
                textAlign: "center",
                padding: "60px 24px",
                animation: "fadeInUp 0.4s ease forwards",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div className="loading-dot" style={{ width: "14px", height: "14px" }} />
                <div className="loading-dot" style={{ width: "14px", height: "14px" }} />
                <div className="loading-dot" style={{ width: "14px", height: "14px" }} />
              </div>
              <p
                style={{
                  color: "rgba(226,232,240,0.5)",
                  fontSize: "1rem",
                }}
              >
                AI is analyzing trends for <strong style={{ color: "#a855f7" }}>"{niche}"</strong>...
              </p>
              <p style={{ color: "rgba(226,232,240,0.3)", fontSize: "0.85rem", marginTop: "8px" }}>
                Crafting viral ideas, titles & hooks
              </p>
            </div>
          )}

          {output && !loading && <OutputSection output={output} niche={niche} />}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .tool-grid {
            grid-template-columns: 1fr !important;
          }
          .tool-grid > div:first-child {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ToolSection;
