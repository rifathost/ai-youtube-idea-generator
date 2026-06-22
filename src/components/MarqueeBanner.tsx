import React from "react";

const niches = [
  "🎮 Gaming", "💰 Finance", "🏋️ Fitness", "🍳 Cooking", "✈️ Travel",
  "💻 Tech", "📚 Education", "🎭 Faceless", "💄 Beauty", "🏠 Real Estate",
  "📱 Social Media", "🎵 Music", "🌿 Wellness", "🚗 Automotive", "📈 Stocks",
  "🎨 Art & Design", "🐶 Pets", "🌍 Environmental", "⚽ Sports", "🧘 Mindfulness",
];

const MarqueeBanner: React.FC = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "rgba(168,85,247,0.05)",
        borderTop: "1px solid rgba(168,85,247,0.12)",
        borderBottom: "1px solid rgba(168,85,247,0.12)",
        padding: "14px 0",
        position: "relative",
      }}
    >
      {/* Left Fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, #020818, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right Fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to left, #020818, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "32px",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...niches, ...niches].map((niche, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 16px",
              borderRadius: "99px",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.18)",
              fontSize: "0.82rem",
              fontWeight: 500,
              color: "rgba(226,232,240,0.65)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {niche}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBanner;
