import React from "react";

const testimonials = [
  {
    name: "Rahul S.",
    handle: "@rahultechyoutube",
    avatar: "RS",
    role: "Tech Creator • 45K subscribers",
    text: "ViralAI helped me plan an entire month of content in under 10 minutes. The title suggestions are seriously fire 🔥",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
    rating: 5,
  },
  {
    name: "Priya M.",
    handle: "@priyafinancetalks",
    avatar: "PM",
    role: "Finance Creator • 28K subscribers",
    text: "The SEO keywords section alone is worth it. I found keywords I never would have thought of for my finance channel!",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    rating: 5,
  },
  {
    name: "Arjun K.",
    handle: "@arjunfacelessyt",
    avatar: "AK",
    role: "Faceless Creator • 12K subscribers",
    text: "Perfect for faceless channels! The hook lines are exactly what I needed to improve my retention rate significantly.",
    gradient: "linear-gradient(135deg, #ec4899, #db2777)",
    rating: 5,
  },
  {
    name: "Sneha R.",
    handle: "@snehalifestylevlog",
    avatar: "SR",
    role: "Lifestyle Creator • 67K subscribers",
    text: "I was struggling with content ideas every week. Now I have a full idea bank ready. Game-changing tool for creators!",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    rating: 5,
  },
  {
    name: "Dev P.",
    handle: "@devprogramminghub",
    avatar: "DP",
    role: "Coding Creator • 89K subscribers",
    text: "The Hinglish language option is a huge differentiator. My Indian audience loves content in that format. Great tool!",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    rating: 5,
  },
  {
    name: "Kavya T.",
    handle: "@kavyacookingstudio",
    avatar: "KT",
    role: "Food Creator • 33K subscribers",
    text: "Thumbnail text suggestions are super creative and attention-grabbing. Already used 3 ideas that did really well.",
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    rating: 5,
  },
];

const SocialProofSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "90px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <span className="section-label">💬 Creator Reviews</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#f1f5f9",
              marginBottom: "12px",
            }}
          >
            Loved by{" "}
            <span className="text-gradient">10,000+ Creators</span>
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.45)",
              fontSize: "0.95rem",
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            See what YouTubers are saying about ViralAI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: "18px",
                padding: "24px",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} style={{ color: "#fbbf24", fontSize: "14px" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(226,232,240,0.7)",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: t.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(226,232,240,0.4)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProofSection;
