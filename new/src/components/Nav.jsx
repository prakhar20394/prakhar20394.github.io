import React, { useEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";

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
} from "./UI";

export default function Nav() {
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavHidden(y > lastY.current && y > 24);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <ResumeBtn
              href="/Prakhar-Bhargava-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
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
        <a
          href="/Prakhar-Bhargava-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
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
    </>
  );
}
