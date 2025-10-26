import React from "react";
import { Section, H2, HoloCards, Card, Tag, H3, Muted } from "./ui";

export default function Projects({ items = [] }) {
  if (!items.length) return null;
  return (
    <Section id="projects">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: 16,
        }}
      >
        <H2>Selected Work</H2>
      </div>
      <HoloCards>
        {items.map((p, i) => (
          <HoloCard key={i}>
            {p.tag && <Tag>{p.tag}</Tag>}
            <H3>{p.title}</H3>
            {p.desc && <Muted>{p.desc}</Muted>}
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  gap: 6,
                  alignItems: "center",
                  textDecoration: "none",
                  color: "var(--text)",
                  borderBottom: "1px dashed rgba(255,255,255,.3)",
                  paddingBottom: 2,
                  marginTop: 6,
                }}
              >
                {p.cta || "View"}
              </a>
            )}
          </HoloCard>
        ))}
      </HoloCards>
    </Section>
  );
}
