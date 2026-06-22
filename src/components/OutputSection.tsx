import React, { useState, useEffect } from "react";
import { GeneratedOutput } from "../data/ideaGenerator";

interface OutputSectionProps {
  output: GeneratedOutput;
  niche: string;
}

interface CopyState {
  [key: string]: boolean;
}

const ScoreBar: React.FC<{
  label: string;
  score: number;
  color: string;
  delay?: number;
}> = ({ label, score, color, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(score), 100 + delay);
    return () => clearTimeout(timer);
  }, [score, delay]);

  const getScoreLabel = (s: number) => {
    if (s >= 80) return { text: "Excellent", color: "#22c55e" };
    if (s >= 65) return { text: "High", color: "#84cc16" };
    if (s >= 45) return { text: "Medium", color: "#f59e0b" };
    return { text: "Low", color: "#ef4444" };
  };

  const scoreInfo = getScoreLabel(score);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.8)", fontWeight: 500 }}>
          {label}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: scoreInfo.color,
              background: `${scoreInfo.color}18`,
              padding: "2px 10px",
              borderRadius: "99px",
              border: `1px solid ${scoreInfo.color}30`,
            }}
          >
            {scoreInfo.text}
          </span>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#f1f5f9",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {score}
            <span style={{ fontSize: "0.75rem", color: "rgba(226,232,240,0.5)" }}>/100</span>
          </span>
        </div>
      </div>
      <div className="score-bar-track">
        <div
          className="score-bar-fill"
          style={{
            width: `${width}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
};

const CopyButton: React.FC<{ textToCopy: string; id: string }> = ({
  textToCopy,
  id,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-btn ${copied ? "copied" : ""}`}
      title={`Copy ${id}`}
    >
      {copied ? "✓ Copied!" : "⎘ Copy"}
    </button>
  );
};

