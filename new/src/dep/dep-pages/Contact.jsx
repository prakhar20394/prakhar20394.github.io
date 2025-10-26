import React from "react";
import styled from "styled-components";
import PillarDivider from "../dep-components/PillarDivider";

const Wrap = styled.div`
  max-width: 720px;
`;
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 12px;
`;
const P = styled.p`
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.92;
`;
const CTA = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 10px 20px;
  border: 2px solid #ad4f2b;
  color: #ad4f2b;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: background 0.15s ease;
  &:hover {
    background: #ad4f2b;
    color: #faf7f2;
  }
`;

export default function Contact({ content }) {
  const mail =
    (content?.contactCtas || []).find((c) => c.href?.startsWith("mailto:"))
      ?.href ||
    content?.email ||
    "mailto:hello@example.com";
  return (
    <Wrap>
      <H1>Contact</H1>
      <PillarDivider />
      <P>
        I collaborate on product strategy, UX systems, and shipping focused
        outcomes.
      </P>
      <CTA href={mail}>Request a collaboration</CTA>
    </Wrap>
  );
}
