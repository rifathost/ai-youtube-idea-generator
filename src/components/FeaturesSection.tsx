import React from "react";

const features = [
  {
    icon: "🔥",
    title: "Trend-Based Idea Suggestions",
    desc: "Get video ideas inspired by what's currently trending in your niche — so you always stay ahead of the curve.",
    color: "rgba(239,68,68,0.12)",
    borderColor: "rgba(239,68,68,0.25)",
    iconBg: "linear-gradient(135deg, #ef4444, #f97316)",
  },
  {
    icon: "📈",
    title: "High-CTR Title Ideas",
    desc: "Attention-grabbing titles crafted to maximize click-through rates with proven emotional triggers and power words.",
    color: "rgba(168,85,247,0.1)",
    borderColor: "rgba(168,85,247,0.25)",
    iconBg: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    icon: "🖼️",
    title: "Thumbnail Text Generator",
    desc: "Bold, punchy thumbnail text that stops the scroll — designed for maximum visual impact on mobile and desktop.",
    color: "rgba(236,72,153,0.1)",
    borderColor: "rgba(236,72,153,0.25)",
    iconBg: "linear-gradient(135deg, #ec4899, #db2777)",
  },
  {
    icon: "🎣",
    title: "Powerful Hook Generator",
    desc: "Compelling opening lines that instantly hook your viewer and make them watch till the very end.",
    color: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.22)",
    iconBg: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    icon: "🔍",
    title: "SEO Keyword Support",
    desc: "Get niche-specific SEO keywords to improve your video's discoverability on YouTube search results.",
    color: "rgba(34,197,94,0.08)",
    borderColor: "rgba(34,197,94,0.22)",
    iconBg: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    icon: "🎭",
    title: "Faceless Channel Friendly",
    desc: "All ideas are optimized for faceless and voiceover-style channels — no camera, no problem.",
    color: "rgba(6,182,212,0.08)",
    borderColor: "rgba(6,182,212,0.22)",
    iconBg: "linear-gradient(135deg, #06b6d4, #0891b2)",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Orb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <span className="section-label">✨ Features</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#f1f5f9",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Everything You Need To{" "}
            <span className="text-gradient">Create Viral Content</span>
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.5)",
              fontSize: "1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our AI-powered tool gives you a complete content planning toolkit — from ideation to execution.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="features-grid"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "28px 24px",
                background: feature.color,
                borderColor: feature.borderColor,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: feature.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "18px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(226,232,240,0.55)",
                  lineHeight: 1.65,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          style={{
            marginTop: "64px",
            borderRadius: "24px",
            padding: "40px 32px",
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))",
            border: "1px solid rgba(168,85,247,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            backdropFilter: "blur(20px)",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "8px",
              }}
            >
              Ready to Find Your Next Viral Idea?
            </h3>
            <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.9rem" }}>
              Join thousands of creators who plan smarter with ViralAI.
            </p>
          </div>
          <a
            href="#tool"
            className="btn-generate"
            style={{
              padding: "14px 32px",
              fontSize: "0.95rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "12px",
            }}
          >
            <span>⚡</span>
            <span>Try It Free Now</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
