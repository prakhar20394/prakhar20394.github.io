import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderBar,
  Nav,
  Brand,
  Links,
  NavLink,
  MobileToggle,
  MobileOverlay,
  MobilePanel,
  MobileLinks,
  Container,
} from "../components/ui";

const SECTION_TARGETS = [
  { id: "about", path: "/about" },
  { id: "projects", path: "/projects" },
  { id: "skills", path: "/skills" },
  { id: "contact", path: "/contact" },
];

export default function Header({ name, nav = [] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy: watch in-view sections if present; else use route
  useEffect(() => {
    const observers = [];
    const options = { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 };

    function setActiveByRoute() {
      const match = nav.find((n) => n.href === location.pathname);
      setActive(match?.label || "");
    }

    let anyObserved = false;
    SECTION_TARGETS.forEach(({ id, path }) => {
      const el = document.getElementById(id);
      if (!el) return;
      anyObserved = true;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = nav.find((n) => n.href === path);
            if (item) setActive(item.label);
          }
        });
      }, options);
      obs.observe(el);
      observers.push(obs);
    });

    if (!anyObserved) setActiveByRoute();

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname, nav]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const isActive = (label) => label === active;

  return (
    <HeaderBar>
      <Container as="div">
        <Nav>
          <Brand to="/">{name}</Brand>

          {/* Desktop links with dot+glow */}
          <Links>
            {nav.map((n, i) => (
              <NavLink
                key={i}
                to={n.href}
                style={{
                  position: "relative",
                  fontWeight: isActive(n.label) ? 700 : 500,
                  textShadow: isActive(n.label)
                    ? "0 0 14px rgba(137,255,242,.35)"
                    : "none",
                  color: "var(--text)",
                }}
              >
                {/* glowing dot */}
                <span
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 9999,
                    marginRight: 8,
                    display: "inline-block",
                    background: isActive(n.label)
                      ? "rgba(137,255,242,1)"
                      : "transparent",
                    boxShadow: isActive(n.label)
                      ? "0 0 10px rgba(137,255,242,.9)"
                      : "none",
                    transform: isActive(n.label) ? "scale(1)" : "scale(0.6)",
                    transition: "all .18s ease",
                  }}
                />
                {n.label}
              </NavLink>
            ))}
          </Links>

          {/* Mobile hamburger */}
          <MobileToggle
            ref={btnRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path
                  fill="currentColor"
                  d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.41 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              )}
            </svg>
          </MobileToggle>
        </Nav>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <>
          <MobileOverlay onClick={() => setOpen(false)} />
          <MobilePanel
            id="mobile"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <MobileLinks>
              {nav.map((n, i) => (
                <a
                  key={i}
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    navigate(n.href);
                  }}
                >
                  {n.label}
                </a>
              ))}
            </MobileLinks>
          </MobilePanel>
        </>
      )}
    </HeaderBar>
  );
}
