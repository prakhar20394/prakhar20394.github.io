import React, { useEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";
import PDFModal from "./PDFModal";

import content from "../content.json";
import {
  NavBar,
  NavInner,
  Brand,
  BrandIcon,
  BrandMark,
  BrandName,
  NavRight,
  NavPill,
  ResumeBtn,
  Hamburger,
  Bar,
  MobileMenu,
} from "./ui";

export default function Nav({ isDarkMode, toggleDarkMode }) {
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const scrollTimeoutRef = useRef(null);

  const resumeUrl = "/documents/Prakhar Bhargava Resume.pdf";
  const resumeTitle = "Resume — Prakhar Bhargava";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const isScrollingUp = y < lastY.current;
      const isAtTop = y < 24;

      // Show navbar when scrolling up or at top, hide when scrolling down
      setNavHidden(!isScrollingUp && !isAtTop);
      lastY.current = y;

      // Clear any pending timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // If scrolling, ensure navbar is visible for a moment before potentially hiding
      if (isScrollingUp || isAtTop) {
        setNavHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <NavBar $hidden={navHidden}>
        <NavInner>
          <Brand href="#intro">
            <BrandIcon aria-hidden>
              <LogoMark size={22} variant="gradient" strokeWidth={5} />
            </BrandIcon>
            <BrandName>Prakhar Bhargava</BrandName>
          </Brand>

          {/* Desktop */}
          <NavRight>
            {(content.nav || []).map((n, i) => (
              <NavPill key={i} href={n.href || n.to || "#"}>
                {n.label}
              </NavPill>
            ))}
            <button
              onClick={toggleDarkMode}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                color: "var(--text)",
                transition: "all 0.2s ease",
              }}
              title={isDarkMode ? "Light mode" : "Dark mode"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <ResumeBtn
              onClick={(e) => {
                e.preventDefault();
                setShowPDFModal(true);
              }}
              as="button"
              style={{ cursor: "pointer" }}
            >
              See my Resume
            </ResumeBtn>
          </NavRight>

          {/* Mobile */}
          <Hamburger
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle Navigation"
          >
            <Bar $open={menuOpen} />
            <Bar $open={menuOpen} />
            <Bar $open={menuOpen} />
          </Hamburger>
        </NavInner>
      </NavBar>

      <MobileMenu $open={menuOpen}>
        {(content.nav || []).map((n, i) => (
          <a
            key={i}
            href={n.href || n.to || "#"}
            onClick={() => setMenuOpen(false)}
          >
            {n.label}
          </a>
        ))}
        <button
          onClick={() => {
            toggleDarkMode();
            setMenuOpen(false);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "var(--text)",
            padding: "12px",
            textAlign: "left",
            fontFamily: "inherit",
            transition: "all 0.2s ease",
          }}
        >
          {isDarkMode ? "☀️ Light mode" : "🌙 Dark mode"}
        </button>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            setShowPDFModal(true);
          }}
          style={{ cursor: "pointer" }}
        >
          View Resume
        </a>
      </MobileMenu>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.2)",
            backdropFilter: "blur(2px)",
            zIndex: 55,
          }}
        />
      )}

      <PDFModal
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
        pdfUrl={resumeUrl}
        fileName="Prakhar-Bhargava-Resume.pdf"
        title={resumeTitle}
      />
    </>
  );
}
