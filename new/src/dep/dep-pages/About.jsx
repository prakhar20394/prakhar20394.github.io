import React from "react";
import styled from "styled-components";
import PillarDivider from "../dep-components/PillarDivider";

const Wrap = styled.div`
  max-width: 760px;
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

export default function About({ content }) {
  const paras = content.aboutLong || [
    "I’m a product manager with a craft-led background in UX.",
    "My bias is toward clarity, operational reliability, and measurable user outcomes.",
    "I value systems thinking and culturally-aware design choices.",
  ];

  return (
    <Wrap>
      <H1>About</H1>
      <PillarDivider />
      {paras.map((t, i) => (
        <P key={i}>{t}</P>
      ))}
    </Wrap>
  );
}
