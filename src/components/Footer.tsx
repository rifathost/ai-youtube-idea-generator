import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "📺", label: "YouTube", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, rgba(124,58,237,0.05), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                }}
              >
                ⚡
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ViralAI
              </span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(226,232,240,0.4)",
                lineHeight: 1.7,
              }}
            >
              AI-powered YouTube idea generator that helps content creators find
              viral ideas, catchy titles, and SEO-friendly keywords for their niche.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "rgba(226,232,240,0.6)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "🎯 Try the Tool", href: "#tool" },
                { label: "✨ Features", href: "#features" },
                { label: "🗺️ How It Works", href: "#how-it-works" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "rgba(226,232,240,0.5)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#a855f7")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(226,232,240,0.5)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "rgba(226,232,240,0.6)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Legal
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "rgba(226,232,240,0.5)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#a855f7")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(226,232,240,0.5)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div style={{ minWidth: "220px" }}>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "rgba(226,232,240,0.6)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Get Started
            </h4>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(226,232,240,0.4)",
                marginBottom: "14px",
                lineHeight: 1.6,
              }}
            >
              Start generating viral YouTube ideas for free — no signup needed.
            </p>
            <a
              href="#tool"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                textDecoration: "none",
                borderRadius: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                zIndex: 1,
              }}
            >
              <span>⚡</span>
              <span>Try Free</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-divider" style={{ marginBottom: "28px" }} />

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(226,232,240,0.3)",
            }}
          >
            © {currentYear} ViralAI. All rights reserved. Made with ⚡ for content creators.
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: "12px" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(168,85,247,0.12)";
                  el.style.borderColor = "rgba(168,85,247,0.3)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
