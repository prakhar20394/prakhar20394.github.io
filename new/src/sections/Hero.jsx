import React from "react";
import content from "../content.json";
import AvatarHero from "../components/AvatarHero";
import IntroAnimation from "../components/IntroAnimation";
import {
  Section,
  Shell,
  IntroGrid,
  IntroCard,
} from "../components/UI";

export default function Hero() {
  return (
    <Section id="intro" style={{ borderTop: "none" }}>
      <Shell>
        <IntroGrid>
          <IntroCard>
            <IntroAnimation content={content} />
          </IntroCard>
          <div style={{ display: "grid", placeItems: "center" }}>
            <AvatarHero />
          </div>
        </IntroGrid>
      </Shell>
    </Section>
  );
}
