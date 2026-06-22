import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Tool", href: "#tool" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(168,85,247,0.15)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
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
              fontSize: "1.2rem",
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ViralAI
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "rgba(226,232,240,0.7)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#a855f7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(226,232,240,0.7)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tool"
            className="btn-primary"
            style={{
              padding: "8px 20px",
              fontSize: "0.9rem",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: 600,
              zIndex: 1,
            }}
          >
            Try For Free →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#e2e8f0",
            cursor: "pointer",
            fontSize: "24px",
            padding: "4px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(2,8,24,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(226,232,240,0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tool"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{
              padding: "12px 20px",
              fontSize: "0.95rem",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "8px",
              zIndex: 1,
            }}
          >
            Try For Free →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
