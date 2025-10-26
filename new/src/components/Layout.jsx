import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import content from "../content.json";
import {
  Shell,
  Section,
  NavBar,
  NavInner,
  Brand,
  BrandMark,
  BrandName,
  NavRight,
  NavPill,
  ResumeBtn,
  Hamburger,
  Bar,
  MobileMenu,
} from "./UI";

export default function Layout() {
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(window.scrollY);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavHidden(y > lastY.current && y > 24);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change + Esc
  useEffect(() => setMenuOpen(false), [loc]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <NavBar $hidden={navHidden}>
        <NavInner>
          <Brand as={Link} to="/">
            <BrandMark src="/img/brandmark.png" alt="PB" />
            <BrandName>Prakhar Bhargava</BrandName>
          </Brand>

          {/* Desktop nav */}
          <NavRight>
            {(content.nav || []).map((n, i) => (
              <NavPill key={i} as={Link} to={n.to || n.href || "/"}>
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

          {/* Hamburger */}
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

      {/* Mobile drawer */}
      <MobileMenu $open={menuOpen}>
        {(content.nav || []).map((n, i) => (
          <Link
            key={i}
            to={n.to || n.href || "/"}
            onClick={() => setMenuOpen(false)}
          >
            {n.label}
          </Link>
        ))}
        <a href="/Prakhar-Bhargava-Resume.pdf" target="_blank" rel="noreferrer">
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

      {/* Pages render here */}
      <Outlet />
    </>
  );
}
