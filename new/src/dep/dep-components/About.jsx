import React from "react";
import { Section, H2, Muted } from "./ui";

export default function About({ text }) {
  if (!text) return null;
  return (
    <Section id="about">
      <div
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "220px 1fr",
          alignItems: "flex-start",
        }}
      >
        <H2>About</H2>
        <Muted style={{ animation: "fadeUp .6s ease both" }}>{text}</Muted>
      </div>
    </Section>
  );
}
