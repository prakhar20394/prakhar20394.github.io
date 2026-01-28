import React from "react";
import content from "../content.json";
import { Section, Shell, H1, Accent } from "../components/ui";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  /* Large screens - expand readable area */
  @media (min-width: 1440px) {
    max-width: 900px;
  }

  @media (min-width: 1920px) {
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AboutPara = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin: 0 0 16px 0;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <Shell>
        <AboutWrapper>
          <Kicker>About</Kicker>
          <H1 style={{ marginBottom: 24 }}>
            Translating  <Accent>complex</Accent> user needs  to <Accent>AI systems</Accent>.
          </H1>
            <AboutPara>
              I hold a B.Tech in <Accent>Computer Science & Design</Accent> , from <Accent> IIIT-Delhi, 2024</Accent>, and currently work at <Accent><a href="https://ripik.ai" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', fontStyle: 'inherit', cursor: 'pointer', opacity: 1}} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>RipikAI</a></Accent> with prior experience at <Accent><a href="https://wadhwaniai.org" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', fontStyle: 'inherit', cursor: 'pointer', opacity: 1}} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Wadhwani AI</a></Accent>
            </AboutPara>
            <AboutPara>
              Translating user needs into scalable solutions through data-driven decision-making, UX research, and cross-functional team execution. Passionate about <Accent>building technology</Accent> that aligns business goals with <Accent>real-world outcomes</Accent>.
            </AboutPara>
        </AboutWrapper>
      </Shell>
    </Section>
  );
}
