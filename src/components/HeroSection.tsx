import React, { useRef } from "react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "50K+", label: "Ideas Generated" },
    { value: "10K+", label: "Creators Using It" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "Free", label: "Always" },
  ];

  const badges = [
    "🎯 Niche-Based Ideas",
    "🔥 Trending Topics",
    "🌏 Multi-Language",
    "⚡ AI-Powered",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
      className="bg-hero-gradient grid-pattern"
    >
      {/* Floating Orbs */}
      <div
        className="orb orb-purple"
        style={{ width: "500px", height: "500px", top: "-100px", left: "-150px" }}
      />
      <div
        className="orb orb-cyan"
        style={{ width: "400px", height: "400px", bottom: "-50px", right: "-100px" }}
      />
      <div
        className="orb orb-pink"
        style={{ width: "300px", height: "300px", top: "40%", left: "60%" }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", width: "100%" }}>
        {/* Live Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "28px",
            animation: "fadeInUp 0.5s ease forwards",
          }}
        >
          <div className="badge-live">AI-Powered • Free Tool • 2025</div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#f1f5f9",
            animation: "fadeInUp 0.6s ease 0.1s both",
          }}
        >
          Find{" "}
          <span className="text-gradient">Viral YouTube</span>
          <br />
          Ideas{" "}
          <span
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            Automatically
            <svg
              viewBox="0 0 300 18"
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                width: "100%",
                height: "10px",
              }}
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q75,0 150,8 Q225,16 300,6"
                stroke="url(#underlineGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(226,232,240,0.65)",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            animation: "fadeInUp 0.6s ease 0.2s both",
          }}
        >
          Discover trending video ideas, catchy titles, thumbnail text, hooks, and
          SEO keywords for your niche — powered by intelligent content algorithms.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}
        >
          <button
            onClick={onCTAClick}
            className="btn-generate"
            style={{
              padding: "16px 40px",
              fontSize: "1.05rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>⚡</span>
            Generate Ideas Free
          </button>
          <a
            href="#features"
            className="btn-outline-animated"
            style={{
              padding: "16px 36px",
              fontSize: "1.05rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <span>Explore Features</span>
            <span>↓</span>
          </a>
        </div>

        {/* Feature Badges */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
            animation: "fadeInUp 0.6s ease 0.4s both",
          }}
        >
          {badges.map((badge) => (
            <span key={badge} className="tag-pill">
              {badge}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "fadeInUp 0.6s ease 0.5s both",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "24px 16px",
                textAlign: "center",
                background: "rgba(255,255,255,0.02)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(168,85,247,0.07)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.02)")
              }
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(226,232,240,0.5)",
                  marginTop: "4px",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "38px",
            border: "2px solid rgba(168,85,247,0.4)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "#a855f7",
              borderRadius: "2px",
              animation: "float 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
