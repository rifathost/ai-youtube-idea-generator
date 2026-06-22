import React from "react";

const steps = [
  {
    number: "01",
    icon: "🎯",
    title: "Enter Your Niche",
    desc: "Tell us your YouTube niche — Tech, Finance, Fitness, Gaming, Cooking, or anything you create content about.",
    color: "rgba(168,85,247,0.12)",
    borderColor: "rgba(168,85,247,0.3)",
    glowColor: "rgba(168,85,247,0.2)",
  },
  {
    number: "02",
    icon: "🎬",
    title: "Select Video Type",
    desc: "Choose between Long Videos, Shorts, Tutorials, Reviews, or Faceless content to get tailored ideas.",
    color: "rgba(6,182,212,0.1)",
    borderColor: "rgba(6,182,212,0.3)",
    glowColor: "rgba(6,182,212,0.2)",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Generate Viral Ideas",
    desc: "Click Generate and our AI algorithm instantly creates 10 viral ideas, 10 titles, hooks, thumbnails, and SEO keywords.",
    color: "rgba(236,72,153,0.1)",
    borderColor: "rgba(236,72,153,0.3)",
    glowColor: "rgba(236,72,153,0.2)",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Use For Content Planning",
    desc: "Copy your favorite ideas, titles, and hooks directly into your content calendar and start creating immediately.",
    color: "rgba(34,197,94,0.08)",
    borderColor: "rgba(34,197,94,0.28)",
    glowColor: "rgba(34,197,94,0.18)",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(99,33,255,0.07), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.05), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <span className="section-label">🗺️ How It Works</span>
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
            From Niche To{" "}
            <span className="text-gradient">Viral Ideas</span> In Seconds
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.5)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our streamlined 4-step process gets you from blank page to a full content plan in under 2 minutes.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connector Line */}
          <div
            className="connector-line"
            style={{
              position: "absolute",
              top: "52px",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5), rgba(236,72,153,0.5), rgba(34,197,94,0.5))",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{ position: "relative", zIndex: 1 }}
              className={`step-item delay-${(i + 1) * 100}`}
            >
              {/* Icon Circle */}
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: step.color,
                  border: `2px solid ${step.borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  margin: "0 auto 24px",
                  boxShadow: `0 0 30px ${step.glowColor}`,
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
                className="step-icon"
              >
                {step.icon}
              </div>

              {/* Number */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%) translateX(22px)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: step.borderColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {i + 1}
              </div>

              {/* Content */}
              <div
                style={{
                  background: step.color,
                  border: `1px solid ${step.borderColor}`,
                  borderRadius: "16px",
                  padding: "20px 18px",
                  textAlign: "center",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                }}
                className="step-card"
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: step.borderColor,
                    marginBottom: "8px",
                  }}
                >
                  STEP {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(226,232,240,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Video Placeholder */}
        <div
          style={{
            marginTop: "64px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(168,85,247,0.2)",
            background: "rgba(10,14,30,0.8)",
            padding: "48px",
            textAlign: "center",
            backdropFilter: "blur(20px)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.08), transparent 50%, rgba(6,182,212,0.06))",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                margin: "0 auto 20px",
                boxShadow: "0 0 40px rgba(124,58,237,0.4)",
                animation: "pulse-glow 2s infinite",
              }}
            >
              ▶
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "8px",
              }}
            >
              See It In Action
            </h3>
            <p
              style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.9rem", marginBottom: "24px" }}
            >
              Scroll up to the tool section and try it yourself — no signup required.
            </p>
            <a
              href="#tool"
              className="btn-generate"
              style={{
                padding: "13px 32px",
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "12px",
              }}
            >
              <span>⚡</span>
              <span>Try the Tool Now</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .connector-line {
            display: none !important;
          }
        }
        @media (max-width: 540px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        }
        .step-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
