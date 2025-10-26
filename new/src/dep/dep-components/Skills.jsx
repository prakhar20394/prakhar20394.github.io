import React from "react";
import { Section, H2 } from "./ui";

export default function Skills({ items = [] }) {
  if (!items.length) return null;
  return (
    <Section id="skills">
      <H2>Skills</H2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
        {items.map((s, i) => (
          <span
            key={i}
            style={{
              border: "1px solid var(--stroke)",
              background: "var(--glass)",
              padding: ".5rem .75rem",
              borderRadius: 999,
              fontSize: ".92rem",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
