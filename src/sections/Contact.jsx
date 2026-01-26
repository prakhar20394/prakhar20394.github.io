import React, { useState, useRef, useEffect } from "react";
import content from "../content.json";
import PDFModal from "../components/PDFModal";
import {
  Section,
  Shell,
  H1,
  Muted,
  Small,
  IconChip,
  Avatar,
  Accent,
} from "../components/ui";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const MaterialIcon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-flex;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const IconSvg = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 640px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const ContactBox = styled.div`
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 32px;
  padding: 24px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  height: auto;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    border-radius: 24px;
    padding: 12px;
    aspect-ratio: 1 / 1;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    padding: 8px;
    max-width: 280px;
  }
`;

const StickerBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  overflow: visible;
  touch-action: none;

  @media (max-width: 640px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;


const Sticker = styled.div`
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 18px;
  background: #fff;
  border: 10px solid #fff;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  will-change: transform;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    border: 6px solid #fff;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 5px solid #fff;
  }

  &:active {
    cursor: grabbing;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    background: white;
  }
`;

export default function Contact() {
  const [showPDFModal, setShowPDFModal] = useState(false);
  const boardRef = useRef(null);
  const containerRef = useRef(null);
  const [dragging, setDragging] = useState(null);
  const [positions, setPositions] = useState([]);
  const [logoImages, setLogoImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const resumeUrl = (content.contact.links || []).find(
    (l) => l.label.toLowerCase() === "resume"
  )?.href || "/documents/Prakhar Bhargava Resume.pdf";

  useEffect(() => {
  const imageFileNames = [
    "excel.png",
    "figma.png",
    "n8n.png",
    "photoshop.png",
    "powerpoint.png",
    "claude.svg",
    "v0.png",
    "python.png",
    "react.png",
  ];

  const imagePaths = imageFileNames.map(
    (name) => `/img/logos/${name}`
  );

  setLogoImages(imagePaths);

  const timer = setTimeout(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Adjust spread radius based on screen size
    const isMobile = window.innerWidth <= 640;
    const spreadRadius = isMobile ? 80 : 120;

    const newPositions = imagePaths.map((_, idx) => {
      const angle =
        (idx / imagePaths.length) * Math.PI * 2 +
        (Math.random() - 0.5) * 0.8;
      const distance =
        spreadRadius * (0.4 + Math.random() * 0.6);

      return {
        id: `logo-${idx}`,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        rotation: (Math.random() - 0.5) * 20,
      };
    });

    setPositions(newPositions);
    setIsLoaded(true);
  }, 300);

  return () => clearTimeout(timer);
}, []);

  const handlePointerDown = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    const pointerId = e.pointerId;
    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(pointerId);
    }
    const pos = positions.find((p) => p.id === id);
    
    // Get client coordinates correctly for both mouse and touch events
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
    
    const offsetX = clientX - pos.x;
    const offsetY = clientY - pos.y;
    setDragging({ id, pointerId, offsetX, offsetY });
  };

  const handlePointerMove = (e) => {
    if (!dragging || e.pointerId !== dragging.pointerId) return;
    
    // Get client coordinates correctly for both mouse and touch events
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
    
    setPositions((prev) =>
      prev.map((item) =>
        item.id === dragging.id
          ? {
              ...item,
              x: clientX - dragging.offsetX,
              y: clientY - dragging.offsetY,
            }
          : item
      )
    );
  };

  const handlePointerUp = () => {
    setDragging(null);
  };

  const openPDFModal = (e) => {
    e.preventDefault();
    setShowPDFModal(true);
  };

  const closePDFModal = () => {
    setShowPDFModal(false);
  };

  return (
    <Section id="contact">
      <style>{`
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      `}</style>
      <Shell>
        <ContactGrid
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* LEFT */}
          <div>
            <Kicker>Contact</Kicker>
            <H1 style={{ marginBottom: 8 }}>
              Let's Create <Accent> Products</Accent> that <Accent>Matter</Accent>.
            </H1>
            {content.contact.lastUpdated && (
              <Small>Last updated {content.contact.lastUpdated}</Small>
            )}

            <div style={{ marginTop: 14 }}>
              {content.contact.lines.map((l, i) => (
                <Muted key={i} style={{ margin: "4px 0" }}>
                  {l}
                </Muted>
              ))}
            </div>

            {/* Contact & Social Links */}
            <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
              {/* Contact: Phone & Email */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {content.contact.phone && (
                  <a
                    href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "inherit",
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      transform: "scale(1)",
                    }}
                    onMouseEnter={(e) => {
                      e.style.opacity = 0.7;
                      e.style.transform = "scale(1.05)";
                      e.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.style.opacity = 1;
                      e.style.transform = "scale(1)";
                      e.style.textDecoration = "none";
                    }}
                  >
                    <MaterialIcon>phone</MaterialIcon>
                    {content.contact.phone}
                  </a>
                )}

                {(content.contact.links || []).find(
                  (l) => l.label.toLowerCase() === "email"
                ) && (
                  <>
                    <span style={{ color: "var(--muted)" }}>·</span>
                    <a
                      href={
                        (
                          content.contact.links.find(
                            (l) => l.label.toLowerCase() === "email"
                          ) || {}
                        ).href
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "inherit",
                        fontSize: 14,
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                        transform: "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        e.style.opacity = 0.7;
                        e.style.transform = "scale(1.05)";
                        const icon = e.querySelector(".email-icon");
                        if (icon) icon.style.opacity = 1;
                      }}
                      onMouseLeave={(e) => {
                        e.style.opacity = 1;
                        e.style.transform = "scale(1)";
                        const icon = e.querySelector(".email-icon");
                        if (icon) icon.style.opacity = 0;
                      }}
                    >
                      <MaterialIcon>mail</MaterialIcon>
                      <span>
                        {
                          (
                            content.contact.links.find(
                              (l) => l.label.toLowerCase() === "email"
                            ) || {}
                          ).href?.replace("mailto:", "") || "Email"
                        }
                      </span>
                      <MaterialIcon className="email-icon" style={{ fontSize: 14, opacity: 0, transition: "opacity 0.2s" }}>
                        open_in_new
                      </MaterialIcon>
                    </a>
                  </>
                )}
              </div>

              {/* Social: GitHub, LinkedIn, Behance */}
              <div style={{ display: "inline-flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
                {[
                  { 
                    label: "GitHub", 
                    icon: (
                      <IconSvg viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </IconSvg>
                    )
                  },
                  { 
                    label: "LinkedIn", 
                    icon: (
                      <IconSvg viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </IconSvg>
                    )
                  },
                  { 
                    label: "Behance", 
                    icon: (
                      <IconSvg viewBox="0 0 24 24">
                        <path d="M3 8h4c2 0 3.5 1.5 3.5 3s-1.5 3-3.5 3H3V8z" />
                        <path d="M3 14h4.5c2 0 3.5 1.5 3.5 3s-1.5 3-3.5 3H3v-6z" />
                        <circle cx="17" cy="14" r="3.5" />
                        <path d="M14 6h6" />
                      </IconSvg>
                    )
                  },
                ].map(({ label, icon }) => {
                  const link = (content.contact.links || []).find(
                    (l) => l.label === label
                  );
                  if (!link) return null;
                  const urlDisplay = link.href
                    .replace(/^https?:\/\/(www\.)?/, "")
                    .replace(/\/$/, "")
                    .substring(0, 20);
                  return (
                    <a
                      key={label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "inherit",
                        fontSize: 13,
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                        position: "relative",
                        transform: "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        e.style.opacity = 0.7;
                        e.style.transform = "scale(1.05)";
                        const labelEl = e.querySelector(`.label-${label}`);
                        const urlEl = e.querySelector(`.url-${label}`);
                        const newIcon = e.querySelector(`.new-icon-${label}`);
                        if (labelEl) labelEl.style.opacity = 0;
                        if (urlEl) urlEl.style.opacity = 1;
                        if (newIcon) newIcon.style.opacity = 1;
                      }}
                      onMouseLeave={(e) => {
                        e.style.opacity = 1;
                        e.style.transform = "scale(1)";
                        const labelEl = e.querySelector(`.label-${label}`);
                        const urlEl = e.querySelector(`.url-${label}`);
                        const newIcon = e.querySelector(`.new-icon-${label}`);
                        if (labelEl) labelEl.style.opacity = 1;
                        if (urlEl) urlEl.style.opacity = 0;
                        if (newIcon) newIcon.style.opacity = 0;
                      }}
                    >
                      {icon}
                      <span className={`label-${label}`} style={{ transition: "opacity 0.2s" }}>
                        {label}
                      </span>
                      <span className={`url-${label}`} style={{ opacity: 0, transition: "opacity 0.2s", fontSize: 12, color: "var(--muted)", marginRight: 4 }}>
                        {urlDisplay}
                      </span>
                      <MaterialIcon className={`new-icon-${label}`} style={{ fontSize: 14, opacity: 0, transition: "opacity 0.2s" }}>
                        open_in_new
                      </MaterialIcon>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — interactive stickers */}
          <ContactBox
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <StickerBoard ref={boardRef}>
              {isLoaded && positions.length > 0 && logoImages.map((img, idx) => {
                const pos = positions[idx];
                if (!pos) return null;
                console.log(`Rendering sticker ${idx} at:`, pos);
                return (
                  <Sticker
                    key={`logo-${idx}`}
                    style={{ 
                      left: `${pos.x}px`, 
                      top: `${pos.y}px`, 
                      transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                    }}
                    onPointerDown={handlePointerDown(`logo-${idx}`)}
                    aria-label={`Logo ${idx + 1} sticker`}
                  >
                    <img src={img} alt={`Logo ${idx + 1}`} loading="lazy" />
                  </Sticker>
                );
              })}
              {!isLoaded && <div style={{color: 'var(--muted)'}}>Loading stickers...</div>}
            </StickerBoard>
          </ContactBox>
        </ContactGrid>
      </Shell>
    </Section>
  );
}
