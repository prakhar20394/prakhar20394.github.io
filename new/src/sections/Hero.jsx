import React from "react";
import content from "../content.json";
import AvatarHero from "../components/AvatarHero";
import {
  Section,
  Shell,
  IntroGrid,
  IntroCard,
  H1,
  Accent,
  Muted,
  Pill,
  Avatar,
} from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Hero() {
  return (
    <Section id="intro" style={{ borderTop: "none" }}>
      <Shell>
        <IntroGrid>
          <IntroCard>
            <Kicker>Hi, I'm {content.name}.</Kicker>
            <H1>
              I deliver AI products rooted in
              <Accent> user empathy</Accent> and
              <Accent> measurable impact</Accent>.
            </H1>
            <Muted style={{ marginTop: 12 }}>
              Taking products from <Accent> 0→1 </Accent> and{" "}
              <Accent> 1→n </Accent> — balancing strategy, design, and build to
              deliver outcomes that matter.
            </Muted>
            <div style={{ marginTop: 10 }}>
              {["Solution Engineering", "Product & Strategy", "Execution"].map(
                (a, i) => (
                  <Pill key={i}>{a}</Pill>
                )
              )}
            </div>
          </IntroCard>
          <div style={{ display: "grid", placeItems: "center" }}>
            <AvatarHero />
          </div>
        </IntroGrid>
      </Shell>
    </Section>
  );
}
