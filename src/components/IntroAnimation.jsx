import React, { useState, useEffect } from "react";
import { GreetingLine, WaveHand, MainContent } from "../styles/IntroStyles";
import { H1, Accent, Muted, Pill } from "./ui";
import styled from "styled-components";

const HeroButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none !important;
  font-style: normal !important;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 200px;

  &.primary {
    background: var(--accentGradient);
    color: white;
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(221, 36, 118, 0.3);
      opacity: 1;
    }
  }

  &.secondary {
    background: transparent;
    color: inherit;
    border: 1.5px solid currentColor;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 640px) {
    width: auto;
    min-width: 160px;
    padding: 10px 16px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const MaterialIcon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  display: inline-flex;
  text-decoration: none !important;
`;

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
        <HeroButtons>
          <HeroButton 
            className="primary" 
            href="/documents/Prakhar Bhargava Resume.pdf" 
            target="_blank" 
            rel="noreferrer"
          >
            {/* <MaterialIcon>description</MaterialIcon> */}
            See my Resume
          </HeroButton>
          <HeroButton 
            className="secondary" 
            href="https://linkedin.com/in/prakharbhargava35" 
            target="_blank" 
            rel="noreferrer"
          >
            {/* <MaterialIcon>business</MaterialIcon> */}
            Connect on LinkedIn
          </HeroButton>
        </HeroButtons>
      </MainContent>
    </>
  );
}
