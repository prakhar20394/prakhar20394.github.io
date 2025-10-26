import React from "react";
import { Section, H2, Muted, Ctas, Button } from "./ui";

export default function Contact({ text, ctas = [] }) {
  if (!text && !ctas.length) return null;
  return (
    <Section id="contact">
      <div
        style={{
          borderRadius: 24,
          padding: 26,
          background: "var(--glass)",
          border: "1px solid var(--stroke)",
          boxShadow: "0 10px 40px rgba(0,0,0,.35)",
          animation: "fadeUp .6s ease both",
        }}
      >
        <H2>Let’s work together</H2>
        {text && <Muted>{text}</Muted>}
        <Ctas style={{ marginTop: 16 }}>
          {ctas.map((c, i) => (
            <Button
              key={i}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
              style={
                c.variant === "primary"
                  ? {
                      background: "linear-gradient(135deg, #8bd1ff, #53bdfd)",
                      color: "#0b1220",
                      borderColor: "transparent",
                      fontWeight: 700,
                    }
                  : undefined
              }
            >
              {c.label}
            </Button>
          ))}
        </Ctas>
      </div>
    </Section>
  );
}
