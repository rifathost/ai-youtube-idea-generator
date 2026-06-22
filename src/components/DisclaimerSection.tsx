import React from "react";

const DisclaimerSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "60px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="gradient-divider" style={{ marginBottom: "48px" }} />

        <div
          style={{
            borderRadius: "20px",
            padding: "32px 36px",
            background: "rgba(245,158,11,0.05)",
            border: "1px solid rgba(245,158,11,0.2)",
            backdropFilter: "blur(20px)",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              flexShrink: 0,
              marginTop: "2px",
            }}
          >
            ⚠️
          </div>
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#fde68a",
                marginBottom: "10px",
                letterSpacing: "0.03em",
              }}
            >
              Disclaimer
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(226,232,240,0.55)",
                lineHeight: 1.75,
              }}
            >
              This tool provides content ideas for{" "}
              <strong style={{ color: "rgba(226,232,240,0.75)" }}>
                educational and planning purposes only
              </strong>
              . Viral performance, traffic, or revenue is not guaranteed. Results
              vary based on execution quality, niche competitiveness, channel
              authority, audience engagement, and YouTube's algorithm. Always create
              original, high-quality content that provides genuine value to your
              viewers. ViralAI is a content ideation assistant — not a guarantee of
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