const OutputSection: React.FC<OutputSectionProps> = ({ output, niche }) => {
  const {
    ideas,
    titles,
    thumbnailTexts,
    hookLines,
    seoKeywords,
    difficultyScore,
    viralPotentialScore,
  } = output;

  const [copiedSection, setCopiedSection] = useState<CopyState>({});

  const copyAll = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection((prev) => ({ ...prev, [key]: true }));
      setTimeout(
        () => setCopiedSection((prev) => ({ ...prev, [key]: false })),
        2000
      );
    } catch {
      /* noop */
    }
  };

  const sectionCardStyle: React.CSSProperties = {
    background: "rgba(10,14,30,0.8)",
    border: "1px solid rgba(168,85,247,0.18)",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    animation: "fadeInUp 0.5s ease forwards",
  };

  const sectionTitleStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "12px",
  };

  const headingStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#f1f5f9",
  };

  const listItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "12px 14px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "10px",
    transition: "all 0.2s ease",
    animation: "fadeInLeft 0.4s ease forwards",
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Output Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "36px",
          animation: "fadeInUp 0.5s ease forwards",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "99px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: "#86efac",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          <span>✅</span>
          <span>
            {ideas.length + titles.length + thumbnailTexts.length + hookLines.length} Ideas Generated for "{niche}"
          </span>
        </div>
        <p style={{ color: "rgba(226,232,240,0.4)", fontSize: "0.85rem" }}>
          Scroll down to view all ideas, titles, hooks, and more ↓
        </p>
      </div>

      {/* ── Scores ── */}
      <div
        style={{
          ...sectionCardStyle,
          background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.05))",
          border: "1px solid rgba(168,85,247,0.25)",
        }}
      >
        <div style={sectionTitleStyle}>
          <div style={headingStyle}>
            <span
              style={{
                fontSize: "22px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              📊
            </span>
            <span>Content Analysis Scores</span>
          </div>
        </div>
        <ScoreBar
          label="🔥 Viral Potential Score"
          score={viralPotentialScore}
          color="linear-gradient(90deg, #7c3aed, #ec4899)"
          delay={0}
        />
        <ScoreBar
          label="⚙️ Difficulty Score"
          score={difficultyScore}
          color="linear-gradient(90deg, #06b6d4, #22c55e)"
          delay={300}
        />
        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(226,232,240,0.35)",
            marginTop: "12px",
            textAlign: "center",
          }}
        >
          * Scores are estimated based on niche, video type, and language. Actual performance may vary.
        </p>
      </div>

      {/* ── Video Ideas ── */}
      <div style={sectionCardStyle}>
        <div style={sectionTitleStyle}>
          <div style={headingStyle}>
            <span
              style={{
                fontSize: "20px",
                background: "rgba(168,85,247,0.15)",
                padding: "8px",
                borderRadius: "10px",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              💡
            </span>
            <span>10 Viral Video Ideas</span>
          </div>
          <CopyButton
            textToCopy={ideas.join("\n")}
            id="ideas"
          />
        </div>
        <div>
          {ideas.map((idea, i) => (
            <div
              key={i}
              style={{ ...listItemStyle, animationDelay: `${i * 0.05}s` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(168,85,247,0.07)";
                el.style.borderColor = "rgba(168,85,247,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <span
                style={{
                  minWidth: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.85)", lineHeight: 1.5 }}>
                {idea}
              </span>
              <button
                onClick={() => navigator.clipboard?.writeText(idea)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(168,85,247,0.5)",
                  fontSize: "14px",
                  padding: "4px",
                  flexShrink: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#a855f7")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(168,85,247,0.5)")
                }
                title="Copy this idea"
              >
                ⎘
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Titles ── */}
      <div style={sectionCardStyle}>
        <div style={sectionTitleStyle}>
          <div style={headingStyle}>
            <span
              style={{
                fontSize: "20px",
                background: "rgba(6,182,212,0.12)",
                padding: "8px",
                borderRadius: "10px",
                border: "1px solid rgba(6,182,212,0.25)",
              }}
            >
              📝
            </span>
            <span>10 Catchy Titles</span>
          </div>
          <CopyButton textToCopy={titles.join("\n")} id="titles" />
        </div>
        <div>
          {titles.map((title, i) => (
            <div
              key={i}
              style={{ ...listItemStyle, animationDelay: `${i * 0.05}s` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(6,182,212,0.06)";
                el.style.borderColor = "rgba(6,182,212,0.18)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <span
                style={{
                  minWidth: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.85)", lineHeight: 1.5 }}>
                {title}
              </span>
              <button
                onClick={() => navigator.clipboard?.writeText(title)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(6,182,212,0.5)",
                  fontSize: "14px",
                  padding: "4px",
                  flexShrink: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#06b6d4")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(6,182,212,0.5)")
                }
                title="Copy this title"
              >
                ⎘
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Thumbnail Texts + Hooks ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          marginBottom: "24px",
        }}
        className="two-col-grid"
      >
        {/* Thumbnails */}
        <div style={{ ...sectionCardStyle, marginBottom: 0 }}>
          <div style={sectionTitleStyle}>
            <div style={headingStyle}>
              <span
                style={{
                  fontSize: "18px",
                  background: "rgba(236,72,153,0.12)",
                  padding: "8px",
                  borderRadius: "10px",
                  border: "1px solid rgba(236,72,153,0.25)",
                }}
              >
                🖼️
              </span>
              <span style={{ fontSize: "0.95rem" }}>5 Thumbnail Texts</span>
            </div>
            <CopyButton
              textToCopy={thumbnailTexts.join("\n")}
              id="thumbnails"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {thumbnailTexts.map((text, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: "rgba(236,72,153,0.07)",
                  border: "1px solid rgba(236,72,153,0.18)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  animation: `fadeInLeft 0.4s ease ${i * 0.08}s both`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(236,72,153,0.14)";
                  el.style.borderColor = "rgba(236,72,153,0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(236,72,153,0.07)";
                  el.style.borderColor = "rgba(236,72,153,0.18)";
                }}
                onClick={() => navigator.clipboard?.writeText(text)}
                title="Click to copy"
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(236,72,153,0.6)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "5px",
                  }}
                >
                  THUMBNAIL {i + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#f9a8d4",
                    letterSpacing: "0.03em",
                    lineHeight: 1.4,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks */}
        <div style={{ ...sectionCardStyle, marginBottom: 0 }}>
          <div style={sectionTitleStyle}>
            <div style={headingStyle}>
              <span
                style={{
                  fontSize: "18px",
                  background: "rgba(245,158,11,0.12)",
                  padding: "8px",
                  borderRadius: "10px",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                🎣
              </span>
              <span style={{ fontSize: "0.95rem" }}>5 Hook Lines</span>
            </div>
            <CopyButton textToCopy={hookLines.join("\n\n")} id="hooks" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {hookLines.map((hook, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: "rgba(245,158,11,0.06)",
                  border: "1px solid rgba(245,158,11,0.15)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  animation: `fadeInLeft 0.4s ease ${i * 0.08}s both`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(245,158,11,0.12)";
                  el.style.borderColor = "rgba(245,158,11,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(245,158,11,0.06)";
                  el.style.borderColor = "rgba(245,158,11,0.15)";
                }}
                onClick={() => navigator.clipboard?.writeText(hook)}
                title="Click to copy"
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(245,158,11,0.6)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "5px",
                  }}
                >
                  HOOK {i + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#fde68a",
                    lineHeight: 1.55,
                  }}
                >
                  {hook}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEO Keywords ── */}
      <div style={sectionCardStyle}>
        <div style={sectionTitleStyle}>
          <div style={headingStyle}>
            <span
              style={{
                fontSize: "20px",
                background: "rgba(34,197,94,0.1)",
                padding: "8px",
                borderRadius: "10px",
                border: "1px solid rgba(34,197,94,0.22)",
              }}
            >
              🔍
            </span>
            <span>SEO Keywords</span>
          </div>
          <CopyButton
            textToCopy={seoKeywords.join(", ")}
            id="keywords"
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {seoKeywords.map((kw, i) => (
            <button
              key={i}
              className="keyword-badge"
              style={{ cursor: "pointer", animation: `fadeInUp 0.4s ease ${i * 0.04}s both` }}
              onClick={() => navigator.clipboard?.writeText(kw)}
              title="Click to copy keyword"
            >
              {kw}
            </button>
          ))}
        </div>
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.78rem",
            color: "rgba(226,232,240,0.3)",
          }}
        >
          💡 Click any keyword to copy it individually
        </p>
      </div>

      {/* ── Copy All ── */}
      <div
        style={{
          textAlign: "center",
          padding: "24px",
          animation: "fadeInUp 0.5s ease 0.3s both",
        }}
      >
        <button
          onClick={() => {
            const allText = [
              "=== VIDEO IDEAS ===",
              ideas.join("\n"),
              "\n=== CATCHY TITLES ===",
              titles.join("\n"),
              "\n=== THUMBNAIL TEXTS ===",
              thumbnailTexts.join("\n"),
              "\n=== HOOK LINES ===",
              hookLines.join("\n\n"),
              "\n=== SEO KEYWORDS ===",
              seoKeywords.join(", "),
              `\n=== SCORES ===`,
              `Viral Potential: ${viralPotentialScore}/100`,
              `Difficulty: ${difficultyScore}/100`,
            ].join("\n");
            copyAll(allText, "all");
          }}
          className="btn-primary"
          style={{
            padding: "14px 36px",
            fontSize: "0.95rem",
            fontWeight: 700,
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 1,
          }}
        >
          {copiedSection["all"] ? (
            <>✅ All Copied!</>
          ) : (
            <>📋 Copy All Results</>
          )}
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .two-col-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OutputSection;
