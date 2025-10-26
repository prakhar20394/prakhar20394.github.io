import React from "react";
import content from "../content.json";
import {
  Section,
  Shell,
  H1,
  Muted,
  Small,
  IconChip,
  Avatar,
  Accent,
} from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Shell style={{ display: "grid", gap: 32 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 32,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <Kicker>Contact</Kicker>
            <H1 style={{ marginBottom: 8 }}>
              <Accent> Let’s build </Accent> something great together.
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

            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {content.contact.phone && (
                <a
                  href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <IconChip>📞</IconChip>
                  <Small style={{ fontSize: 16 }}>
                    {content.contact.phone}
                  </Small>
                </a>
              )}

              {(content.contact.links || []).map((l, i) => {
                const label = l.label.toLowerCase();
                const icon = label.includes("email")
                  ? "✉️"
                  : label.includes("behance")
                  ? "🅱️"
                  : label.includes("linkedin")
                  ? "🔗"
                  : label.includes("github")
                  ? "🐙"
                  : label.includes("resume")
                  ? "📄"
                  : "🔍";
                return (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <IconChip>{icon}</IconChip>
                    <Small style={{ fontSize: 16 }}>{l.label}</Small>
                  </a>
                );
              })}
            </div>

            <Small style={{ display: "block", marginTop: 16 }}>
              {content.footerNote}
            </Small>
          </div>

          {/* RIGHT — portrait */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              borderRadius: 32,
              padding: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow)",
            }}
          >
            <Avatar
              $img={content.contact.avatar}
              style={{ width: "100%", maxWidth: 420, borderRadius: 24 }}
            />
          </div>
        </div>
      </Shell>
    </Section>
  );
}
