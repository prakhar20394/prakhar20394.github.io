import React, { useState, useEffect } from "react";
import { GreetingLine, WaveHand, MainContent } from "../styles/IntroStyles";
import { H1, Accent, Muted, Pill } from "./UI";

export default function IntroAnimation({ content }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GreetingLine>
        Hello, I'm {content.name}
        <WaveHand>👋</WaveHand>
      </GreetingLine>

      <MainContent className={showContent ? "visible" : ""}>
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
      </MainContent>
    </>
  );
}
